import NameTyping from "./HomeComponents/NameTyping";
{/*import Skills from "./HomeComponents/Skills";*/ }
import NavBar from "./HomeComponents/NavBar";
import Coursework from "./HomeComponents/Coursework";
import AboutMe from "./HomeComponents/AboutMe";
import Projects from "./HomeComponents/Projects";
import Background from "./HomeComponents/Background";

export const Home = () => {
    return (
        <>
            {/*<Background />*/}
            <NavBar />

            <section id="hero" className="mb-0">
                <NameTyping />
            </section>

            {/*<section id="about" className="py-20 bg-transparent text-base-content">
                <AboutMe />
            </section>*/}

            {/*<section id="skills" className="py-40 bg-transparent text-base-content">
                <Skills />
            </section>*/}

            <section id="projects" className="scroll-mt-20 py-40 bg-transparent text-base-content">
                <Projects />
            </section>

            <section id="coursework" className="py-0 bg-transparent text-base-content">
                <Coursework />
            </section>
        </>
    );
};
