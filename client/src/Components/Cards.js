import React from 'react';
import { FaMoneyBillTransfer, FaPersonChalkboard, FaWater } from 'react-icons/fa6';
import {GrBeacon, GrCpu} from 'react-icons/gr';
function Cards(props){
  return (
    <div className='mt-10'>
        <div className="grid grid-cols-4 gap-10 flex justifty-center px-14">
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
            {/* <div className="shadow-md font-semibold rounded-lg w-[100%;] bg-gray-700">
                    <div className="grid grid-cols-2">
                        <div className="px-3 py-5 text-gray-500"><GrCpu size={75} /></div>
                        <div className="">
                                <span className="text-white flex justify-end items-end text-5xl p-4">23</span>
                                <span className="text-white flex justify-end items-end px-3">Total flats</span>
                        </div>
                    </div>
            </div> */}
        </div>
    </div>
  )
}

export default Cards
