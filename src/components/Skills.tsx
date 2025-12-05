
import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-6 bg-main transition-colors">
        <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-xl font-display font-bold text-txt-main mb-6 text-center">Technical Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
                {SKILLS.map((group) => (
                    <div key={group.category} className="bg-card p-4 rounded-lg border border-border shadow-sm group hover:border-secondary/30 transition-all">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 border-b border-border pb-1.5 group-hover:border-secondary/20 transition-colors">{group.category}</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {group.skills.map(skill => (
                                <span key={skill} className="px-2 py-0.5 rounded bg-main text-txt-sec text-xs font-medium border border-border group-hover:border-secondary/20 group-hover:text-secondary/80 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;