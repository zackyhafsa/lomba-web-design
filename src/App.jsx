// src/App.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import foodImage from "./assets/Group 2.png";
import FloatingFoods from "./floating";
import "./style.css";
import NewSection from "./NewSection";
import BlurFade from "@/components/magicui/blur-fade";
import SplashScreen from "./SplashScreen"; // Import the SplashScreen
import Navbar from "./Navbar";
import OurMenu from "./OurMenu";

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-cover bg-no-repeat">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-10 space-x-8 my-24">
        <div className="flex-1 text-center md:text-left relative z-10">
          <BlurFade>
            <h2
              className="text-4xl md:text-5xl font-bold text-text-color mb-4 -mt-4 pt-8"
              style={{ lineHeight: "57px" }}
            >
              Nikmati Sensasi Kuliner Terbaik di Setiap <br />
              {"Gigitan! "}
            </h2>
          </BlurFade>
          <BlurFade>
            <p className="text-black mb-4 text-2xl pt-3">
              Jelajahi Dunia Rasa yang Tak Terlupakan dengan Pilihan Menu Terlezat dari Kami
            </p>
          </BlurFade>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-orange-600 text-white rounded-2xl font-semibold px-12 py-3 mt-3 hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500 relative z-10"
          >
            Lihat Menu
          </motion.button>
        </div>
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial="hidden"
          animate="visible"
          variants={scrollVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <img src={foodImage} alt="Kuliner" className="w-4/5 food-floating" />
          <FloatingFoods />
        </motion.div>
      </div>
      <NewSection id="asd" />
      <OurMenu />
    </div>
  );
}

export default App;
