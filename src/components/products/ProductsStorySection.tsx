import { motion } from 'motion/react';

const storyStats = [
  { value: '40', suffix: '+', label: 'Countries Served' },
  { value: '5-6', suffix: 'M+', label: 'Products / Year' },
  { value: '100', suffix: '%', label: 'Natural Materials' }
];

export default function ProductsStorySection() {
  return (
    <section className="section-container bg-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white"
        >
          <img src="/images/products-story.jpg" alt="WINVN factory and materials" className="w-full h-full object-cover"  loading="lazy" />
        </motion.div>

        <div className="space-y-6">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-header font-bold text-dark leading-tight">
            Originating from Vietnam's<br />Coffee Highlands
          </h2>
          <p className="text-dark/65 leading-relaxed">
            We transform aged coffee trees in Gia Lai, Dak Lak, Vietnam into premium, sustainable pet chew products. Starting as a small workshop, our company now exports products to partners in over 40 countries worldwide.
          </p>
          <p className="text-dark/65 leading-relaxed">
            Each Coffee Wood Chew product carries the promise: natural, safe, and sustainable — from our highlands to your shelves.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {storyStats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl font-header font-bold text-dark">
                  {s.value}<span className="text-accent-orange">{s.suffix}</span>
                </div>
                <p className="text-dark/65 text-[11px] uppercase tracking-widest font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
