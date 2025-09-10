import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import Particles from "@/components/magicui/particles";
import { ModeToggle } from "@/components/ModeToggle";
import { FeatureCard } from "@/components/FeatureCard";

export function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <nav className="border-b border-gray-200 dark:border-gray-800 py-4 sticky top-0 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 z-10">
        <div className="container flex items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
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
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
          {/* Particles Background */}
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color="#3b82f6"
            refresh
          />

          {/* Clean background */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900" />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Announcement Banner */}
              <div className="mx-auto max-w-fit">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20 backdrop-blur-sm">
                  ✨ Introducing a knowledge management platform{" "}
                  <Link
                    to="#"
                    className="font-semibold text-blue-600 dark:text-blue-400"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold ">
                  <TextShimmer>Your Second Brain</TextShimmer>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your thoughts into organized knowledge. Capture,
                  connect, and discover insights with our intelligent
                  note-taking platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Hero Image */}
              <div className="mt-16 relative">
                <div className="relative mx-auto max-w-4xl">
                  <div className="relative">
                    <img
                      src="/landing.png"
                      alt="Second Brain App Interface"
                      className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
                    />
                    <BorderBeam size={250} duration={12} delay={9} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                TRUSTED BY TEAMS AT
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-semibold text-lg">Google</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-semibold text-lg">Microsoft</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-lg">Apple</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-semibold text-lg">Netflix</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-semibold text-lg">Spotify</span>
              </div>
            </div>
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

        {/* Features Section */}
        <section className="relative py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Choose LinkVault?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Transform how you save, organize, and rediscover digital
                  content with our intelligent platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative">
                  <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full hover:shadow-lg">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Lightning Fast Search
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Find that thing you saved instantly. Our intelligent
                      search understands context and finds content at the speed
                      of thought.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 h-full hover:shadow-lg">
                    <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-6 shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Your Digital Memory Palace
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Organize ideas perfectly with smart collections. Your
                      knowledge stays structured and instantly accessible.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 h-full hover:shadow-lg">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      All Content, Connected
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Save articles, videos, tweets, documents, and more.
                      Everything you find interesting, all in one intelligent
                      hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  How It Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Three simple steps to transform your digital content
                  management
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connection lines */}
                <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-blue-200 dark:bg-blue-800" />

                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="font-bold text-2xl text-white">1</span>
                    </div>
                    <div className="absolute -inset-2 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">
                    Save Content
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                    Effortlessly capture links, articles, videos, and documents
                    from anywhere on the web with our intuitive tools
                  </p>
                </div>

                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-purple-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="font-bold text-2xl text-white">2</span>
                    </div>
                    <div className="absolute -inset-2 bg-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">
                    Smart Organization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                    AI-powered categorization and custom collections keep your
                    content perfectly organized and easily discoverable
                  </p>
                </div>

                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="font-bold text-2xl text-white">3</span>
                    </div>
                    <div className="absolute -inset-2 bg-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">
                    Instant Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                    Find exactly what you need in seconds with powerful search
                    and intelligent recommendations
                  </p>
                </div>
              </div>

              <div className="mt-20 text-center">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                  asChild
                >
                  <Link to="/signup">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">LV</span>
                    </div>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">
                      LinkVault
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                    Transform your digital content consumption into organized
                    knowledge. Save, organize, and rediscover everything that
                    matters.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Product
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Support
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                    © {new Date().getFullYear()} LinkVault. All rights
                    reserved.
                  </div>
                  <div className="flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
