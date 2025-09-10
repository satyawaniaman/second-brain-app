import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, FileText, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

type AppSidebarProps = {
  onFilterChange?: (filter: string) => void;
  selectedFilter?: string;
};

export function AppSidebar({
  onFilterChange,
  selectedFilter = "all",
}: AppSidebarProps) {
  const items = [
    {
      title: "All Content",
      filter: "all",
      icon: Home,
    },
    {
      title: "Youtube",
      filter: "youtube",
      icon: Youtube,
    },
    {
      title: "Twitter(X)",
      filter: "twitter",
      icon: Twitter,
    },
    {
      title: "Document",
      filter: "document",
      icon: FileText,
    },
  ];

  const handleFilterClick = (filter: string) => {
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <Sidebar className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white border-r border-gray-700/50 shadow-lg">
      <SidebarContent>
        {/* App logo/branding */}
        <div className="px-4 py-6  flex items-center justify-center border-b border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900">
          <Link
            to="/dashboard"
            className=" text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center justify-center"
          >
            <span className="mr-2 text-blue-400 items-center flex">
              <FileText size={20} />
            </span>
            LinkVault
          </Link>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-8 px-4">
              {items.map((item) => {
                const isSelected = selectedFilter === item.filter;

                return (
                  <SidebarMenuItem key={item.title} className="mb-4">
                    <SidebarMenuButton
                      className={`w-full py-5 px-5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 text-white"
                          : "hover:bg-gray-800/60 text-gray-300 hover:text-white"
                      }`}
                      onClick={() => handleFilterClick(item.filter)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-lg `}
                        >
                          <item.icon size={20} />
                        </div>
                        <span className="text-base font-medium">
                          {item.title}
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
