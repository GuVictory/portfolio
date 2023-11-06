import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hocs/SectionWrapper';

const ServiceCard = ({
    index,
    title,
    icon,
}: {
    index: number;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
}) => (
    <Tilt className="xs:w-[220px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[230px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[16px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0.25)}>
                <p className={styles.sectionSubText}>Расскажу про себя</p>
                <h2 className={styles.sectionHeadText}>Общее.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.5, 1)}
                className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
            >
                <span className="block">
                    Имею 3-летний опыт разработки пользовательских интерфейсов с
                    использованием популярных фреймворков (React, Svelte). Для
                    создания анимации и интерактивных элементов применяю GSAP,
                    Three.js.
                </span>
                <span className="mt-2 block">
                    Работаю в области системной аналитики и технического
                    менеджмента. Специализируюсь на сопровождении разработки IT
                    проектов, постановки технических заданий и проведении А/Б
                    тестирования.
                </span>
                <span className="mt-2 block">
                    Регулярно посещаю конференции и митапы из сферы
                    программирования, выступаю с докладами о новых трендах. Веду
                    блог о веб-разработке.
                </span>
                <span className="mt-2 block">
                    Умею эффективно организовывать работу над проектами,
                    расставлять приоритеты. Готова применить свои навыки в
                    интересных проектах в сфере IT.
                </span>
            </motion.p>
            <div className="mt-12 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
