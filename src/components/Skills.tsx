"use client";

import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { 
      category: "Data Engineering", 
      skills: ["SQL", "Azure Data Factory", "Databricks", "ADLS Gen2", "Apache Airflow", "ETL Pipelines", "Data Modeling", "Data Governance"] 
    },
    { 
      category: "Data Science", 
      skills: ["Python (pandas, NumPy, scikit-learn, matplotlib)", "R/RStudio (ggplot2, tidyverse)", "Statistical Modeling", "Hypothesis Testing"] 
    },
    { 
      category: "Machine Learning", 
      skills: ["Reinforcement Learning", "Regression Analysis", "NLP"] 
    },
    { 
      category: "Programming", 
      skills: ["Python", "Java", "C++", "Swift", "C#", "Assembly"] 
    },
    { 
      category: "DevOps & Tools", 
      skills: ["Git/GitHub", "Linux", "Azure Cloud", "CI/CD", "Excel", "Tableau"] 
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


      </div>
    </AnimatedSection>
  );
};



export default Skills;
