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
          <AnimatedItem className="space-y-6" delay={0.2} direction="left">
            <h3 className="text-2xl font-semibold">Computer Science Student with a Passion for Data</h3>
            <p className="text-lg">
              I am a Senior at DePauw University, pursuing a Bachelor's degree in Computer Science with a minor in Data Science. I have a strong foundation in AI/ML and a passion for turning messy data into actionable insights.
            </p>
            <p className="text-lg">
              Over the past few years, I've led and contributed to 15+ projects—from building Azure pipelines that cut KPI computation time by 40%, to developing systems that boosted data reliability by 35%, to training ML models that outperformed baselines by 11%.
            </p>
            <p className="text-lg">
              I thrive on solving complex data problems, whether it's optimizing cloud infrastructure, scaling ETL workflows, or deploying predictive models. With hands-on experience in Python, SQL, PySpark, and Azure, I'm seeking full-time roles or internships in Data Engineering, Data Science, or Analytics.
            </p>
            <p className="text-lg">
              In my free time, I enjoy building my own projects, attending hackathons and collaborating with like-minded individuals.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">DePauw University, Senior</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-medium">Minor in Data Science</p>
                  <p className="text-gray-600 dark:text-gray-400">DePauw University</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-medium">Achievements</p>
                  <p className="text-gray-600 dark:text-gray-400">6x Dean's List | Data Engineering Intern | AI/ML Intern | Data Science Intern</p>
                </div>
              </div>
            </div>
          </AnimatedItem>
          
          <AnimatedItem className="relative h-[400px] rounded-lg overflow-hidden shadow-xl" delay={0.3} direction="right">
            <ImagePlaceholder
              width={800}
              height={400}
              text="About Me Image"
              bgColor="#3B82F6"
              textColor="#FFFFFF"
              style={{ width: '100%' }}
            />
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
