import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="contact-form-wrapper p-6 bg-gray-100 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="rnt-contact-form grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="col-span-2 lg:col-span-1">
          <div className="form-group">
            <label
              htmlFor="contact-name"
              className="block text-gray-600 text-md  tracking-widest pb-4"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleInputChange}
              maxLength="80"
              required
            />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div className="form-group">
            <label
              htmlFor="contact-phone"
              className="block  text-gray-600 text-md  tracking-widest pb-4"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.phone}
              onChange={handleInputChange}
              maxLength="80"
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="form-group">
            <label
              htmlFor="contact-email"
              className="block  text-gray-600 text-md  tracking-widest pb-4"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
              maxLength="80"
              required
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="form-group">
            <label
              htmlFor="contact-subject"
              className="block  text-gray-600 text-md  tracking-widest pb-4"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.subject}
              onChange={handleInputChange}
              maxLength="80"
              required
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="form-group">
            <label
              htmlFor="contact-message"
              className="block  text-gray-600 text-md  tracking-widest mb-4"
            >
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="5"
              maxLength="400"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="col-span-2 my-4">
          <button
            type="submit"
            className="w-full shadow-2xl py-3 px-4 hover:text-white rounded-lg hover:bg-gradient-to-r from-blue-500 to-red-300 transition-transform   text-gray-600 text-md  tracking-widest"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
