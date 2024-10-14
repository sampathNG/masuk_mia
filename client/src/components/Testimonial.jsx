// import React from "react";
// const Testimonial = () => {
//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-2">What Clients Say</h2>
//           <p className="text-lg text-gray-600">Testimonial</p>
//         </div>
//         <div className="testimonial-slider">
//           <div className="slick-slider">
//             <div className="slick-slide">
//               <div className="card bg-white rounded shadow-md p-4">
//                 <div className="flex flex-wrap -mx-4">
//                   <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4 md:mb-0">
//                     <img
//                       src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-2nd-1.png"
//                       alt="final-home--2nd"
//                       className="w-full h-full object-cover object-center rounded"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 xl:w-2/3 px-4">
//                     <h3 className="text-lg font-bold mb-2">Jone Duone Joe</h3>
//                     <p className="text-lg text-gray-600">Operating Officer</p>
//                     <p className="text-lg text-gray-600">Bound - Trolola</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="text-lg font-bold mb-2">
//                     Web App Development
//                   </h3>
//                   <p className="text-lg text-gray-600">
//                     Upwork - Mar 4, 2016 - Aug 30, 2021
//                   </p>
//                   <div className="flex items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-lg text-gray-600 mt-4">
//                   Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
//                   dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
//                   sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac
//                   dolor aliquam sodales phasellus smauris
//                 </p>
//               </div>
//             </div>
//             {/* <!-- Add more slides here --> */}
//             <div className="slick-slide">
//               <div className="card bg-white rounded shadow-md p-4">
//                 <div className="flex flex-wrap -mx-4">
//                   <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4 md:mb-0">
//                     <img
//                       src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-2nd-1.png"
//                       alt="final-home--2nd"
//                       className="w-full h-full object-cover object-center rounded"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 xl:w-2/3 px-4">
//                     <h3 className="text-lg font-bold mb-2">Jone Duone Joe</h3>
//                     <p className="text-lg text-gray-600">Operating Officer</p>
//                     <p className="text-lg text-gray-600">Bound - Trolola</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="text-lg font-bold mb-2">
//                     Web App Development
//                   </h3>
//                   <p className="text-lg text-gray-600">
//                     Upwork - Mar 4, 2016 - Aug 30, 2021
//                   </p>
//                   <div className="flex items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-star-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-lg text-gray-600 mt-4">
//                   Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
//                   dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
//                   sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac
//                   dolor aliquam sodales phasellus smauris
//                 </p>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Testimonial;
//
import React, { useState } from "react";

// Example testimonial data (replace this with your actual data)
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    company: "TechCorp",
    feedback:
      "This company exceeded our expectations! Their development services are top-notch.",
    image:
      "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-2nd-1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    company: "Innovate Solutions",
    feedback:
      "Fantastic team! They delivered our project ahead of schedule and within budget.",
    image:
      "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-2nd-1.png",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-primary">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600">Testimonial</p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="bg-white rounded shadow-md p-6 w-11/12 lg:w-1/2 mx-auto">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600">{testimonial.role}</p>
                    <p className="text-lg text-gray-600">
                      {testimonial.company}
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-red-700 text-white px-4 py-2 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
