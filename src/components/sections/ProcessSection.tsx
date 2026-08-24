import { motion } from 'motion/react';
import { processSteps } from '../../data/mockData';
import { cn } from '../../lib/utils';
import { useSampleModal } from '../../context/SampleModalContext';

export default function ProcessSection() {
  const { openSampleModal } = useSampleModal();

  return (
    <section className="section-container bg-beige">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">From Idea to Delivery</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
          A simple <span className="text-accent-orange italic">5-step process</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-12">
        {processSteps.map((step, index) => {
          const isLast = index === processSteps.length - 1;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center font-header font-bold text-lg',
                isLast ? 'bg-accent-orange text-white' : 'bg-white border border-dark/10 text-dark'
              )}>
                {index + 1}
              </div>
              <h3 className="font-header font-bold text-dark">{step.title}</h3>
              <p className="text-dark/65 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          onClick={openSampleModal}
          className="hover-lift-btn bg-accent-orange text-white px-8 py-4 rounded-full font-bold"
        >
          Get Free Sample
        </button>
      </div>
    </section>
  );
}
