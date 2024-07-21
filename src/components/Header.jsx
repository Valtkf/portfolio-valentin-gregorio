import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="m-auto z-10 fixed top-0 left-0 w-full overflow-hidden bg-stone-900 text-white p-4 flex justify-center items-center h-20">
      <div className="text-2xl rounded-full border-[1px] border-stone-500 p-2 h-full flex items-center justify-center">
        <a
          href="#header"
          className={`pr-4 pl-4 ${
            activeTab === "header" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("header")}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1.25rem",
          }} // Increase font size
        >
          Header
        </a>
        <a
          href="#about"
          className={`pr-4 pl-4 ${
            activeTab === "about" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("about")}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1.25rem",
          }} // Increase font size
        >
          About
        </a>
        <a
          href="#projects"
          className={`pr-4 pl-4 ${
            activeTab === "projects" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("projects")}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1.25rem",
          }} // Increase font size
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`pr-4 pl-4 ${
            activeTab === "contact" ? "bg-stone-700 rounded-xl" : ""
          }`}
          onClick={() => handleClick("contact")}
          style={{
            transition: "background-color 0.4s ease",
            fontSize: "1.25rem",
          }} // Increase font size
        >
          Contact
        </a>
      </div>
    </div>
  );
}
