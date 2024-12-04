import React from 'react'
import img from '../Images/logo---website-m7VKRkL2jkTxW0kZ.svg'
import { FaChartBar, FaChartLine, FaChartPie, FaGear } from 'react-icons/fa6';
function Sidebar() {
  return (
    <div className="bg-black h-screen w-[250px]">
            <div className="px-12 py-10"><img src={img} className="w-[200px]"/></div>
            <ul className="text-gray-100 mt-10 px-10">
                <li className="flex justify-start  hover:scale-[1.1] pb-8 gap-4 text-md transition-all font-semibold	"><span className="mt-1"><FaChartPie /></span><a href="/home">Overview</a></li>
                <li className="flex justify-start hover:scale-[1.1] pb-8 text-md gap-4 transition-all font-semibold"><span className="mt-1"><FaChartLine /></span><a href="/analysis">Analysis</a></li>
                <li className="flex justify-start hover:scale-[1.1] pb-8 gap-4 text-md transition-all font-semibold"><span className="mt-1"><FaGear /></span>Settings</li>
            </ul>
            <div className="flex justify-center py-10 text-gray-100 font-semibold">Developed by</div>
            <div className="px-8"><img src={img} className="w-[400px]"/></div>
    </div>
  )
}

export default Sidebar;
