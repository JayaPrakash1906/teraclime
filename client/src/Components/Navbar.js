import React, {useState} from 'react'
import { useRef } from 'react';
import { FaBell, FaPowerOff } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  const { pathname } = useLocation();
  let data = '';
  switch (pathname) {
    case '/analysis':
      data = 'Analysis';
      break;
    case '/dashboard':
      data = 'Dashboard';
      break;
    case '/settings':
      data = 'Settings';
      break;
    default:
      data = 'Home';
  }
  return (
    <nav className="p-4 border border-b-2 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="text-black text-lg font-semibold ps-5">
          {/* should change based on routes */}
            {data}
        </div>
        <ul className="flex space-x-4">
          <li>
          <button className="mt-1 text-green-600"><FaBell size={20} /></button>
          </li>
          <li>
            <button className="mt-1 text-green-600"><FaPowerOff size={20} /></button>
          </li>
          <li>
            <div className="text-black font-semibold text-lg"></div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
