import React from "react";
import img1 from '../Images/White-.png'

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="shadow-md p-14 bg-blue-100">
        {/* Logo */}
        <div className="text-center mb-6 ">
          <img
            src={img1} // Replace with your logo
            alt="terraclime"
            className="mx-auto w-50"
          />
          {/* <h2 className="text-sm font-semibold text-gray-600">
            Sensor Driven Decisions
          </h2> */}
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-center mb-4">Login</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Id"
                className="w-full px-3 py-2 border-b-2 border-gray-800 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border-b-2 border-gray-800 focus:outline-none "
              />
            </div>
            
            <div class="flex justify-center items-center">
            <button
              type="submit"
              className="p-3  bg-green-500 text-white py-1 rounded-md hover:bg-green-600 mt-4"
            >
              Submit
            </button></div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
                    <p className="text-xs text-gray-800 mt-3">
            © 2024 Terraclime Inc. IIT Madras, Chennai, 600036
          </p>
        </div></div>
      </div>
    </div>
  );
}

export default Login;
