import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <div className="lg:ml-auto mr-3"></div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <span className="z-10 block h-full leading-snug font-normal text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 mr-2">
              <i className="fas fa-bell text-2xl"></i>
            </span>
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
