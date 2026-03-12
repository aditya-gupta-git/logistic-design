import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-extrabold text-brand-dark mb-6">About Apex Logistics</h1>
          <p className="text-lg text-gray-600">
            Founded with a mission to redefine the transport industry in Australia, we combine cutting-edge technology with decades of traditional logistics expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: <Shield />, title: "Reliability", text: "We treat your cargo as if it were our own, ensuring safe and secure transit." },
            { icon: <Target />, title: "Precision", text: "Advanced routing and tracking means your deliveries arrive exactly when promised." },
            { icon: <Award />, title: "Excellence", text: "Our team is trained to provide premium, white-glove service at every touchpoint." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}
              className="bg-brand-light p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 bg-white text-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}