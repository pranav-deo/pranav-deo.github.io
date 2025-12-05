import React, { useState } from 'react';
import { MenuIcon, XIcon, DownloadIcon, SunIcon, MoonIcon } from './Icons';
import { SOCIAL_LINKS } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-border bg-card/90 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse group">
          <span className="self-center text-xl font-display font-bold whitespace-nowrap text-txt-main">
            P<span className="text-accent inline-block">.</span>Deo
          </span>
        </a>
        
        <div className="flex items-center gap-2 md:order-2">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-txt-sec hover:bg-main hover:text-accent focus:outline-none transition-colors"
                aria-label="Toggle Theme"
            >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

          <a
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex bg-txt-main text-main hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-border font-medium rounded-lg text-xs px-4 py-2 text-center items-center gap-2 transition-all"
          >
            <DownloadIcon className="w-3 h-3" />
            <span>Resume</span>
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-txt-sec hover:bg-main transition-colors"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-main md:bg-transparent transition-colors">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-sm rounded md:p-0 text-txt-sec hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Mobile Resume Link */}
            <li className="md:hidden mt-2 pt-2 border-t border-border/50">
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 py-2 px-3 text-sm rounded text-txt-sec hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;