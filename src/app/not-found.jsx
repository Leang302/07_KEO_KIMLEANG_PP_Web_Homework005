import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-6 justify-center items-center  bg-black">
      <p className="text-white font-bold text-4xl">404 Not found</p>
      <Link
        href="/"
        className="px-6 py-2 bg-white rounded-md text-xl hover:bg-white/80"
      >
        Go Back To HomePage
      </Link>
    </div>
  );
}
