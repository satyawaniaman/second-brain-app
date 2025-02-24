import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { DocumentIcon } from "@/icons/DocumentIcon"
import { TwitterIcon } from "@/icons/TwitterIcon"
import { YoutubeIcon } from "@/icons/YoutubeIcon"
import { Home } from "lucide-react"
  
  export function AppSidebar() {
    const items = [
        {
          title: "Link Valut",
          url: "/Dashboard",
          icon: Home,
        },
        {
          title: "Youtube",
          url: "https://youtube.com/",
          icon: YoutubeIcon,
        },
        {
          title: "Twitter(X)",
          url: "https://x.com/",
          icon: TwitterIcon,
        },
        {
          title: "Document",
          url: "#",
          icon: DocumentIcon,
        },
      ]
    return (
        <Sidebar className="w-64 bg-gray-900 text-white">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="w-full py-3 px-4">
                                        <a href={item.url} className="flex items-center gap-3">
                                            <item.icon size={24} />
                                            <span className="text-lg">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
  }