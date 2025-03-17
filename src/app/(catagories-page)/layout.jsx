import SearchComponent from "@/components/SearchComponent";
import SidebarComponent from "@/components/SidebarComponent";
export default function layout({ children }) {
  return (
    <div className="flex h-screen">
      <SidebarComponent />
      {/* <SidebarComponent className="w-64 bg-white shadow-lg" /> */}
      <div className="flex-grow px-12 py-8 overflow-y-auto">
        {/* search box */}
        <div className="relative w-full">
          <SearchComponent />
        </div>
        {children}
      </div>
    </div>
  );
}
