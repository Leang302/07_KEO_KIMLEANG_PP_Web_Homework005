"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./UI/input";

export default function SearchComponent() {
  const path = usePathname();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchParam = formData.get("search");
    const params = new URLSearchParams({
      search: searchParam,
    }).toString();
    if (searchParam) {
    router.push(`${path}?${params}`);
    } else {
      router.push(path);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      <Input
        name="search"
        type="text"
        placeholder="Search anything you want"
        className="w-full pl-16 pr-4 py-6 rounded-4xl bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
    </form>
  );
}
