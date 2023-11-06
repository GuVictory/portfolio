import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center  items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        Привет 👋
                        <br />Я{' '}
                        <span className="text-[#915eff]">Вика Губанова</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                        Создаю пользовательские интерфейсы и веб-приложения.{' '}
                        <br />
                        <span className="block  mt-4">
                            Так же занимаюсь системной аналитикой{' '}
                            <br className="sm:block hidden" />и сопровождением
                            процесса разработки it продуктов.
                        </span>
                    </p>
                </div>
            </div>

            {/* <ComputersCanvas /> */}

            <div className="absolute bottom-2 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-4 h-4 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
