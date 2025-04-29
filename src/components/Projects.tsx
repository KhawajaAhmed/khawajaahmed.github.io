"use client";

import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';
import AnimatedSection from './AnimatedSection';
import AnimatedItem from './AnimatedItem';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Transportation Time Series Data Dashboard",
      description: "Developed forecasting models analyzing transit patterns to predict future demand, delivering actionable recommendations that translated statistical findings into measurable business value while optimizing resource allocation and reducing operational costs.",
      image: "/transportation_time_series_data.png",
      tags: ["Time Series Analysis", "Stakeholder Reports", "Python/R", "Data Visualization","Machine Learning","Statistical Forecasting","Predictive Modeling","ARIMA/Prophet","Data Cleaning","Business Intelligence"],
      github: "#",
      demo: "https://transportationtimeseriesdatadashboard.netlify.app/"
    },
    {
      title: "Healthcare Revenue Cycle Management Optimization",
      description: "Conducted statistical analysis to optimize the revenue cycle management pipeline, identifying $2.4M in potential recapture opportunities and delivering actionable recommendations that reduced claim denials by 22% while improving the overall financial metrics of the healthcare facility.",
      image: "/healthcare_rcm_dashboard.png",
      tags: ["Machine Learning", "ETL", "EDA", "Statistical Analysis","Hypothesis Testing","Operational Optimization","Data Visualization","Python", "SQL","Data Analysis"],
      github: "#",
      demo: "https://healthcarercmoptimizationanalysis.netlify.app/"
    },
    {
      title: "Agtech Agricultural Pipeline",
      description: "Engineered a scalable ETL pipeline that ingested and normalized IoT sensor data from 200+ field devices using Python, SQL, and Apache Airflow, enabling real-time crop yield predictions.",
      image: "/agricultural_dashboard.png",
      tags: ["Python","pandas","numpy","SQL","Tableau","Data Visualization" ,"EDA", "ETL","Data Analysis","API Integration"],
      github: "https://github.com/KhawajaAhmed/Agtech-Agricultural-Data-Pipeline",
      demo: "#"
    },
    {
      title: "Statistical Analysis of Graduate Debt",
      description: "Conducted in-depth statistical analysis comparing average debt of graduates from small private universities with large private universities using R/RStudio, revealing significant patterns in student loan burdens.",
      image: "/debt_study.png",
      tags: ["R", "Hypothesis Testing", "Statistical Analysis", "Data Visualization", "Summary Statistics"],
      github: "https://github.com/KhawajaAhmed/R_University_Debt_Study",
      demo: "#"
    },
    {
      title: "Reinforcement Learning Game",
      description: "Developed a game with an AI opponent that progressively improves using reinforcement learning. Players take turns removing 1-4 sticks from a pile, with the player who takes the last stick winning. The AI agent learns optimal strategies through gameplay.",
      image: "/project3.jpg",
      tags: ["Artificial Intelligence", "Python","Game Development", "Q-Learning"],
      github: "https://github.com/KhawajaAhmed/Nims-RL-Game",
      demo: "#"
    },
    {
      title: "Sports Analytics Platform",
      description: "Built an automated sports analytics platform using Python and pandas that integrated 5+ data sources, delivering insights that improved team performance by 23% across 12+ competitions.",
      image: "/project4.jpg",
      tags: ["Python", "pandas", "Sports Analytics", "Data Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "Database Query Optimization",
      description: "Optimized database queries with indexing and partitioning strategies, reducing average query latency from 5s to 300ms and supporting near real-time dashboard visualizations.",
      image: "/project6.jpg",
      tags: ["SQL", "Database Optimization", "Indexing", "Partitioning"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
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
      className="glass-effect rounded-lg overflow-hidden shadow-md transition-all duration-300 flex flex-col h-full"
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        {project.title === "Transportation Time Series Data Dashboard" ? (
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <img 
              src="/transportation_time_series_data.png"
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ) : project.title === "Healthcare Revenue Cycle Management Optimization" ? (
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <img 
              src="/healthcare_rcm_dashboard.png"
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ) : project.title === "Agtech Agricultural Pipeline" ? (
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <img 
              src="/agricultural_dashboard.png"
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ) : project.title === "Statistical Analysis of Graduate Debt" ? (
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
            <img 
              src="/debt_study.png"
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ) : (
          <ImagePlaceholder
            width={400}
            height={192}
            text={project.title}
            bgColor="#3B82F6"
            textColor="#FFFFFF"
            style={{ width: '100%' }}
          />
        )}
      </div>
      
      <div className="p-4 sm:p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect hover:bg-gray-800/90 text-gray-800 dark:text-white px-4 py-2 rounded text-sm font-medium flex items-center transition-all duration-300"
            onClick={(e) => {
              if (project.github === "#") {
                e.preventDefault();
                alert("The code is private but can be provided upon request. Please email me.");
              }
            }}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect hover:bg-blue-600/90 text-blue-600 dark:text-blue-400 px-4 py-2 rounded text-sm font-medium flex items-center transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
