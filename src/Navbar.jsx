import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-yellow-200 flex gap-2 justify-center shadow-lg">
        <img className="w-8" id="svg" src="/travel.svg" alt="" />
        <p className="text-[#2B283A] py-4 text-2xl">My Travel Journal</p>
      </nav>
    </div>
  );
}

export default Navbar;
