import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJs,
    FaJava,
    FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = {
    frameworks: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Node/Express", icon: <FaNodeJs className="text-green-600" /> },
    ],
    languages: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "Java", icon: <FaJava className="text-red-700" /> },
        { name: "C", icon: <FaCode className="text-gray-700" /> },
        { name: "C++", icon: <FaCode className="text-gray-700" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
};

const Skills = () => {
    return (
        <section className="px-6 py-20 bg-base-100 text-base-content">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                {/* Frameworks Section */}
                <div className="mb-10">
                    {/*<h3 className="text-2xl font-semibold mb-4 text-primary">Web Frameworks</h3>*/}
                    <div className="flex flex-wrap gap-6">
                        {skills.frameworks.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-lg hover:text-primary transition"
                            >
                                <span className="text-2xl">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages Section */}
                <div>
                    {/*(<h3 className="text-2xl font-semibold mb-4 text-secondary">Programming Languages</h3>*/}
                    <div className="flex flex-wrap gap-6">
                        {skills.languages.map((language, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-lg hover:text-secondary transition"
                            >
                                <span className="text-2xl">{language.icon}</span>
                                <span>{language.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
