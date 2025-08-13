import { motion } from "framer-motion";
{/*import me from "../../assets/me.jpg"*/}

const AboutMe = () => {
    return (
        <section id="about" className="scroll-mt-100 py-0 bg-transparent text-base-content">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Left - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <img
                        src={me}
                        alt="Profile"
                        className="rounded-xl shadow-lg w-64 h-64 object-cover"
                    />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-base-content">ABOUT ME</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        I love Computer Science and solving problems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
export default AboutMe;
