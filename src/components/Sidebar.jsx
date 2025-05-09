"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineBook,
  AiOutlineAppstore,
  AiOutlineEdit,
  AiOutlineMessage,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDribbble, FaBehance } from "react-icons/fa";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: <AiOutlineHome size={20} />, path: "/" },
    { label: "About", icon: <AiOutlineUser size={20} />, path: "/about" },
    { label: "Services", icon: <AiOutlineTool size={20} />, path: "/service" },
    { label: "Experience", icon: <AiOutlineBook size={20} />, path: "/experience" },
    { label: "Works", icon: <AiOutlineAppstore size={20} />, path: "/works" },
    { label: "Contact", icon: <AiOutlineMessage size={20} />, path: "/contact" },
  ];

  return (
    <div className="h-screen overflow-y-scroll flex flex-col py-20 justify-between">
      <div className="flex flex-col items-center">
        {/* Profile */}
        <div className="flex flex-col items-center space-y-2 mb-10">
          <div className="relative">
            <img
              src="/dilip.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Dilip Mali</h1>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 w-full px-6">
          {navItems.map((item) => (
            <Link href={item.path} key={item.label}>
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-xl  transition ${
                  pathname === item.path
                    ? "bg-white text-orange-600 "
                    : "text-gray-600 hover:bg-white "
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-4 py-6">
        <div className="grid grid-cols-3 gap-5">
          <a href="" className="bg-white p-2 rounded-lg shadow hover:scale-105 transition">
            <AiFillFacebook size={20} className="text-[#3b5998]" />
          </a>
          <a href="#" className="bg-white p-2 rounded-lg shadow hover:scale-105 transition">
            <AiOutlineTwitter size={20} className="text-[#1DA1F2]" />
          </a>
          <a href="https://www.instagram.com/dilip.saini_/" className="bg-white p-2 rounded-lg shadow hover:scale-105 transition">
            <AiFillInstagram size={20} className="text-[#E4405F]" />
          </a>
          <a href="#" className="bg-white p-2 rounded-lg shadow hover:scale-105 transition">
            <FaDribbble size={20} className="text-[#ea4c89]" />
          </a>
          <a href="#" className="bg-white p-2 rounded-lg shadow hover:scale-105 transition">
            <FaBehance size={20} className="text-black" />
          </a>
        </div>
        <p className="text-xs text-gray-500">© 2025 Riono.</p>
      </div>
    </div>
  );
};

export default Sidebar;
