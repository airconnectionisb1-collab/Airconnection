import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Plane, Award, Sparkles, FileText, Globe2, Users } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import schengenImg from "@/assets/dest-schengen.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import { SEOBlock } from "./SEOBlock";
import { COUNTRIES } from "@/data/countries-data";
import React, { Suspense } from "react";
import { CountryCard } from "./CountryCard";
import { cn } from "@/lib/utils";
import { BookingWidget } from "./BookingWidget";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary-glow)_0%,_transparent_50%)] opacity-[0.05]" />

      
      <div className="container-px relative mx-auto max-w-7xl py-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-6 py-2 border border-primary/10 mb-10">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Pakistan's No.1 Consultancy</span>
            </div>
            
            <h1 className="text-6xl font-black leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:text-8xl mb-8">
              Your World, <br />
              <span className="text-primary italic">Connected.</span>
            </h1>
            
            <p className="max-w-xl text-xl font-medium leading-relaxed text-muted-foreground mb-12">
              Experience seamless global travel with our premium IATA-authorized 
              visa consultancy and expert airline ticketing services.
            </p>

            <div className="space-y-8">
              <div className="relative p-8 rounded-[3rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-border/40 overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe2 size={150} className="text-primary -rotate-12" />
                </div>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground mb-4">
                  Premium Travel <br /> Expertise
                </h2>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/visa-services"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-sm font-black text-white shadow-[0_15px_35px_rgba(211,47,47,0.3)] transition-all hover:shadow-[0_20px_45px_rgba(211,47,47,0.4)] hover:-translate-y-1"
                  >
                    Start Your Application
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { v: "15+", l: "Years", icon: Award },
                  { v: "98%", l: "Success", icon: ShieldCheck },
                  { v: "20K+", l: "Clients", icon: Users },
                ].map((s) => (
                  <div key={s.l} className="p-6 rounded-[2rem] bg-white border border-border/40 shadow-sm hover:border-primary/20 transition-all group">
                    <s.icon size={22} className="mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-black text-foreground leading-none">{s.v}</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-2">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-20 bg-primary/5 blur-3xl rounded-full opacity-40 animate-pulse" />
              
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-7">
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[8px] border-white aspect-[4/5] group-hover:-rotate-3 transition-transform duration-1000">
                    <img
                      src={heroImg}
                      alt="Travel destinations worldwide"
                      className="h-full w-full object-cover scale-105 group-hover:scale-115 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-glow mb-2">Prime Destination</p>
                      <h3 className="text-4xl font-black tracking-tight leading-[0.9]">Schengen <br /> Mastery</h3>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 space-y-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] border-[6px] border-white aspect-square group-hover:rotate-6 transition-transform duration-1000">
                    <img
                      src={ukImg}
                      alt="Expert Consultancy - UK travel"
                      className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/60 mb-1">Destination</p>
                      <p className="text-sm font-black text-white leading-tight">Expert Consultancy</p>
                    </div>
                  </div>
                  <div className="relative p-8 rounded-[2.5rem] bg-white shadow-2xl border border-white/60 group-hover:translate-x-4 transition-transform duration-1000">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white mb-6 shadow-[0_10px_20px_rgba(211,47,47,0.3)]">
                      <Plane size={24} strokeWidth={2.5} />
                    </div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Global Connectivity</p>
                    <p className="text-lg font-black text-foreground leading-tight tracking-tight">IATA Expert Ticketing</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 h-28 w-28 rounded-full bg-accent flex flex-col items-center justify-center text-accent-foreground shadow-2xl border-4 border-white z-20"
              >
                <span className="text-2xl font-black leading-none">IATA</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Authorized</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 relative z-50">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
