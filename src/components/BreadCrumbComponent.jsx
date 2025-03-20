import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Book, BookCheck, ToyBrick, Video } from "lucide-react";
import Link from "next/link";

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
              className="capitalize flex items-center gap-1"
              replace={true}
            >
              {catagoryName === "book catagories" ? (
                <Book className="size-5" />
              ) : (
                <ToyBrick className="size-5" />
              )}
              {catagoryName}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Current Page */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-custom-red flex items-center gap-1 hover:text-red-900 hover:cursor-pointer">
            {catagoryName === "book catagories" ? (
              <BookCheck className="size-5" />
            ) : (
              <Video className="size-5" />
            )}
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
