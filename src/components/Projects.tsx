"use client";

import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';
import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Azure Data Pipeline Optimization",
      description: "Developed and optimized Azure data pipelines that reduced KPI computation time by 40%, improving reporting efficiency for business stakeholders.",
      image: "/project1.jpg",
      tags: ["Azure", "PySpark", "ETL", "Data Engineering"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Reliability System",
      description: "Built a comprehensive data validation and monitoring system that boosted data reliability by 35%, ensuring accurate analytics and reporting.",
      image: "/project2.jpg",
      tags: ["Python", "SQL", "Data Quality", "Monitoring"],
      github: "#",
      demo: "#"
    },
    {
      title: "Machine Learning Model Deployment",
      description: "Trained and deployed machine learning models that outperformed baselines by 11%, providing actionable predictions for business decision-making.",
      image: "/project3.jpg",
      tags: ["Machine Learning", "Python", "AI", "Predictive Modeling"],
      github: "#",
      demo: "#"
    },
    {
      title: "Databricks ETL Framework",
      description: "Designed a scalable ETL framework using Databricks that processed terabytes of data efficiently, enabling real-time analytics capabilities.",
      image: "/project4.jpg",
      tags: ["Databricks", "PySpark", "Big Data", "ETL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created interactive dashboards using Tableau that transformed complex data into clear visualizations, helping stakeholders make data-driven decisions.",
      image: "/project5.jpg",
      tags: ["Tableau", "Data Visualization", "Analytics", "Dashboard Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud Infrastructure Optimization",
      description: "Optimized cloud infrastructure and data workflows, resulting in 30% cost reduction while maintaining performance and reliability standards.",
      image: "/project6.jpg",
      tags: ["Azure", "Cloud Computing", "Infrastructure", "Optimization"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills in Data Engineering, Data Science, and Analytics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedItem 
              key={index} 
              delay={0.1 * (index + 1)} 
              direction="up" 
              staggerIndex={index}
            >
              <ProjectCard project={project} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div 
      className="glass-effect rounded-lg overflow-hidden shadow-md transition-all duration-300"
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative h-48 w-full">
        <ImagePlaceholder
          width={400}
          height={192}
          text={project.title}
          bgColor="#3B82F6"
          textColor="#FFFFFF"
          style={{ width: '100%' }}
        />
      </div>
      
      <div className="p-4 sm:p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <motion.span 
              key={tagIndex}
              className="glass-effect text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-xs border border-blue-200 dark:border-blue-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Link 
            href={project.github}
            className="glass-effect hover:bg-gray-800/90 text-gray-800 dark:text-white px-4 py-2 rounded text-sm font-medium flex items-center transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </Link>
          <Link 
            href={project.demo}
            className="glass-effect hover:bg-blue-600/90 text-blue-600 dark:text-white px-4 py-2 rounded text-sm font-medium flex items-center transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
