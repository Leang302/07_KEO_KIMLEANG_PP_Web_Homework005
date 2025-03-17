import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="https://i.pinimg.com/736x/d7/c8/52/d7c85269525f4d3d950aa02109a02690.jpg"
        width={140}
        height={140}
        className="rounded-full"
        alt="Profile pic"
      ></Image>
      <p className="text-2xl">Balailaka</p>
      <p className="text-lg text-custom-blue">balailaka@gmail.com</p>
    </div>
  );
}
