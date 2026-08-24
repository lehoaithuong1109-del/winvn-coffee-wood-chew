import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/mockData';
import { cn } from '../../lib/utils';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-container bg-beige">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
          Frequently Asked <span className="text-coffee italic">Questions</span>
        </h2>
        <p className="text-dark/65">
          Everything wholesalers, importers and Amazon sellers ask us before their first order.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark rounded-3xl p-8 space-y-6 h-fit lg:sticky lg:top-28"
        >
          <h3 className="text-2xl font-header font-bold text-beige">Still curious?</h3>
          <p className="text-beige/60 text-sm leading-relaxed">
            Talk to our team and get free samples shipped to your door.
          </p>
          <Link
            to="/contact"
            className="hover-lift-btn inline-block bg-accent-orange text-white px-6 py-3 rounded-full text-sm font-bold"
          >
            Contact Us Now
          </Link>
        </motion.div>

        <div className="lg:col-span-2 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={cn(
                'rounded-2xl border border-dark/5 overflow-hidden transition-all duration-300',
                openIndex === index ? 'bg-white shadow-lg' : 'bg-white/50'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-accent-orange font-bold text-xs shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-header text-lg font-bold text-dark">{faq.question}</span>
                </span>
                <ChevronDown className={cn(
                  'w-5 h-5 text-coffee shrink-0 transition-transform duration-300',
                  openIndex === index && 'rotate-180'
                )} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14 text-dark/65 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
