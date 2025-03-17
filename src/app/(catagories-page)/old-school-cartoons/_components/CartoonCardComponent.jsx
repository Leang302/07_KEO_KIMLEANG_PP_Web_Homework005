import LinkComponent from "@/components/LinkComponent";
import { Eye } from "lucide-react";
import Image from "next/image";
export default function CartoonCardComponent({ cartoon }) {
  return (
    <LinkComponent book={cartoon} type="cartoon" name="old school cartoons">
      <div className="w-full space-y-6">
        {/* image box */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={cartoon.image}
            fill
            alt={cartoon.ct_title}
            className="object-cover  hover:cursor-pointer"
          />
        </div>
        {/* text box */}
        <div className="font-semibold space-y-2">
          <h4 className="text-2xl">{cartoon.ct_title}</h4>
          <p className="flex text-custom-blue gap-1">
            <Eye />
            {cartoon.view_count} times | {cartoon.published_year}
          </p>
        </div>
      </div>
    </LinkComponent>
  );
}
