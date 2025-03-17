import BreadCrumbComponent from "@/components/BreadCrumbComponent";
import { getBookById } from "@/service/BookService";
import { getCartoonById } from "@/service/CartoonService";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page({ params, searchParams }) {
  const { type, name, title } = await searchParams;

  const { id } = await params;
  let article;
  let key;
  if (type == "book") {
    article = await getBookById(id);
  } else {
    article = await getCartoonById(id);
  }
  return (
    <div className="px-20 py-10">
      {/* breadcrumb */}
      <div className="mt-10">
        <BreadCrumbComponent catagoryName={name} title={title} />
      </div>
      {/* article section */}
      <main className="w-full bg-white shadow-xl rounded-4xl mt-38 relative">
        {/* pic */}
        <div className="w-[300px] h-[430px] absolute rounded-3xl overflow-hidden right-20 top-[-180px] shadow-lg">
          <Image
            src={article?.payload?.image}
            fill
            alt={article?.payload?.book_title || article?.payload?.ct_title}
            className="object-cover"
          />
        </div>
        {/* article */}
        <div className="px-16 pt-40 py-16 space-y-4 text-custom-dark-blue">
          <h4>{article?.payload?.book_title || article?.payload?.ct_title}</h4>
          <p>
            by{" "}
            <span className="text-custom-blue">
              {article?.payload?.book_author || article?.payload?.ct_creator}
            </span>
          </p>
          <p className="flex text-custom-blue ">
            <Eye /> 200 times | {article?.payload?.created_at}
          </p>
          <p>
            {article?.payload?.description || article?.payload?.ct_description}
          </p>
        </div>
      </main>
    </div>
  );
}
