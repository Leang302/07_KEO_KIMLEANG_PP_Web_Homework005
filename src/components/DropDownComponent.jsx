"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./UI/button";
// type = cartoon or book
// type key = cartoon and book has different key
// query key = key for dynamic route eg. catagory, genre
export default function DropDownComponent({
  type,
  typeKey,
  dropdownMenuLabel,
  queryKey,
  pageTitle,
}) {
  const path = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-gray-400">
          {pageTitle || dropdownMenuLabel}
          <ArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{dropdownMenuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {type?.payload?.map((t) => (
          <Link
            key={t.id}
            href={{
              href: path,
              query: {
                [queryKey]: t.id,
              },
            }}
          >
            <DropdownMenuItem>{t[typeKey]}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
