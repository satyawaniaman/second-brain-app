import DialogDemo from "@/components/CreateModel";
import { Card } from "../components/Card";
import { ThemeProvider } from "../components/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useContent } from "@/hooks/useContent";
import { PlusCircle, Share2 } from "lucide-react";

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [open, refresh]);

  const handleDeleteContent = () => {
    refresh();
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Sidebar */}
        <div className="w-64 fixed h-screen">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Buttons */}
          <div className="fixed w-[calc(100%-256px)] flex gap-4 justify-end p-5 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800/50">
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
              className="border-gray-300 dark:border-gray-700 flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </Button>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-6 mt-20">
            {contents?.map(({ type, link, title, id }) => (
              <Card
                type={type}
                link={link}
                title={title}
                id={id}
                key={id}
                onDelete={handleDeleteContent}
              />
            ))}

            {(!contents || contents.length === 0) && (
              <div className="col-span-full text-center py-20">
                <div className="inline-flex justify-center items-center w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
                  <PlusCircle size={38} className="text-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                  Your collection is empty
                </p>
                <p className="text-gray-500 dark:text-gray-500 mb-6 max-w-md mx-auto">
                  Start adding content to build your digital library. You can
                  add videos, tweets, and documents.
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
      </div>
      <DialogDemo open={open} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
}
