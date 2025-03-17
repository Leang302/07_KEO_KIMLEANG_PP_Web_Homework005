import SearchComponent from "@/components/SearchComponent";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"

export default function layout({children}) {
    return (
        <SidebarProvider style={{
            "--sidebar-width": "20rem",
            "--sidebar-width-mobile": "20rem",

        }}>
            <AppSidebar/>
            <main className="w-full">
                <SidebarTrigger className="ml-2 mt-1 size-10"/>
                <div className="flex h-screen">
                    <div className="flex-grow px-12 py-8 overflow-y-auto">
                        {/* search box */}
                        <div className="relative w-full">
                            <SearchComponent/>
                        </div>
                        {children}
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
