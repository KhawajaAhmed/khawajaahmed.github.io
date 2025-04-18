"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { smoothScrollTo } from '@/utils/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="fixed hidden md:flex justify-center z-50 top-2 sm:top-4 left-1/2 transform -translate-x-1/2">
      <motion.nav 
        className={`navbar-glass rounded-full px-4 sm:px-6 py-2 sm:py-3 max-w-3xl transition-all duration-300 flex`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-between items-center w-full relative">

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base mr-auto">
          <Link href="#home" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#home')}>
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#about')}>
            About
          </Link>
          <Link href="#experience" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#experience')}>
            Experience
          </Link>
          <Link href="#skills" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#skills')}>
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#projects')}>
            Projects
          </Link>
          <Link href="/certifications" className="hover:text-blue-600 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#contact')}>
            Contact
          </Link>
        </div>
        
        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 flex items-center z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {/* Mobile Menu - Only shown when menu is open on medium screens and up */}
      <div className="hidden">
        {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-14 sm:top-16 left-1/2 transform -translate-x-1/2 navbar-glass py-3 sm:py-4 px-4 sm:px-6 flex flex-col space-y-3 sm:space-y-4 rounded-xl w-[90%] max-w-xs text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="#home" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#home')}>
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#about')}>
            About
          </Link>
          <Link href="#experience" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#experience')}>
            Experience
          </Link>
          <Link href="#skills" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#skills')}>
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#projects')}>
            Projects
          </Link>
          <Link href="/certifications" className="hover:text-blue-600 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '#contact')}>
            Contact
          </Link>
          <div className="mt-2 flex justify-center">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
      </div>
    </div>
  );
};

// Mobile Bottom Navigation - Always visible on small screens
const MobileBottomNav = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="navbar-glass py-3 px-2 flex justify-around items-center relative">
        <Link href="#home" className="flex flex-col items-center" onClick={(e) => handleNavClick(e, '#home')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="#about" className="flex flex-col items-center" onClick={(e) => handleNavClick(e, '#about')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link href="#experience" className="flex flex-col items-center" onClick={(e) => handleNavClick(e, '#experience')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1">Experience</span>
        </Link>
        <Link href="#skills" className="flex flex-col items-center" onClick={(e) => handleNavClick(e, '#skills')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-xs mt-1">Skills</span>
        </Link>
        <Link href="#projects" className="flex flex-col items-center" onClick={(e) => handleNavClick(e, '#projects')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs mt-1">Projects</span>
        </Link>
        <Link href="/certifications" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-xs mt-1">Certificates</span>
        </Link>
      </div>
      <div className="absolute bottom-20 right-4 bg-background/90 dark:bg-background/90 p-2 rounded-full shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  );
};

const NavbarComponent = () => {
  return (
    <>
      <Navbar />
      <MobileBottomNav />
    </>
  );
};

export default NavbarComponent;
