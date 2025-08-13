import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Links = () => {
    return (
        <div className="flex justify-center mt-6 space-x-6">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/petertrinh4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-primary hover:text-secondary transition"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/petertrinh4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-primary hover:text-secondary transition"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>

            {/* Email */}
            <a
                href="mailto:petertrinh04@gmail.com"
                className="text-3xl text-primary hover:text-secondary transition"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>
        </div>
    );
};
export default Links;
