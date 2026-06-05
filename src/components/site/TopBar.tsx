import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TopBar() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen = day !== 0 && hour >= 8 && hour < 20;

  return (
    <div className="hidden md:block border-b border-border/40 bg-white/40 backdrop-blur-md text-[10px] py-1.5 transition-all duration-500">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-3 py-1 pr-6 border-r border-dotted border-border/60">
            <span className="relative flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-red-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}></span>
            </span>
            <span className="font-black text-foreground tracking-tight uppercase">{isOpen ? "Success Hub Open" : "Support Offline"}</span>
          </div>
          
          <div className="flex items-center px-6 border-r border-dotted border-border/60 gap-6 text-muted-foreground font-black uppercase tracking-widest">
            <span className="inline-flex items-center gap-2 whitespace-nowrap group">
              <MapPin size={12} className="text-primary group-hover:scale-110 transition-transform" />
              Islamabad, PK
            </span>
          </div>

          <div className="flex items-center px-6 gap-6 text-muted-foreground font-black uppercase tracking-widest">
            <span className="inline-flex items-center gap-2 group">
              <Clock size={12} className="text-primary group-hover:scale-110 transition-transform" />
              08:00 — 20:00
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center px-6 border-l border-dotted border-border/60">
            <a
              href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-black uppercase tracking-widest group"
            >
              <Phone size={12} className="text-primary group-hover:rotate-12 transition-transform" />
              {COMPANY.mobile}
            </a>
          </div>
          <div className="flex items-center pl-6 border-l border-dotted border-border/60">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-black uppercase tracking-widest group"
            >
              <Mail size={12} className="text-primary group-hover:-translate-y-0.5 transition-transform" />
              Direct Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
