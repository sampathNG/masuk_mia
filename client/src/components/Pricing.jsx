import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FiClock, FiActivity, FiArrowRight } from "react-icons/fi";
const Pricing = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [price, setPrice] = useState(" $30.00");
  const [textt, setTextt] = useState("Make Your Single Page");
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    switch (buttonIndex) {
      case 0:
        setPrice(" $30.00");
        setTextt("Make Your Single Page");
        break;
      case 1:
        setPrice(" $50.00");
        setTextt("Design Make this Page");
        break;
      case 2:
        setPrice(" $90.00");
        setTextt("Customize Your Single Page");
        break;
      default:
        setPrice(" $30.00");
    }
  };
  const leftItems = [
    "1 Page with Elementor",
    "Design Customization",
    "Responsive Design",
    "Content Upload",
    "Design Customization",
    "2 Plugins/Extensions",
  ];
  const rightItems = [
    "Multipage Elementor",
    "Design Figma",
    "Maintain Design",
    "Content Upload",
    "Design With XD",
    "8 Plugins/Extensions",
  ];
  return (
    <section className="w-full min-h-screen  px-10 flex">
      <div className="text-left w-1/2 pt-20">
        <h1 className="text-gray-600 text-xl mb-4 tracking-widest ">Pricing</h1>
        <h2 className="text-6xl font-bold mb-10">My Pricing</h2>
      </div>
      <div className="w-1/2  flex flex-col ">
        <p className="text-center border-2 mb-2  px-2 text-sm  rounded-lg  text-gray-600 block mx-auto">
          Recommended
        </p>
        <div className="flex justify-evenly shadow-md mb-6">
          {["Static", "Standard", "Premium"].map((label, index) => (
            <button
              key={index}
              className={`text-xl hover:bg-gray-50 text-gray-500 tracking-widest px-10 py-4 w-1/3 transition-colors duration-300 
              ${
                activeButton === index ? "shadow-2xl bg-gray-100" : "bg-white"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">{textt}</h2>
              <p className="text-lg text-gray-500">Elementor / WPBakery</p>
            </div>
            <div className="text-3xl font-extrabold text-red-500 shadow-md px-6 py-3 rounded-lg">
              {price}
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {leftItems.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <BsCheckLg className="text-gray-500 mr-2" />
                  <p className="text-lg text-gray-500">{item}</p>
                </div>
              ))}
            </div>
            <div>
              {rightItems.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <BsCheckLg className="text-gray-500 mr-2" />
                  <p className="text-lg text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gray-100  flex justify-center items-center shadow-2xl py-5 px-4 hover:text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform   text-gray-600 text-md  tracking-widest"
            >
              ORDER NOW
              <FiArrowRight className="text-xl" />
            </button>
            <div className="flex justify-center mt-6 space-x-8">
              <div className="flex items-center space-x-2">
                <FiClock className="text-gray-600" />
                <span className="text-lg text-gray-600">2 Days Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiActivity className="text-gray-600" />
                <span className="text-lg text-gray-600">
                  Unlimited Revision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
