import React from 'react'
import { BsMailbox, BsMap, BsPhone } from 'react-icons/bs'

const page = () => {
  return (
    <div className=' overflow-scroll py-10'>
         <section className=" py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Contact</h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 bg-white/20 rounded-xl p-6 shadow-sm">
            <div className="bg-purple-100 text-purple-500 p-3 rounded-xl">
              <BsPhone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-500 text-sm">+1-202-555-0135</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/20 rounded-xl p-6 shadow-sm">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-xl">
              <BsMailbox size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">E-Mail</h4>
              <p className="text-gray-500 text-sm">hello@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/20 rounded-xl p-6 shadow-sm">
            <div className="bg-pink-100 text-pink-500 p-3 rounded-xl">
              <BsMap size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-500 text-sm">California, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <h3 className="text-2xl font-semibold mb-4">Send Message</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="p-4 rounded-lg bg-white/30 shadow-sm outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-4 rounded-lg bg-white/30 shadow-sm outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="md:col-span-2 p-4 rounded-lg bg-white/30 shadow-sm outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your message here..."
            className="md:col-span-2 p-4 rounded-lg bg-white/30 shadow-sm outline-none"
          ></textarea>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
  )
}

export default page
