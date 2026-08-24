import { motion } from 'motion/react';
import { certificates } from '../../data/mockData';

export default function CertificatesSection() {
  return (
    <section className="bg-white py-24 px-6 border-y border-dark/5">
      <div className="max-w-[1440px] mx-auto text-center space-y-16">
        <div className="space-y-4">
          <span className="text-coffee font-bold tracking-[0.2em] uppercase text-xs">Quality Assured</span>
          <h2 className="text-3xl md:text-4xl font-header font-bold text-dark">
            Certified for <span className="text-coffee italic">International Export.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full ${cert.name} certificate (opens in a new tab)`}
                className="w-24 h-24 md:w-32 md:h-32 p-2 bg-beige rounded-2xl flex items-center justify-center border border-dark/5 group-hover:shadow-xl transition-all overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate — WINVN INT CO., LTD`}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg"
                />
              </a>
              <p className="text-[10px] font-bold tracking-widest text-dark/65 uppercase">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
