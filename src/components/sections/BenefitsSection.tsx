import { motion } from 'motion/react';
import { marketDemandTags } from '../../data/mockData';

const thumbnails = [
  '/images/market-thumb-1.jpg',
  '/images/market-thumb-2.jpg',
  '/images/market-thumb-3.jpg'
];

export default function BenefitsSection() {
  return (
    <section className="bg-dark py-16 md:py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-orange-light font-bold tracking-[0.2em] uppercase text-xs">Market Demand</span>
            <h2 className="text-4xl md:text-5xl font-header font-bold text-beige leading-tight">
              Why Pet Owners Love<br /><span className="text-wood italic">Coffee Wood Dog Chews</span>
            </h2>
            <p className="text-beige/60 leading-relaxed max-w-lg">
              Demand for natural pet products keeps climbing across Europe and North America. Coffee Wood Chews sell because they tick every box modern pet parents look for.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {marketDemandTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full border border-wood/30 text-wood text-xs font-bold uppercase tracking-wide"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            {thumbnails.map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-beige/10">
                <img
                  src={src}
                  alt={`Dog enjoying a WINVN coffee wood chew — customer photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden group"
        >
          <img
            src="/images/market-main.jpg"
            alt="Happy dog with coffee wood"
            loading="lazy"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
}
