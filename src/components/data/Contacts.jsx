import React, { useState } from 'react';
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mzbqajee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        alert('Form submitted successfully!');
      } else {
        alert('An error occurred while submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center ">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-100 mt-15">
        <div className="flex flex-col  items-center justify-center">

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-7">Let's talk!</h2>

          <div className="py-6 md:py-0 md:px-6" style={{ fontSize: "1.3em" }}>


            <div className="space-y-4">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 sm:mr-6">
                  <FaHome />
                </svg>
                <span>Darbhanga Bihar</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 sm:mr-6">
                  <FaPhoneSquareAlt />
                </svg>
                <span>+91 9472040607</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 sm:mr-6">
                  <AiOutlineMail />
                </svg>
                <span>itsrajyadav@outlook.com</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 sm:mr-6">
                  <ImLocation />
                </svg>
                <span>Faridabad HR </span>
              </p>

            </div>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-page-in-mobile-1886632-1598496.png"
            alt=""
            className="p-6 h-52  md:h-64 w-auto"
          />
        </div>
        <form

          className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 rounded dark:bg-gray-800"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <small className="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800"
              value={formData.email}
              placeholder="Enter Email address "
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-800"
              spellCheck="false"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
