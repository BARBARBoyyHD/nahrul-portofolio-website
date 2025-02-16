import React, { useState } from "react";
import {
  BsYoutube,
  BsLinkedin,
  BsTiktok,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-500 bg-black/78 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <a
        href="#Home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Nahrul
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#Home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#Tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Educations"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Educations
          </a>
        </li>
        <li>
          <a
            href="#Experiences"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Experiences
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Links */}
      <ul className="flex flex-wrap gap-5 hidden md:flex">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <a
            href="https://www.youtube.com/@uwithelifter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/muhammad-nahrul-hayat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
          <a
            href="https://www.instagram.com/notuwithelifter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-slate-500 hover:opacity-100">
          <a
            href="https://www.tiktok.com/@uwithelifter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTiktok />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a
            href="https://github.com/BARBARBoyyHD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="block md:hidden text-4xl" onClick={menuOpen}>
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="#Home"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Tech"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Educations"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Educations
              </a>
            </li>
            <li>
              <a
                href="#Experiences"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Links in Mobile */}
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <a
                href="https://www.youtube.com/@uwithelifter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/muhammad-nahrul-hayat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
              <a
                href="https://www.instagram.com/notuwithelifter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-slate-500 hover:opacity-100">
              <a
                href="https://www.tiktok.com/@uwithelifter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTiktok />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <a
                href="https://github.com/BARBARBoyyHD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
