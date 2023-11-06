import { BrowserRouter } from 'react-router-dom';
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Works,
    StarsCanvas,
    Tech,
    Study,
} from './components';

export const App = () => {
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
