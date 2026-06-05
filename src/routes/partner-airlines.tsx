import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plane, MessageCircle, Star, Globe, Users, Award, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/partner-airlines")({
  component: PartnerAirlines,
});

// ─── Enhanced Airlines Data ────────────────────────────────────────────────────
const AIRLINES_DATA = [
  // Pakistani
  { name: "Pakistan International Airlines", code: "PIA", flag: "🇵🇰", category: "Pakistani", hub: "Islamabad / Karachi", founded: "1955", iata: "PK", color: "#1a6b3a", bgLight: "from-green-50 to-emerald-50", accent: "bg-green-500", features: ["Pakistan's national carrier", "Extensive domestic network", "Direct routes to 30+ countries", "Dedicated Hajj & Umrah flights", "Cargo & charter services"] },
  { name: "AirSial", code: "AIRSIAL", flag: "🇵🇰", category: "Pakistani", hub: "Sialkot", founded: "2020", iata: "PF", color: "#0052a5", bgLight: "from-blue-50 to-sky-50", accent: "bg-blue-500", features: ["Modern fuel-efficient fleet", "Growing domestic operations", "Focus on punctuality & service", "Sialkot hub connectivity", "Competitive pricing"] },
  { name: "Fly Jinnah", code: "FLY JINNAH", flag: "🇵🇰", category: "Pakistani", hub: "Karachi", founded: "2022", iata: "9P", color: "#c0392b", bgLight: "from-red-50 to-rose-50", accent: "bg-red-500", features: ["Budget-friendly fares", "Air Arabia group expertise", "Ultra-low-cost carrier model", "Rapid network expansion", "Transparent pricing"] },
  { name: "SereneAir", code: "SERENE", flag: "🇵🇰", category: "Pakistani", hub: "Islamabad / Lahore", founded: "2017", iata: "ER", color: "#6c3483", bgLight: "from-purple-50 to-violet-50", accent: "bg-purple-500", features: ["Premium cabin comfort", "Strong domestic presence", "Award-winning customer service", "Modern Boeing 737 fleet", "Flexible fare options"] },

  // Gulf & Middle East
  { name: "Emirates", code: "EMIRATES", flag: "🇦🇪", category: "Gulf & Middle East", hub: "Dubai (DXB)", founded: "1985", iata: "EK", color: "#d4af37", bgLight: "from-amber-50 to-yellow-50", accent: "bg-amber-500", features: ["World's largest A380 operator", "Connectivity via Dubai hub", "Premium ice entertainment", "500+ global destinations", "Skywards loyalty program"] },
  { name: "Qatar Airways", code: "QATAR", flag: "🇶🇦", category: "Gulf & Middle East", hub: "Doha (DOH)", founded: "1993", iata: "QR", color: "#8b0000", bgLight: "from-red-50 to-rose-50", accent: "bg-rose-600", features: ["World's Best Airline 2024", "Award-winning Business Class", "Doha hub for easy connections", "Privilege Club rewards", "100+ destinations from Pakistan"] },
  { name: "Etihad Airways", code: "ETIHAD", flag: "🇦🇪", category: "Gulf & Middle East", hub: "Abu Dhabi (AUH)", founded: "2003", iata: "EY", color: "#c59a48", bgLight: "from-amber-50 to-orange-50", accent: "bg-orange-400", features: ["Luxurious The Residence suite", "Abu Dhabi hub connectivity", "Europe & Americas access", "Guest Miles program", "Medical + Umrah packages"] },
  { name: "flydubai", code: "FLYDUBAI", flag: "🇦🇪", category: "Gulf & Middle East", hub: "Dubai (DWC)", founded: "2009", iata: "FZ", color: "#e67e22", bgLight: "from-orange-50 to-amber-50", accent: "bg-orange-500", features: ["Budget carrier from Dubai", "SKYWARDS mile accrual", "100+ destinations", "Modern Boeing 737 MAX", "Connecting to Emirates network"] },
  { name: "Air Arabia", code: "AIRARABIA", flag: "🇦🇪", category: "Gulf & Middle East", hub: "Sharjah (SHJ)", founded: "2003", iata: "G9", color: "#e74c3c", bgLight: "from-red-50 to-orange-50", accent: "bg-red-500", features: ["GCC's first LCC", "Sharjah hub for easy access", "Strong Umrah charter", "Airarabia.com easy booking", "Budget-friendly to 180+ cities"] },
  { name: "Saudi Arabian Airlines", code: "SAUDIA", flag: "🇸🇦", category: "Gulf & Middle East", hub: "Jeddah (JED) / Riyadh (RUH)", founded: "1945", iata: "SV", color: "#006400", bgLight: "from-green-50 to-teal-50", accent: "bg-green-600", features: ["Largest Hajj flights operator", "Riyadh & Jeddah hubs", "Alfursan loyalty miles", "Saudi Vision 2030 airline", "Direct Pakistan routes"] },
  { name: "Flynas", code: "FLYNAS", flag: "🇸🇦", category: "Gulf & Middle East", hub: "Riyadh (RUH)", founded: "2007", iata: "XY", color: "#e74c3c", bgLight: "from-red-50 to-rose-50", accent: "bg-red-500", features: ["Saudi LCC pioneer", "Affordable hajj transfers", "70+ regional destinations", "Worker-friendly routes", "Nasmiles loyalty points"] },
  { name: "Kuwait Airways", code: "KUWAIT", flag: "🇰🇼", category: "Gulf & Middle East", hub: "Kuwait City (KWI)", founded: "1953", iata: "KU", color: "#007848", bgLight: "from-green-50 to-emerald-50", accent: "bg-teal-600", features: ["Gulf's oldest carrier", "Strong Pakistan connections", "Competitive Gulf transit fares", "Oasis loyalty program", "Direct Islamabad & Karachi routes"] },
  { name: "Gulf Air", code: "GULFAIR", flag: "🇧🇭", category: "Gulf & Middle East", hub: "Bahrain (BAH)", founded: "1950", iata: "GF", color: "#c0392b", bgLight: "from-rose-50 to-pink-50", accent: "bg-rose-500", features: ["One of MENA's oldest airlines", "Bahrain hub connectivity", "Europe via Gulf access", "Falcon Gold Business", "Duty-free onboard excellence"] },
  { name: "Oman Air", code: "OMAN AIR", flag: "🇴🇲", category: "Gulf & Middle East", hub: "Muscat (MCT)", founded: "1993", iata: "WY", color: "#8b0000", bgLight: "from-red-50 to-orange-50", accent: "bg-red-700", features: ["Consistent quality rankings", "Muscat hub access", "Sindbad loyalty program", "Premium regional flying", "New Boeing & Airbus fleet"] },

  // Europe & Turkey
  { name: "Turkish Airlines", code: "TURKISH", flag: "🇹🇷", category: "Europe & Turkey", hub: "Istanbul (IST)", founded: "1933", iata: "TK", color: "#e74c3c", bgLight: "from-red-50 to-rose-50", accent: "bg-red-600", features: ["Flies to most countries globally", "Istanbul mega-hub connections", "Miles&Smiles program", "Best continental airline", "Direct ISB, LHE, KHI routes"] },
  { name: "British Airways", code: "BRITISH", flag: "🇬🇧", category: "Europe & Turkey", hub: "London Heathrow (LHR)", founded: "1974", iata: "BA", color: "#002157", bgLight: "from-blue-50 to-indigo-50", accent: "bg-blue-800", features: ["London direct from Pakistan", "BA Avios reward flights", "Premium First & Club World", "Oneworld alliance access", "UK visa pre-clearance support"] },

  // East Asia
  { name: "Air China", code: "AIRCHINA", flag: "🇨🇳", category: "East Asia", hub: "Beijing (PEK)", founded: "1988", iata: "CA", color: "#c0392b", bgLight: "from-red-50 to-rose-50", accent: "bg-red-600", features: ["China's flag carrier", "Beijing Capital hub", "Star Alliance member", "CPEC corridor specialist", "500+ global destinations"] },
  { name: "China Southern", code: "CSAIR", flag: "🇨🇳", category: "East Asia", hub: "Guangzhou (CAN)", founded: "1988", iata: "CZ", color: "#003087", bgLight: "from-blue-50 to-indigo-50", accent: "bg-blue-700", features: ["Asia's largest airline by fleet", "Guangzhou super-hub", "SkyTeam alliance", "Pearl program loyalty", "Vast China domestic connections"] },

  // SE Asia
  { name: "Thai Airways", code: "THAI", flag: "🇹🇭", category: "SE Asia", hub: "Bangkok (BKK)", founded: "1960", iata: "TG", color: "#6c3483", bgLight: "from-purple-50 to-violet-50", accent: "bg-purple-600", features: ["Southeast Asia specialist", "Royal Orchid Plus miles", "Bangkok Suvarnabhumi hub", "Premium hospitality cabin", "10+ weekly Pakistan flights"] },
  { name: "Batik Air Malaysia", code: "BATIK", flag: "🇲🇾", category: "SE Asia", hub: "Kuala Lumpur (KUL)", founded: "2013", iata: "OD", color: "#e74c3c", bgLight: "from-red-50 to-orange-50", accent: "bg-red-500", features: ["Full-service at LCC prices", "KL hub connectivity", "Lion Air Group network", "Asia wide connections", "Generous baggage allowance"] },

  // Central Asia
  { name: "Uzbekistan Airways", code: "UZBEK", flag: "🇺🇿", category: "Central Asia", hub: "Tashkent (TAS)", founded: "1992", iata: "HY", color: "#1a6b3a", bgLight: "from-green-50 to-teal-50", accent: "bg-green-600", features: ["Tashkent gateway to CIS", "Direct Islamabad connections", "Central Asia specialist", "Competitive Tashkent fares", "Reliable onward connections"] },

  // Africa
  { name: "Ethiopian Airlines", code: "ETHIOPIAN", flag: "🇪🇹", category: "Africa", hub: "Addis Ababa (ADD)", founded: "1945", iata: "ET", color: "#007848", bgLight: "from-green-50 to-emerald-50", accent: "bg-green-600", features: ["Africa's largest airline", "ShebaMiles loyalty", "Star Alliance member", "North America hub for Africa", "55+ African destinations"] },
];

const CATEGORIES = ["All", "Pakistani", "Gulf & Middle East", "Europe & Turkey", "East Asia", "SE Asia", "Central Asia", "Africa"];

const CATEGORY_ICONS: Record<string, string> = {
  "All": "✈️",
  "Pakistani": "🇵🇰",
  "Gulf & Middle East": "🌙",
  "Europe & Turkey": "🌍",
  "East Asia": "🏯",
  "SE Asia": "🌺",
  "Central Asia": "🏔️",
  "Africa": "⭐",
};

const STATS = [
  { value: "22+", label: "Partner Airlines", icon: Plane },
  { value: "140+", label: "Destinations", icon: Globe },
  { value: "50K+", label: "Happy Travelers", icon: Users },
  { value: "IATA", label: "Authorized Agent", icon: Award },
];

// ─── Airline Card ──────────────────────────────────────────────────────────────
function AirlineCard({ airline, index }: { airline: typeof AIRLINES_DATA[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm cursor-pointer select-none"
      style={{ boxShadow: hovered ? `0 20px 50px ${airline.color}18, 0 4px 15px rgba(0,0,0,0.06)` : "" }}
    >
      {/* Top Color Band */}
      <div className="h-1.5 w-full transition-all duration-500" style={{ backgroundColor: airline.color, opacity: hovered ? 1 : 0.5 }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-all duration-500 shadow-sm"
              style={{ backgroundColor: hovered ? airline.color : "#f4f4f5" }}
            >
              {airline.flag}
            </div>
            <div>
              <h3 className="text-sm font-black text-foreground leading-tight tracking-tight group-hover:text-foreground/90 transition-colors line-clamp-2">
                {airline.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full border" style={{ color: airline.color, borderColor: `${airline.color}40`, backgroundColor: `${airline.color}08` }}>
                  {airline.iata}
                </span>
                <span className="text-[9px] text-muted-foreground/60 font-medium">Est. {airline.founded}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hub */}
        <div className="flex items-center gap-1.5 mb-4">
          <Globe size={11} className="text-muted-foreground/40 shrink-0" />
          <span className="text-[10px] text-muted-foreground/60 font-semibold truncate">{airline.hub}</span>
        </div>

        {/* Features — always show 2, expand on hover */}
        <div className="space-y-2">
          {airline.features.slice(0, hovered ? 5 : 2).map((f, i) => (
            <AnimatePresence key={f}>
              <motion.div
                initial={i >= 2 ? { opacity: 0, height: 0 } : { opacity: 1, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, delay: i > 1 ? (i - 2) * 0.05 : 0 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 size={12} className="mt-0.5 shrink-0 transition-colors duration-300" style={{ color: hovered ? airline.color : "#d1d5db" }} />
                <span className="text-[11px] font-medium text-muted-foreground leading-snug">{f}</span>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          className="mt-5 pt-4 border-t border-border/40"
        >
          <a
            href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi! I'd like to book a flight with ${airline.name}. Please share the best available fares.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full text-[10px] font-black uppercase tracking-widest transition-colors"
            style={{ color: airline.color }}
          >
            <span>Enquire Now</span>
            <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ backgroundColor: `${airline.color}15` }}>
              <MessageCircle size={13} style={{ color: airline.color }} />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────
function PartnerAirlines() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? AIRLINES_DATA
    : AIRLINES_DATA.filter((a) => a.category === activeCategory);

  const grouped = CATEGORIES.filter((c) => c !== "All").reduce((acc, cat) => {
    const airlines = filtered.filter((a) => a.category === cat);
    if (airlines.length > 0) acc[cat] = airlines;
    return acc;
  }, {} as Record<string, typeof AIRLINES_DATA>);

  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#03060f] pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,47,47,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,195,247,0.06),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Floating planes decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/3"
              style={{ left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            >
              <Plane size={40 + i * 10} />
            </motion.div>
          ))}
        </div>

        <div className="container-px relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">AirLinks Partner Network</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-6">
              World-Class{" "}
              <span className="text-primary italic">Airlines.</span>
              <br />
              <span className="text-white/30">One Agency.</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 font-medium max-w-2xl leading-relaxed mt-6">
              Air Connection is an IATA-authorized travel partner with direct access to real-time fares from{" "}
              <span className="text-white/80 font-bold">22+ global carriers</span>. From budget to luxury —
              we connect Pakistan to the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'd like to book a flight. Please help me find the best fares.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-white font-black text-sm px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(211,47,47,0.3)] hover:shadow-[0_8px_30px_rgba(211,47,47,0.4)] hover:-translate-y-0.5 transition-all group/cta"
              >
                <MessageCircle size={16} />
                Book a Flight Now
                <ChevronRight size={14} className="transition-transform group-hover/cta:translate-x-1" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-bold text-sm px-8 py-3.5 rounded-full transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="container-px mx-auto max-w-7xl mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div className="h-9 w-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xl font-black text-white leading-none">{value}</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className="sticky top-16 z-40 bg-[#f9fafb]/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container-px mx-auto max-w-7xl py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_4px_12px_rgba(211,47,47,0.25)]"
                    : "bg-white border border-border/60 text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                <span>{cat}</span>
                {cat !== "All" && (
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                    {AIRLINES_DATA.filter((a) => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Airlines Grid ── */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            <motion.div key="all" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {Object.entries(grouped).map(([cat, airlines]) => (
                <div key={cat} className="mb-16 last:mb-0">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
                    <div>
                      <h2 className="text-xl font-black text-foreground tracking-tight">{cat}</h2>
                      <p className="text-xs text-muted-foreground font-medium mt-0.5">{airlines.length} partner airline{airlines.length !== 1 ? "s" : ""}</p>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-border/80 to-transparent ml-2" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {airlines.map((airline, i) => (
                      <AirlineCard key={airline.name} airline={airline} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl">{CATEGORY_ICONS[activeCategory]}</span>
                <div>
                  <h2 className="text-xl font-black text-foreground tracking-tight">{activeCategory}</h2>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{filtered.length} partner airline{filtered.length !== 1 ? "s" : ""}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((airline, i) => (
                  <AirlineCard key={airline.name} airline={airline} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Why Book With Us ── */}
      <section className="bg-white border-y border-border/40 py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3">Why Choose Air Connection</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Direct Access. Better Prices.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎫", title: "Real-Time Fares", desc: "Live pricing from all partner airlines — no markup, no middlemen" },
              { emoji: "📞", title: "Expert Advice", desc: "Our ticketing specialists find you the best route & cabin every time" },
              { emoji: "✅", title: "IATA Authorized", desc: "Fully licensed to issue tickets for all international carriers" },
              { emoji: "💬", title: "WhatsApp Booking", desc: "Book 24/7 via WhatsApp — instant confirmation, no paperwork" },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl bg-muted/30 border border-border/40 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl mb-4 block">{emoji}</span>
                <h3 className="text-sm font-black text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#03060f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,47,47,0.12),transparent_60%)]" />
        <div className="container-px mx-auto max-w-3xl text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            {["🇵🇰","🇦🇪","🇶🇦","🇹🇷","🇬🇧","🇩🇪","🇨🇳","🇹🇭"].map((flag, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              >
                {flag}
              </motion.span>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Ready to Fly?
          </h2>
          <p className="text-white/40 font-medium mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Tell us your destination — we'll find you the best available fares across all our partner airlines, instantly on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Air Connection! I'd like to book a flight. Please help me find the best available fares from your partner airlines.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white font-black text-sm px-10 py-4 rounded-full shadow-[0_4px_30px_rgba(211,47,47,0.35)] hover:shadow-[0_8px_40px_rgba(211,47,47,0.5)] hover:-translate-y-1 transition-all duration-300 group/final"
          >
            <MessageCircle size={18} />
            WhatsApp Our Team
            <ArrowRight size={16} className="transition-transform group-hover/final:translate-x-1" />
          </a>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-6">
            IATA Authorized · {COMPANY.hours}
          </p>
        </div>
      </section>
    </div>
  );
}
