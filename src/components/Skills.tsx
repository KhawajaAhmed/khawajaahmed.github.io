"use client";

import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { 
      category: "Programming Languages", 
      skills: ["Python", "SQL", "R", "PySpark"] 
    },
    { 
      category: "Data Engineering", 
      skills: ["ETL Pipelines", "Data Warehousing", "Data Modeling", "Databricks"] 
    },
    { 
      category: "Data Science & ML", 
      skills: ["Machine Learning", "AI", "Predictive Modeling", "Statistical Analysis", "Data Visualization"] 
    },
    { 
      category: "Cloud & Tools", 
      skills: ["Azure", "GitHub", "Tableau", "Excel"] 
    },
    { 
      category: "Soft Skills", 
      skills: ["Project Leadership", "Problem Solving", "Data Analysis", "Collaboration", "Communication"] 
    }
  ];

  return (
    <AnimatedSection id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalSkills.map((skillGroup, index) => (
            <AnimatedItem 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              delay={0.1 * (index + 1)}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.3 + (0.05 * skillIndex),
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem className="mt-16" delay={0.5} direction="up">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Learning Journey</h3>
          <div className="relative hidden md:block">
            {/* Timeline Line - Only visible on medium screens and up */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Timeline Items - Desktop Version */}
            <div className="space-y-12">
              <TimelineItem 
                year="Present"
                title="Data Engineering & ML Deployment"
                description="Building Azure pipelines, optimizing cloud infrastructure, and deploying production ML models."
                isLeft={true}
              />
              <TimelineItem 
                year="Data Engineering Intern"
                title="ETL & Data Pipeline Development"
                description="Developed systems that boosted data reliability by 35% and cut KPI computation time by 40%."
                isLeft={false}
              />
              <TimelineItem 
                year="AI/ML Intern"
                title="Machine Learning Model Development"
                description="Trained ML models that outperformed baselines by 11% and delivered actionable insights."
                isLeft={true}
              />
              <TimelineItem 
                year="Data Science Intern"
                title="Data Analysis & Visualization"
                description="Turned messy data into actionable insights using Python, SQL, and visualization tools."
                isLeft={false}
              />
            </div>
          </div>
          
          {/* Mobile Timeline - Only visible on small screens */}
          <div className="md:hidden space-y-8 mt-8">
            <MobileTimelineItem 
              year="Present"
              title="Data Engineering & ML Deployment"
              description="Building Azure pipelines, optimizing cloud infrastructure, and deploying production ML models."
            />
            <MobileTimelineItem 
              year="Data Engineering Intern"
              title="ETL & Data Pipeline Development"
              description="Developed systems that boosted data reliability by 35% and cut KPI computation time by 40%."
            />
            <MobileTimelineItem 
              year="AI/ML Intern"
              title="Machine Learning Model Development"
              description="Trained ML models that outperformed baselines by 11% and delivered actionable insights."
            />
            <MobileTimelineItem 
              year="Data Science Intern"
              title="Data Analysis & Visualization"
              description="Turned messy data into actionable insights using Python, SQL, and visualization tools."
            />
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description, isLeft }: { 
  year: string; 
  title: string; 
  description: string; 
  isLeft: boolean;
}) => {
  return (
    <div className="relative">
      {/* Content */}
      <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}>
        <div className="w-5/12"></div>
        <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-md">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="w-5/12"></div>
      </div>
      
      {/* Text Content */}
      <div className={`absolute top-0 w-5/12 mt-1 ${isLeft ? 'left-0 text-right pr-8' : 'right-0 pl-8'}`}>
        <span className="text-sm font-semibold text-blue-600">{year}</span>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Mobile Timeline Item Component
const MobileTimelineItem = ({ year, title, description }: { 
  year: string; 
  title: string; 
  description: string; 
}) => {
  return (
    <motion.div 
      className="glass-effect p-4 rounded-lg"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="text-sm font-semibold text-blue-600 block mb-1">{year}</span>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

export default Skills;
