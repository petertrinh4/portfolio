import { motion } from "framer-motion";

const navLinks = [
    { label: "PROJECTS", href: "#projects" },
    { label: "COURSEWORK", href: "#coursework" },
];

const NavBar = () => {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="navbar fixed top-0 z-50 bg-transparent backdrop-blur-md shadow-sm px-6"
        >
            <div className="flex-1">
                <a
                    href="#hero"
                    className="text-xl font- tracking-wide hover:opacity-80 transition"
                >
                    PETER TRINH
                </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-base font-medium text-base-content hover:text-primary transition-all duration-200"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-md bg-transparent backdrop-blur-md rounded-box w-52 space-y-2"
                >
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-base hover:text-primary transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};
export default NavBar;
