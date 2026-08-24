import { motion } from 'motion/react';
import { Leaf, Sun, Scissors, ShieldCheck, PackageCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

const steps = [
  { n: '01', title: 'Natural Sourcing', desc: 'Coffee wood sourced sustainably from retired, long-term coffee trees in Gia Lai, Vietnam.', icon: Leaf, image: '/images/craft-sourcing.jpg' },
  { n: '02', title: 'Cleaning & Drying', desc: 'Sun and air dried, thoroughly cleaned to remove dust, moisture and impurities.', icon: Sun, image: '/images/craft-drying.jpg' },
  { n: '03', title: 'Shape & Craft', desc: 'Cut, woven or shaped by hand into every size and style in our range.', icon: Scissors, image: '/images/craft-shaping.jpg' },
  { n: '04', title: 'Quality Check', desc: 'Inspected for cracks, splinters and moisture — piece by piece.', icon: ShieldCheck, image: '/images/craft-quality.jpg' },
  { n: '05', title: 'Pack & Export', desc: 'Custom-branded packaging, container-loaded and shipped worldwide.', icon: PackageCheck, image: '/images/craft-packing.jpg' }
];

export default function CraftProcessSection() {
  return (
    <section className="section-container bg-dark">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="text-orange-light font-bold tracking-[0.2em] uppercase text-xs">From Material to Product</span>
        <h2 className="text-4xl md:text-5xl font-header font-bold text-beige leading-tight">How We Craft Every Piece</h2>
        <p className="text-beige/60">Sustainable from the first material — natural, safe, and made to last.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                'rounded-2xl p-6 space-y-3 border',
                isLast ? 'bg-accent-orange border-accent-orange text-white' : 'bg-white/5 border-white/10 text-beige'
              )}
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white/10">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover"  loading="lazy" />
              </div>
              <span className="text-xs font-bold tracking-widest opacity-60">{step.n}</span>
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', isLast ? 'bg-white/20' : 'bg-white/10')}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-header font-bold text-lg">{step.title}</h3>
              <p className="text-xs leading-relaxed opacity-70">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
