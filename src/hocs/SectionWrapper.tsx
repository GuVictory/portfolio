import { motion } from 'framer-motion';

import { styles } from '../style';
import { staggerContainer } from '../utils/motion';

export const SectionWrapper = (
    Component: React.ComponentType,
    idName: string
) =>
    function HOC() {
        return (
            <motion.section
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                variants={staggerContainer('')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };
