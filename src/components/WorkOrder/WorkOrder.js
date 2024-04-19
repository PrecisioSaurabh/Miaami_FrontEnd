import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-19",
    status: "released",
    priority: "urgent",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-20",
    status: "released",
    priority: "trivial",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-19",
    status: "released",
    priority: "urgent",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-20",
    status: "released",
    priority: "trivial",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-19",
    status: "released",
    priority: "urgent",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-20",
    status: "released",
    priority: "trivial",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-19",
    status: "released",
    priority: "urgent",
  },
  {
    workOrder: "MID000983003812",
    description: "TDTM5047",
    releaseDate: "2024-04-20",
    status: "released",
    priority: "trivial",
  },
];

const WorkOrder = () => {
  const [filters, setFilters] = useState({
    workOrder: "",
    status: "",
  });

  const filteredData = data.filter(
    (item) =>
      item.workOrder.toLowerCase().includes(filters.workOrder.toLowerCase()) &&
      (filters.status === "" || item.status === filters.status)
  );

  return (
    // <div className="container mx-auto p-4 px-1"  >
    <div className=" w-full bg-gray-100"  >
      <div className="ml-8 my-8 text-[#5723EA]">Work Order</div>
      <div className="mb-4 mx-16 py-2 flex items-center bg-white rounded-xl">
       <div className="p-2 mr-2 ml-4 font-bold"> Filters </div>
        <input
          type="text"
          placeholder="Filter by Work Order"
          className="p-2 mr-2 border rounded"
          value={filters.workOrder}
          onChange={(e) =>
            setFilters({ ...filters, workOrder: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Asset"
          className="p-2 mr-2 border rounded w-32"
          value={filters.workOrder}
          onChange={(e) =>
            setFilters({ ...filters, workOrder: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rig Yard"
          className="p-2 mr-2 border rounded w-36"
          value={filters.workOrder}
          onChange={(e) =>
            setFilters({ ...filters, workOrder: e.target.value })
          }
        />
        <select
          className="p-2 mr-2 border rounded ml-2 w-28"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">Status</option>
          <option value="released">released</option>
          {/* <option value="trivial">trivial</option> */}
        </select>
        {/* <button> Create work Order </button> */}
        <div className="ml-auto">
          {/* <button className="p-2 mr-8 border rounded bg-[#5723EA] text-white w-72">Create work Order</button> */}
          <Link to="/dashboard/createworkorder" className="p-2 mr-8 border rounded bg-[#5723EA] text-white w-72">
            Create work Order
          </Link>
        </div>
      </div>
      <div className="mx-16">
      <table className="min-w-full leading-normal">
        <thead >
          <tr >
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#E1E1FB] text-left text-xs font-bold tracking-wider font-mulish">
              Work Order
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#E1E1FB] text-left text-xs font-bold tracking-wider font-mulish">
              Description
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#E1E1FB] text-left text-xs font-bold tracking-wider font-mulish">
              Release Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#E1E1FB] text-left text-xs font-bold tracking-wider font-mulish">
              status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#E1E1FB] text-left text-xs font-bold tracking-wider font-mulish">
              Priority
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="px-5 py-3 border-b border-gray-200 bg-white text-[#5723EA] font-semibold">
                {item.workOrder}
              </td>
              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm text-[#5723EA] font-semibold">
                {item.description}
              </td>
              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm font-bold">
                {item.releaseDate}
              </td>
              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm font-bold">
                {item.status}
              </td>
              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm font-bold">
                {item.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default WorkOrder;