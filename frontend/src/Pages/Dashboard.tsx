import DialogDemo from "@/components/CreateModel";
import { Card } from "../components/Card";
import { ThemeProvider } from "../components/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {  SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useContent } from "@/hooks/useContent";

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const {contents, refresh} = useContent();
  useEffect(() => {
    refresh();
  }, [open, refresh])

  console.log('Contents in Dashboard:', contents);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 fixed h-screen">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Buttons */}
          <div className="fixed w-[calc(100%-256px)] flex gap-4 justify-end p-4 z-50 bg-background">
            <Button size={"lg"} onClick={() => setOpen(true)}>Add Content</Button>
            <Button size={"lg"} variant={"secondary"}>Share</Button>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-16">
            {contents?.map(({type, link, title,id}) => (
              <Card 
                type={type}
                link={link}
                title={title}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
      <DialogDemo open={open} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
}
