import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  features?: string[];
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  features = [
    "Free Forever",
    "No Credit Card Required",
    "Unlimited Collections",
  ],
}: HeroProps) {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Background gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-600/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/5 dark:bg-indigo-600/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm bg-muted/40 shadow-sm">
          <span className="text-primary dark:text-primary/90">
            ✨ Just launched on Product Hunt 🚀
          </span>
        </div>

        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:via-white dark:to-white/60 bg-clip-text text-transparent pb-2">
            {title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <Link to={ctaLink}>
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-blue-500/30 hover:bg-blue-500/10 text-gray-800 dark:text-gray-200"
            asChild
          >
            <Link to="/demo">Personalised demo →</Link>
          </Button>
        </div>

        {features && features.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-gray-600 dark:text-muted-foreground border-t border-border/30 pt-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
