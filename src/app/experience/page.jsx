import React from 'react'

const page = () => {

const resumeData = [
  {
    year: "2025 - Present",
    title: "Full Stack Developer - Creative Dev Studio",
    desc: "Building scalable web applications using MERN stack. Handling both frontend and backend development with a focus on clean UI and robust APIs.",
    color: "border-yellow-500 text-yellow-500",
  },
  {
    year: "2024 - Present",
    title: "MCA (AI & ML) - Amity University (Online)",
    desc: "Pursuing Master’s in Computer Applications with a specialization in Artificial Intelligence and Machine Learning.",
    color: "border-blue-500 text-blue-500",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor of Arts - J.N.V.U.",
    desc: "Completed graduation in Arts while developing skills in software development and problem-solving.",
    color: "border-green-500 text-green-500",
  },
  {
    year: "2024",
    title: "Web Development - WsCube Tech",
    desc: "Completed frontend and full-stack development using HTML, CSS, JavaScript, Bootstrap, Tailwind, React.js, MERN stack, and DSA in Java.",
    color: "border-orange-500 text-orange-500",
  },
  {
    year: "2024",
    title: "Java Programming",
    desc: "Proficient in core Java, focusing on logic building, OOPs concepts, and backend fundamentals.",
    color: "border-purple-500 text-purple-500",
  },
  {
    year: "2025",
    title: "React Native (In Progress)",
    desc: "Learning to build cross-platform mobile apps using React Native and exploring mobile UI/UX design patterns.",
    color: "border-pink-500 text-pink-500",
  },
  {
    year: "2024 - Present",
    title: "GitHub Projects & Challenges",
    desc: "Completed 100-day coding challenge and created projects like Myntra, Meta, and Lenskart clones using modern tech stack.",
    color: "border-cyan-500 text-cyan-500",
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
