import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  to,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  to?: string;
}) {
  const inner = (
    <div className="group relative overflow-hidden rounded-[3rem] bg-white p-10 border border-border/40 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:border-primary/20 hover:-translate-y-2">
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-muted/30 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
          <Icon size={32} strokeWidth={2} />
        </div>
        
        <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          {title}
        </h3>
        
        <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground line-clamp-3">
          {desc}
        </p>
        
        {to && (
          <div className="mt-10 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            Learn More <span className="text-lg">→</span>
          </div>
        )}
      </div>
    </div>
  );
  return to ? (
    <Link to={to} className="group block h-full">
      {inner}
    </Link>
  ) : (
    <div className="group h-full">{inner}</div>
  );
}
