import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight, Plane, Award, Globe, Shield } from "lucide-react";
import { COMPANY } from "@/data/company";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { AirlinesCloud } from "./AirlinesCloud";

const AIR_LINK_PARTNERS = [
  { code: "PK", name: "Pakistan Int'l", flag: "🇵🇰", tag: "National Carrier" },
  { code: "EK", name: "Emirates", flag: "🇦🇪", tag: "5-Star Global" },
  { code: "QR", name: "Qatar Airways", flag: "🇶🇦", tag: "Award Winning" },
  { code: "EY", name: "Etihad Airways", flag: "🇦🇪", tag: "Premium Service" },
  { code: "TK", name: "Turkish Airlines", flag: "🇹🇷", tag: "Most Destinations" },
  { code: "SV", name: "Saudia", flag: "🇸🇦", tag: "Gulf Leader" },
  { code: "FZ", name: "Fly Dubai", flag: "🇦🇪", tag: "Budget Connect" },
  { code: "PA", name: "AirSial", flag: "🇵🇰", tag: "Modern Fleet" },
  { code: "9P", name: "Fly Jinnah", flag: "🇵🇰", tag: "Low Cost" },
  { code: "ER", name: "SereneAir", flag: "🇵🇰", tag: "Comfort Focus" },
  { code: "BA", name: "British Airways", flag: "🇬🇧", tag: "UK Direct" },
  { code: "LH", name: "Lufthansa", flag: "🇩🇪", tag: "Europe Hub" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <AirlinesCloud />

      {/* ── AirLinks Partner Strip ── */}
      <section className="bg-[#03060f] border-t border-white/5 py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Plane size={12} className="text-primary" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">AirLinks Network</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                Our Global Airline Partners
              </h3>
              <p className="text-xs text-white/30 font-medium mt-1.5 max-w-md">
                Book with confidence through Air Connection's direct partnerships with the world's leading carriers
              </p>
            </div>
            <Link
              to="/partner-airlines"
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border border-primary/20 hover:border-white/20 px-5 py-2.5 rounded-full"
            >
              View All Airlines <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {AIR_LINK_PARTNERS.map((airline) => (
              <Link
                key={airline.code}
                to="/partner-airlines"
                className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/25 transition-all duration-300 text-center"
              >
                <span className="text-2xl">{airline.flag}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-black text-white/90 group-hover:text-white transition-colors leading-tight">{airline.name}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">{airline.tag}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Badges Row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: "IATA Authorized", sub: "Official travel agent" },
              { icon: Shield, label: "SSL Secured", sub: "256-bit encryption" },
              { icon: Globe, label: "Global Coverage", sub: "120+ countries served" },
              { icon: Phone, label: "24/7 Support", sub: "WhatsApp & call" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={14} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/80 leading-none">{label}</span>
                  <span className="text-[9px] text-white/30 font-medium mt-0.5">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Footer ── */}
      <footer className="relative overflow-hidden bg-[#050810] text-white/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,47,47,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container-px mx-auto max-w-7xl pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">

            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-5">
                <Link to="/" className="flex items-center gap-4 group">
                  <div className="relative">
                    <img src={logo} alt={COMPANY.name} className="h-12 w-auto brightness-0 invert transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-white tracking-tighter leading-none uppercase">Air Connection</span>
                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mt-1.5">Travel &amp; Tours</span>
                  </div>
                </Link>
                <p className="text-sm text-white/35 leading-relaxed font-medium">
                  Pakistan's premier IATA-authorized travel consultancy based in Blue Area, Islamabad. Specialists in Schengen, UK, USA &amp; Canada visas, global airline ticketing, and Umrah packages.
                </p>
              </div>

              {/* Meta Tags / Keywords (hidden for SEO, visible as chips) */}
              <div className="space-y-3">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Travel Categories</p>
                <div className="flex flex-wrap gap-2">
                  {["Visa Consultancy", "Air Ticketing", "Umrah Packages", "Hotel Booking", "Travel Insurance", "AirLinks Partner"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[9px] font-bold text-white/40 uppercase tracking-wider hover:bg-white/10 hover:text-white/70 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-10">
                <div className="space-y-3">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, href: COMPANY.socials.facebook, color: "hover:bg-blue-600" },
                      { Icon: Instagram, href: COMPANY.socials.instagram, color: "hover:bg-pink-600" },
                    ].map(({ Icon, href, color }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:-translate-y-1 hover:text-white hover:border-white/20", color)}
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Our Office</h4>
                  <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group/map">
                    <MapPin size={14} className="text-primary group-hover/map:scale-110 transition-transform shrink-0" />
                    <span className="text-xs font-bold">Blue Area, Islamabad (Map)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                {/* Destinations */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Destinations</h4>
                  <ul className="space-y-3">
                    {[
                      { n: "United Kingdom", s: "united-kingdom" },
                      { n: "United States", s: "united-states" },
                      { n: "Schengen Area", s: "schengen" },
                      { n: "Canada", s: "canada" },
                      { n: "Australia", s: "australia" },
                    ].map((d) => (
                      <li key={d.s}>
                      <Link to="/countries/$slug" params={{ slug: d.s }} className="text-xs font-medium text-white/60 hover:text-white transition-all flex items-center gap-2 group/link">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          {d.n}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Services</h4>
                  <ul className="space-y-3">
                    {[
                      { label: "Visa Assistance", to: "/visa-services" },
                      { label: "Air Ticketing", to: "/air-ticketing" },
                      { label: "Partner Airlines", to: "/partner-airlines" },
                      { label: "Hotel Booking", to: "/hotel-booking" },
                      { label: "Holiday Packages", to: "/countries" },
                      { label: "Umrah Services", to: "/umrah" },
                    ].map((link) => (
                      <li key={link.to}>
                        <Link to={link.to as any} className="text-xs font-medium text-white/60 hover:text-white transition-all flex items-center gap-2 group/link">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AirLinks */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/90 flex items-center gap-2">
                    <Plane size={9} className="text-primary" /> AirLinks
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { label: "PIA Pakistan", to: "/partner-airlines" },
                      { label: "Emirates", to: "/partner-airlines" },
                      { label: "Qatar Airways", to: "/partner-airlines" },
                      { label: "Turkish Airlines", to: "/partner-airlines" },
                      { label: "Saudia", to: "/partner-airlines" },
                      { label: "Etihad Airways", to: "/partner-airlines" },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link to={link.to as any} className="text-xs font-medium text-white/60 hover:text-white transition-all flex items-center gap-2 group/link">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-6">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Contact</h4>
                  <div className="space-y-5">
                    <a href={`tel:${COMPANY.mobile}`} className="group block">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1 flex items-center gap-1">
                        <Phone size={8} /> Direct Call
                      </p>
                      <p className="text-xs font-black text-white/90 group-hover:text-white group-hover:underline underline-offset-4">{COMPANY.mobile}</p>
                    </a>
                    <a href={`mailto:${COMPANY.email}`} className="group block">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-1 flex items-center gap-1">
                        <Mail size={8} /> Email
                      </p>
                      <p className="text-xs font-black text-white/90 group-hover:text-white group-hover:underline underline-offset-4 break-all">{COMPANY.email}</p>
                    </a>
                    <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                      WhatsApp Us <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <p className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center md:text-left">
                © {year} Air Connection Travel &amp; Tours · All Rights Reserved.
              </p>
              <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest text-center md:text-left">
                IATA Authorized Agent · AirLinks Partner Network · Islamabad
              </p>
            </div>

            <div className="flex items-center gap-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors">
              <span>Privacy Policy</span>
              <div className="h-3 w-px bg-white/20" />
              <span>Terms of Service</span>
              <div className="h-3 w-px bg-white/20" />
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
