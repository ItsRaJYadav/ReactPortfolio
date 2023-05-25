import { useAuth0 } from "@auth0/auth0-react";

function UserTable() {
  const { user, isAuthenticated, logout ,isLoading} = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  if(isLoading){
    return <>Loading...........</>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-6 md:mb-8">
        <div className="md:order-2 w-full md:w-2/5 mb-4 md:mb-0">
          <div className="bg-gray-100 p-3 rounded-md overflow-hidden">
            {!isAuthenticated ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile pic"
                className="w-full object-cover"
              />
            ) : (
              <img
                src={user && user.picture}
                alt={`Profile pic for ${user && user.name}`}
                className="w-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="md:order-1 w-full md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            User Details
          </h1>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="name"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              Name
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lg md:text-xl font-medium text-gray-800">
                {user && user.name}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="email"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lg md:text-xl font-medium text-gray-800">
                {user && user.email}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-6">
            <label
              htmlFor="email"
              className="text-lg md:text-xl font-bold text-gray-700 mb-1"
            >
              UserName
            </label>
            <div className="bg-gray-100 p-3 rounded-md">
              <span className="text-lg md:text-xl font-medium text-gray-800">
                {user && user.email.split("@")[0]}
              </span>
            </div>
          </div>
          {isAuthenticated && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserTable;
