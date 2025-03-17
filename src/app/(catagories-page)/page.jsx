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
              className="relative w-[300px] h-[420px] shadow-xl rounded-3xl overflow-hidden"
            >
              <Image src={genre.img} fill alt={genre.title}></Image>
              <span className="bg-white/90 px-2 py-1  absolute top-3 left-2 rounded-2xl flex items-center gap-2 text-custom-blue shadow z-2">
                <Tag size={20} /> {genre.tag}
              </span>
              {/* hover text */}
              <div className="absolute w-full h-full opacity-0 hover:opacity-100 transition-opacity bg-black/50 flex justify-center items-center p-20 z-1">
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
