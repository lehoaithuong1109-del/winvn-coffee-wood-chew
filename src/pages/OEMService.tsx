import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Boxes, PenTool, Package, Tag, Gift, Truck, Camera, RefreshCw, ArrowRight, CircleCheckBig } from 'lucide-react';
import SEO from '../components/layout/SEO';
import ContactCTA from '../components/sections/ContactCTA';
import { buildBreadcrumbSchema } from '../data/schema';

const services = [
  {
    title: 'Flexible MOQ, Small to Large',
    desc: 'We scale production to match your business size, from a first-time test order to a full container.',
    icon: Boxes,
    image: '/images/service-moq.jpg',
    bullets: [
      'Starter orders from just 50 units — perfect for testing a new SKU',
      'Scales smoothly into bulk production of thousands of units',
      'Dedicated account support at every order size'
    ]
  },
  {
    title: 'Laser Logo Engraving',
    desc: 'Your logo or brand message, engraved directly into the wood — not printed, not stuck on.',
    icon: PenTool,
    image: '/images/service-engraving.jpg',
    bullets: [
      'Logo, wordmark, or custom message lasered onto each piece',
      'Permanent finish — won’t fade, peel, or wash off',
      'Placement options: front face, side, or a custom position'
    ]
  },
  {
    title: 'Custom Packaging Materials',
    desc: 'Choose the packaging format that fits your brand and your shelf, per SKU or across your whole line.',
    icon: Package,
    image: '/images/service-packaging.jpg',
    bullets: [
      'Vacuum-sealed bags — keeps wood dry and mold-free in transit',
      'Kraft paper bags — eco-friendly and print-ready',
      'Cloth or fabric pouches — a premium unboxing feel'
    ]
  },
  {
    title: 'Label & Sticker Design',
    desc: 'Every label designed around your brand identity, from material to placement.',
    icon: Tag,
    image: '/images/service-labels.jpg',
    bullets: [
      'Custom-sized labels (5x8cm or your own spec)',
      'Kraft paper or eco-friendly cardboard stock',
      'Full-color print or a natural, minimalist finish',
      'Placed inside the bag, tied on the chew, or on the outer box'
    ]
  },
  {
    title: 'Custom Brand Boxes',
    desc: 'From multi-product gift sets to single-piece boxes, all designed in your brand colors.',
    icon: Gift,
    image: '/images/service-boxes.jpg',
    bullets: [
      'Large carton boxes for multi-product gift sets',
      'Small paper boxes for single 1-2 piece SKUs',
      'Printed in your brand colors and logo',
      'Barcode or QR code printing available'
    ]
  },
  {
    title: 'Fast Worldwide Shipping',
    desc: 'Wherever your business is based, we get your order there quickly and with full paperwork in hand.',
    icon: Truck,
    image: '/images/service-shipping.jpg',
    bullets: [
      'Door-to-door delivery to 40+ countries',
      'Full export documentation: phytosanitary, certificate of origin, fumigation',
      'Container loads or small parcel shipments — both handled'
    ]
  },
  {
    title: 'Free Marketing Kit',
    desc: 'Launch-ready content included with your order, so you can start selling the day it arrives.',
    icon: Camera,
    image: '/images/service-marketing.jpg',
    bullets: [
      'Professional product photography included with every order',
      'Short-form video content ready for Instagram, TikTok & Facebook',
      'Free to use across your own marketing channels, no extra cost'
    ]
  },
  {
    title: '1-for-1 Replacement',
    desc: 'If something is wrong on our end, we make it right — quickly, and without a lengthy claims process.',
    icon: RefreshCw,
    image: '/images/service-guarantee.jpg',
    bullets: [
      'Any manufacturing defect caused on our side is replaced unit-for-unit',
      'Just send photos or a short video — no lengthy claims process',
      'Applies across every product line and OEM order'
    ]
  }
];

const stats = [
  { value: '50', suffix: '+', label: 'Minimum Order Quantity' },
  { value: '40', suffix: '+', label: 'Countries Shipped' },
  { value: '100', suffix: '%', label: 'Export Docs Handled' },
  { value: '1:1', suffix: '', label: 'Defect Replacement' }
];

const workflow = [
  { title: 'Inquiry & Spec', desc: 'Tell us your quantity, branding and packaging needs.', image: '/images/workflow-inquiry.jpg' },
  { title: 'Sample Development', desc: 'Approve a sample before any bulk commitment.', image: '/images/workflow-sample.jpg' },
  { title: 'Bulk Production', desc: 'Laser engraving, labeling and custom packaging applied.', image: '/images/workflow-production.jpg' },
  { title: 'Quality & Shipping', desc: 'Inspected, documented, and shipped worldwide.', image: '/images/workflow-shipping.jpg' }
];

export default function OEMService() {
  return (
    <div className="pt-32 bg-white">
      <SEO
        title="OEM & Private Label Services | WINVN Coffee Wood Chew"
        description="Flexible OEM/ODM services from 50 units to bulk orders: laser logo engraving, custom packaging, label design, custom brand boxes, worldwide shipping, free marketing kit, and 1-for-1 replacement guarantee."
        path="/oem"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service', path: '/oem' }
        ])}
      />

      {/* Hero */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-header font-bold text-dark leading-tight">
              Everything Your Brand Needs, <span className="text-accent-orange">Built Around You.</span>
            </h1>
            <p className="text-lg text-dark/70 leading-relaxed max-w-lg">
              Flexible OEM/ODM production from 50 pieces to thousands, plus laser-engraved branding, custom packaging, and worldwide delivery. We handle it all, so you can focus on selling.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="hover-lift-btn bg-accent-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#services" className="hover-lift-btn bg-beige text-dark px-8 py-4 rounded-full font-bold">
                See Our Services
              </a>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-beige">
            <img src="/images/service-hero.jpg" alt="WINVN OEM production" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-navy/10 bg-navy/5 p-5 text-center space-y-1">
              <div className="text-2xl md:text-3xl font-header font-bold text-navy">
                {s.value}<span className="text-accent-orange">{s.suffix}</span>
              </div>
              <p className="text-navy/70 text-[11px] uppercase tracking-widest font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-container scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
            Full-Service OEM/ODM
          </h2>
          <p className="text-dark/65">
            Every service your brand needs to launch and scale, under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-[2rem] border border-dark/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-beige shrink-0">
                  <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-dark text-orange-light flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-header font-bold uppercase text-dark text-2xl leading-snug">{service.title}</h3>
                  <p className="text-dark/65 text-base leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 pt-1">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-dark/70 leading-relaxed">
                        <CircleCheckBig className="w-4 h-4 text-coffee shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-dark py-24 px-6 text-beige mt-24">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-orange-light font-bold tracking-[0.2em] uppercase text-xs">From Concept to Container</span>
            <h2 className="text-4xl md:text-5xl font-header font-bold">Our OEM Workflow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <div key={step.title} className="relative space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5">
                  <img src={step.image} alt={step.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="text-6xl font-header font-bold text-beige/10">{i + 1}</div>
                <h3 className="text-2xl font-header font-bold uppercase">{step.title}</h3>
                <div className="h-0.5 bg-wood/30 relative">
                  {i < workflow.length - 1 && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent-orange -translate-y-[40%]" />}
                </div>
                <p className="text-base text-beige/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
