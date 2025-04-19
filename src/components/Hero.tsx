"use client";

import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/utils/smoothScroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-600">Khawaja</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Computer Science Major & Data Science Minor
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            I use code, queries and curiosity to turn raw data into real impact.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link 
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#projects');
              }}
            >
              View My Work
            </Link>
            <Link 
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#contact');
              }}
            >
              Contact Me
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://www.linkedin.com/in/khawajahussainahmed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-3 rounded-full hover:text-blue-600 transition-all duration-300 hover:shadow-md"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://github.com/khawajaahmed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-3 rounded-full hover:text-blue-600 transition-all duration-300 hover:shadow-md"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="mailto:khawajaahmed_2025@depauw.edu" 
              className="glass-effect p-3 rounded-full hover:text-blue-600 transition-all duration-300 hover:shadow-md"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-profile shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/profile_photo.jpg"
              alt="Khawaja's Profile Photo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        whileHover={{ y: 5 }}
      >
        <Link 
          href="#about" 
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('#about');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
