import React, { useState } from 'react';
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FiLoader } from "react-icons/fi";
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const initialState = {
    name: isAuthenticated ? user.name : '',
    email: isAuthenticated ? user.email : '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      Swal.fire('Please Login', 'Please login to contact us.', 'info');
      navigate('/login');
      return;
    }
    if (formData.message === '') {
      Swal.fire('Error', 'Message field is empty.', 'error');
      return;
    }
    else{
      
      try {
        setIsLoading(true);
        const response = await fetch('https://formspree.io/f/mzbqajee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setFormData(initialState);
          Swal.fire('Success', 'Form submitted successfully. We will get back to you soon!', 'success');
        } else {
          Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
        }
  
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-xl px-8 py-16 mx-auto rounded-lg md:flex md:items-center md:justify-between md:px-12 lg:px-16 xl:px-32 text-gray-100">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-7">Let's talk!</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaHome className="w-5 h-5 mr-2 sm:mr-6" />
              <span>Darbhanga Bihar</span>
            </div>
            <div className="flex items-center">
              <FaPhoneSquareAlt className="w-5 h-5 mr-2 sm:mr-6" />
              <span>+91 9472040607</span>
            </div>
            <div className="flex items-center">
              <AiOutlineMail className="w-5 h-5 mr-2 sm:mr-6" />
              <span>itsrajyadav@outlook.com</span>
            </div>
            <div className="flex items-center">
              <ImLocation className="w-5 h-5 mr-2 sm:mr-6" />
              <span>Faridabad HR</span>
            </div>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-page-in-mobile-1886632-1598496.png"
            alt=""
            className="p-6 h-52 md:h-64 w-auto"
          />
        </div>
        <form className="md:w-1/2" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 rounded bg-gradient-to-b from-gray-900 to-gray-600 text-gray-100"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                
                name="email"
                type="email"
                className="w-full p-3 rounded bg-gradient-to-b from-gray-900 to-gray-600 text-gray-100"
                value={formData.email}
                placeholder="Enter email address"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isAuthenticated}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                
                id="message"
                rows="3"
                className="w-full p-5 rounded bg-gradient-to-b from-gray-900 to-gray-600 text-gray-100"
                spellCheck="false"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            {isLoading ? (
              <div className="flex items-center">
                <FiLoader className="animate-spin text-2xl mr-2" />
                Sending...
              </div>
            ) : (
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded inline-flex items-center"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
