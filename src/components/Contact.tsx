"use client";

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <AnimatedSection id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <AnimatedItem className="space-y-8" delay={0.2} direction="left">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
            <p className="text-base sm:text-lg">
              I'm currently seeking full-time roles in Data Engineering, Data Science, or Analytics where I can continue learning and building impactful systems.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">ahmed.khawaja.hussain@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">New Jersey</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">(702) 348-9820</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect With Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://github.com/khawajaahmed" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/khawajahussainahmed/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:ahmed.khawaja.hussain@gmail.com" className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedItem>
          
          {/* Contact Links */}
          <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 rounded-lg shadow-md p-4 sm:p-6 md:p-8" delay={0.4} direction="right">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="glass-effect bg-white/30 dark:bg-gray-700/30 p-3 sm:p-4 rounded-lg transition-all hover:scale-105">
                <a href="https://www.linkedin.com/in/khawajahussainahmed/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Connect professionally</p>
                  </div>
                </a>
              </div>
              
              <div className="glass-effect bg-white/30 dark:bg-gray-700/30 p-3 sm:p-4 rounded-lg transition-all hover:scale-105">
                <a href="https://github.com/khawajaahmed" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Check out my projects</p>
                  </div>
                </a>
              </div>
              
              <div className="glass-effect bg-white/30 dark:bg-gray-700/30 p-3 sm:p-4 rounded-lg transition-all hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-full">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">(702) 348-9820</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-2">Prefer email? You can reach me at:</p>
                <a 
                  href="mailto:ahmed.khawaja.hussain@gmail.com" 
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-block transition-all hover:scale-105 text-sm sm:text-base break-all"
                >
                  ahmed.khawaja.hussain@gmail.com
                </a>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
