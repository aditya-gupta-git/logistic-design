import React from 'react';
import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <div className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-blue-50"
        >
          <h1 className="text-4xl font-extrabold text-brand-dark mb-2">Request a Quote</h1>
          <p className="text-gray-600 mb-8">Fill out the details below and our logistics experts will get back to you within 24 hours.</p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Suburb/Postcode</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Suburb/Postcode</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand bg-white">
                <option>Residential Moving</option>
                <option>Commercial Logistics</option>
                <option>Furniture Delivery</option>
                <option>Storage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand" placeholder="Describe the items or special requirements..."></textarea>
            </div>

            <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg shadow-blue-500/30">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}