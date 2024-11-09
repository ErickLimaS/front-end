import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="grid gap-y-8">
        <h1 className="text-5xl font-semibold">404: Page Not Found</h1>

        <Link
          href={"/"}
          className="flex justify-center p-2 border-2 rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
