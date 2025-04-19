"use client";

import ImagePlaceholder from './ImagePlaceholder';
import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';

const About = () => {
  return (
    <AnimatedSection id="about" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full auto-rows-fr">
            <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center" delay={0.1} direction="up">
              <div className="text-blue-600 text-4xl font-bold mb-2">$150K+</div>
              <h3 className="text-xl font-semibold">Identified Revenue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Through rigorous data analysis in previous internship</p>
            </AnimatedItem>
            
            <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center" delay={0.2} direction="up">
              <div className="text-blue-600 text-4xl font-bold mb-2">3</div>
              <h3 className="text-xl font-semibold">Internships</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Stealth AI/Tenzer Technology/DePauw University</p>
            </AnimatedItem>
            
            <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center" delay={0.3} direction="up">
              <div className="text-blue-600 text-4xl font-bold mb-2">15+</div>
              <h3 className="text-xl font-semibold">Data Science Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Links below</p>
            </AnimatedItem>
            
            <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center" delay={0.4} direction="up">
              <div className="text-blue-600 text-4xl font-bold mb-2">6x</div>
              <h3 className="text-xl font-semibold">Dean's List</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Semester GPA &gt; 3.50</p>
            </AnimatedItem>
          </div>
          
          <AnimatedItem className="glass-effect bg-white/50 dark:bg-gray-800/40 p-4 sm:p-6 rounded-lg shadow-xl h-full" delay={0.3} direction="right">
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium">BA in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">DePauw University, Senior</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium">Minor in Data Science</p>
                  <p className="text-gray-600 dark:text-gray-400">DePauw University</p>
                </div>

              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-3">Skills Highlight</h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium text-sm sm:text-base">Data Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">ETL, Data Pipelines, Azure</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium text-sm sm:text-base">Data Science</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">ML Models, Analytics, Visualization</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium text-sm sm:text-base">Programming</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Python, SQL, PySpark, JavaScript</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-2 sm:pl-4">
                  <p className="font-medium text-sm sm:text-base">Tools</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Git, Docker, Jupyter, Power BI</p>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
