import React from 'react'

const page = () => {

    const resumeData = [
        {
          year: "2017 - Present",
          title: "Honours Degree",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-orange-500 text-orange-500",
        },
        {
          year: "2015 - Present",
          title: "Visual Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-green-500 text-green-500",
        },
        {
          year: "2012 - 2015",
          title: "Bachelor’s Degree",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-pink-500 text-pink-500",
        },
        {
          year: "2012 - 2014",
          title: "UI & UX Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-cyan-500 text-cyan-500",
        },
        {
          year: "2010 - 2012",
          title: "Graphic Designer",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-purple-500 text-purple-500",
        },
        {
          year: "2008 - 2010",
          title: "Web Developer",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-blue-500 text-blue-500",
        },
        {
          year: "2006 - 2008",
          title: "Internship",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-yellow-500 text-yellow-500",
        },
        {
          year: "2005 - 2006",
          title: "High School Diploma",
          desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.",
          color: "border-red-500 text-red-500",
        },
      ];
  return (
    <div className=' overflow-scroll'>
      <section className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-orange-500 text-sm mb-4 shadow">
          📖 Education & Experience
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span
                className={`inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full border ${item.color}`}
              >
                {item.year}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
