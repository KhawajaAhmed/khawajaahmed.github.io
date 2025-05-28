"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/utils/smoothScroll';
import AnimatedItem from './AnimatedItem';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen py-20 px-6 md:px-12 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent to-primary blur-3xl opacity-20 dark:from-gray-700 dark:to-gray-800 dark:opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-l from-secondary to-primary/50 blur-3xl opacity-20 dark:from-gray-700 dark:to-gray-800 dark:opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary dark:text-blue-500">Khawaja</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-text-secondary dark:text-gray-400 mb-6">
              Data Analyst Intern @ Impiricus
            </h2>
            <p className="text-lg mb-8 max-w-xl text-text-primary dark:text-gray-300">
              I use code, queries and curiosity to turn raw data into real impact. Recently graduated from DePauw University with a BA in Computer Science with a concentration in Data Science.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                href="#projects"
                className="bg-primary hover:bg-primary-hover dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#projects');
                }}
              >
                View My Work
              </Link>
              <Link 
                href="/certifications"
                className="bg-white hover:bg-gray-100 text-primary border border-primary/30 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 px-6 py-3 rounded-md font-medium transition-colors shadow-md"
              >
                Certifications
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/khawajaahmed" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/khawajahussainahmed/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image 
                src="/profile_photo.jpg" 
                alt="Khawaja Ahmed"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
        
        {/* About Me Content */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full auto-rows-fr">
              <motion.div 
                className="bg-card-bg dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-card-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-primary dark:text-blue-500 text-4xl font-bold mb-2">$150K+</div>
                <h3 className="text-xl font-semibold">Identified Revenue</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Through rigorous data analysis in previous internship</p>
              </motion.div>
              
              <motion.div 
                className="bg-card-bg dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-card-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-secondary dark:text-blue-500 text-4xl font-bold mb-2">3</div>
                <h3 className="text-xl font-semibold">Internships</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Stealth AI/Tenzer Technology/DePauw University</p>
              </motion.div>
              
              <motion.div 
                className="bg-card-bg dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-card-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-accent dark:text-blue-500 text-4xl font-bold mb-2">15+</div>
                <h3 className="text-xl font-semibold">Data Science Projects</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Links below</p>
              </motion.div>
              
              <motion.div 
                className="bg-card-bg dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-card-border dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-success dark:text-blue-500 text-4xl font-bold mb-2">6x</div>
                <h3 className="text-xl font-semibold">Dean's List</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Semester GPA &gt; 3.50</p>
              </motion.div>
            </div>
            
            {/* Education and Skills */}
            <motion.div 
              className="bg-section-bg dark:bg-gray-800/40 p-6 rounded-lg shadow-xl h-full border border-card-border dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3">Education</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary dark:border-blue-600 pl-4">
                    <p className="font-medium">BA in Computer Science</p>
                    <p className="text-text-secondary dark:text-gray-400">DePauw University, May 2025</p>
                  </div>
                  <div className="border-l-4 border-primary dark:border-blue-600 pl-4">
                    <p className="font-medium">Minor in Data Science</p>
                    <p className="text-text-secondary dark:text-gray-400">DePauw University, May 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="text-xl font-semibold mb-3">Skills Highlight</h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div className="border-l-4 border-secondary dark:border-blue-600 pl-4">
                    <p className="font-medium text-sm sm:text-base">Data Engineering</p>
                    <p className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm">ETL, Data Pipelines, Azure</p>
                  </div>
                  <div className="border-l-4 border-accent dark:border-blue-600 pl-4">
                    <p className="font-medium text-sm sm:text-base">Data Science</p>
                    <p className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm">ML Models, Analytics, Visualization</p>
                  </div>
                  <div className="border-l-4 border-primary dark:border-blue-600 pl-4">
                    <p className="font-medium text-sm sm:text-base">Programming</p>
                    <p className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm">Python, SQL, PySpark, JavaScript</p>
                  </div>
                  <div className="border-l-4 border-success dark:border-blue-600 pl-4">
                    <p className="font-medium text-sm sm:text-base">Tools</p>
                    <p className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm">Git, Docker, Jupyter, Power BI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
