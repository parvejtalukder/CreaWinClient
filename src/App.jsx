import React from "react"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-xl p-8 text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://parvejhusentalukder.com/wp-content/uploads/2026/01/1760588060514-e1768633405820.jpeg"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold mb-2">
          Parvej Husen Talukder
        </h1>

        {/* Title */}
        <p className="text-indigo-400 font-medium mb-4">
          MERN Stack Developer & Competitive Programmer
        </p>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          Passionate about building modern web applications using
          React, Node.js, Express, and MongoDB. I also enjoy solving
          algorithmic problems and participating in competitive
          programming contests.
        </p>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">C++</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/parvejtalukder"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://codeforces.com/"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
          >
            Codeforces
          </a>
        </div>

      </div>
    </div>
  )
}

export default App