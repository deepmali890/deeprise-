import React from "react";

const blogPosts = [
  {
    title: "Best Podcast App Tips You Will Read This Year",
    date: "Jan 8, 2021",
    author: "Riono Doe",
    tag: "Interview",
    img: "https://source.unsplash.com/400x300/?podcast,app",
  },
  {
    title: "7 Secret Techniques To Improve Gradients",
    date: "Jan 6, 2021",
    author: "Riono Doe",
    tag: "Podcast",
    img: "https://source.unsplash.com/400x300/?gradient,web",
  },
  {
    title: "How to Plan Productive Meetups",
    date: "Jan 5, 2021",
    author: "Riono Doe",
    tag: "Meetups",
    img: "https://source.unsplash.com/400x300/?meeting,workspace",
  },
  {
    title: "Top 10 Updates You Shouldn't Miss",
    date: "Jan 4, 2021",
    author: "Riono Doe",
    tag: "Updates",
    img: "https://source.unsplash.com/400x300/?update,technology",
  },
  {
    title: "Inspiring Stories Behind Apps",
    date: "Jan 3, 2021",
    author: "Riono Doe",
    tag: "Inspiration",
    img: "https://source.unsplash.com/400x300/?success,startup",
  },
  {
    title: "Podcast Gear Setup 2024",
    date: "Jan 2, 2021",
    author: "Riono Doe",
    tag: "Podcast",
    img: "https://source.unsplash.com/400x300/?microphone,gear",
  },
  {
    title: "Design That Converts",
    date: "Jan 1, 2021",
    author: "Riono Doe",
    tag: "Inspiration",
    img: "https://source.unsplash.com/400x300/?design,conversion",
  },
  {
    title: "Product Updates & Features",
    date: "Dec 30, 2020",
    author: "Riono Doe",
    tag: "Updates",
    img: "https://source.unsplash.com/400x300/?product,update",
  },
];

const page = () => {
  return (
    <div className=" overflow-scroll py-10">
    <section className="bg-gradient-to-r from-[#fdf1f1] to-[#eaf6fd] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Blog List */}
        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img src={post.img} alt={post.title} className="h-48 w-full object-cover" />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-3">
                    <span>📅 {post.date}</span>
                    <span>👤 {post.author}</span>
                  </div>
                  <h4 className="text-md font-semibold text-gray-800">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
              More Posts
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full p-4 rounded-xl shadow-sm bg-white outline-none"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-orange-500 text-sm">
              {["Interview", "Podcast", "Inspiration", "Meetups", "Updates"].map((cat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-orange-500">➤</span>
                  <span className="text-gray-800">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["UI", "Web", "Product", "Design", "Code", "UX"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-orange-100 text-orange-500 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
    </div>
  );
};

export default page;
