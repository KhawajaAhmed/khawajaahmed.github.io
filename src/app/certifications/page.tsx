"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedItem from '@/components/AnimatedItem';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      id: 'machine-learning',
      title: 'Introduction to Machine Learning',
      issuer: 'Kaggle',
      date: 'January 2023',
      image: '/certificates/Khawaja Hussain Ahmed - Intro to Machine Learning.png',
      skills: ['Machine Learning', 'Python', 'Data Science'],
      description: 'Comprehensive introduction to machine learning concepts and techniques.'
    },
    {
      id: 'pandas',
      title: 'Pandas',
      issuer: 'Kaggle',
      date: 'December 2022',
      image: '/certificates/Khawaja Hussain Ahmed - Pandas.png',
      skills: ['Pandas', 'Python', 'Data Analysis'],
      description: 'Advanced data manipulation and analysis using the Pandas library in Python.'
    },
    {
      id: 'software-engineer-intern',
      title: 'Software Engineer Intern',
      issuer: 'Professional Certificate',
      date: 'August 2023',
      image: '/certificates/software_engineer_intern certificate.pdf',
      skills: ['Software Engineering', 'Programming', 'Development'],
      description: 'Certification for completing a software engineering internship program.'
    },
    {
      id: 'sql-intermediate',
      title: 'SQL Intermediate',
      issuer: 'Professional Certificate',
      date: 'June 2023',
      image: '/certificates/sql_intermediate certificate.pdf',
      skills: ['SQL', 'Database', 'Data Management'],
      description: 'Intermediate-level SQL skills for database management and complex queries.'
    }
  ];

  const handleCertificateClick = (id: string) => {
    setSelectedCertificate(id === selectedCertificate ? null : id);
  };

  return (
    <main className="min-h-screen pt-20 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link 
            href="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>

        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-600">Certifications</span>
        </motion.h1>
        
        <motion.p 
          className="text-center text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional certifications and achievements that showcase my expertise and continuous learning.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <AnimatedItem 
              key={certificate.id} 
              delay={0.1 * (index + 1)} 
              direction="up"
              className="h-full"
            >
              <motion.div 
                className={`glass-effect rounded-lg overflow-hidden shadow-md transition-all duration-300 h-full ${selectedCertificate === certificate.id ? 'ring-2 ring-blue-500' : ''}`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                }}
                onClick={() => handleCertificateClick(certificate.id)}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative h-48 w-full bg-blue-100 dark:bg-blue-900">
                  {certificate.image.endsWith('.png') ? (
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <span>{certificate.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{certificate.date}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {certificate.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={certificate.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    {selectedCertificate === certificate.id && (
                      <motion.span 
                        className="text-green-600 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Selected
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Certifications;
