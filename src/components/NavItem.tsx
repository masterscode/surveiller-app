import React from "react";
import { Link } from "react-router-dom";

type NavItem = {
    icon:string;
    link:string;
}


export const NavItem = ({icon, link}:NavItem) => {
  return (
    <Link to ={`/${link}`} className="flex items-end py-3 px-2 rounded   hover:bg-gray-300  hover:text-gray-700  text-gray-500">
      <div>
        <i className={`bi-${icon} text-2xl`}></i>
      </div>
      <div className="capitalize font-semibold text-lg ml-2">{link}</div>
    </Link>
  );
};