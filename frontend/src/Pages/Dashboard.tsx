import DialogDemo from "@/components/CreateModel";
import { Card } from "../components/Card";
import { ThemeProvider, useTheme } from "../components/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useContent } from "@/hooks/useContent";
import { PlusCircle, Share2, Search } from "lucide-react";

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { contents, refresh } = useContent();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  useEffect(() => {
    refresh();
  }, [open, refresh]);

  const handleDeleteContent = () => {
    refresh();
  };

  const filteredContents = contents?.filter((content: any) => {
    const matchesSearch = content.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      content.type?.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 fixed h-screen">
        <SidebarProvider>
          <AppSidebar
            onFilterChange={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
        </SidebarProvider>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Search and Buttons */}
        <div className="fixed w-[calc(100%-256px)] flex gap-4 justify-between items-center p-5 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              size={"lg"}
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <PlusCircle size={18} />
              Add Content
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="border-gray-700 bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </Button>
          </div>
        </div>

        {/* Grid Content */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 p-6 mt-20">
          {filteredContents?.map(({ type, link, title, id }) => (
            <div key={id} className="mb-5 break-inside-avoid">
              <Card
                type={type}
                link={link}
                title={title}
                id={id}
                onDelete={handleDeleteContent}
              />
            </div>
          ))}

          {(!filteredContents || filteredContents.length === 0) &&
            contents &&
            contents.length > 0 && (
              <div className="col-span-full text-center py-20">
                <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-800 rounded-full mb-4">
                  <Search size={38} className="text-gray-400" />
                </div>
                <p className="text-gray-400 text-lg mb-4">
                  No content matches your search
                </p>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
              </div>
            )}

          {(!contents || contents.length === 0) && (
            <div className="col-span-full text-center py-20">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-800 rounded-full mb-4">
                <PlusCircle size={38} className="text-blue-500" />
              </div>
              <p className="text-gray-400 text-lg mb-4">
                Your collection is empty
              </p>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Start adding content to build your digital library. You can add
                videos, tweets, and documents.
              </p>
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Your First Item
              </Button>
            </div>
          )}
        </div>
      </div>
      <DialogDemo open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function Dashboard() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DashboardContent />
    </ThemeProvider>
  );
}
