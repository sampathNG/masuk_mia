import React from "react";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa6";

const Profile = () => {
  return (
    <section className="flex items-center w-full justify-around  py-16 px-8">
      {/* Left Content */}
      <div className="max-w-2xl">
        {/* Text Content */}
        <div className="text-left space-y-6">
          <h1 className="text-gray-600 text-xl mb-4 tracking-widest	">
            Welcome to my world
          </h1>
          <h1 className="font-semibold text-6xl sm:text-7xl md:text-6xl mb-4">
            HI, I'm&nbsp;
            <span className="text-green-700">
              Jone Lee <br /> a
            </span>
          </h1>
          <p className="text-gray-600 text-lg ">
            I use animation as a third dimension by which to simplify
            experiences and building through each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that
            improve the user experience.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="mt-8 flex flex-col space-y-5">
            {/* Title */}
            <div>
              <h1 className="tracking-widest text-xl text-gray-600 text-left ">
                Find me on
              </h1>
            </div>

            {/* Social Buttons */}
            <div className="flex space-x-5">
              {/* Facebook Button */}
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                <SlSocialFacebook className="text-2xl " />
              </button>

              {/* Twitter Button */}
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                <RxTwitterLogo className="text-2xl " />
              </button>

              {/* LinkedIn Button */}
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                <SlSocialLinkedin className="text-2xl " />
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col space-y-5">
            {/* Title */}
            <div>
              <h1 className="tracking-widest text-xl text-gray-600 text-left ">
                best skill on
              </h1>
            </div>

            <div className="flex space-x-5">
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-01.png"
                  alt="icon"
                  width={30}
                  height={10}
                />
              </button>
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 ">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-02.png"
                  alt="icon"
                  width={30}
                  height={10}
                />
              </button>
              <button className="p-4 rounded-lg bg-white hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png"
                  alt="icon"
                  width={20}
                  height={10}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-1/3">
        <img
          src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
          alt="profile"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Profile;
