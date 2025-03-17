import Link from "next/link";

export default function FormComponent({ children, type, book, name }) {
  return (
    <Link
      href={{
        pathname: `/read-full-article/${book.id}`,
        query: {
          type: type,
          name: name,
          title: book.book_title || book.ct_title,
        },
      }}
    >
      {children}
    </Link>
  );
}
