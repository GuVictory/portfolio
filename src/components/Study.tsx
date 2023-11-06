import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
import { studies } from '../constants';
import { SectionWrapper } from '../hocs/SectionWrapper';

import { textVariant } from '../utils/motion';

/**
 *
 * title: 'Вычислительная математика и компьютерные науки',
        field: 'Фундаментальные науки',
        place: 'МГТУ им Н. Э. Баумана',
        level: 'Бакалавриат',
        icon: wb,
        iconBg: '#52257a',
        date: 'Сентябрь 2017 - Июль 2021',
 */
const StudyCard = ({ study }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={study.date}
            iconStyle={{ background: study.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={study.icon}
                        alt={study.place}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {study.level} | {study.place}
                </p>
                <h3 className="text-white text-[18px] font-bold mt-4">
                    {study.title}
                </h3>
                {study.field && (
                    <h4 className="text-secondary text-[16px] font-semibold mt-4">
                        {study.field}
                    </h4>
                )}
            </div>
        </VerticalTimelineElement>
    );
};

const Study = () => {
    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Откуда навыки
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Мое образование.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {studies.map((study, index) => (
                        <StudyCard key={`study-${index}`} study={study} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Study, 'study');
