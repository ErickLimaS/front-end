"use client";
import React, { useState } from "react";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className={`max-sm:flex max-sm:bg-transparent bg-blue-900 sm:min-h-screen transition-all ${
        isMenuOpen ? " w-[15vw]" : ""
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`border-2 w-12 h-12 rounded-full margin-auto `}
      >
        {isMenuOpen ? "-" : "+"}
      </button>

      <ul className={`${isMenuOpen ? " " : "max-sm:hidden"}`}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
