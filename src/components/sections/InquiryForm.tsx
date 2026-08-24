import { useState, type FormEvent } from 'react';
import { Send, CircleCheckBig } from 'lucide-react';
import { escapeHtml, sendTelegramMessage } from '../../lib/telegram';

const subjectOptions = ['OEM Inquiry', 'Wholesale Pricing', 'Request Free Sample', 'Download Catalogue'];

interface InquiryFormProps {
  defaultSubject?: string;
}

export default function InquiryForm({ defaultSubject }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    const fullName = String(data.get('fullName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const text =
      `📩 <b>Inquiry mới từ website</b>\n` +
      `👤 Họ tên: ${escapeHtml(fullName)}\n` +
      `✉️ Email: ${escapeHtml(email)}\n` +
      `🏢 Công ty: ${escapeHtml(company)}\n` +
      `📌 Chủ đề: ${escapeHtml(subject)}\n` +
      `💬 Lời nhắn: ${message ? escapeHtml(message) : '(không có)'}`;

    const ok = await sendTelegramMessage(text);
    setStatus(ok ? 'sent' : 'error');
  };

  if (status === 'sent') {
    return (
      <div className="text-center space-y-4 py-10">
        <div className="w-14 h-14 mx-auto bg-coffee rounded-full flex items-center justify-center">
          <CircleCheckBig className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-header font-bold text-dark">Thanks! We've got your message.</h3>
        <p className="text-sm text-dark/65">Our team will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="inquiry-fullName" className="text-[10px] font-bold uppercase tracking-widest text-dark/65">Full Name <span className="text-coffee">*</span></label>
          <input id="inquiry-fullName" required name="fullName" type="text" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-coffee/20 transition-all outline-none" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="inquiry-email" className="text-[10px] font-bold uppercase tracking-widest text-dark/65">Work Email <span className="text-coffee">*</span></label>
          <input id="inquiry-email" required name="email" type="email" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-coffee/20 transition-all outline-none" placeholder="john@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="inquiry-company" className="text-[10px] font-bold uppercase tracking-widest text-dark/65">Company Name <span className="text-coffee">*</span></label>
          <input id="inquiry-company" required name="company" type="text" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-coffee/20 transition-all outline-none" placeholder="Pet Brand Inc." />
        </div>
        <div className="space-y-2">
          <label htmlFor="inquiry-subject" className="text-[10px] font-bold uppercase tracking-widest text-dark/65">Subject <span className="text-coffee">*</span></label>
          <select id="inquiry-subject" required name="subject" defaultValue={defaultSubject ?? ''} className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-coffee/20 transition-all outline-none">
            {!defaultSubject && <option value="" disabled>Select a subject</option>}
            {subjectOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="inquiry-message" className="text-[10px] font-bold uppercase tracking-widest text-dark/65">Message <span className="text-dark/65 normal-case">(optional)</span></label>
        <textarea id="inquiry-message" name="message" rows={4} className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-coffee/20 transition-all outline-none resize-none" placeholder="How can we help you?" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-coffee text-white py-4 rounded-xl font-bold hover:bg-dark transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-60"
      >
        <Send className="w-5 h-5" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-center text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}
