import React from 'react';
import { PUBLICATIONS, SOCIAL_LINKS } from '../constants';
import { ExternalLinkIcon } from './Icons';

const Publications = () => {
  return (
    <section id="publications" className="py-6 bg-main transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold text-txt-main">Research Papers</h2>
            <a href={SOCIAL_LINKS.scholar}                         
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-medium text-secondary hover:text-secondary/80 flex items-center gap-1 transition-colors">
                View Scholar <ExternalLinkIcon className="w-3 h-3"/>
            </a>
        </div>

        <div className="flex flex-col gap-4">
            {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="flex gap-4 bg-card p-4 rounded-lg border border-border hover:border-accent/30 transition-colors group">

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-px rounded border border-accent/20">{pub.venue}</span>
                            {/* <span className="text-[10px] text-txt-sec">{pub.year}</span> */}
                        </div>
                        <h3 className="text-sm font-bold text-txt-main leading-snug mb-1">
                            {pub.link ? (
                                <a 
                                    href={pub.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    {pub.title} <ExternalLinkIcon className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"/>
                                </a>
                            ) : (
                                pub.title
                            )}
                        </h3>
                        <p className="text-xs text-txt-sec line-clamp-2 mb-1">{pub.description}</p>
                        <p className="text-[10px] text-txt-sec/70 italic truncate">{pub.authors}</p>
                    </div>
                    <div className="hidden sm:block h-32 rounded bg-main overflow-hidden flex-shrink-0">
                    {pub.image && (
                        <a 
                            href={pub.link || '#'} 
                            target={pub.link ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="h-full bg-main overflow-hidden relative block"
                        >
                            <img src={pub.image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {pub.link && (
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLinkIcon className="w-3 h-3" />
                                </div>
                            )}
                        </a>
                    )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;