import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 py-8 px-4">
      <small className="flex justify-center whitespace-pre text-base">
        Made with ❤️ by{" "}
        <Link
          className="underline "
          href={"https://github.com/ErickLimaS/"}
          target="_blank"
        >
          Erick Lima
        </Link>
      </small>
    </footer>
  );
}

export default Footer;
