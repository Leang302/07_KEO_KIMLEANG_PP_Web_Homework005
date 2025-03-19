import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Profile from "@/components/ProfileComponent";
import { sideBarItems } from "@/lib/sidebar";
import { SideBarItemComponent } from "@/components/SideBarItemComponent";
import Link from "next/link";
import { Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-6">
        <Profile />
        <SidebarGroup>
          <SidebarMenu>
            {sideBarItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SideBarItemComponent item={item} />
              </SidebarMenuItem>
            ))}
            <SidebarGroup>
              <Link href="setting" className="mt-5">
                <p className="flex px-5 py-3 gap-2 bg-gray-200 rounded-md">
                  <span className="text-gray-400">
                    <Settings />
                  </span>
                  Settings
                </p>
              </Link>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
