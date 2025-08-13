import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Personal Portfolio",
        description: "My personal website built using React and Tailwind CSS",
        github: "https://github.com/yourusername/portfolio",
    },
    {
        title: "Data Structures & Algorithms Prep Guide",
        description: "A web app that aims to provide UCF students with supplemental resources to pass CS1 and the Foundation Exam. Built with React and Tailwind CSS.",
        github: "https://github.com/cs1-ucf/",
    },
    {
        title: "COMING SOON",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
};

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-20 py-48 my-32 bg-transparent text-base-content">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    PROJECTS
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ once: true }}
                            className="p-6 border  rounded-lg shadow-sm hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                            <p className="mb-4 text-base-content/80">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                                <FaGithub className="text-lg" />
                                View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
