
import { Link } from 'react-router-dom';
import { Button } from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ModeToggle } from '@/components/ModeToggle';

export function Landing() {
  return (
    <div className="min-h-full bg-background">
      <nav className="border-b border-border/40">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent ">
            LinkVault
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/signin">Login</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
              <ModeToggle/>
          </div>
        </div>
      </nav>

      <main className="container px-4 sm:px-8">
        <div className="py-20 sm:py-32">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="text-muted-foreground">
                  Just launched on Product Hunt 🚀
                </span>
              </div>
              <div className="space-y-4 ">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent pb-1">
                  Your Digital Library for Important Links
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  Save and organize content from YouTube, X (Twitter), and online documents.
                  Create beautiful collections and share them with anyone, anywhere.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/signup">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Free Forever
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  No Credit Card Required
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Unlimited Collections
                </div>
              </div>
            </div>

            
          </div>

          <div className="mt-32 pb-16">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Supported Platforms</h2>
              <p className="text-muted-foreground">Save content from your favorite platforms</p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-medium">YouTube</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="font-medium">X (Twitter)</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                <span className="font-medium">Documents</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}