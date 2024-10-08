// import React from "react";
// import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
// import { RxTwitterLogo } from "react-icons/rx";
// import ContactForm from "./ContactForm";
// const Contact = () => {
//   return (
//     <section className="portfolio-section py-20 ">
//       <div className="container mx-auto px-4">
//         <h1 className="text-gray-600 text-xl mb-4 tracking-widest text-center	">
//           CONTACT
//         </h1>
//         <h2 className="text-6xl font-bold text-center mb-10">
//           Contact With Me
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10">
//           <div className="portfolio-item shadow-lg rounded-lg overflow-hidden space-x-8 space-y-4">
//             <img
//               src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
//               alt="Portfolio Item 1"
//               className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
//             />
//             <h3 className="text-2xl font-bold mb-2 pt-4 ">Nevine Acotanza</h3>
//             <p className="text-lg text-gray-600 mb-4">
//               Chief Operating Officer
//             </p>
//             <p className="text-gray-800">
//               I am available for freelance work. Connect with me via and call in
//               to my account.
//             </p>
//             <div>
//               <p>
//                 Phone:{" "}
//                 <span className="hover:underline hover:underline-offset-2">
//                   +012 345 678 90
//                 </span>
//               </p>
//               <p>
//                 Email:{" "}
//                 <span className="hover:underline hover:underline-offset-4">
//                   admin@example.com
//                 </span>
//               </p>
//             </div>
//             <div className="flex flex-col items-left space-y-6">
//               <h1 className="tracking-widest text-xl text-gray-600 text-left ">
//                 Find me on
//               </h1>{" "}
//               <div className="flex space-x-5 pb-10">
//                 <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
//                   <SlSocialFacebook className="text-2xl " />
//                 </button>
//                 <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
//                   <RxTwitterLogo className="text-2xl " />
//                 </button>
//                 <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1 ">
//                   <SlSocialLinkedin className="text-2xl " />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Contact;
//
import React from "react";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="portfolio-section py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-600 text-xl mb-4 tracking-widest text-center">
          CONTACT
        </h1>
        <h2 className="text-6xl font-bold text-center mb-10">
          Contact With Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Profile Information */}
          <div className="portfolio-item shadow-lg rounded-lg overflow-hidden space-x-8 space-y-4 col-span-1">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
              alt="Portfolio Item 1"
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-2xl font-bold mb-2 pt-4 ">Nevine Acotanza</h3>
            <p className="text-lg text-gray-600 mb-4">
              Chief Operating Officer
            </p>
            <p className="text-gray-800">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div>
              <p>
                Phone:{" "}
                <span className="hover:underline hover:underline-offset-2">
                  +012 345 678 90
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="hover:underline hover:underline-offset-4">
                  admin@example.com
                </span>
              </p>
            </div>
            <div className="flex flex-col items-left space-y-6">
              <h1 className="tracking-widest text-xl text-gray-600 text-left">
                Find me on
              </h1>
              <div className="flex space-x-5 pb-10">
                <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                  <SlSocialFacebook className="text-2xl" />
                </button>
                <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                  <RxTwitterLogo className="text-2xl" />
                </button>
                <button className="p-4 rounded-lg bg-gray-200 hover:text-white shadow-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform duration-300 hover:-translate-y-1">
                  <SlSocialLinkedin className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Span the remaining space */}
          <div className="lg:col-span-2 col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
