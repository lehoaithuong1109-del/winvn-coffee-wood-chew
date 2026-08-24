import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroCategories } from '../../data/mockData';
import StatsSection from './StatsSection';
import { useSampleModal } from '../../context/SampleModalContext';

const trustPoints = [
  'Export to over 40 countries',
  'Customize your own brand',
  'Low MOQ Available',
  'Complete inspection documents'
];

export default function Hero() {
  const { openSampleModal } = useSampleModal();

  return (
    <section className="relative pt-28 pb-10 overflow-hidden bg-beige">
      <div className="section-container !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 border border-coffee/10 text-coffee text-xs font-bold px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Vietnam OEM Natural Pet Manufacturer
            </motion.span>

            <h1 className="text-4xl md:text-5xl font-header font-bold text-coffee leading-[1.2]">
              Private Label <span className="text-accent-orange">Coffee<br />Wood Chews</span> for Pet<br />Brands &amp; Amazon Sellers
            </h1>

            <p className="text-lg text-dark/70 leading-relaxed max-w-xl">
              Natural, durable dog chews made from sustainably sourced coffee wood. Manufacturing, packaging, labeling and worldwide shipping — all optimized with us.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={openSampleModal}
                className="hover-lift-btn bg-accent-orange text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
              >
                Get Free Samples
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                to="/oem"
                className="hover-lift-btn bg-white text-dark px-8 py-4 rounded-full font-bold inline-block border border-dark/10"
              >
                Product Consultation
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2 max-w-md">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-xs font-medium text-dark/65">
                  <Check className="w-3.5 h-3.5 text-coffee shrink-0" />
                  {point}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/images/hero-main.jpg"
                alt="Dog with premium coffee wood chews"
                fetchPriority="high"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-wood/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-coffee/5 rounded-full blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-dark/5"
            >
              <div className="w-12 h-12 bg-accent-orange/10 rounded-2xl flex items-center justify-center">
                <span className="text-xl font-header font-bold text-accent-orange">5M+</span>
              </div>
              <div>
                <p className="text-xs font-bold text-dark uppercase tracking-wider">Products</p>
                <p className="text-sm text-dark/65">Per Year</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <StatsSection />

        {/* Category strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark rounded-[2.5rem] p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {heroCategories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-2">
              <div className="rounded-3xl overflow-hidden aspect-square bg-beige/10">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-wide leading-tight text-center px-1">
                {cat.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
