import { motion } from 'motion/react';
import { Quote, Sprout, Truck, Sun, Scissors, Hand, Thermometer, PackageCheck, SearchCheck, Ship } from 'lucide-react';
import SEO from '../components/layout/SEO';
import ContactCTA from '../components/sections/ContactCTA';
import { buildBreadcrumbSchema } from '../data/schema';
import { cn } from '../lib/utils';

const growthStats = [
  { value: '2-30', label: 'Sticks Per Order, Then' },
  { value: '5M+', label: 'Pieces Per Year, Now' },
  { value: '40+', label: 'Countries Exported' }
];

const qualityHighlights = [
  { title: '<12% Moisture', desc: 'Machine-dried and tested before every shipment.' },
  { title: '100% Hand-Sanded', desc: 'Every end smoothed by hand for pet safety.' },
  { title: 'Vacuum-Sealed', desc: 'Packed to protect quality on long-distance routes.' }
];

const processSteps = [
  {
    n: '01',
    title: 'Sourcing from the Highlands',
    desc: 'Freshly harvested coffee wood sourced directly from farmers in Gia Lai and Dak Lak.',
    icon: Sprout,
    image: '/images/process-sourcing.jpg'
  },
  {
    n: '02',
    title: 'Transport to Our Factory',
    desc: 'Wood is collected and transported from the highlands to our processing facility.',
    icon: Truck,
    image: '/images/process-transport.jpg'
  },
  {
    n: '03',
    title: 'Natural Sun-Drying',
    desc: 'Dried outdoors under natural sunlight for about a week before processing.',
    icon: Sun,
    image: '/images/process-drying-sun.jpg'
  },
  {
    n: '04',
    title: 'Precision Cutting',
    desc: 'Cut into exact lengths to match every size in our range.',
    icon: Scissors,
    image: '/images/process-cutting.jpg'
  },
  {
    n: '05',
    title: 'Hand-Sanded & Smoothed',
    desc: 'Skilled craftsmen sand the bark and smooth both ends by hand, so every piece is safe for pets.',
    icon: Hand,
    image: '/images/process-sanding.jpg'
  },
  {
    n: '06',
    title: 'Machine Drying',
    desc: 'Dried to under 12% moisture to prevent damp and mold during transport.',
    icon: Thermometer,
    image: '/images/process-drying-machine.jpg'
  },
  {
    n: '07',
    title: 'Vacuum Sealing',
    desc: 'Vacuum-packed to protect quality, even on the longest shipping routes.',
    icon: PackageCheck,
    image: '/images/process-vacuum.jpg'
  },
  {
    n: '08',
    title: 'Quality Inspection',
    desc: 'Random samples checked for smell, color, moisture, and size before approval.',
    icon: SearchCheck,
    image: '/images/process-quality-check.jpg'
  },
  {
    n: '09',
    title: 'Packing & Export',
    desc: 'Packed into carton boxes and loaded onto trucks and containers for delivery worldwide.',
    icon: Ship,
    image: '/images/process-packing.jpg'
  }
];

export default function Manufacturing() {
  return (
    <div className="pt-32 bg-beige min-h-screen">
      <SEO
        title="Our Story & Manufacturing Process | WINVN Coffee Wood Chew"
        description="From discarded coffee wood in Vietnam's Tay Nguyen to a 9-step production process exporting to 40+ countries — the story behind WINVN Coffee Wood Chew."
        path="/manufacturing"
        schema={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Manufacture', path: '/manufacturing' }
        ])}
      />

      {/* Hero */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-header font-bold text-dark leading-tight">
              Born From Vietnam's <span className="text-coffee italic">Coffee Highlands.</span>
            </h1>
            <p className="text-lg text-dark/70 leading-relaxed max-w-xl">
              Every Coffee Wood Chew starts as a discarded branch in Tay Nguyen. This is the story of how we turned it into a product exported to over 40 countries — and the exact process behind every piece.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img src="/images/manufacturing-hero.jpg" alt="WINVN coffee wood factory" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden aspect-[4/5] order-2 lg:order-1"
          >
            <img src="/images/founder-portrait.jpg" alt="Ton That Nhat Cam, Founder of WINVN" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">A Second Life for Coffee Wood</span>
            <h2 className="text-3xl md:text-4xl font-header font-bold text-dark leading-tight">
              A Son of Tay Nguyen
            </h2>
            <div className="space-y-4 text-dark/70 leading-relaxed">
              <p>
                WINVN was founded by Mr. Ton That Nhat Cam, a son of Vietnam's Tay Nguyen, where coffee isn't just a crop, it's the region's way of life.
              </p>
              <p>
                Coffee trees support thousands of farming families, but after around 20 years their yield declines and they're cut down and left behind. Looking at piles of discarded coffee wood going to waste, we asked ourselves what we could make from it — something that could raise farmers' income and create real value for society.
              </p>
              <p>
                It took years of research, testing, and failed attempts before we perfected a complete, ready-to-sell product. What started as orders of just 2 to 30 sticks has grown into a company producing over 5 million pieces a year, exporting Coffee Wood Chews to more than 40 countries worldwide.
              </p>
            </div>

            <div className="flex gap-4 bg-white rounded-3xl p-6 border border-dark/5">
              <Quote className="w-8 h-8 text-coffee/30 shrink-0" />
              <div className="space-y-2">
                <p className="text-dark/80 italic leading-relaxed">
                  We didn't just want to make a product — we wanted to give discarded coffee wood, and the farmers who grow it, a second life.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-dark/65">
                  Ton That Nhat Cam — Founder &amp; Director
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-2">
              {growthStats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="text-3xl font-header font-bold text-coffee">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-dark/65">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality highlights */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {qualityHighlights.map((q) => (
            <div key={q.title} className="bg-white rounded-2xl border border-dark/5 p-6 text-center space-y-1">
              <p className="font-header font-bold text-coffee text-xl">{q.title}</p>
              <p className="text-dark/65 text-xs leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Production Process */}
      <section className="section-container">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">From Branch to Box</span>
          <h2 className="text-4xl md:text-5xl font-header font-bold text-dark leading-tight">
            Our Production Process
          </h2>
          <p className="text-dark/65">
            Nine steps, from freshly harvested wood in the highlands to a finished chew ready for export.
          </p>
        </div>

        <div className="relative space-y-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-dark/10 -translate-x-1/2" />
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={cn('rounded-[2rem] overflow-hidden aspect-[4/3]', reverse ? 'md:order-2' : 'md:order-1')}>
                  <img src={step.image} alt={step.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className={cn('space-y-3', reverse ? 'md:order-1 md:text-right' : 'md:order-2')}>
                  <div className={cn('flex items-center gap-3', reverse && 'md:flex-row-reverse')}>
                    <div className="w-12 h-12 rounded-2xl bg-coffee text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-header font-bold text-dark/10">{step.n}</span>
                  </div>
                  <h3 className="text-2xl font-header font-bold text-dark">{step.title}</h3>
                  <p className="text-dark/65 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
