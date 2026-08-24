import { motion } from 'motion/react';
import { Leaf, BarChart3, Ruler, Package, Search, Truck } from 'lucide-react';
import { whyWinvn } from '../../data/mockData';

const iconMap = { Leaf, BarChart3, Ruler, Package, Search, Truck };

export default function FactoryStrength() {
  return (
    <section className="section-container bg-beige">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Why Coffee Wood Chew</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
          More than a supplier —<br /><span className="text-coffee italic">your manufacturing partner</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyWinvn.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl overflow-hidden bg-white border border-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"  loading="lazy" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-beige rounded-xl flex items-center justify-center text-coffee shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-header font-bold text-dark text-xl">{item.title}</h3>
                </div>
                <p className="text-dark/65 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
