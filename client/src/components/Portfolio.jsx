import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio-section py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-600 text-xl mb-8 tracking-widest text-center	">
          Visit my portfolio and keep your feedback
        </h1>
        <h2 className="text-4xl font-bold text-center mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg"
              alt="Portfolio Item 1"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                NFT Dashboard Application Development
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg"
              alt="Portfolio Item 2"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Travel App Design Creativity & Application
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg"
              alt="Portfolio Item 3"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Workout Website Design And Development
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg"
              alt="Portfolio Item 4"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Mobile Application Landing Page Design
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
          {/*  */}
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg"
              alt="Portfolio Item 4"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Online Food Delivery Mobile App Design
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
          {/*  */}
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg"
              alt="Portfolio Item 5"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Restaurant Mobile App Figma Design
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Through a wide variety of mobile applications, we’ve developed a
                unique visual system.
              </p>
              <button className="bg-black hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
