"use client";
import React, { useState } from "react";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = ["All Projects", "Development", "Branding", "Design", "Advertisement"];

  const portfolioItems = [
    {
      title: "Food Recipe App",
      category: "Design",
      tag: "Image",
      img: "https://source.unsplash.com/400x300/?food,app",
    },
    {
      title: "Task Management Mockup",
      category: "Branding, Development",
      tag: "Detailed",
      img: "https://source.unsplash.com/400x300/?productivity,design",
    },
    {
      title: "iPhone 12 Clay Mockup",
      category: "Advertisement",
      tag: "Video",
      img: "https://source.unsplash.com/400x300/?iphone,mockup",
    },
    {
      title: "Dashboard UI",
      category: "Development",
      tag: "Gallery",
      img: "https://source.unsplash.com/400x300/?dashboard,ui",
    },
    {
      title: "Audio App Design",
      category: "Design",
      tag: "Audio",
      img: "https://source.unsplash.com/400x300/?music,app",
    },
    {
      title: "E-commerce Branding",
      category: "Branding",
      tag: "Link",
      img: "https://source.unsplash.com/400x300/?ecommerce,brand",
    },
    {
      title: "Advertisement Banner",
      category: "Advertisement",
      tag: "Ad",
      img: "https://source.unsplash.com/400x300/?banner,ad",
    },
    {
      title: "Portfolio Site",
      category: "Development",
      tag: "Live",
      img: "https://source.unsplash.com/400x300/?website,portfolio",
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
              <div
                key={i}
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
                  <h3 className="text-md font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
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
