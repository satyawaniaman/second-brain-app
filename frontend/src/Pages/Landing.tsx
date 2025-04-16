import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { LogoScroll } from "@/components/LogoScroll";

export function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col">
      <nav className="border-b border-gray-200 dark:border-blue-500/10 py-4 sticky top-0 backdrop-blur-sm bg-white/95 dark:bg-background/95 z-10">
        <div className="container flex items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            LinkVault
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 dark:text-gray-200"
              asChild
            >
              <Link to="/signin">Login</Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="container px-4 md:px-8 py-20 md:py-28 lg:py-32">
          <Hero
            title="Unlock your digital library"
            subtitle="One platform to save, organize, and utilize content from across the web. Your personal knowledge hub for important links, documents, and resources."
            ctaText="Get Started Free"
            ctaLink="/signup"
          />
        </section>

        <section className="py-10 border-y border-gray-200 dark:border-blue-500/10 bg-white/60 dark:bg-muted/5">
          <div className="container px-4 md:px-8">
            <p className="text-center text-sm text-gray-600 dark:text-muted-foreground mb-8">
              Trusted by thousands of users from leading companies
            </p>
            <LogoScroll />
          </div>
        </section>

        <section className="container px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Supported Platforms
              </h2>
              <p className="text-gray-600 dark:text-muted-foreground max-w-xl mx-auto">
                Save and organize content from your favorite platforms in one
                centralized location
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FeatureCard
                icon={
                  <svg
                    className="w-10 h-10 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                }
                title="YouTube"
                description="Save valuable tutorials and videos for later reference"
              />

              <FeatureCard
                icon={
                  <svg
                    className="w-10 h-10 text-gray-800 dark:text-foreground"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
                title="X (Twitter)"
                description="Keep track of valuable threads and discussions"
              />

              <FeatureCard
                icon={
                  <svg
                    className="w-10 h-10 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                  </svg>
                }
                title="Documents"
                description="Save articles, research papers and blog posts"
              />
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-8 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-background/95">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-blue-500/10 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M20 20.0001V17.0001C20 13.5001 16.5 12.0001 12 12.0001"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 20.0001V17.0001C4 13.5001 7.5 12.0001 12 12.0001"
                      strokeLinecap="round"
                    />
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  That thing you saved?
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                  Yes, it's here. Stop losing important ideas. Find things at
                  speed of thought.
                </p>
              </div>

              <div className="bg-white dark:bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-blue-500/10 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"
                      strokeLinecap="round"
                    />
                    <path d="M14 3v5h5" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="6" />
                    <path d="M16 14v4h4" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  Your memory palace
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                  Your ideas are perfectly organised and instantly accessible.
                  Never lose track again.
                </p>
              </div>

              <div className="bg-white dark:bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-blue-500/10 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  All your ideas, connected
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                  Save what sparks your curiosity: articles, videos, notes,
                  PDFs, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-14">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                How It Works
              </h2>
              <p className="text-gray-600 dark:text-muted-foreground max-w-xl mx-auto">
                Simple steps to organize your digital library
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/20">
                  <span className="font-bold text-xl text-blue-500">1</span>
                </div>
                <h3 className="font-medium text-xl mb-3 text-gray-900 dark:text-white">
                  Save Content
                </h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Easily save links from your favorite platforms with our
                  browser extension
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/20">
                  <span className="font-bold text-xl text-blue-500">2</span>
                </div>
                <h3 className="font-medium text-xl mb-3 text-gray-900 dark:text-white">
                  Organize
                </h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Create collections to categorize your content in meaningful
                  ways
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/20">
                  <span className="font-bold text-xl text-blue-500">3</span>
                </div>
                <h3 className="font-medium text-xl mb-3 text-gray-900 dark:text-white">
                  Share
                </h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Share your collections with colleagues, friends, or keep them
                  private
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
                asChild
              >
                <Link to="/signup">
                  Start Organizing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200 dark:border-blue-500/10 bg-gray-50 dark:bg-muted/5">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center border border-gray-200 dark:border-blue-500/10 rounded-xl p-4 backdrop-blur-sm bg-white dark:bg-card/30">
                <div className="text-xs uppercase text-gray-500 dark:text-muted-foreground mb-1">
                  Product of the day
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">
                  1st
                </div>
              </div>
              <div className="text-center border border-gray-200 dark:border-blue-500/10 rounded-xl p-4 backdrop-blur-sm bg-white dark:bg-card/30">
                <div className="text-xs uppercase text-gray-500 dark:text-muted-foreground mb-1">
                  Product of the week
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">
                  1st
                </div>
              </div>
              <div className="text-center border border-gray-200 dark:border-blue-500/10 rounded-xl p-4 backdrop-blur-sm bg-white dark:bg-card/30">
                <div className="text-xs uppercase text-gray-500 dark:text-muted-foreground mb-1">
                  Best productivity tool
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">
                  2024
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200 dark:border-blue-500/10 py-8 mt-auto bg-white dark:bg-background">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500 dark:text-muted-foreground">
                © {new Date().getFullYear()} LinkVault. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  className="text-sm text-gray-500 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/"
                  className="text-sm text-gray-500 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/"
                  className="text-sm text-gray-500 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
