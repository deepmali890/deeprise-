import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
import profileImg from "../../public/dilip.png"; // replace with your image path
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-[90%] mx-auto  flex items-center justify-center ">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative">
          {/* Left Section */}
          <div className="space-y-6 z-10">
            <p className="text-lg font-medium flex items-center gap-2">
              <span>👋</span> HELLO!
            </p>
            <h1 className="text-5xl font-bold text-gray-800">I m Dilip.</h1>
            <p className="text-gray-600 text-lg">
              I m Dilip Mali, a MERN Stack & React Native developer skilled in
              building modern web and mobile apps with PostgreSQL integration.
            </p>
            <div className="flex gap-6 pt-4">
              <Link href={"/contact"}>
                {" "}
                <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">
                  Hire Me
                </button>
              </Link>
              <Link
                href={"/works"}
                className="flex items-center gap-2 text-gray-800 font-semibold hover:underline cursor-pointer"
              >
                {" "}
                <button className="">
                  View Works <span>→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full flex justify-center md:justify-end items-center z-10">
            {/* Orange Circle Background */}
            <div className="absolute w-[400px] h-[400px] bg-orange-100 rounded-full  z-0"></div>

            {/* Contact Info */}
            <div className="absolute top-0 right-4 flex gap-6 items-center text-gray-600 text-sm z-20">
              <div className="flex items-center gap-1">
                <FiPhone className="text-orange-400" />
                <span>+9636249430</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMail className="text-orange-400" />
                <span>deeprise.in@gmail.com</span>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute w-4 h-4 bg-purple-200 rounded-full top-[20%] right-[20%] z-0"></div>
            <div className="absolute w-10 h-10 bg-purple-200 rounded-full top-[40%] right-[80%] z-0"></div>
            <div className="absolute w-6 h-6 bg-pink-300 rounded-full top-[60%] right-[30%] z-0"></div>
            <div className="absolute w-3 h-3 bg-teal-300 rounded-full bottom-[10%] right-[15%] z-0"></div>
            <div className="absolute w-20 h-20 bg-red-200 rounded-full top-[40%] right-[30%] z-0"></div>
            <div className="absolute w-6 h-6 bg-pink-300 rounded-full top-[60%] right-[30%] z-0"></div>
            <div className="absolute w-3 h-3 bg-teal-300 rounded-full bottom-[10%] right-[15%] z-0"></div>

            {/* Profile Image */}

            <Image
              src={profileImg}
              width={600}
              height={900}
              alt="Riono"
              className="relative z-10   rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
