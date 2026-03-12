import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, Package, ShieldCheck } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Services() {
  const services = [
    { title: "Residential Moving", desc: "Stress-free home relocations with careful handling of your personal belongings.", icon: <Users className="h-8 w-8" /> },
    { title: "Business Logistics", desc: "Scalable supply chain and B2B delivery solutions for modern enterprises.", icon: <Truck className="h-8 w-8" /> },
    { title: "Furniture Delivery", desc: "White-glove delivery for heavy, fragile, or high-value furniture items.", icon: <Package className="h-8 w-8" /> },
    { title: "Secure Storage", desc: "Climate-controlled, 24/7 monitored storage facilities for short or long-term needs.", icon: <ShieldCheck className="h-8 w-8" /> },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Premium Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive transport and storage solutions tailored to your specific requirements.</p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10 }} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{srv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}