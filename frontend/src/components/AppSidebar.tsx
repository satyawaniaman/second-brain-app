import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DocumentIcon } from "@/icons/DocumentIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const items = [
    {
      title: "Link Vault",
      url: "/dashboard",
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
  ];

  return (
    <Sidebar className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white border-r border-gray-700/50 shadow-lg">
      <SidebarContent>
        {/* App logo/branding */}
        <div className="px-6 py-8 border-b border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900">
          <Link
            to="/dashboard"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center"
          >
            <span className="mr-2 text-blue-400">💾</span> LinkVault
          </Link>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-8 px-4">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title} className="mb-4">
                  <SidebarMenuButton
                    asChild
                    className={`w-full py-4 px-5 rounded-xl transition-all ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 text-white"
                        : "hover:bg-gray-800/60 text-gray-300 hover:text-white"
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                          index === 0
                            ? "bg-blue-500/20 text-blue-400"
                            : index === 1
                              ? "bg-red-500/20 text-red-400"
                              : index === 2
                                ? "bg-blue-400/20 text-blue-300"
                                : "bg-indigo-500/20 text-indigo-400"
                        }`}
                      >
                        <item.icon size={20} />
                      </div>
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
