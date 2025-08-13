import React from "react";
import NameTyping from "./HomeComponents/NameTyping";
import Skills from "./HomeComponents/Skills";
import Navbar from "./HomeComponents/NavBar";
import Coursework from "./HomeComponents/Coursework";
import AboutMe from "./HomeComponents/AboutMe";

export const Home = () => {
    return (
        <>
            <Navbar />

            <section id="hero" className="py-20 mb-20">
                <NameTyping />
            </section>

            <section id="about" className="py-20 bg-base-100 text-base-content">
                <AboutMe />
            </section>

            <section id="skills" className="py-20 bg-base-100 text-base-content">
                <Skills />
            </section>

            <section id="coursework" className="py-20 bg-base-100 text-base-content">
                <Coursework />
            </section>

        </>
    );
};
