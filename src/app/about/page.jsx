"use client";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import profileImg from "../../../public/dilip.png"; // replace with your image path
import { FaBox, FaSmile, FaGift } from 'react-icons/fa';

const page = () => {

  const skills = [
    { label: "HTML", percent: 95, color: "bg-orange-300" },
    { label: "CSS", percent: 95, color: "bg-cyan-300" },
    { label: "Java Script", percent: 90, color: "bg-green-400" },
    { label: "Node", percent: 90, color: "bg-purple-400" },
    { label: "React", percent: 95, color: "bg-pink-400" },
    { label: "Mongo DB", percent: 90, color: "bg-yellow-400" },
    { label: "PostGreSQL", percent: 70, color: "bg-blue-400" },
    { label: "React Native", percent: 70, color: "bg-red-400" },
  ];

  return (
    <div className="overflow-scroll pb-20 ">
      <section className="w-full h-screen  flex items-center justify-center  px-6 ">
        <div className="max-w-6xl w-full space-y-10">
          {/* Title Section */}
          <div className="space-y-2">
            <button className="flex items-center gap-2 px-4 py-1 text-gray-500 border border-orange-300 rounded-full bg-white text-sm font-medium">
              <span>👤</span> Who am I?
            </button>
            <h2 className="text-4xl font-semibold text-gray-800">About Me</h2>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-[25%_auto] gap-10 items-center">
            {/* Left Image Box */}
            <div className="bg-[#e8d9ff] rounded-2xl flex justify-center items-center h-[350px] relative overflow-hidden">
              {/* Decorative Dots */}
              <div className="absolute top-6 left-6 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full opacity-70"
                  ></div>
                ))}
              </div>

              {/* Triangle Shape */}
              <div className="absolute top-10 right-8 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-300 opacity-50 rotate-12"></div>

              {/* Diamond Shape */}
              <div className="absolute bottom-6 left-8 w-10 h-10 border-2 border-cyan-300 rotate-45 opacity-40"></div>

              {/* Circular Ring */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-pink-300 rounded-full opacity-30"></div>

              {/* Profile Image */}
              <Image
                src={profileImg}
                alt="Profile"
                className="z-10 object-cover w-[250px] h-[750px]"
              />
            </div>

            {/* Right Text Area */}
            <div className="space-y-6">
              {/* Bio Box */}
              <div className="bg-gradient-to-r   bg-white/10 backdrop-blur-md p-6 rounded-xl ">
                <h3 className="text-xl font-semibold mb-2">Bio</h3>
                <p className="text-gray-700">
                  I am Dilip Mali, full stack developer from India. I build
                  modern web and mobile apps using MERN stack and PostgreSQL.
                  Let’s build something awesome together. 😊
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-smbg-gradient-to-r   bg-white/10 backdrop-blur-md p-6 rounded-xl ">
                <div>
                  <p className="text-gray-500 pb-4">Age</p>
                  <p className=" text-gray-800">22</p>
                </div>
                <div>
                  <p className="text-gray-500 pb-4">Residence</p>
                  <p className=" text-gray-800">India</p>
                </div>
                <div>
                  <p className="text-gray-500 pb-4">Email</p>
                  <p className=" text-gray-800">deeprise.in@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-500 pb-4">Phone</p>
                  <p className=" text-gray-800">+91 9636249430</p>
                </div>
              </div>

              {/* Download CV Button */}
              <div>
                <button className="flex items-center gap-2 bg-orange-200 text-orange-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-300 transition">
                  Download CV <FiDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-medium shadow-sm">
            🏅 Achievements
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">Fun Facts</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div className="bg-white/1 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
            <FaBox size={36} className="text-purple-500 mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">17</h3>
            <p className="text-gray-500">Projects finished</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
            <FaSmile size={36} className="text-orange-500 mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">10</h3>
            <p className="text-gray-500">Happy customers</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
            <FaGift size={36} className="text-pink-500 mb-4" />
            <h3 className="text-3xl font-semibold text-gray-800">3</h3>
            <p className="text-gray-500">Awards winner</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-medium shadow-sm">
            ⏰ What can I do?
          </span>
          <h2 className="text-4xl font-semibold text-gray-800 mt-4">My Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold text-gray-800">{skill.label}</span>
                <span className="text-sm font-semibold text-gray-500">{skill.percent}%</span>
              </div>
              <div className="w-full h-1 bg-white rounded-full">
                <div
                  className={`${skill.color} h-full rounded-full`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default page;
