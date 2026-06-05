import { motion } from "framer-motion";
import { TOP_PARTNERS, AIRLINES } from "@/data/airlines";
import { Plane, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AirlinesSection() {
  // Get full airline data for top partners
  const topPartnerData = TOP_PARTNERS.map(name => 
    AIRLINES.find(a => a.name.includes(name))
  ).filter(Boolean);

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-6 py-2 border border-primary/10 mb-6 font-black uppercase tracking-[0.3em] text-[10px] text-primary">
              <Plane size={14} /> Global Partners
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl leading-[0.9]">
              Connecting You <br />
              <span className="text-primary italic">Globally.</span>
            </h2>
          </div>
          <Link
            to="/partner-airlines"
            className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary"
          >
            All Airlines <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topPartnerData.slice(0, 8).map((airline, idx) => (
            <motion.div
              key={airline?.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-48 rounded-[2.5rem] bg-white p-8 border border-border/40 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.05)] hover:border-primary/20 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-700">
                <Plane size={140} className="-rotate-12" />
              </div>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50 text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                <Plane size={24} strokeWidth={2.5} />
              </div>
              
              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">Partner Airline</p>
                <h3 className="text-xl font-black tracking-tight text-foreground mt-1 group-hover:translate-x-1 transition-transform">{airline?.name.split(' (')[0]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
