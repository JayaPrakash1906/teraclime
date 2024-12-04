import React,{useState, useEffect} from "react";
function Table({isVisible, onClose, children}){
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(()=>{
        if(isVisible)
        {
                setIsAnimating(true);
        }
        else{
            const timer = setTimeout(()=> setIsAnimating(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible])

    if (!isAnimating && !isVisible) {
        return null;
    }
    return(
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center border-md ${isVisible ? 'animate-show' : 'animate-hide'}`} id="wrapper" onClick={handleClose}>
            <div className="w-[1200px]">
                <div className="bg-white p-4 rounded ">
                      {children}
                </div>
            </div>
        </div>
    )
}
export default Table;








































































// import React from 'react'
// import { useParams, useSearchParams } from 'react-router-dom'
// function Table() {
//   const {id} = useParams();
//   const [FlatId] = useSearchParams();
//   let flatid = FlatId.get('id');
//   return (
//     <div className="bg-white h-screen p-5 grid grid-cols-2 gap-10">
//       <div className="shadow-lg border bg-gray-100 p-2">
//               <h1 className="ps-1">Flat Id: {flatid}</h1>
//               <table className="table-fixed border-collapse w-full text-sm p-2 border-[1.5px] border-gray-6 rounded-lg mt-24">
//                   <thead>
//                       <tr>
//                           <td className="font-semibold">Device Id</td>
//                           <td className="font-semibold">Flow(Litres)</td>
//                       </tr>
//                       <tr>
//                           <td className="font-semibold">AS321</td>
//                           <td className="font-semibold">12</td>
//                       </tr>
//                   </thead>
//               </table>
//               <table className="table-fixed w-full text-sm p-2 border-[1.5px] border-gray-6 rounded-lg mt-10">
//                   <thead>
//                       <tr>
//                           <td className="font-semibold">Leaks</td>
//                           <td className="font-semibold text-sm ms-2">Timestamp (Leaks)</td>
//                       </tr>
//                       <tr>
//                           <td className="font-semibold">ask</td>
//                           <td className="font-semibold">jfn</td>
//                       </tr>
//                   </thead>
//               </table>
//       </div>     
//     </div>
//   )
// }

// export default Table
