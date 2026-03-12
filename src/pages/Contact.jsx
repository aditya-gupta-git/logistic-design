import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-extrabold text-brand-dark mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-12">Have a question about our services or need support with an ongoing delivery? Our team is ready to help.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-brand rounded-full flex items-center justify-center shadow-sm"><Phone /></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Call Us</h4>
                  <p className="text-gray-600">1300 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-brand rounded-full flex items-center justify-center shadow-sm"><Mail /></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email Us</h4>
                  <p className="text-gray-600">info@apexlogistics.com.au</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-brand rounded-full flex items-center justify-center shadow-sm"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Headquarters</h4>
                  <p className="text-gray-600">123 Logistics Way, Sydney NSW 2000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-brand text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition-colors">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}