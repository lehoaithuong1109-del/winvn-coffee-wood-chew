import { motion } from 'motion/react';
import { stats } from '../../data/mockData';

export default function StatsSection() {
  return (
    <div className="my-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-3xl border border-dark/5 shadow-sm p-6 text-center space-y-1"
        >
          <div className="text-3xl md:text-4xl font-header font-bold text-dark">
            {stat.value}
            <span className="text-accent-orange">{stat.suffix}</span>
          </div>
          <p className="text-dark text-[11px] uppercase tracking-widest font-bold">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
