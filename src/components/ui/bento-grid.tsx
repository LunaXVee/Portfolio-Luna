// src/components/ui/bento-grid.tsx
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  className: string;
  background: React.ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[26rem] grid-cols-3 gap-4", // Increased to 26rem for more space
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
      "bg-white border border-neutral-200",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.1),0_4px_8px_rgba(0,0,0,.1),0_20px_40px_rgba(0,0,0,.1)]",
      "transition-all duration-300",
      className,
    )}
    {...props}
  >
    {/* Background Image Section - Top 50% */}
    <div className="relative flex-1 min-h-[50%] overflow-hidden">
      {background}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    {/* Dark Text Section - Bottom 50% with guaranteed space for button */}
    <div className="relative bg-neutral-900 p-5 min-h-[50%] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Icon className="h-7 w-7 text-neutral-300 transition-all duration-300 ease-in-out group-hover:text-white group-hover:scale-110" />
          <h3 className="text-base font-semibold text-white leading-tight line-clamp-1">
            {name}
          </h3>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 line-clamp-2">
          {description}
        </p>
      </div>

      {/* CTA Button - Always has space at bottom */}
      <div className="mt-3 flex-shrink-0">
        <div className="lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
          <Button
            variant="link"
            asChild
            size="sm"
            className="p-0 text-neutral-400 hover:text-white text-sm h-auto"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </div>

    {/* Subtle hover overlay on the entire card */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export { BentoCard, BentoGrid };