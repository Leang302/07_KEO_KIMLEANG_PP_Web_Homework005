import GenrePageComponent from "@/components/GenrePageComponent";
import {
  getAllCartoons,
  getAllGenre,
  getCartoonByName,
  getGenreById,
} from "@/service/CartoonService";
import CartoonCardComponent from "./_components/CartoonCardComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

export default async function page({ searchParams }) {
  const { genre: genreId, search } = await searchParams;
  const genres = await getAllGenre();
  let label;
  let cartoons;
  //if search available
  if (search) {
    cartoons = await getCartoonByName(search);
  }
  //if user filter by genre
  else if (genreId) {
    label = await getGenreById(genreId);
    cartoons = await getAllCartoons(genreId);
  }
  //no search or filter
  else {
    cartoons = await getAllCartoons();
  }

  return (
    <GenrePageComponent
      pageTitle={label?.payload?.cartoon_genre || "Old School Cartoon"}
      filter={genres}
      typeKey={"cartoon_genre"}
      label={"Filter By Genre"}
      queryKey={"genre"}
    >
      <div className="grid grid-cols-3 gap-22 p-10">
        {cartoons?.payload?.length === 0 && <NotFoundComponent />}
        {cartoons?.payload?.length > 0 &&
          cartoons?.payload?.map((cartoon) => (
            <CartoonCardComponent key={cartoon.id} cartoon={cartoon} />
          ))}
      </div>
    </GenrePageComponent>
  );
}
