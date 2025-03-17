import GenrePageComponent from "@/components/GenrePageComponent";
import {
  getAllBooks,
  getAllCategories,
  getBookByName,
  getCatagoryById,
} from "@/service/BookService";

import BookCardComponent from "./_component/BookCardComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default async function page({ searchParams }) {
  const { catagory: catagoryId, search } = await searchParams;

  let allCategory = await getAllCategories();
  let label;
  let books;
  //if search available
  if (search) {
    books = await getBookByName(search);
  }
  //if user filter by catagory
  else if (catagoryId) {
    //get catagory name
    label = await getCatagoryById(catagoryId);
    //get book base on catagory id
    books = await getAllBooks(catagoryId);
  }
  //no search or filter
  else {
    books = await getAllBooks();
  }
  return (
    <GenrePageComponent
      pageTitle={label?.payload?.book_cate_name || "All books"}
      filter={allCategory}
      typeKey={"book_cate_name"}
      label="Filter By Catagory"
      queryKey="catagory"
    >
      <main className="p-6 grid grid-cols-2 gap-8">
        {books?.payload?.length === 0 && <NotFoundComponent />}
        {books?.payload?.length > 0 &&
          books?.payload?.map((book) => (
            <BookCardComponent book={book} key={book.id} />
          ))}
      </main>
    </GenrePageComponent>
  );
}
