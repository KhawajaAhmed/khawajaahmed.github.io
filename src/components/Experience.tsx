"use client";

import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Stealth AI",
      period: "Dec 2024 - Feb 2025",
      location: "San Francisco",
      description: [
        "Architected an Azure data pipeline processing 10K+ financial transaction records daily, reducing KPI computation time by 40% and identifying $150K+ in recoverable revenue.",
        "Established PySpark validation frameworks that flagged 5K+ monthly anomalies, improving downstream analytics reliability by 35% for the finance team.",
        "Optimized cloud infrastructure with incremental ETL and dynamic scaling, cutting cloud costs by 20% while maintaining 99.9% SLA for 50K+ daily patient records.",
        "Resolved cross-hospital data inconsistencies using SCD2 dimensional modeling, increasing reporting accuracy by 28% and presenting actionable insights to CEO/CTO."
      ],
      skills: ["Azure", "PySpark", "ETL", "Data Pipelines", "Healthcare Analytics"]
    },
    {
      title: "Data Analysis & AI Intern",
      company: "Tenzer Technology Center",
      period: "Feb 2024 - May 2024",
      location: "Chicago",
      description: [
        "Spearheaded the development of a reinforcement learning system for financial transaction forecasting that outperformed baseline models by ~11%, utilizing RAGAS framework to evaluate the LLM.",
        "Designed A/B testing frameworks for user experience optimization, resulting in a 22% improvement in Click-through rate and a ~6% decrease in bounce rate",
        "Implemented CI/CD pipeline with automated testing that reduced deployment time from days to hours, enabling rapid iteration across 3 development cycles.",
        "Delivered critical production fixes that resolved performance bottlenecks, accelerating system response time by 15% under peak loads."
      ],
      skills: ["Python", "Reinforcement Learning", "CI/CD", "Model Optimization", "Performance Tuning"]
    },
    {
      title: "Data Science Intern",
      company: "Depauw University",
      period: "Oct 2023 - Jan 2024",
      location: "Greencastle",
      description: [
        "Built an automated sports analytics platform using Python and pandas that integrated 5+ data sources, delivering insights that improved team performance by 23% across 12+ competitions.",
        "Designed custom Git-versioned ETL & EDA workflows processing 300+ player statistics daily, reducing analysis latency by 80%.",
        "Developed statistical research for predictive models with 85% accuracy that identified 7 high-potential recruits"
      ],
      skills: ["Python", "pandas", "Sports Analytics", "ETL", "Statistical Modeling"]
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-blue-600">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedItem 
              key={index}
              className="glass-effect bg-white/50 dark:bg-gray-800/40 rounded-lg shadow-lg p-6 md:p-8"
              delay={0.2 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600">{exp.title}</h3>
                  <p className="text-lg font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (0.1 * i) }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (0.05 * i) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
