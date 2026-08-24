import { motion } from 'motion/react';
import { X } from 'lucide-react';
import InquiryForm from './InquiryForm';

interface SampleRequestModalProps {
  onClose: () => void;
}

export default function SampleRequestModal({ onClose }: SampleRequestModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close sample request form"
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-beige rounded-full flex items-center justify-center text-dark hover:bg-dark hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Get Free Samples</span>
          <h3 className="text-3xl font-header font-bold text-dark">Request a Free Sample</h3>
          <p className="text-dark/65 text-sm leading-relaxed">
            Tell us a bit about your brand and we'll get samples on the way — no need to leave this page.
          </p>
        </div>

        <InquiryForm defaultSubject="Request Free Sample" />
      </motion.div>
    </div>
  );
}
