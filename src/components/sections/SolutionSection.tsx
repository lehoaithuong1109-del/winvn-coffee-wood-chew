import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { solutions } from '../../data/mockData';

export default function SolutionSection() {
  return (
    <section className="section-container bg-white">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">The Solution</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
          Everything you need to launch your <span className="text-accent-orange italic">Coffee Wood Chew</span> brand
        </h2>
        <p className="text-dark/65 md:whitespace-nowrap">
          We don't just sell sticks — we ship a complete go-to-market system under your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((sol, index) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden border border-dark/5 bg-beige/40 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-header font-bold text-dark">{sol.title}</h3>
              <ul className="space-y-2">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-dark/65 leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-coffee shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
