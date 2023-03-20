import React from "react";
import { Link, useLocation } from "react-router-dom";
import { listNavMenu } from "../../../utils/menu";

const Menu = () => {
  const location = useLocation();

  return (
    <ul className="flex ml-3 max-sm:hidden">
      {listNavMenu.map((value, index) => {
        return (
          <li
            key={index.toString()}
            className={`mr-3 ${
              location.pathname.indexOf(value.to) !== -1
                ? "text-secondary-500 font-bold"
                : "text-gray-600 opacity-70 hover:text-yellow-800"
            }`}
          >
            <Link to={value.to}>{value.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
