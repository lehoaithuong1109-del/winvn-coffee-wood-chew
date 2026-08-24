import { motion } from 'motion/react';
import { TriangleAlert, Boxes, Tag, PackageX, Truck, Handshake } from 'lucide-react';
import { challenges } from '../../data/mockData';
import { cn } from '../../lib/utils';

const iconMap = { TriangleAlert, Boxes, Tag, PackageX, Truck, Handshake };

export default function ChallengeSection() {
  return (
    <section className="section-container bg-beige">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">The Challenge</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
          Struggling to find a reliable<br /><span className="text-accent-orange">Coffee Wood Chew</span> supplier?
        </h2>
        <p className="text-dark/65">
          Most pet businesses run into the same wall<br />when sourcing natural chews overseas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                'rounded-2xl p-5 flex items-center gap-5 border',
                item.highlight
                  ? 'bg-accent-orange border-accent-orange text-white'
                  : 'bg-white border-dark/5 text-dark'
              )}
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"  loading="lazy" />
                <div className={cn(
                  'absolute bottom-1 right-1 w-8 h-8 rounded-md flex items-center justify-center',
                  item.highlight ? 'bg-dark text-white' : 'bg-beige text-coffee'
                )}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="font-header font-bold text-lg">{item.title}</h3>
                <p className={cn('text-sm leading-relaxed', item.highlight ? 'text-white/80' : 'text-dark/65')}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
