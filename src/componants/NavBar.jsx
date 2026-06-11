import { logo, profile } from "../assets";
import { FaSearch } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { FaTv } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  return (
<div className="fixed top-0 left-0 z-50 w-full h-16 border-b border-gray-500 py-1 bg-gray-900 ">
      <div className="px-2  flex justify-between sm:px-2 items-center text-center">
        <div className="flex gap-3">
          <img src={logo} alt="" className="w-10 h-9 rounded-full" />
          <div className="flex text-center items-center px-3 gap-2  rounded-full bg-gray-600 ">
            <FaSearch className="text-gray-400 " />
            <input
              type="text"
              placeholder="   Search Facebook"
              className="hidden md:flex bg-gray-600 focus:outline-none"
            />
          </div>
        </div>

       <div className="hidden md:grid grid-cols-5 gap-2  items-center">
  <div className="flex justify-center items-center w-28 h-14 border-b-4 border-blue-500">
    <HiOutlineHome className="text-blue-500 text-3xl" />
  </div>

  <div className="flex justify-center items-center w-28 h-14 hover:bg-gray-700 rounded-lg cursor-pointer transition">
    <FaTv className="text-gray-400 text-2xl" />
  </div>

  <div className="flex justify-center items-center w-28 h-14 hover:bg-gray-700 rounded-lg cursor-pointer transition">
    <FaStore className="text-gray-400 text-2xl" />
  </div>

  <div className="flex justify-center items-center w-28 h-14 hover:bg-gray-700 rounded-lg cursor-pointer transition">
    <PiUsersBold className="text-gray-400 text-2xl" />
  </div>

  <div className="flex justify-center items-center w-28 h-14 hover:bg-gray-700 rounded-lg cursor-pointer transition">
    <FaGamepad className="text-gray-400 text-2xl" />
  </div>
</div>

        <div className="flex justify-end gap-2 items-center  ">
          <CgMenuGridO className="w-10 h-9 py-2 px-2 text-gray-200 bg-gray-500 hover:bg-gray-400 rounded-full" />
          <FaFacebookMessenger className="w-10 h-9 py-2 px-2 text-gray-200 bg-gray-500 hover:bg-gray-400  rounded-full" />
          <IoNotifications className="w-10 h-9 py-2 px-2 text-gray-200 bg-gray-500 hover:bg-gray-400  rounded-full" />
          <img src={profile} alt="" className="w-10 h-9 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
