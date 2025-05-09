import React from "react";
import { FaCode, FaPalette, FaCamera, FaBullhorn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const page = () => {
  return (
    <div className="overflow-scroll">
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-medium shadow-sm">
              👜 What do I do?
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-4">Services</h2>
          </div>

          <div className=" grid grid-cols-3 gap-6">
            {/* Service 1 - Web Development */}
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-purple-100">
                <FaCode className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Web Development
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We offer cutting-edge web development services to build
                scalable, responsive, and user-friendly websites.
              </p>
            </div>

            {/* Service 2 - UI & UX Design */}
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-orange-100">
                <FaPalette className="text-orange-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                UI & UX Design
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our UI & UX design services focus on delivering intuitive,
                beautiful, and engaging user interfaces that enhance the overall
                experience.
              </p>
            </div>

            {/* Service 3 - WordPress */}
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-sky-100">
                <FaPalette className="text-sky-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Canva
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We offer custom Canva design services to create visually
                stunning graphics, social media posts, presentations, and more,
                all tailored to your brand's identity.
              </p>
            </div>

            {/* Service 4 - Photograph */}
         <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
  <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-green-100">
    <FaCode className="text-green-500 text-xl" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">
    Tech & Development
  </h3>
  <p className="text-sm text-gray-500 leading-relaxed">
    Experienced in building responsive websites, UI design, and modern web applications using HTML, CSS, JavaScript, React, and the MERN stack.
  </p>
</div>


            {/* Service 5 - Social Marketing */}
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-pink-100">
                <BsInstagram className="text-pink-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Social Marketing
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Enhance your online presence with our social media marketing
                services, including Instagram and other platforms, to boost
                engagement and brand visibility.
              </p>
            </div>

            {/* Service 6 - Advertising */}
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4 bg-yellow-100">
                <FaBullhorn className="text-yellow-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Advertising
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our advertising services help you reach your target audience
                through various channels, driving growth and maximizing ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-orange-500 text-sm mb-4 shadow">
            💲 Choose the plan
          </p>
          <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl h-[500px] p-8 text-left transition-all bg-white/10 shadow-md">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">$29</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Personal
              </h4>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-xl hover:bg-orange-200 transition">
                Get Started
              </button>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  1 Year of Updates
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Regular Support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Website builder
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl h-[500px] p-8 text-left transition-all bg-orange/10 border border-orange-200 shadow-xl">
              <div className="absolute -top-4 left-4 bg-white border border-orange-200 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                ⭐ Most Popular
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">$49</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Business
              </h4>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-xl hover:bg-orange-200 transition">
                Get Started
              </button>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  2 Years of Updates
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Premium Support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Website builder
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl h-[500px] p-8 text-left transition-all bg-white/10 shadow-md">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">$99</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Enterprise
              </h4>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-xl hover:bg-orange-200 transition">
                Get Started
              </button>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  Lifetime Updates
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Live Chat Support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Website builder
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
