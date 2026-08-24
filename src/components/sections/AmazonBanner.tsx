import { motion } from 'motion/react';
import { CircleCheckBig } from 'lucide-react';
import { amazonFeatures } from '../../data/mockData';

export default function AmazonBanner() {
  return (
    <section className="px-6 py-10 bg-beige">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto bg-accent-orange rounded-[3rem] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <span className="text-white/70 font-bold tracking-[0.2em] uppercase text-xs">For E-commerce</span>
          <h2 className="text-3xl md:text-5xl font-header font-bold text-white leading-tight">
            Built for Amazon &amp; E-commerce Brands
          </h2>
          <p className="text-white/80 leading-relaxed max-w-md">
            We cut your sourcing complexity so you can focus on selling. Everything FBA-ready, out of the box.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4 bg-white/10 rounded-3xl p-8">
          {amazonFeatures.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-2 text-white text-sm font-medium"
            >
              <CircleCheckBig className="w-4 h-4 shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
