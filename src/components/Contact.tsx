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
    <AnimatedSection id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
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
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-lg">
              I'm currently seeking full-time roles or internships in Data Engineering, Data Science, or Analytics where I can continue learning and building impactful systems.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">khawaja@depauw.edu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">DePauw University, Greencastle, IN</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedItem>
          
          {/* Contact Form */}
          <AnimatedItem className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8" delay={0.4} direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="glass-effect hover:bg-blue-600/90 text-blue-600 dark:text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium transition-all duration-300 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
