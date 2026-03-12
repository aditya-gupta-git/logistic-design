import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Truck className="h-8 w-8 text-brand" />
          <span className="text-2xl font-bold text-brand-dark tracking-tight">Apex<span className="text-brand">Logistics</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
          <Link to="/about" className="hover:text-brand transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
          <Link to="/quote">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-brand px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/30"
            >
              Get a Quote
            </motion.button>
          </Link>
        </div>

        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link to="/" className="text-lg font-medium text-gray-800">Home</Link>
          <Link to="/services" className="text-lg font-medium text-gray-800">Services</Link>
          <Link to="/about" className="text-lg font-medium text-gray-800">About</Link>
          <Link to="/contact" className="text-lg font-medium text-gray-800">Contact</Link>
          <Link to="/quote" className="text-center bg-brand text-white px-6 py-3 rounded-full font-semibold">
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}