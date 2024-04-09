import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Dashboard from "../../assets/Dashboard.png";
import AssetIcon from "../../assets/AssetsIcon.png";
import WorkOrderIcon from "../../assets/WorkOrderIcon.png";
import NotificationIcon from "../../assets/NotificationIcon.png";
import SettingIcon from "../../assets/SettingIcon.png";
const Navbar = () => {
  return (
    <nav className="bg-white-800 text-black p-4 mr-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-xl font-semibold">My Website</div> */}
        <div className="container mx-auto flex items-center space-x-4">
          <img src={logo} alt="Logo" />
          <Link to="/dashboard">
            <div className="flex flex-col items-center justify-center hover:text-gray-300">
              <img src={Dashboard} alt="Logo" />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex flex-col items-center justify-center hover:text-gray-300">
              <img src={WorkOrderIcon} alt="Logo" />
              <div>Work and order</div>
            </div>
          </Link>
          <Link to="/services">
            <div className="flex flex-col items-center justify-center hover:text-gray-300">
              <img src={AssetIcon} alt="Logo" />
              <div>Assets</div>
            </div>
          </Link>
        </div>
        <input type="search" placeholder="Search" className= "border border-gray-300 border-solid rounded-md p-2 mr-2"/>
          <div className="flex space-x-2">
            <img src={NotificationIcon} alt="NotificationIcon" />
            <img src={SettingIcon} alt="SettingIcon" />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

