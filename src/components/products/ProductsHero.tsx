import { Eye, Layers } from 'lucide-react';

export default function ProductsHero() {
  return (
    <section className="pt-32 pb-16 px-6 bg-beige">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coffee bg-white px-4 py-2 rounded-full border border-dark/5">
            <Layers className="w-3.5 h-3.5" />
            Our Full Product Range
          </span>
          <h1 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
            Natural <span className="text-accent-orange">Coffee Wood Chews</span> in every size &amp; style
          </h1>
          <p className="text-dark/65 leading-relaxed max-w-lg">
            Four product lines, a variety of sizes, a commitment to customers - durable chews, no preservatives, 100% natural, suitable for all dog breeds and all markets.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#catalog" className="hover-lift-btn bg-accent-orange text-white px-8 py-4 rounded-full font-bold">
              Explore Products
            </a>
            <a
              href="/WINVN-Coffee-Wood-Chew-Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift-btn bg-white border border-dark/10 text-dark px-8 py-4 rounded-full font-bold flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Catalogue
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl overflow-hidden aspect-[16/9] bg-white">
            <img src="/images/products-hero-main.jpg" alt="Pet enjoying WINVN natural pet toys" fetchPriority="high" decoding="async" className="w-full h-full object-cover object-top" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square bg-white">
            <img src="/images/products-hero-2.jpg" alt="WINVN natural pet toy detail" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square bg-white">
            <img src="/images/products-hero-3.jpg" alt="WINVN natural pet toy detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
