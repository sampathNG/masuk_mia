import React, { useState } from "react";
const Resume = () => {
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-gray-600 text-xl mb-4 tracking-widest text-center">
            7+ Years of Experience
          </h1>
          <h2 className="text-6xl font-bold text-center mb-10">My Resume</h2>
        </div>
        <div className="flex justify-evenly shadow-md mb-6">
          {["Education", "Professional Skills", "Experience", "Interview"].map(
            (label, index) => (
              <button
                key={index}
                className={`text-xl text-center hover:bg-gray-50 text-gray-500 tracking-widest px-12 py-6 w-1/4 transition-colors duration-300 
              ${
                activeButton === index ? "shadow-2xl bg-gray-100" : "bg-white"
              }`}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div>
          {activeButton === 0 ? (
            <div className="flex">
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">
                    Education Quality
                  </h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">Job Experience</h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : activeButton === 1 ? (
            <div className="flex space-x-16">
              <div className="w-1/2 mx-0">
                <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                  Features
                </h1>
                <h2 className="text-4xl font-bold  mb-10">Design Skill</h2>
                <div className="space-y-10">
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        PHOTOSHOT
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {100}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        FIGMA
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {95}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${95}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        ADOBE XD
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {60}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${60}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        ADOBE ILLUSTRATOR
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {70}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${70}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        DESIGN
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {90}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${90}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mx-0">
                <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                  Features
                </h1>
                <h2 className="text-4xl font-bold  mb-10">Development Skill</h2>
                <div className="space-y-10">
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        HTML
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {100}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        CSS
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {95}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${95}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        JAVASCRIPT
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {60}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${60}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        SOFTWARE
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {70}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${70}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-6">
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-700">
                        {/* {skill} */}
                        PLUGIN
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        {/* {level}% */}
                        {90}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r 
      from-white to-red-800 h-2 rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: `${90}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeButton === 2 ? (
            <div className="flex">
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">
                    Education Quality
                  </h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">
                    Education Quality
                  </h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : activeButton === 3 ? (
            <div className="flex">
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">
                    Education Quality
                  </h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mx-10">
                <div>
                  <h1 className="text-gray-600 text-sm mb-4 tracking-widest">
                    1998 - 2010
                  </h1>
                  <h2 className="text-4xl font-bold  mb-10">
                    Education Quality
                  </h2>
                </div>
                <div className="flex flex-col space-y-10">
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                  <div
                    className="group p-6 rounded-lg shadow-lg space-y-10 py-10 transition-all 
      duration-300 ease-in-out bg-white hover:bg-gradient-to-r 
      from-blue-800 to-red-400"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">
                          Personal Portfolio April Fools
                        </h2>
                        <h3 className="text-lg text-gray-500 tracking-widest group-hover:text-white">
                          University of DVI (1997 - 2001)
                        </h3>
                      </div>
                      <button
                        className="p-2 rounded-md shadow-2xl h-10 
           bg-red-700 text-white 
          group-hover:bg-white group-hover:text-red-700"
                      >
                        3.90 / 4
                      </button>
                    </div>
                    <hr className="border-t border-gray-800 my-4 group-hover:border-slate-300" />
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white">
                      Higher education is tertiary education leading to the
                      award of an academic degree. It is also called
                      post-secondary education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default Resume;
