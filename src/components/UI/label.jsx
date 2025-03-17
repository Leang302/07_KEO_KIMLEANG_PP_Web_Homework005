import React from "react";

export default function label({ title }) {
  return (
    <div className="p-3 bg-gray-100 text-custom-blue max-w-[400px] rounded-lg text-center font-semibold">
      {title}
    </div>
  );
}
