import LinkComponent from "@/components/LinkComponent";
import Image from "next/image";

export default function BookCardComponent({ book }) {
  return (
    <div className="h-[400px] flex gap-6 p-6 relative grid-cols-1">
      <div className=" w-[220px] space-y-3  float-left z-2">
        <div className=" h-[300px] relative rounded-3xl overflow-hidden shadow">
          <Image src={book.image} fill alt={book.book_title} />
        </div>
        <LinkComponent book={book} type="book" name="book catagories">
          <p className="p-2 bg-custom-light-blue text-custom-dark-blue text-center text-md font-semibold rounded-3xl hover:cursor-pointer">
            READ FULL ARTICLE
          </p>
        </LinkComponent>
      </div>
      <div className="p-10 absolute inset-x-0 bottom-0 h-[220px] bg-custom-gray z-1 rounded-2xl shadow">
        <div className="absolute left-[270px] top-4 p-2">
          <h4 className="font-semibold text-xl line-clamp-1">
            {book.book_title}
          </h4>
          <p className="line-clamp-5 leading-7">{book.description}</p>
        </div>
      </div>
    </div>
  );
}
