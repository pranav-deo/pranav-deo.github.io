import React, { useState } from 'react';
import { CAREER_TIMELINE } from '../../constants';
import { ExternalLinkIcon, ChevronDownIcon } from './Icons';

const Experience = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-6 bg-main transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-display font-bold text-txt-main mb-6">Career & Education</h2>

        <div className="space-y-3">
            {CAREER_TIMELINE.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div 
                    key={item.id} 
                    className={`bg-card rounded-lg border transition-all duration-300 overflow-hidden ${
                        isOpen 
                        ? 'border-primary/50 shadow-md ring-1 ring-primary/10' 
                        : 'border-border hover:border-primary/30'
                    }`}
                >
                    {/* Header - Always Visible */}
                    <button 
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-3 sm:p-4 text-left focus:outline-none"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
                            {/* Date: Fixed width, no wrap to prevent breaking */}
                            <div className="min-w-[7rem] flex-shrink-0 text-xs font-mono text-txt-sec whitespace-nowrap pt-1 sm:pt-0">
                                {item.period}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-txt-main flex items-center gap-2">
                                    {item.company}
                                    {item.type === 'education' && (
                                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-1.5 rounded border border-accent/20">EDU</span>
                                    )}
                                </h3>
                                <p className="text-primary font-medium text-xs sm:text-sm">{item.role}</p>
                            </div>
                        </div>
                        <div className={`transform transition-transform duration-300 text-txt-sec ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDownIcon className="w-4 h-4" />
                        </div>
                    </button>

                    {/* Expandable Content */}
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="px-4 pb-4 pt-0 border-t border-border mt-1">
                                <div className="pt-3 pl-0 sm:pl-[8.5rem]">
                                    {item.description && (
                                        <p className="text-txt-sec text-xs sm:text-sm mb-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                    
                                    {item.bullets.length > 0 && (
                                        <ul className="space-y-1 mb-3">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="text-txt-sec/80 text-xs sm:text-sm flex items-start">
                                                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0"></span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {item.links && item.links.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {item.links.map((link, idx) => (
                                                <a 
                                                    key={idx} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-secondary hover:text-secondary/80 bg-secondary/10 hover:bg-secondary/20 px-2 py-1.5 rounded transition-colors"
                                                >
                                                    {link.label} <ExternalLinkIcon className="w-3 h-3" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;