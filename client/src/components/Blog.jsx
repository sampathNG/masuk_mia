import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <section className="portfolio-section py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-600 text-xl mb-8 tracking-widest text-center	">
          Visit my blog and keep your feedback
        </h1>
        <h2 className="text-4xl font-bold text-center mb-10">My Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg"
              alt="Portfolio Item 1"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h1 className="">Development</h1>
                <h1 className="">4 min read</h1>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                NFT Dashboard Application Development
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="border-2 border-gray-400 shadow-2xl p-2 hover:text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform text-gray-600 text-md tracking-widest">
                View Blog
              </button>
            </div>
          </div>
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg"
              alt="Portfolio Item 2"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h1 className="">Quote</h1>
                <h1 className="">4 min read</h1>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Travel App Design Creativity & Application
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="border-2 border-gray-400 shadow-2xl p-2 hover:text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform text-gray-600 text-md tracking-widest">
                View Blog
              </button>
            </div>
          </div>
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg"
              alt="Workout Website Design and Development"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />

            <div className="h-3/4 p-5">
              <div className="flex justify-between mb-4">
                <h1 className="">Technician</h1>
                <h1 className="">4 min read</h1>
              </div>

              <h3 className="text-2xl font-bold mb-4 ">
                Workout Website Design and Development.
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="border-2 border-gray-400 shadow-2xl p-2 hover:text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform text-gray-600 text-md tracking-widest">
                View Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
