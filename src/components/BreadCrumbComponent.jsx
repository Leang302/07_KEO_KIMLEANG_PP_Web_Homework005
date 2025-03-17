import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function BreadcrumbComponent({ catagoryName, title }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-custom-dark-blue text-lg">
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={`/${catagoryName
                ?.replace(new RegExp("\\s+", "g"), "-")
                .toLowerCase()}`}
              className="capitalize"
              replace={true}
            >
              {catagoryName}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Current Page */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-custom-red">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
