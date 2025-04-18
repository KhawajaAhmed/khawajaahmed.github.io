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
            I have a strong foundation in AI/ML and a passion for turning messy data into actionable insights. 
            Seeking full-time roles in Data Engineering, Data Science, or Analytics.
          </p>
          <div className="flex flex-wrap gap-4">
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
        </motion.div>
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <Image
              src="/profile_photo.jpg"
              alt="Khawaja's Profile Photo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
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
