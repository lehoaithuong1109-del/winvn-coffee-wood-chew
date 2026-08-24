import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const categories = [
  {
    title: 'Basic Coffee Wood',
    desc: 'The essential natural chew for all dogs.',
    image: 'https://images.unsplash.com/photo-1612160869377-f8f118f42fff?crop=entropy&cs=srgb&fm=jpg&q=85',
    color: 'bg-coffee/5'
  },
  {
    title: 'Gorilla Wood',
    desc: 'Tougher textures for aggressive chewers.',
    image: 'https://images.unsplash.com/photo-1635195890113-fb751ae33cfb?crop=entropy&cs=srgb&fm=jpg&q=85',
    color: 'bg-wood/5'
  },
  {
    title: 'With Rope',
    desc: 'Interactive play meets dental care.',
    image: 'https://images.unsplash.com/photo-1741942732341-d1ec386afd68?crop=entropy&cs=srgb&fm=jpg&q=85',
    color: 'bg-accent-orange/5'
  }
];

export default function CategoryGrid() {
  return (
    <section className="section-container bg-beige">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-xl">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Product Collections</span>
          <h2 className="text-4xl md:text-5xl font-header font-bold text-dark">
            Tailored to Every <span className="text-coffee italic">Chewing Need.</span>
          </h2>
        </div>
        <Link to="/products" className="text-coffee font-bold flex items-center gap-2 group pb-2 border-b-2 border-coffee/10 hover:border-coffee transition-all">
          View All Products
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between aspect-[4/5]",
              cat.color
            )}
          >
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-header font-bold text-dark leading-tight">
                {cat.title}
              </h3>
              <p className="text-dark/60 text-sm max-w-[200px]">
                {cat.desc}
              </p>
            </div>

            <div className="absolute inset-0 translate-y-12 group-hover:translate-y-6 transition-transform duration-700 ease-out">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-contain"
              />
            </div>

            <Link
              to="/products"
              className="mt-auto self-start bg-white/80 backdrop-blur p-4 rounded-full text-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 shadow-lg"
            >
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
