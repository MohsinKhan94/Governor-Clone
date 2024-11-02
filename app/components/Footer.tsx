import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok  ,FaLinkedin, FaBook, FaCloud, FaRobot, FaMicrochip, FaDna, FaNetworkWired, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F4F4F5] body-font">
        <div className="container px-5 py-8 mx-auto flex flex-wrap md:flex-nowrap">
          {/* Column 1: Core Courses */}
          <div className="w-full md:w-1/3 px-4 mb-4  md:mb-0 text-center md:text-left">
            <h1 className="title-font font-bold text-xl text-[#27272A] tracking-widest mb-3">
              Core Courses
            </h1>
            <p className="text-gray-600 leading-5">
              <span className="mb-2 block">Programming Fundamentals</span>
              <span className="mb-2 block">Web2 Using NextJS</span>
              <span className="block">Earn as You Learn</span>
            </p>
          </div>

          {/* Column 2: Advance Courses with Icons */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="title-font font-bold text-[#27272A] tracking-widest text-xl mb-3">
              Advance Courses
            </h1>
            <nav className="list-none mb-10">
              <li className="flex items-center mb-2">
                <FaBook className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Web 3 and Metaverse
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaCloud className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Cloud-Native Computing
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaRobot className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Artificial Intelligence and Deep Learning
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaMicrochip className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Ambient Computing and IoT
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaDna className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Genomics and Bioinformatics
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaNetworkWired className="mr-2 text-[#27272A]" />
                <a href="#" className="text-[#27272A] hover:text-gray-800">
                  Network Programmability and Automation
                </a>
              </li>
            </nav>
          </div>

          {/* Column 3: Social Links with Icons */}
          <div className="w-full md:w-1/3 px-4 text-center md:text-left">
            <h1 className="title-font font-bold text-[#27272A] tracking-widest text-xl mb-3">
              Follow Us
            </h1>
            <div className="flex justify-center md:justify-start space-x-4 mb-3 ">
              <a href="#" className="text-[#1877F2] text-2xl ">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#1DA1F2] text-2xl ">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#FCAF45] text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#27272A] text-2xl">
                <FaTiktok />
              </a>
              <a href="#" className="text-[#FF0000] text-2xl">
                <FaYoutube />
              </a>
            </div>
            <p className="text-blue-400">
            <a href="mailto:education@governorsindh.com" className="text-blue-400 underline">education@governorsindh.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
