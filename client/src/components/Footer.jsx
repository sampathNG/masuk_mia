import React from "react";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <section className="min-h-screen border-t-2 flex flex-col">
      <div className="container mx-auto px-4 py-16 flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/logo.png"
            alt="Inbio logo"
            className="w-32 h-auto"
          />
          <div className="flex space-x-5 mt-8">
            <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
              <SlSocialFacebook className="text-2xl " />
            </button>
            <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
              <RxTwitterLogo className="text-2xl " />
            </button>
            <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
              <SlSocialLinkedin className="text-2xl " />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <h1 className="text-gray-600 text-xl mb-8 tracking-widest text-center md:text-left">
            Quick Link
          </h1>
          <ul className="space-y-6 text-gray-600 text-md mb-8 tracking-widest">
            <li>
              <a
                href="https://rainbowit.net/themes/inbio/about/"
                className="hover:underline hover:underline-offset-8"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://rainbowit.net/themes/inbio/portfolio/"
                className="hover:underline hover:underline-offset-8"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://rainbowit.net/themes/inbio/services/"
                className="hover:underline hover:underline-offset-8"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://rainbowit.net/themes/inbio/blog/"
                className="hover:underline hover:underline-offset-8"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://rainbowit.net/themes/inbio/contact/"
                className="hover:underline hover:underline-offset-8"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <h1 className="text-gray-600 text-xl mb-8 tracking-widest text-center md:text-left">
            Resources
          </h1>
          <ul className="space-y-6 text-gray-600 text-md mb-8 tracking-widest">
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Authentication
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                System Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Over Right
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <h1 className="text-gray-600 text-xl mb-8 tracking-widest text-center md:text-left">
            Developers
          </h1>
          <ul className="space-y-6 text-gray-600 text-md mb-8 tracking-widest">
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Authentication
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-8">
                Open Source
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-center border-t-2 mt-32">
        <p className="text-gray-600 text-md tracking-widest py-6">
          &copy; 2024. All rights reserved by{" "}
          <a
            href="https://themeforest.net/user/rainbow-themes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-8 text-blue-600"
          >
            Rainbow-Themes
          </a>
        </p>
      </div>
    </section>
  );
};
export default Footer;
