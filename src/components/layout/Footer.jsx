import React from 'react';
import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6 text-white">
            <Truck className="h-8 w-8 text-brand" />
            <span className="text-2xl font-bold tracking-tight">Apex<span className="text-brand">Logistics</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-6">Setting the standard for premium logistics and moving solutions across Australia. Secure, fast, and reliable.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-brand transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Residential Moving</li>
            <li>Commercial Logistics</li>
            <li>Storage Solutions</li>
            <li>Interstate Transport</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>1300 000 000</li>
            <li>info@apexlogistics.com.au</li>
            <li>Sydney, NSW 2000, Australia</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        © {new Date().getFullYear()} Apex Logistics. All rights reserved.
      </div>
    </footer>
  );
}