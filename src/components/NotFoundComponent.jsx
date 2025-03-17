import Image from "next/image";
import React from "react";
import notfound from "../../public/not-found.png";

export default function NotFoundComponent() {
  return (
    <div className="w-full h-[630px] flex flex-col gap-10 items-center justify-center col-span-3">
      <Image src={notfound} width={300} height={300} alt="Not found" />
      <h4 className="text-4xl font-semibold text-gray-500">Search not found</h4>
    </div>
  );
}
