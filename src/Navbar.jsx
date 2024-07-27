import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="bg-white/35 backdrop-blur-lg text-black p-4 sticky top-0 z-50"
      variants={navbarVariants}
      initial="visible"
      animate={showNavbar ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-9 my-2">
        <h1 className="text-2xl font-bold text-text-color">Ayam69</h1>
        <nav className="flex gap-10">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Menu
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
        <div className="flex gap-6">
          <button className="group relative border-orange-600 border-2 rounded-2xl text-orange-600 px-10 py-2 font-bold overflow-hidden hover:text-white duration-500 ease-in-out">
            <span className="relative z-10 hover:text-white">Login</span>
            <div className="absolute inset-0 bg-orange-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button className="bg-orange-600 text-white font-bold px-10 py-2 rounded-2xl hover:shadow-[0_0_0_4px_#fed7aa] duration-500">
            Sign Up
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
