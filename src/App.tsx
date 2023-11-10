import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Works,
    StarsCanvas,
    Tech,
    Study,
    Feedbacks,
} from './components';

export const App = () => {
    useEffect(() => {
        const onPageLoad = () => {
            const ele = document.getElementById('ipl-progress-indicator');
            if (ele) {
                ele.classList.add('available');
                setTimeout(() => {
                    ele.outerHTML = '';
                }, 2000);
            }
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Study />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="reletive z-0 ">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};
