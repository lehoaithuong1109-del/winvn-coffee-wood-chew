// Telegram notification integration.
//
// Cách lấy 2 giá trị bên dưới:
// 1) Mở Telegram, tìm "BotFather", bấm Start, gõ /newbot rồi làm theo hướng dẫn
//    (đặt tên bot + username). BotFather sẽ trả về một đoạn token dạng
//    "123456789:AAExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" — dán vào TELEGRAM_BOT_TOKEN.
// 2) Gửi thử 1 tin nhắn bất kỳ cho bot vừa tạo (ví dụ "hi"), sau đó mở link:
//    https://api.telegram.org/bot<TOKEN_VỪA_TẠO>/getUpdates
//    trong trình duyệt. Tìm số "id" nằm trong mục "chat" — đó là TELEGRAM_CHAT_ID.
// 3) Dán cả 2 giá trị vào bên dưới rồi build/deploy lại site.
export const TELEGRAM_BOT_TOKEN = 'REPLACE_WITH_TELEGRAM_BOT_TOKEN';
export const TELEGRAM_CHAT_ID = 'REPLACE_WITH_TELEGRAM_CHAT_ID';

function isConfigured(): boolean {
  return (
    !!TELEGRAM_BOT_TOKEN &&
    !!TELEGRAM_CHAT_ID &&
    TELEGRAM_BOT_TOKEN !== 'REPLACE_WITH_TELEGRAM_BOT_TOKEN' &&
    TELEGRAM_CHAT_ID !== 'REPLACE_WITH_TELEGRAM_CHAT_ID'
  );
}

/** Escapes text that will be embedded in a Telegram HTML-parse-mode message. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Sends a Telegram message and waits for the response. Use this when the caller
 * needs to know whether it actually succeeded (e.g. showing a "sent" state on a form).
 */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  if (!isConfigured()) {
    console.warn('[telegram] Bot chưa được cấu hình — xem src/lib/telegram.ts');
    return false;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Fire-and-forget "beacon" send for use when the visitor is leaving the page — a moment
 * where we can't reliably await a fetch() response before the browser tears the page down.
 * Uses a plain GET request via an <img> element, since browsers reliably complete a simple
 * GET that was already in flight even as the page unloads (the same trick classic analytics
 * pixels use), which fetch()/XHR is not guaranteed to do in every browser at that moment.
 */
export function sendTelegramBeacon(text: string): void {
  if (!isConfigured() || typeof window === 'undefined') return;
  try {
    const base = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const params = `chat_id=${encodeURIComponent(TELEGRAM_CHAT_ID)}&parse_mode=HTML&text=${encodeURIComponent(text)}`;
    const url = `${base}?${params}`;
    // GET URLs beyond ~4000 chars get unreliable across browsers/proxies — trim defensively.
    const safeUrl = url.length > 3800 ? url.slice(0, 3800) : url;
    new Image().src = safeUrl;
  } catch {
    // best-effort only — never let tracking break the page
  }
}
