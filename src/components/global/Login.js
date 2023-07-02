import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect({
        redirect_uri: window.location.origin + '/contact',
      });
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center mt-2">
        <button
          className="w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => handleLogin()}
        >
          Login with Google
        </button>
        <button
          className="w-full px-4 py-2 mb-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleLogin()}
        >
          Login with Facebook
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none"
          onClick={() => handleLogin()}
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
