import { sideBarItems } from "@/lib/sidebar";
import {Settings} from "lucide-react";
import Link from "next/link";
import Profile from "./ProfileComponent";
import { SideBarItemComponent } from "./SideBarItemComponent";
export default function SidebarComponent() {
  return (
    <aside className="w-[340px] p-6 space-y-10 bg-white min-h-lvh max-h-lvh">
        <Profile />
        {/* nav item list */}
        <div>
          {sideBarItems.map((sidebar) => (
            <SideBarItemComponent item={sidebar} key={sidebar.id} />
          ))}
        </div>
        {/* setting */}
        <Link href="setting">
          <p className="flex px-5 py-3 gap-2 bg-gray-100 rounded-md">
            <span className="text-gray-400">
              <Settings />
            </span>
            Settings
          </p>
        </Link>
    </aside>
  );
}
