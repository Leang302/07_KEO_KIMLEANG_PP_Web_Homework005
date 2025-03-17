export const getAllCartoons = async (id) => {
  if (id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/?genre=${id}`
    );
    return await res.json();
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`);

  return await res.json();
};

export const getCartoonById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`);
  return await res.json();
};
export const getAllGenre = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`);
  if (!res.ok) {
    throw new Error("Error fetching genre");
  }
  return await res.json();
};
export const getGenreById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre/search?genre=${id}`
  );
  if (!res.ok) {
    throw new Error("Error fetching genre");
  }
  return await res.json();
};
export const getCartoonByName = async (cartoonName) => {
  console.log(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon?search=${cartoonName}`
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cartoon?search=${cartoonName}`
  );
  return await res.json();
};
