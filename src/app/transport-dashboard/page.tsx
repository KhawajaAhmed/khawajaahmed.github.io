'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TransportDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transport Data Time Series Dashboard</h1>
          <p className="text-xl text-gray-600">
            Interactive visualization of transportation data using time series analysis
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-4">
              This dashboard demonstrates data visualization techniques for analyzing transportation patterns over time.
            </p>
            <p className="text-gray-700">
              Built with React, TypeScript, and modern data visualization libraries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Chart placeholder - Transportation Volume by Time</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Chart placeholder - Peak Hours Analysis</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Chart placeholder - Mode Comparison</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Chart placeholder - Geographic Distribution</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
              onClick={() => window.history.back()}
            >
              Back to Portfolio
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
