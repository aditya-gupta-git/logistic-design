import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Truck } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-brand font-semibold mb-6">
            <MapPin className="h-4 w-4" /> Trusted Australian Delivery
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
            Seamless Logistics & <br/> Premium Moving Solutions.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
            From residential moves to complex business supply chains, we deliver your assets safely, on time, and with transparent pricing across Australia.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <button className="bg-brand text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:text-white transition-colors flex items-center gap-2 shadow-xl shadow-blue-500/30">
              Request Quote <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg border border-gray-200 hover:border-brand transition-colors shadow-sm">
              Our Services
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-tr from-blue-200 to-blue-50 rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center">
               <Truck className="h-32 w-32 text-brand opacity-20" />
               <p className="absolute text-brand-dark font-medium">Insert High-Res Delivery Image Here</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 