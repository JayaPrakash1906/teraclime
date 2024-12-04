import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Cards from '../Components/Cards';
import {GrBeacon, GrCpu, GrFlows} from 'react-icons/gr';
import { FaGlassWaterDroplet, FaMoneyBillTransfer } from 'react-icons/fa6';
function Home() {
  return (
    <div className="h-screen flex">
        <section>
            <div className="h-full">
                    <Sidebar />
            </div>
        </section>
        <section className="flex-grow">
            <div className="fixed md:w-[81%]">
                    <Navbar />
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-3 gap-10 flex justifty-center px-10">
                        <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                            <div className="grid grid-cols-2">
                                    <div className="px-3 py-5 text-gray-500"><GrCpu size={75} /></div>
                                    <div className="">
                                            <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                            <span className="text-white flex justify-end items-end px-3">Total devices</span>
                                    </div>
                            </div>
                        </div>
                        <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                                <div className="grid grid-cols-2">
                                    <div className="px-3 py-5 text-gray-500"><GrCpu size={75} /></div>
                                    <div className="">
                                            <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                            <span className="text-white flex justify-end items-end px-2">Active devices</span>
                                    </div>
                                </div>
                        </div>
                        <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                                <div className="grid grid-cols-2">
                                    <div className="px-3 py-5 text-gray-500"><GrCpu size={75} /></div>
                                    <div className="">
                                            <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                            <span className="text-white flex justify-end items-end px-2">Inactive devices</span>
                                    </div>
                                </div>
                        </div>
                        <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                                <div className="grid grid-cols-2">
                                    <div className="px-3 py-5 text-gray-500"><GrFlows size={75} /></div>
                                    <div className="">
                                            <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                            <span className="text-white flex justify-end items-end px-2">Consumption</span>
                                    </div>
                                </div>
                        </div>
                        <div className="shadow-md font-semibold rounded-lg w-[100%] bg-gray-700">
                                <div className="grid grid-cols-2">
                                        <div className="px-3 py-5 text-gray-500"><FaGlassWaterDroplet size={75} /></div>
                                        <div>
                                        <div className="text-white flex justify-end items-end text-5xl p-4">
                                                ₹10/<span className="text-sm">Kl</span>
                                        </div>
                                                <span className="text-white flex justify-end items-end px-2">Water Price</span>
                                        </div>
                                </div>
                        </div>

                        <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                                <div className="grid grid-cols-2">
                                    <div className="px-3 py-5 text-gray-500"><FaMoneyBillTransfer size={75} /></div>
                                    <div className="">
                                            <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                            <span className="text-white flex justify-end items-end px-2">Total bill</span>
                                    </div>
                                </div>
                        </div>
                 </div>
                 <div className="p-4">
                 <div class="flex justify-center items-center">
        <input type="text" placeholder="Enter value" className=" px-3 py-2 rounded-lg bg- text-gray-800" />
        <button className="ml-5  bg-gray-400 text-white py-1 px-2 rounded-lg hover:bg-gray-500">
            Submit
        </button>
    </div></div>
            </div>
            <div className='text-sm text-black ml-10 font-bold'>
                Note
            </div>
            <p className='text-sm text-blak ml-10'>A billing cycle from the 1st to the 31st of every month means it starts on the 1st and ends on the last day (31st). For months with fewer days, it ends on the last calendar day (e.g., 28th/30th).
</p>
        </section>
    </div>
  )
}

export default Home
