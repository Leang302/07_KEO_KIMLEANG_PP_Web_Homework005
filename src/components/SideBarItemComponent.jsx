"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export function SideBarItemComponent({ item }) {
  const pathname = usePathname();

  return (
    <Link href={item.route}>
      <p
        className={`flex px-5 py-3 gap-2 items-center rounded-md ${
          pathname === item.route ? "bg-gray-200" : ""
        }`}
      >
        <span className="text-red-400"> {item.icon}</span>
        {item.title}
      </p>
    </Link>
  );
}
