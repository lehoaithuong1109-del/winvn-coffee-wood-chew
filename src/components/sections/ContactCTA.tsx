import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useSampleModal } from '../../context/SampleModalContext';

export default function ContactCTA() {
  const { openSampleModal } = useSampleModal();

  return (
    <section className="px-6 py-20 bg-beige">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto bg-coffee rounded-[3rem] p-12 md:p-24 relative overflow-hidden group"
      >
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-wood/10 -skew-x-12 translate-x-1/4" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-beige/60 font-bold tracking-[0.2em] uppercase text-xs">Ready to Partner?</span>
              <h2 className="text-4xl md:text-6xl font-header font-bold text-beige leading-tight">
                Let's Create Your <br />
                <span className="text-wood italic">Bespoke Pet Product.</span>
              </h2>
              <p className="text-beige/70 text-lg leading-relaxed">
                Whether you're an Amazon seller looking for FBA solutions or a global distributor, our team is ready to assist you with samples and quotations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={openSampleModal}
                className="bg-beige text-dark px-10 py-5 rounded-full font-bold hover:bg-wood hover:text-white transition-all flex items-center gap-2 group/btn"
              >
                Request a Free Sample
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a
                href="mailto:info@winvnint.com"
                className="border border-beige/20 text-beige px-10 py-5 rounded-full font-bold hover:bg-beige/10 transition-all flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Contact Sales
              </a>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square border-4 border-beige/10 shadow-2xl">
            <img
              src="/images/cta-dog-chewing.jpg"
              alt="Dog chewing a WINVN coffee wood chew"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating wood piece decoration - stylized */}
        <div className="absolute bottom-0 right-0 hidden lg:block translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
           <div className="w-[500px] h-[500px] bg-beige rounded-full blur-[100px]" />
        </div>
      </motion.div>
    </section>
  );
}
