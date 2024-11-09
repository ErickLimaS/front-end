"use client";
import React, { useState } from "react";
import CloseSvg from "@/public/svg/chevron-left.svg";
import OpenSvg from "@/public/svg/chevron-right.svg";
import PlusSvg from "@/public/svg/plus.svg";
import JornalSvg from "@/public/svg/journal-text.svg";
import ListSvg from "@/public/svg/list.svg";
import { motion } from "framer-motion";
import SidebarListItem from "./listItem";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const navMotion = {
    open: {
      padding: 16,
      width: isMobile ? "auto" : "320px",
      transition: { duration: 0.4 },
    },
    closed: {
      padding: 4,
      width: "initial",
    },
  };

  return (
    <motion.nav
      variants={navMotion}
      initial={"closed"}
      animate={isMenuOpen ? "open" : "closed"}
      exit={"closed"}
      className={`max-md:bg-transparent bg-blue-900 md:min-h-screen transition-colors border-b-2 border-white/15 ${
        isMenuOpen ? "max-md:bg-blue-900" : "max-md:bg-background"
      }`}
    >
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex justify-center items-center md:ml-auto border-2 w-16 h-16 rounded-full `}
          title={isMenuOpen ? "Close" : "Open"}
        >
          <span className="max-md:hidden">
            {isMenuOpen ? <CloseSvg /> : <OpenSvg />}
          </span>

          <span className="md:hidden">
            <ListSvg transform="scale(1.6)" fill={"white"} />
          </span>
        </button>
      </div>

      <span className="block h-[1px] w-full bg-white my-4 md:my-8" />

      <ul className={`grid gap-y-4 ${isMenuOpen ? "" : "max-md:hidden"}`}>
        <SidebarListItem
          Icon={JornalSvg}
          pathname="all"
          title="All"
          makeItLarge={isMenuOpen}
        />

        <SidebarListItem
          Icon={PlusSvg}
          pathname="add"
          title="Add"
          makeItLarge={isMenuOpen}
        />
      </ul>
    </motion.nav>
  );
}

export default Sidebar;
