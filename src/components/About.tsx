
import React from 'react';
import { LOGOS } from '../../constants';

const About = () => {
  return (
    <section id="about" className="py-6 bg-main transition-colors">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center border-t border-border pt-6">
                
                {/* Intro Text */}
                <div className="text-center md:text-left">
                    <p className="text-txt-sec text-sm md:text-base leading-relaxed">
                        I am currently based in <span className="text-txt-main font-medium">Tokyo, Japan</span> working at <span className="text-txt-main font-medium">Honda R&D</span>. My work focuses on the intersection of deep learning and real-world robotics. I am passionate about developing algorithms that allow robots to interact dexterously with their environment, moving beyond rigid automation to adaptive, intelligent behavior.
                    </p>
                </div>

                {/* Logos Section */}
                <div className="flex flex-wrap md:flex-col items-center justify-center gap-6 opacity-80 transition-all duration-500">
                    <a href="https://global.honda/innovation/advanced-technology/avatarrobot.html" target="_blank" rel="noreferrer">
                        <img 
                            src={LOGOS.honda} 
                            alt="Honda R&D" 
                            className="h-7 md:h-8 w-auto object-contain transition-all" 
                        />
                    </a>
                    {/* Divider only for mobile */}
                    <div className="block md:hidden w-px h-6 bg-border"></div>
                    <a href="https://www.iitb.ac.in/" target="_blank" rel="noreferrer">
                        <img 
                            src={LOGOS.iitb} 
                            alt="IIT Bombay" 
                            className="h-16 w-auto object-contain transition-all" 
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;