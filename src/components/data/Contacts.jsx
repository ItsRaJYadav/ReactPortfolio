import React, { useState } from 'react';
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";

const Contacts = () => {
  const { user, isAuthenticated } = useAuth0();

  const initialState = {
    name: isAuthenticated ? user.name : '',
    email: isAuthenticated ? user.email : '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      Swal.fire('Please Login', 'Please login to contact us.', 'info');
      return;
    }

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

        Swal.fire('Success', 'Form submitted successfully. We will get back soon!', 'success');
      } else {
        Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100 mt-15">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-7">Let's talk!</h2>
          <div className="py-6 md:py-0 md:px-6" style={{ fontSize: "1.3em" }}>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaHome className="w-5 h-5 mr-2 sm:mr-6" />
                <span>Darbhanga Bihar</span>
              </p>
              <p className="flex items-center">
                <FaPhoneSquareAlt className="w-5 h-5 mr-2 sm:mr-6" />
                <span>+91 9472040607</span>
              </p>
              <p className="flex items-center">
                <AiOutlineMail className="w-5 h-5 mr-2 sm:mr-6" />
                <span>itsrajyadav@outlook.com</span>
              </p>
              <p className="flex items-center">
                <ImLocation className="w-5 h-5 mr-2 sm:mr-6" />
                <span>Faridabad HR</span>
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-page-in-mobile-1886632-1598496.png"
              alt=""
              className="p-6 h-52 md:h-64 w-auto"
            />
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 rounded bg-gradient-to-b from-gray-900 to-gray-600"
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
              required
              name="email"
              type="email"
              className="w-full p-3 rounded bg-gradient-to-b from-gray-900 to-gray-600"
              value={formData.email}
              placeholder="Enter Email address"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isAuthenticated} // Disable the input field if user is authenticated
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
              required
              id="message"
              rows="3"
              className="w-full p-5 rounded bg-gradient-to-b from-gray-900 to-gray-600"
              spellCheck="false"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
