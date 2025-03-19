import GenrePageComponent from "@/components/GenrePageComponent";
import { genre } from "@/lib/genre";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-full">
      <GenrePageComponent pageTitle="Homepage">
        <main className="w-[60%] h-[580px] flex justify-between items-center mx-auto ">
          {genre?.map((genre) => (
            <Link
              href={genre.link}
              key={genre.id}
              className="relative w-[300px] h-[420px] shadow-xl rounded-3xl overflow-hidden group"
            >
              <Image
                src={genre.img}
                fill
                alt={genre.title}
                className="transition-all duration-300"
              />

              <span className="bg-white/90 px-2 py-1 absolute top-3 left-2 rounded-2xl flex items-center gap-2 text-custom-blue shadow z-20">
                <Tag size={20} /> {genre.tag}
              </span>

              {/* hover text */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-10
               opacity-0 translate-y-full transition-all duration-500
               group-hover:opacity-100 group-hover:translate-y-0"
              >
                <p className="text-white text-3xl font-semibold text-center">
                  {genre.title}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </GenrePageComponent>
    </div>
  );
}
