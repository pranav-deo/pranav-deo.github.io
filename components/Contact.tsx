import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card py-4 border-t border-border transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-txt-main mb-4">Let's Connect</h2>
            <p className="text-txt-sec text-sm max-w-xl mx-auto mb-4">
                Open to discussing research collaborations in Robot Learning and Embodied AI.
            </p>

            <div className="flex justify-center gap-6 mb-4">
                 <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex flex-col items-center group">
                    <div className="p-3 bg-main rounded-xl text-txt-sec mb-2 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <MailIcon className="w-5 h-5"/>
                    </div>
                </a>
                 <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                    <div className="p-3 bg-main rounded-xl text-txt-sec mb-2 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <LinkedinIcon className="w-5 h-5"/>
                    </div>
                </a>
            </div>

            <div className="border-t border-border py-4">
                <p className="text-txt-sec text-xs">
                    &copy; {currentYear} Pranav Deo. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Contact;