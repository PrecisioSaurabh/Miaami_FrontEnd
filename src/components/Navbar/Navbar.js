import React, { useState } from "react";
import { Link } from "react-router-dom";

// import logo from "../../assets/NavIcons/logo.png";

import logo from "../../assets/NavIcons/logo.png";
import Dashboard from "../../assets/NavIcons/Dashboard.png";
import AssetIcon from "../../assets/NavIcons/AssetsIcon.png";
import WorkOrderIcon from "../../assets/NavIcons/WorkOrderIcon.png";
import NotificationIcon from "../../assets/NavIcons/NotificationIcon.png";
import SettingIcon from "../../assets/NavIcons/SettingIcon.png";
import SearchIcon from "../../assets/NavIcons/Search.png"; 

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
     console.log("Searching for:", searchValue);
  };

  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <ul className="flex space-x-4 ml-4">
          <li>
            <Link to="/dashboard">
              <div className="flex flex-col items-center justify-center hover:text-gray-300">
                <img src={Dashboard} alt="Dashboard" />
                <div>Dashboard</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/workorder">
              <div className="flex flex-col items-center justify-center hover:text-gray-300">
                <img src={WorkOrderIcon} alt="WorkOrder" />
                <div>Work Order</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div className="flex flex-col items-center justify-center hover:text-gray-300">
                <img src={AssetIcon} alt="Asset" />
                <div>Assets</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-2 items-center mr-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white text-black border border-gray-300 border-solid rounded-md py-1 px-2 pr-8 focus:outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div className="flex space-x-2">
          <img src={NotificationIcon} alt="Notification" />
          <img src={SettingIcon} alt="Setting" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



