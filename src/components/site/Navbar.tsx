import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[100] mx-auto w-[97%] max-w-[1400px] transition-all duration-500 ${
          scrolled
            ? "top-2 h-14 rounded-[1.5rem] bg-background/95 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "top-3 md:top-12 h-14 md:h-16 rounded-xl md:rounded-[1.5rem] bg-background/70 backdrop-blur-md border border-white/20"
        }`}
      >
        <div className="px-3 md:px-5 mx-auto flex h-full items-center justify-between gap-2 w-full">
          {/* ── Brand ── */}
          <Link to="/" className="group flex flex-shrink-0 items-center gap-2">
            <div className="relative">
              <img
                src={logo}
                alt={COMPANY.name}
                className={`${scrolled ? "h-7" : "h-9"} w-auto object-contain transition-all duration-500 group-hover:scale-105`}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm md:text-base font-black tracking-tight text-foreground whitespace-nowrap">
                Air <span className="text-primary">Connection</span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/60 whitespace-nowrap">
                Travel &amp; Tours
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center px-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative px-2.5 xl:px-3.5 py-2 text-[11px] xl:text-[12.5px] font-bold text-foreground/70 hover:text-primary transition-all duration-300 data-[status=active]:text-primary whitespace-nowrap rounded-lg hover:bg-primary/5"
              >
                <span className="relative z-10 transition-transform group-hover:-translate-y-0.5 inline-block">
                  {l.label}
                </span>
                <span className="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* SSL Badge */}
            <div className="relative group/ssl flex items-center justify-center h-8 w-8 shrink-0 rounded-full border border-primary/10 bg-primary/5 transition-all hover:bg-primary/10 cursor-help">
              <ShieldCheck size={15} className="text-primary relative z-10" />
              <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-30" />
              {/* Tooltip */}
              <div className="absolute top-full mt-3 right-0 w-56 origin-top-right scale-95 opacity-0 invisible group-hover/ssl:visible group-hover/ssl:scale-100 group-hover/ssl:opacity-100 transition-all duration-300 z-[200]">
                <div className="absolute -top-3 left-0 w-full h-3" />
                <div className="rounded-xl bg-card border border-border shadow-2xl p-3.5">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="flex flex-col text-left">
                      <h4 className="text-xs font-bold text-foreground">SSL Secure</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed mt-1 font-medium">
                        256-bit encrypted & IATA authorized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-primary px-5 py-2 text-[11px] xl:text-xs font-black text-white shadow-[0_4px_15px_rgba(211,47,47,0.25)] transition-all hover:shadow-[0_8px_25px_rgba(211,47,47,0.3)] hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get Started
                <ChevronRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover/btn:translate-y-0" />
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-foreground shadow-sm backdrop-blur-md transition-all hover:bg-muted active:scale-95"
            aria-label="Open menu"
          >
            <Menu size={20} className="text-primary" />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background shadow-2xl z-[151]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt={COMPANY.name} className="h-8 w-auto" />
                    <div className="flex flex-col leading-none">
                      <span className="text-sm font-black text-foreground">Air Connection</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Travel &amp; Tours</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="space-y-1">
                    {NAV_LINKS.map((l, i) => (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 + 0.1 }}
                      >
                        <Link
                          to={l.to}
                          activeOptions={{ exact: l.to === "/" }}
                          activeProps={{ className: "bg-primary/5 text-primary" }}
                          className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
                        >
                          {l.label}
                          <ChevronRight size={16} className="opacity-40" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-5 border-t border-border bg-muted/30">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-black text-white shadow-lg transition-transform active:scale-[0.98]"
                  >
                    Contact Us <ChevronRight size={16} />
                  </Link>

                  <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                      <ShieldCheck size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-emerald-700 leading-none">SSL Certified Secure</span>
                      <span className="text-[9px] font-bold text-emerald-600/70 mt-0.5">Active 256-bit Encryption</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="text-[10px] font-medium text-muted-foreground flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" /> {COMPANY.address}
                    </div>
                    <p className="text-[9px] text-muted-foreground/50 text-center uppercase tracking-widest font-bold">
                      &copy; {new Date().getFullYear()} {COMPANY.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
