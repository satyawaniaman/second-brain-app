import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center p-8 rounded-2xl border border-border/40 bg-white/80 dark:bg-card/30 hover:shadow-lg transition-all hover:bg-white dark:hover:bg-card/60 hover:border-blue-500/20 backdrop-blur-sm group">
      <div className="mb-6 p-4 rounded-xl bg-blue-100 dark:bg-blue-500/10 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/15 transition-colors">
        {icon}
      </div>
      <h3 className="font-medium text-lg text-center mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-muted-foreground text-center leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
