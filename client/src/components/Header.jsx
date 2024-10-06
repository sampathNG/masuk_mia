import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center my-3 sticky top-0 bg-white shadow-md z-10 py-3">
      <div>
        <img
          src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo-dark.png"
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex space-x-8 text-sm font-light">
          <li className="hover:text-gray-700">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/features">FEATURES</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/resume">RESUME</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/testimonial">TESTIMONAL</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/clients">CLIENTS</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/pricing">PRICING</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/contacts">CONTACTS</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-5">
        <img
          src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid"
          height={50}
          width={50}
          alt="cart"
        />
        <button className="rounded-lg text-sm text-gray-600 hover:bg-gradient-to-r from-blue-500 to-red-300 hover:text-white px-5 py-3 shadow-lg hover:-translate-y-1 hover:transition-transform duration-400">
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default Header;
