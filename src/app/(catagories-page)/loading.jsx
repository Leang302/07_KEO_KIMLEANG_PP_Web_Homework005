import GenrePageComponent from "@/components/GenrePageComponent";
import React from "react";

export default function loading() {
  return (
    <GenrePageComponent>
      <div className="w-full min-h-[650px] flex items-center justify-center">
        <span className="loading loading-dots loading-xl self-center"></span>
      </div>
    </GenrePageComponent>
  );
}
