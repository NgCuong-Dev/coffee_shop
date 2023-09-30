import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="flex">
      <div>
        <FaCartArrowDown className="w-10" />
      </div>
      <NavLink to={"/login"}>
        <button className="py-2 px-4 mr-2 bg-white text-black">
          Đăng Nhập
        </button>
      </NavLink>
      <NavLink to={"/register"}>
        <button className="py-2 px-4 bg-white text-black">Đăng Ký</button>
      </NavLink>
      <div></div>
    </div>
  );
}
