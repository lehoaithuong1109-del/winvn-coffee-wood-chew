import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { escapeHtml, sendTelegramBeacon } from '../../lib/telegram';

const PAGE_NAMES: Record<string, string> = {
  '/': 'Trang chủ',
  '/products': 'Sản phẩm',
  '/oem': 'Dịch vụ OEM',
  '/manufacturing': 'Sản xuất / Câu chuyện',
  '/contact': 'Liên hệ',
  '/blog': 'Blog'
};

function labelFor(path: string): string {
  if (PAGE_NAMES[path]) return PAGE_NAMES[path];
  if (path.startsWith('/blog/')) return `Bài blog: ${path.replace('/blog/', '')}`;
  return path;
}

interface Visit {
  path: string;
  seconds: number;
}

/**
 * Silently tracks which pages a visitor viewed and how long they stayed on each,
 * then sends a single summary message to Telegram when they leave the site.
 * Renders nothing — mount once near the root of the app (see Layout.tsx).
 */
export default function SessionTracker() {
  const location = useLocation();
  const visitsRef = useRef<Visit[]>([]);
  const currentRef = useRef<{ path: string; start: number } | null>(null);
  const sentRef = useRef(false);
  const startedAtRef = useRef<string | null>(null);

  // Record a visit whenever the route changes.
  useEffect(() => {
    const now = Date.now();
    if (!startedAtRef.current) {
      startedAtRef.current = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    }
    if (currentRef.current) {
      const seconds = Math.max(1, Math.round((now - currentRef.current.start) / 1000));
      visitsRef.current.push({ path: currentRef.current.path, seconds });
    }
    currentRef.current = { path: location.pathname, start: now };
  }, [location.pathname]);

  // Flush the whole session as one message when the visitor leaves.
  useEffect(() => {
    const flush = () => {
      if (sentRef.current) return;
      if (currentRef.current) {
        const seconds = Math.max(1, Math.round((Date.now() - currentRef.current.start) / 1000));
        visitsRef.current.push({ path: currentRef.current.path, seconds });
        currentRef.current = null;
      }
      if (visitsRef.current.length === 0) return;
      sentRef.current = true;

      const totalSeconds = visitsRef.current.reduce((sum, v) => sum + v.seconds, 0);
      const lines = visitsRef.current.map((v, i) => `${i + 1}. ${escapeHtml(labelFor(v.path))} — ${v.seconds}s`);
      const sameOrigin = document.referrer && document.referrer.includes(window.location.host);
      const referrer = document.referrer && !sameOrigin ? escapeHtml(document.referrer) : 'Trực tiếp / không rõ nguồn';

      const text =
        `👀 <b>Khách vừa rời website</b>\n` +
        `🕒 Bắt đầu: ${startedAtRef.current}\n` +
        `⏱ Tổng thời gian: ${totalSeconds}s\n` +
        `🔗 Nguồn: ${referrer}\n\n` +
        `<b>Các trang đã xem:</b>\n${lines.join('\n')}`;

      sendTelegramBeacon(text);
    };

    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') flush();
    }

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', flush);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', flush);
    };
  }, []);

  return null;
}
