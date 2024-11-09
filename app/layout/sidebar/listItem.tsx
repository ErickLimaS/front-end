import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function SidebarListItem({
  title,
  Icon,
  pathname,
  makeItLarge,
}: {
  title: string;
  pathname: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
  makeItLarge: boolean;
}) {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Link
        href={`/${pathname}`}
        className={`flex justify-center items-center border-2 rounded-full h-16 transition-all shadow-lg gap-y-1 ${
          makeItLarge ? "w-full gap-x-4" : "flex-col w-16"
        }`}
      >
        <Icon />

        <span className={`${makeItLarge ? "text-base" : "text-sm"}`}>
          {title}
        </span>
      </Link>
    </motion.div>
  );
}

export default SidebarListItem;
