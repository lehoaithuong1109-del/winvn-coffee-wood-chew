import { motion } from 'motion/react';
import { Maximize2, Check } from 'lucide-react';

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-dark/5 p-4 flex flex-col h-full cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
      onClick={onClick}
    >
      <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-beige mb-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
         loading="lazy" />
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark shadow-xl scale-50 group-hover:scale-100 transition-transform">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="px-2 space-y-3 flex-grow">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-coffee">
          {product.category}
        </span>
        <h3 className="text-xl font-header font-bold text-dark leading-tight group-hover:text-coffee transition-colors">
          {product.name}
        </h3>

        <div className="flex flex-wrap gap-2 pt-2">
          {product.features.slice(0, 2).map((feature: string, i: number) => (
            <span key={i} className="flex items-center gap-1 text-[10px] font-bold text-coffee bg-beige px-2 py-1 rounded-full">
              <Check className="w-2.5 h-2.5" />
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="px-2 pt-6 pb-2">
        <p className="text-xs font-bold text-dark group-hover:text-accent-orange transition-colors uppercase tracking-widest flex items-center gap-2">
          View Specifications
          <span className="w-6 h-[1px] bg-dark/10 group-hover:bg-coffee/40 group-hover:w-10 transition-all" />
        </p>
      </div>
    </motion.div>
  );
}
