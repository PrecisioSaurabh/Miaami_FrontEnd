// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Dashboard from "../../assets/Dashboard.png";
import AssetIcon from "../../assets/AssetsIcon.png";
import WorkOrderIcon from "../../assets/WorkOrderIcon.png"; 
import NotificationIcon from "../../assets/NotificationIcon.png";
import SettingIcon from "../../assets/Setting.png";

const Navbar = () => {
  return (
    <nav className="bg-white -800 text-black p-4 flex justify-between">
      <div className="container mx-auto flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
        <Link to="/" className="hover:text-gray-300">
          <div>
            <img src={Dashboard} alt="Logo" className="h-8" />
            <div>Dashboard</div>
          </div>
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          <div>
            <img src={WorkOrderIcon} alt="Logo" className="h-8" />
            <div>Work and order</div>
          </div>
        </Link>
        <Link to="/services" className="hover:text-gray-300">
          <div>
            <img src={AssetIcon} alt="Logo" className="h-8" />
            <div>Assets</div>
          </div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <input type="search" placeholder="Search" />
        <div className="flex space-x-4"> 
          <img src={NotificationIcon} alt="SettingIcon" className="h-8" />
          <img src= {SettingIcon} alt="SettingIcon" className="h-8" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;


