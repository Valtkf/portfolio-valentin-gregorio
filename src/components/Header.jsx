import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (tab) => {
    setActiveTab(tab);
    scrollToElement(tab);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="m-auto z-10 fixed top-0 left-0 w-full overflow-hidden bg-stone-900 text-white p-2 md:p-4 flex justify-center items-center h-16 md:h-20">
      <div className="text-xl md:text-2xl rounded-full border-[1px] border-stone-500 p-1 md:p-2 h-full flex items-center justify-center">
        <motion.a
          href="#header"
          className={`px-2 md:px-4 ${
            activeTab === "header" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("header")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1rem", // Taille de police réduite pour les petits écrans
            md: {
              fontSize: "1.25rem", // Taille de police normale pour les écrans moyens et plus
            },
          }}
        >
          Header
        </motion.a>
        <motion.a
          href="#about"
          className={`px-2 md:px-4 ${
            activeTab === "about" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("about")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1rem",
            md: {
              fontSize: "1.25rem",
            },
          }}
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          className={`px-2 md:px-4 ${
            activeTab === "projects" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("projects")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1rem",
            md: {
              fontSize: "1.25rem",
            },
          }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          className={`px-2 md:px-4 ${
            activeTab === "contact" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1rem",
            md: {
              fontSize: "1.25rem",
            },
          }}
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
}
