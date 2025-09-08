"use client";
import React, { useState } from "react";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = ["All Projects", "Development", "Branding", "Design", "Advertisement"];

  const portfolioItems = [
    {
      title: "Full Stack Development.",
      category: "development",
      tag: "Explore Bharat",
      img: "./exploreBharat.png",
      link: "https://explorebharat-eta.vercel.app/", // Add the project link here
    },
    {
      title: "Full stack Development",
      category: "development",
      tag: "Book Vault",
      img: "./bookVault.png",
      link: "https://book-vault-gamma.vercel.app/", // Add the project link here
    },
    {
      title: "Full stack Development",
      category: "development",
      tag: "PlanNest",
      img: "./plannest.png",
      link: "https://plannest.netlify.app/", // Add the project link here
    },
    {
      title: "Netflix Clone",
      category: "Design",
      tag: "NetFlix Clone",
      img: "netflix.png",
      link: "https://netflix-puce-alpha.vercel.app/", // Add the project link here
    },
    {
      title: "LensCart Clone",
      category: "Design",
      tag: "LensCart",
      img: "./lenscart.png",
      link: "https://lenscart.vercel.app/", // Add the project link here
    },
    {
      title: "Frontend",
      category: "Design",
      tag: "Packshift",
      img: "./packshifty.png",
      link: "https://packshift-blond.vercel.app/", // Add the project link here
    },
    {
      title: "Tutorials Freak Clone",
      category: "Design",
      tag: "Tutorials Freak",
      img: "./tutorilsFreak.png",
      link: "https://tutorials-freak.vercel.app/", // Add the project link here
    },
    {
      title: "Notes App",
      category: "Development",
      tag: "Notes App",
      img: "./iPhone-13-PRO-notes-app-sigma-fawn.vercel.app.png.png",
      link: "https://notes-app-sigma-fawn.vercel.app/", // Add the project link here
    },
  ];

  // Filter logic
  const filteredItems =
    activeCategory === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="overflow-scroll">
      <section className="bg-gradient-to-r from-[#fdf1f1] to-[#eaf6fd] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Portfolio</h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-orange-100 text-orange-500"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                } shadow-sm`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <a
                key={i}
                href={item.link} // Wrap the entire portfolio item with the link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden bg-white shadow-sm group transition hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </a>
            ))}
          </div>

          {/* More Button */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
              More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
