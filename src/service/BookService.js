//get all books
export const getAllBooks = async (filter) => {
  if (filter) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/book?query=${filter}`
    );
    return await res.json();
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
  return await res.json();
};
export const getBookById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
  return await res.json();
};
export const getAllCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book_category`);
  if (!res.ok) {
    throw new Error("Error fetching catagory");
  }
  return await res.json();
};
export const getCatagoryById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/book_category/search?query=${id}`
  );
  if (!res.ok) {
    throw new Error("Error fetching catagory");
  }
  return await res.json();
};

export const getBookByName = async (bookName) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${encodeURIComponent(
      bookName
    )}`
  );
  return await res.json();
};
