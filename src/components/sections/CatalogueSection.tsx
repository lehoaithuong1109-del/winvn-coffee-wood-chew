import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Download, Star, CircleCheckBig } from 'lucide-react';
import { catalogueFeatures, catalogueTestimonial } from '../../data/mockData';

export default function CatalogueSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-container bg-white">
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
        <h2 className="text-4xl md:text-5xl font-header font-bold text-accent-orange leading-tight">
          Catalogue 2026
        </h2>
        <p className="text-dark/65">
          Download our full coffee wood chew collection — the playbook partners use to grow their pet brand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="font-header font-bold text-dark text-lg">What's inside</h3>
            <ul className="space-y-3">
              {catalogueFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-dark/70 leading-relaxed">
                  <CircleCheckBig className="w-4 h-4 text-coffee shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-beige rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex text-accent-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-orange" />
                ))}
              </div>
              <span className="text-sm font-bold text-dark">{catalogueTestimonial.rating}</span>
              <span className="text-xs text-dark/65">Rated by {catalogueTestimonial.ratingCount}</span>
            </div>
            <p className="text-sm italic text-dark/70 leading-relaxed">"{catalogueTestimonial.quote}"</p>
            <p className="text-xs font-bold text-dark">
              {catalogueTestimonial.author} <span className="font-normal text-dark/65">· {catalogueTestimonial.role}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-beige/60 border border-dark/5 rounded-[2.5rem] p-8 space-y-6"
        >
          {submitted ? (
            <div className="text-center space-y-4 py-10">
              <div className="w-14 h-14 mx-auto bg-coffee rounded-full flex items-center justify-center">
                <CircleCheckBig className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-header font-bold text-dark">Thanks! Check your inbox.</h3>
              <p className="text-sm text-dark/65">We've sent the 2026 catalogue to your email.</p>
            </div>
          ) : (
            <>
              <div className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto bg-accent-orange rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-header font-bold text-dark">Download Now - Completely Free</h3>
                <p className="text-xs text-dark/65">Takes 30 seconds — instant access to the full collection</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Your name" className="w-full bg-white border border-dark/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee/20 transition-all" />
                <input required type="email" placeholder="Email" className="w-full bg-white border border-dark/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee/20 transition-all" />
                <input type="text" placeholder="Company name (optional)" className="w-full bg-white border border-dark/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee/20 transition-all" />
                <button type="submit" className="hover-lift-btn w-full bg-accent-orange text-white py-4 rounded-full font-bold">
                  Download Now
                </button>
              </form>
              <p className="text-[10px] text-center text-dark/65 uppercase tracking-widest">
                100% Free · No spam · Unsubscribe anytime
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
