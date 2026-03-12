import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import HowItWorks from '../components/sections/HowItWorks';
import Stats from '../components/sections/Statistics';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-brand-light rounded-3xl p-12 lg:p-20 border border-blue-100"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-6">Ready to move with the best?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Get a transparent, no-obligation quote today and experience the difference of a truly premium logistics partner.</p>
          <button className="bg-brand text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/30">
            Request Your Free Quote
          </button>
        </motion.div>
      </section>
    </main>
  );
}