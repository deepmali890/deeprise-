import React from "react";
import { FaCode, FaPalette, FaCamera, FaBullhorn } from "react-icons/fa";
import { SiWordpress, SiAdobe } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const page = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode className="text-purple-600 text-xl" />,
      bg: "bg-purple-100",
    },
    {
      title: "UI & UX Design",
      icon: <FaPalette className="text-orange-500 text-xl" />,
      bg: "bg-orange-100",
    },
    {
      title: "WordPress",
      icon: <SiWordpress className="text-sky-500 text-xl" />,
      bg: "bg-sky-100",
    },
    {
      title: "Photograph",
      icon: <FaCamera className="text-green-500 text-xl" />,
      bg: "bg-green-100",
    },
    {
      title: "Social Marketing",
      icon: <BsInstagram className="text-pink-500 text-xl" />,
      bg: "bg-pink-100",
    },
    {
      title: "Advertising",
      icon: <FaBullhorn className="text-yellow-500 text-xl" />,
      bg: "bg-yellow-100",
    },
  ];

  const plans = [
    {
      title: "Personal",
      price: "$29",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: ["1 Years of Updates", "Regular Support", "Website builder"],
      highlight: false,
    },
    {
      title: "Business",
      price: "$49",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: ["2 Years of Updates", "Premium Support", "Website builder"],
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "Enterprise",
      price: "$99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: ["Lifetime Updates", "Live Chat Support", "Website builder"],
      highlight: false,
    },
  ];

  return (
    <div className=" overflow-scroll">
      <section className="py-12 px-6 ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-medium shadow-sm">
              👜 What do I do?
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-4">Services</h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6  rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${service.bg}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-orange-500 text-sm mb-4 shadow">
            💲 Choose the plan
          </p>
          <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 my-20  md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl h-[500px] p-8 text-left transition-all ${
                  plan.highlight
                    ? "bg-orange/10 border border-orange-200 shadow-xl"
                    : "bg-white/10 shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-4 bg-white border border-orange-200 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    ⭐ {plan.badge}
                  </div>
                )}
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.price}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.title}
                </h4>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <button className="w-full py-3 bg-orange-100 text-orange-600 font-medium rounded-xl hover:bg-orange-200 transition">
                  Get Started
                </button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      {/* <Check size={16} className="text-orange-500" /> */}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-20 px-4">
      <div className="max-w-6xl mx-auto text-left">
        <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-orange-500 text-sm mb-4 shadow">
          😊 Proudly worked with
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Clients</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm flex items-center justify-center p-6 h-20"
            >
              <span className="text-gray-400 font-semibold text-lg">
                Logoipsum
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-3">
          {[0, 1, 2].map((_, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full border-2 ${
                i === 0 ? "border-black" : "border-gray-300"
              } flex items-center justify-center`}
            >
              {i === 0 && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
            </button>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default page;
