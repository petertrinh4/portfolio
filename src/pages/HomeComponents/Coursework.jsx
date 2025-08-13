import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const coursework = [
    "Design & Analysis of Algorithms",
    "Operating Systems",
    "Discrete Structures",
    "Computer Architecture",
    "Probability",
    "Security in Computing",
];

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const Coursework = () => {
    return (
        <section id="coursework" className="py-20 bg-base-100 text-base-content">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    Coursework
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {coursework.map((course, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={fadeItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-base-200 hover:bg-primary/10 transition"
                        >
                            <FaCheckCircle className="text-primary text-xl" />
                            <span className="text-lg">{course}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Coursework;
