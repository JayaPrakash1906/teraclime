import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { GoArrowUpRight } from "react-icons/go";
import "lity/dist/lity.css";
import "lity";
import { useSearchParams, useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import Table from "../Components/Table";
import LineChart from "../Components/LineChart";
import jsPDF from "jspdf";
import "jspdf-autotable";
// Path to your font file

function Analysis() {
  
  const [searchParams] = useSearchParams();
  const someParam = searchParams.get("someParam");
  const [showTable, setTable] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const { id } = useParams();
  const [FlatId] = useSearchParams();
  let flatid = FlatId.get("id");
  const [filteredItems, setFilteredItems] = useState([]); // For search functionality
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [dataPerPage] = useState(5); // Number of rows per page
  const [tableData] = useState([
    {
      id: "A223",
      name: "Hari",
      number: "987567682",
      consumption: 22,
      bill: "Rs.22,000",
    },
    {
      id: "B123",
      name: "Shyam",
      number: "987563782",
      consumption: 35,
      bill: "Rs.15,000",
    },
    {
      id: "C345",
      name: "Ram",
      number: "987567892",
      consumption: 18,
      bill: "Rs.10,000",
    },
    {
      id: "D567",
      name: "Lakshman",
      number: "987567732",
      consumption: 28,
      bill: "Rs.12,000",
    },
    {
      id: "E678",
      name: "Sita",
      number: "987567612",
      consumption: 40,
      bill: "Rs.25,000",
    },
    {
      id: "F789",
      name: "Ravi",
      number: "987567442",
      consumption: 30,
      bill: "Rs.20,000",
    },
    {
      id: "G890",
      name: "Gopal",
      number: "987567552",  
      consumption: 45,
      bill: "Rs.30,000",
    },
  ]);

  // Calculate the range of data for the current page
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const dataToDisplay = filteredItems.length > 0 ? filteredItems : tableData;
  const currentData = dataToDisplay.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(dataToDisplay.length / dataPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    require("lity");
  }, []);

  const handleDownloadPDF = (row) => {
    const doc = new jsPDF();

    // Add the custom font
    doc.addFileToVFS("Roboto-Regular.ttf");
    doc.addFont("Roboto", "normal");
    doc.setFont("Roboto");

    // Generate the PDF
    doc.setFontSize(16);
    doc.text(`Bill Details for Flat ${row.id}`, 10, 10);
    doc.autoTable({
      startY: 20,
      head: [["Field", "Value"]],
      body: [
        ["Flat Id", row.id],
        ["Resident Name", row.name],
        ["Whatsapp Number", row.number],
        ["Consumption (Litres)", row.consumption],
        ["Total Bill (Rs.)", row.bill],
      ],
    });
    doc.save(`Flat_${row.id}_Bill.pdf`);
  }; 

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const results = tableData.filter((row) =>
      row.id.toLowerCase().includes(value) ||
      row.name.toLowerCase().includes(value) ||
      row.number.toLowerCase().includes(value)
    );
    setFilteredItems(results);
    setCurrentPage(1); // Reset pagination on new search
  };


  return (
    <>
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
            <div className="grid grid-cols-2 px-10">
              <span className="text-gray-300">Dashboard/ Analysis</span>
            </div>
            <div>
              <input 
                type="text"
                className="border border-blue-300 rounded-md bg-white-500 ml-10 md:h-[5px] sm:w-[30%] p-5"
                placeholder="Search"                 onChange={handleSearch}

              />
            </div>
            <div className="mt-10 px-10 grid grid-cols-1">
              <table className="table-fixed w-full text-sm p-2 border-2 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-5 py-2 text-left text-green-600">
                      Flat Id {someParam}
                    </th>
                    <th className="px-5 py-2 text-left text-green-600">
                      Resident Name
                    </th>
                    <th className="px-5 py-2 text-left text-green-600">
                      Whatsapp Number
                    </th>
                    <th className="px-5 py-2 text-left text-green-600">
                      Consumption(Litres)
                    </th>
                    <th className="px-5 py-2 text-left text-green-600">
                      Total Bill(Rupess)
                    </th>
                    <th className="px-5 py-2 text-left text-green-600">
                      Download Bill
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-300 hover:bg-green-100"
                    >
                      <td className="px-5 py-2 font-semibold flex">
                        {row.id}
                        <span className="pt-[5px] px-[2px]">
                          <a
                            onClick={() => {
                              setSelectedRow(row); // Set the selected row to the clicked row
                              setTable(true); // Open the table to show more details
                            }}
                          >
                            <GoArrowUpRight />
                          </a>
                        </span>
                      </td>
                      <td className="px-5 py-2 font-semibold">{row.name}</td>
                      <td className="px-5 py-2 font-semibold">{row.number}</td>
                      <td className="px-5 py-2 font-semibold">
                        {row.consumption}
                      </td>
                      <td className="px-5 py-2 font-semibold">{row.bill}</td>
                      <td className="px-5 py-2 font-semibold">
                        <button onClick={() => handleDownloadPDF(row)}>
                          <FaDownload />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-5 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500"
                    : "bg-white text-green-500 hover:bg-green-100"
                }`}
                disabled={currentPage === 1}
              >
                &larr;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-white text-green-500 hover:bg-green-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500"
                    : "bg-white text-green-500 hover:bg-green-100"
                }`}
                disabled={currentPage === totalPages}
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>
        {showTable && selectedRow && (
          <Table isVisible={showTable} onClose={() => setTable(false)}>
            <div className="bg-white h-50% pt-3 grid grid-cols-[1fr_3fr] gap-4">
              <div className="shadow-lg border bg-gray-100 p-2">
                <h1 className="ps-1">Flat Id: {selectedRow.id}</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-1 p-4">
                  {/* Device Data Section */}
                  <div className="border border-gray-300 rounded-lg p-4">
                    <h3 className="font-bold text-md mb-2">Device Data</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-semibold text-sm">Device Id</div>
                      <div className="font-semibold text-sm">
                        Flow (<span className="text-sm">Litres</span>)
                      </div>
                      <div className="text-sm">AS321</div>
                      <div className="text-sm">12</div>
                    </div>
                  </div>

                  {/* Leak Data Section */}
                  <div className="border border-gray-300 rounded-lg p-4">
                    <h3 className="font-bold text-md mb-2">Leak Data</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-semibold text-sm">Leaks</div>
                      <div className="font-semibold text-sm">
                        Timestamp (<span className="text-sm">Leaks</span>)
                      </div>
                      <div className="text-sm">Leak 1</div>
                      <div className="text-sm">12:34:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <LineChart />
              </div>
            </div>
          </Table>
        )}
      </div>
    </>
  );
}

export default Analysis;

















// import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import Sidebar from "../Components/Sidebar";
// import { GoArrowUpRight } from "react-icons/go";
// import { FaDownload } from "react-icons/fa6";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function Analysis() {
//   const [filteredItems, setFilteredItems] = useState([]); // For search functionality
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dataPerPage] = useState(5);
//   const [tableData] = useState([
//     { id: "A223", name: "Hari", number: "987567682", consumption: 22, bill: "Rs.22,000" },
//     { id: "B123", name: "Shyam", number: "987563782", consumption: 35, bill: "Rs.15,000" },
//     { id: "C345", name: "Ram", number: "987567892", consumption: 18, bill: "Rs.10,000" },
//     { id: "D567", name: "Lakshman", number: "987567732", consumption: 28, bill: "Rs.12,000" },
//     { id: "E678", name: "Sita", number: "987567612", consumption: 40, bill: "Rs.25,000" },
//     { id: "F789", name: "Ravi", number: "987567442", consumption: 30, bill: "Rs.20,000" },
//     { id: "G890", name: "Gopal", number: "987567552", consumption: 45, bill: "Rs.30,000" },
//   ]);

//   // Pagination variables
//   const indexOfLastData = currentPage * dataPerPage;
//   const indexOfFirstData = indexOfLastData - dataPerPage;

//   // Show either filtered data or full data
//   const dataToDisplay = filteredItems.length > 0 ? filteredItems : tableData;
//   const currentData = dataToDisplay.slice(indexOfFirstData, indexOfLastData);
//   const totalPages = Math.ceil(dataToDisplay.length / dataPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const handleDownloadPDF = (row) => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text(`Bill Details for Flat ${row.id}`, 10, 10);
//     doc.autoTable({
//       startY: 20,
//       head: [["Field", "Value"]],
//       body: [
//         ["Flat Id", row.id],
//         ["Resident Name", row.name],
//         ["Whatsapp Number", row.number],
//         ["Consumption (Litres)", row.consumption],
//         ["Total Bill (Rs.)", row.bill],
//       ],
//     });
//     doc.save(`Flat_${row.id}_Bill.pdf`);
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     const results = tableData.filter((row) =>
//       row.id.toLowerCase().includes(value) ||
//       row.name.toLowerCase().includes(value) ||
//       row.number.toLowerCase().includes(value)
//     );
//     setFilteredItems(results);
//     setCurrentPage(1); // Reset pagination on new search
//   };

//   return (
//     <>
//       <div className="h-screen flex">
//         <Sidebar />
//         <section className="flex-grow">
//           <Navbar />
//           <div className="mt-20 px-10">
//             <div className="grid grid-cols-2">
//               <span className="text-gray-300">Dashboard / Analysis</span>
//             </div>
//             <div className="mt-5">
//               <input
//                 type="text"
//                 className="border border-blue-300 rounded-md bg-white-500 p-2 w-1/3"
//                 placeholder="Search by Flat Id or Name"
//                 onChange={handleSearch}
//               />
//             </div>
//             <div className="mt-10">
//               <table className="table-fixed w-full text-sm border-2 rounded-lg">
//                 <thead>
//                   <tr>
//                     <th className="px-5 py-2 text-left text-green-600">Flat Id</th>
//                     <th className="px-5 py-2 text-left text-green-600">Resident Name</th>
//                     <th className="px-5 py-2 text-left text-green-600">Whatsapp Number</th>
//                     <th className="px-5 py-2 text-left text-green-600">Consumption (Litres)</th>
//                     <th className="px-5 py-2 text-left text-green-600">Total Bill (Rs.)</th>
//                     <th className="px-5 py-2 text-left text-green-600">Download Bill</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentData.map((row, index) => (
//                     <tr
//                       key={index}
//                       className="border-t border-gray-300 hover:bg-green-100"
//                     >
//                       <td className="px-5 py-2 font-semibold">{row.id}</td>
//                       <td className="px-5 py-2 font-semibold">{row.name}</td>
//                       <td className="px-5 py-2 font-semibold">{row.number}</td>
//                       <td className="px-5 py-2 font-semibold">{row.consumption}</td>
//                       <td className="px-5 py-2 font-semibold">{row.bill}</td>
//                       <td className="px-5 py-2 font-semibold">
//                         <button onClick={() => handleDownloadPDF(row)}>
//                           <FaDownload />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-5 space-x-2">
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === 1
//                     ? "bg-gray-300 text-gray-500"
//                     : "bg-white text-green-500 hover:bg-green-100"
//                 }`}
//                 disabled={currentPage === 1}
//               >
//                 &larr;
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handlePageChange(i + 1)}
//                   className={`px-3 py-1 border rounded ${
//                     currentPage === i + 1
//                       ? "bg-green-500 text-white"
//                       : "bg-white text-green-500 hover:bg-green-100"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === totalPages
//                     ? "bg-gray-300 text-gray-500"
//                     : "bg-white text-green-500 hover:bg-green-100"
//                 }`}
//                 disabled={currentPage === totalPages}
//               >
//                 &rarr;
//               </button>
//             </div>
//           </div>
//         </section>
//         {showTable && selectedRow && (
//           <Table isVisible={showTable} onClose={() => setTable(false)}>
//             <div className="bg-white h-50% pt-3 grid grid-cols-[1fr_3fr] gap-4">
//               <div className="shadow-lg border bg-gray-100 p-2">
//                 <h1 className="ps-1">Flat Id: {selectedRow.id}</h1>
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-1 p-4">
//                   {/* Device Data Section */}
//                   <div className="border border-gray-300 rounded-lg p-4">
//                     <h3 className="font-bold text-md mb-2">Device Data</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="font-semibold text-sm">Device Id</div>
//                       <div className="font-semibold text-sm">
//                         Flow (<span className="text-sm">Litres</span>)
//                       </div>
//                       <div className="text-sm">AS321</div>
//                       <div className="text-sm">12</div>
//                     </div>
//                   </div>

//                   {/* Leak Data Section */}
//                   <div className="border border-gray-300 rounded-lg p-4">
//                     <h3 className="font-bold text-md mb-2">Leak Data</h3>
//                     <div className="grid grid-cols-2 gap-2">
//                       <div className="font-semibold text-sm">Leaks</div>
//                       <div className="font-semibold text-sm">
//                         Timestamp (<span className="text-sm">Leaks</span>)
//                       </div>
//                       <div className="text-sm">Leak 1</div>
//                       <div className="text-sm">12:34:00</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div>
//                 <LineChart />
//               </div>
//             </div>
//           </Table>
//         )}
//       </div>
//     </>
//   );
// }

// export default Analysis;
