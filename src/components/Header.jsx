import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className=" text-base font-normal h-[96px] bg-stone-900 border-2 border-rose-500 text-white text-center font-sans pt-6 flex justify-around items-center flex-wrap px-4 overflow-hidden">
      <div className=" font-poppins ">
        <a href="" className="p-4">
          Header
        </a>
        <a href="" className="p-4">
          About
        </a>
        <a href="" className="p-4">
          Projects
        </a>
        <a href="" className="p-4">
          Contact
        </a>
      </div>
      <div className="flex items-center  gap-6 ">
        <a
          href="https://www.linkedin.com/in/valentin-gregorio-33510826a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/Valtkf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
