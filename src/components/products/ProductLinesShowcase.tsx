import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CircleCheckBig } from 'lucide-react';
import { products, productCategories } from '../../data/mockData';
import { cn } from '../../lib/utils';

const categoryCopy: Record<string, { badge: string; blurb: string }> = {
  'Coffee Wood Chew': {
    badge: 'Original',
    blurb: 'The basic line — 100% natural coffee wood, no chemicals, no additives. Dense, long-lasting and safe for daily chewing.'
  },
  'Gorilla Wood Chew': {
    badge: 'Heavy Duty',
    blurb: 'Made from thick roots and large branches of long-term coffee wood — extra-dense and built for aggressive chewers.'
  },
  'Coffee Wood Chew With Cotton': {
    badge: '7 Shapes',
    blurb: 'Coffee wood combined with natural cotton rope across 7 shapes and designs — safe, teeth-cleaning, and appealing to almost any dog.'
  },
  'Coffee Wood Chew With Rope': {
    badge: '7 Shapes',
    blurb: 'Coffee wood combined with 100% natural hemp and jute rope across 7 shapes — natural oils help clean teeth and reduce bad breath.'
  }
};

const isRopeCategory = (category: string) => category.includes('With Cotton') || category.includes('With Rope');

const tabLabels: Record<string, string> = {
  'Coffee Wood Chew': 'Coffee Wood Chew',
  'Coffee Wood Chew With Rope': 'With Rope',
  'Coffee Wood Chew With Cotton': 'With Cotton',
  'Gorilla Wood Chew': 'Gorilla'
};

export default function ProductLinesShowcase() {
  const [active, setActive] = useState(productCategories[0]);
  const lineProducts = products.filter((p) => p.category === active);
  const hero = lineProducts[0];
  const copy = categoryCopy[active];
  const features = Array.from(new Set(lineProducts.flatMap((p) => p.features))).slice(0, 5);
  const sizeLabels = Array.from(new Set(lineProducts.flatMap((p) => p.sizes.map((s) => s.label))));
  const ropeCategory = isRopeCategory(active);

  return (
    <section className="section-container bg-beige">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
        <span className="text-accent-orange font-bold tracking-[0.2em] uppercase text-xs">Product Lines</span>
        <h2 className="text-5xl md:text-6xl font-header font-bold text-dark leading-tight">
          Four ways to chew
        </h2>
        <p className="text-dark/65">
          Each line is crafted from the same premium coffee wood — <br className="hidden sm:block" />pick the format that fits your shelf.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {productCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-6 py-3 rounded-full text-sm font-bold transition-all duration-300',
              active === cat ? 'bg-accent-orange text-white shadow-lg' : 'bg-white text-dark/65 hover:bg-dark/5'
            )}
          >
            {tabLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-[2.5rem] p-6 md:p-10 border border-dark/5 shadow-sm"
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-beige">
            <img src={hero.images[0]} alt={hero.name} className="w-full h-full object-cover"  loading="lazy" />
          </div>
          <div className="space-y-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent-orange bg-accent-orange/[0.04] px-3 py-1 rounded-full">
              {copy.badge}
            </span>
            <h3 className="text-2xl md:text-3xl font-header font-bold text-dark">{active}</h3>
            <p className="text-dark/65 leading-relaxed text-sm">{copy.blurb}</p>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-dark/70">
                  <CircleCheckBig className="w-4 h-4 text-wood shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            {!ropeCategory && (
              <div className="flex flex-wrap gap-2 pt-2">
                {sizeLabels.map((label) => (
                  <span key={label} className="px-3 py-1.5 rounded-lg bg-beige text-xs font-bold text-dark border border-dark/5">
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {ropeCategory ? (
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Shape Guide</span>
            <h3 className="text-2xl md:text-3xl font-header font-bold text-dark">7 Shapes, One Product Line</h3>
          </div>
          <div className="bg-white rounded-3xl border border-dark/5 divide-y divide-dark/5">
            {lineProducts.map((p) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-beige shrink-0">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover"  loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{p.name}</p>
                    <p className="text-dark/65 text-[11px] uppercase tracking-widest font-bold">{p.code}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:pl-0 pl-[72px]">
                  {p.sizes.map((s) => (
                    <span key={s.label} className="px-2.5 py-1 rounded-lg bg-beige text-[11px] font-bold text-dark border border-dark/5">
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-14 max-w-xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Size Guide</span>
            <h3 className="text-2xl md:text-3xl font-header font-bold text-dark">The Right Fit for Every Pet</h3>
          </div>
          <div className="bg-white rounded-3xl border border-dark/5 overflow-hidden overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-dark text-beige/70 text-left text-xs uppercase tracking-widest">
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Dimensions &amp; Weight</th>
                </tr>
              </thead>
              <tbody>
                {lineProducts.map((p) => (
                  <Fragment key={p.id}>
                    {lineProducts.length > 1 && (
                      <tr>
                        <td colSpan={2} className="px-6 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-dark/65">
                          {p.name}
                        </td>
                      </tr>
                    )}
                    {p.sizes.map((s, i) => (
                      <tr key={`${p.id}-${s.label}`} className={i % 2 === 0 ? 'bg-beige/40' : 'bg-white'}>
                        <td className="px-6 py-3 font-bold text-accent-orange">{s.label}</td>
                        <td className="px-6 py-3 text-dark/70">{s.detail}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
