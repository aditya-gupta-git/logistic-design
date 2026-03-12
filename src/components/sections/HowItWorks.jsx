import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { step: "01", title: "Request Quote", desc: "Fill out our simple online form with your details." },
    { step: "02", title: "Schedule Pickup", desc: "Choose a convenient time for our team to arrive." },
    { step: "03", title: "Secure Transport", desc: "We pack and transport with GPS-tracked vehicles." },
    { step: "04", title: "Safe Delivery", desc: "Unloading and placement exactly where you need it." }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-blue-200 text-lg">A streamlined process designed for your peace of mind.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-800/50 -z-10"></div>
          {steps.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-brand rounded-full flex items-center justify-center text-3xl font-bold border-8 border-brand-dark shadow-xl mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-200 text-sm px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}