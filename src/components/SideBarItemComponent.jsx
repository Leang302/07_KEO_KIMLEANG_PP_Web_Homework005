"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

export function SideBarItemComponent({item}) {
    const pathname = usePathname();
    return (
        <Link href={item.route}>
            <p
                className={` flex px-5 py-3 gap-2 items-center rounded-md w-full hover:bg-gray-100 ${
                    pathname === item.route ? "bg-gray-200" : ""
                }`}
            >
                {item.icon}
                {item.title}
            </p>
        </Link>
    );
}
