import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="py-20 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Deliveries Completed", value: "15,000+" },
            { label: "Happy Customers", value: "98%" },
            { label: "Modern Fleet Size", value: "120+" },
            { label: "Years Experience", value: "15+" }
          ].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}