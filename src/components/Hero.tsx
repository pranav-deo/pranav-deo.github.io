
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ScholarIcon } from './Icons';
import { BIO, SOCIAL_LINKS } from '../../constants';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center pt-20 pb-2 md:pt-20 md:pb-2 bg-main transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left z-10 w-full">
                <div className="inline-block px-2.5 py-0.5 mb-3 text-[10px] font-bold tracking-wider text-secondary uppercase bg-secondary/10 border border-secondary/20 rounded-full">
                    Robotics Research Engineer
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-txt-main mb-3 tracking-tight leading-none">
                  Pranav <span className="text-primary">Deo</span>
                </h1>
                
                <h2 className="text-sm md:text-lg text-txt-sec mb-5 font-light leading-relaxed">
                  {BIO.summary}
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a 
                    href={SOCIAL_LINKS.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <DownloadIcon className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </a>
                  
                  <div className="flex gap-2">
                  <a 
                        href={SOCIAL_LINKS.scholar} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-card text-txt-sec border border-border hover:border-accent hover:text-accent transition-all"
                    >
                        <ScholarIcon className="w-4 h-4" />
                    </a>
                    <a 
                        href={SOCIAL_LINKS.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-card text-txt-sec border border-border hover:border-accent hover:text-accent transition-all"
                    >
                        <GithubIcon className="w-4 h-4" />
                    </a>
                    <a 
                        href={SOCIAL_LINKS.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-card text-txt-sec border border-border hover:border-accent hover:text-accent transition-all"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`} 
                        className="p-2 rounded-lg bg-card text-txt-sec border border-border hover:border-accent hover:text-accent transition-all"
                    >
                        <MailIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
            </div>

            {/* Profile Image - Square Ratio */}
            <div className="flex-1 flex flex-col items-center md:items-end z-10">
                <div className="relative w-48 md:w-64 lg:w-72 aspect-square">
                    {/* Gradient blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-2xl rotate-3 blur-xl"></div>
                    <img 
                        src={BIO.image} 
                        alt={BIO.name}
                        className="relative w-full h-full object-cover rounded-2xl shadow-xl border-4 border-card bg-card"
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;