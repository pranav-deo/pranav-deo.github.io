import React from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLinkIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-6 bg-main transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl font-display font-bold text-txt-main mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((project) => (
                <div 
                    key={project.id} 
                    className="group flex flex-col bg-card rounded-lg overflow-hidden border border-border hover:border-secondary/50 transition-all"
                >
                    {project.image && (
                        <a 
                            href={project.link || '#'} 
                            target={project.link ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="h-48 bg-main overflow-hidden relative block"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {project.link && (
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLinkIcon className="w-3 h-3" />
                                </div>
                            )}
                        </a>
                    )}
                    
                    <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-bold text-txt-main mb-0.5 group-hover:text-primary transition-colors">
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                            ) : project.title}
                        </h3>
                        <p className="text-[10px] text-txt-sec font-mono mb-2">{project.role} • {project.period}</p>
                        
                        <p className="text-txt-sec text-xs mb-3 line-clamp-3">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {project.bullets && project.bullets.length > 0 && (
                            <ul className="space-y-1 mb-3">
                                {project.bullets.map((bullet, i) => (
                                    <li key={i} className="text-txt-sec/80 text-xs sm:text-sm flex items-start">
                                        <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0"></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Render Multiple Links if available */}
                        {project.links && project.links.length > 0 && (
                            <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-border/50">
                                {project.links.map((link, idx) => (
                                    <a 
                                        key={idx} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-txt-sec hover:text-secondary transition-colors"
                                    >
                                        {link.label} <ExternalLinkIcon className="w-2.5 h-2.5" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;