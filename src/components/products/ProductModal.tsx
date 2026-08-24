import { useState } from 'react';
import { motion } from 'motion/react';
import { X, CircleCheckBig } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState('features');
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
      >
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-dark hover:bg-white transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery */}
        <div className="w-full lg:w-1/2 bg-beige p-8 flex flex-col">
          <div className="flex-grow flex items-center justify-center min-h-[300px]">
            <motion.img
              key={activeImg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              src={product.images[activeImg]}
              alt={product.name}
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                aria-label={`View photo ${i + 1} of ${product.name}`}
                aria-pressed={activeImg === i}
                className={cn(
                  "w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all",
                  activeImg === i ? "border-coffee shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">
                  {product.category}
                </span>
                {product.code && (
                  <span className="text-[10px] font-bold text-coffee bg-beige px-2 py-1 rounded-md">
                    {product.code}
                  </span>
                )}
              </div>
              <h2 className="text-4xl font-header font-bold text-dark">{product.name}</h2>
              <p className="text-dark/80 leading-relaxed italic text-sm">{product.description}</p>
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex border-b border-dark/5 gap-8">
                {['features', 'sizes', 'packaging', 'oem'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-4 text-xs font-bold uppercase tracking-widest transition-all relative",
                      activeTab === tab ? "text-accent-orange" : "text-dark/65 hover:text-coffee"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="modal-tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-orange" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[160px]">
                {activeTab === 'features' && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-dark/80">
                        <CircleCheckBig className="w-5 h-5 text-accent-orange shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'sizes' && (
                  <div className="space-y-4">
                    <p className="text-sm text-dark/80 leading-relaxed">Available in standard sizes or custom dimensions for OEM orders.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {product.sizes.map((s: { label: string; detail: string }) => (
                        <div key={s.label} className="rounded-xl bg-beige px-3 py-2.5 border border-dark/5">
                          <p className="font-bold text-dark text-sm">{s.label}</p>
                          {s.detail && <p className="text-coffee/70 text-[11px] leading-snug">{s.detail}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'packaging' && (
                  <p className="text-sm text-dark/80 leading-relaxed">
                    {product.packaging}
                  </p>
                )}
                {activeTab === 'oem' && (
                  <div className="space-y-4">
                    <p className="text-sm text-dark/80 leading-relaxed">OEM service available from just 50 units, including:</p>
                    <ul className="text-xs space-y-2 text-dark/70 list-disc pl-4 marker:text-accent-orange">
                      <li>Laser engraving of your logo or brand message on each wooden piece</li>
                      <li>Custom labels (5x8cm or custom size) in kraft paper or eco-friendly cardboard</li>
                      <li>Placement inside vacuum bags, hung/tied on the chew, or stapled on packaging</li>
                      <li>Custom kraft/paper boxes with barcode or QR code printing</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
