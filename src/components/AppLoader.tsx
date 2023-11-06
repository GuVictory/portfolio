import { motion } from 'framer-motion';

const colors = ['#22238f', '#8A60F6', '#63D6B6', '#5083EC', '#F8F8F9'];

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const dotVariants = {
    initial: {},
    animate: {
        height: [40, 100, 40],
        transition: {
            repeat: Infinity,
        },
    },
};

export const AppLoader = ({ count = 5 }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            style={{
                display: 'flex',
                gap: 16,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            className="absolute left-0 right-0 top-0 bottom-0 m-auto"
        >
            {Array(count)
                .fill(null)
                .map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={dotVariants}
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: colors[index % colors.length],
                                borderRadius: 20,
                            }}
                        />
                    );
                })}
        </motion.div>
    );
};
