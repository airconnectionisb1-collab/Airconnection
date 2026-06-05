import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import {
  Moon,
  Star,
  Hotel,
  Bus,
  Plane,
  Heart,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Award,
  BadgeCheck
} from "lucide-react";
import umrahHero from "@/assets/umrah-hero.webp";

export const Route = createFileRoute("/umrah")({
  head: () => ({
    meta: [
      { title: "Best Umrah Packages from Pakistan 2026 — Pakistan's #1 Umrah Travel Agency | Air connection Travel and Tours" },
      {
        name: "description",
        content:
          "Pakistan's #1 Umrah travel agency. Book cheap Umrah packages from Islamabad 2026. Economy, 3-Star, 4-Star & 5-Star packages with visa, flights & hotels in Makkah & Madinah. Trusted by 5000+ families. Air connection Travel and Tours Blue Area.",
      },
      {
        name: "keywords",
        content:
          "best umrah packages from pakistan 2026, cheapest umrah packages islamabad, #1 umrah travel agency pakistan, customized umrah packages 2026, economy umrah packages islamabad, luxury 5 star umrah packages pakistan, umrah visa processing islamabad, makkah madinah hotel booking pakistan, group umrah packages islamabad, family umrah packages 2026, umrah with flights from islamabad, umrah agents blue area islamabad, ramadan umrah packages pakistan, last minute umrah deals pakistan",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Pakistan's #1 Umrah Packages 2026 — Economy to 5-Star Luxury | Air connection Travel and Tours" },
      {
        property: "og:description",
        content:
          "Trusted by 5000+ families. Economy to luxury Umrah packages from Islamabad with visa, flights & premium hotels near Haram.",
      },
      { property: "og:image", content: "/src/assets/umrah-hero.webp" },
      { property: "og:url", content: "https://airconnection.pk/umrah" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Umrah Packages Pakistan 2026 | Air connection Travel and Tours" },
      { name: "twitter:description", content: "Economy to 5-Star luxury. Visa, flights & Haram-facing hotels from Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/umrah" },
    ],
  }),
  component: UmrahPage,
});

const UMRAH_PACKAGES = [
  {
    title: "Economy Package",
    price: "From PKR 185,000",
    rating: "3.5",
    features: ["15 Days Duration", "Standard Hotels (1km+)", "Shared Transport", "Visa Processing", "Return Flights"],
    icon: Moon,
    color: "text-slate-500",
    bg: "bg-slate-500/10"
  },
  {
    title: "3 Star Package",
    price: "From PKR 225,000",
    rating: "4.2",
    features: ["15 Days Duration", "3 Star Hotels (600m)", "Luxury Transport", "Visa Processing", "Breakfast Included"],
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "4 Star Package",
    price: "From PKR 285,000",
    rating: "4.8",
    features: ["10-15 Days Duration", "4 Star Hotels (Walking Distance)", "Private Transport", "Visa & Insurance", "Breakfast & Ziarat"],
    icon: Sparkles,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "5 Star Luxury",
    price: "From PKR 395,000",
    rating: "5.0",
    features: ["7-15 Days Duration", "Front-row 5 Star Hotels", "VIP Private Transport", "Full Board Options", "24/7 Ground Support"],
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
];

function UmrahPage() {
  const umrahJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Umrah Packages 2026",
    "image": "https://airconnection.pk/src/assets/umrah-hero.webp",
    "description": "Economy, 3-Star, 4-Star & 5-Star Umrah packages from Pakistan with visa, flights & hotels in Makkah & Madinah.",
    "brand": {
      "@type": "Brand",
      "name": "Air Connection Travel and Tours"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "PKR",
      "lowPrice": "185000",
      "highPrice": "395000",
      "offerCount": "4",
      "offers": UMRAH_PACKAGES.map((pkg) => {
        const priceNum = pkg.price.replace(/\D/g, "");
        return {
          "@type": "Offer",
          "name": pkg.title,
          "price": priceNum,
          "priceCurrency": "PKR",
          "url": "https://airconnection.pk/umrah",
          "category": "Travel Package"
        };
      })
    }
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(umrahJsonLd)}</script>
      <div className="relative">
        <PageHero
          eyebrow="Spiritual Journey"
          title="Umrah Packages Designed for Peace of Mind"
          subtitle="From budget-friendly economy stays to premium 5-star luxury experiences — we handle every detail of your sacred pilgrimage."
          backgroundImage={umrahHero}
        />

        {/* Integrated Booking Widget */}
        <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
          <Reveal delay={0.2}>
            <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20" />}>
              <BookingWidget initialTab="umrah" />
            </Suspense>
          </Reveal>
        </div>
      </div>

      {/* Islamic Quote Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-px mx-auto max-w-4xl text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-8 shadow-inner border border-primary/20">
              <Moon size={28} className="animate-[pulse_4s_ease-in-out_infinite]" />
            </div>
            <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed italic text-foreground/90 font-serif px-4">
              "Perform Umrah and Hajj, as they remove poverty and sins just as the bellows removes the impurities of iron, gold, and silver."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Prophet Muhammad (PBUH)</p>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Our Packages"
            title="Choose the package that fits your journey"
            subtitle="We offer a variety of pre-designed packages and fully customizable options to suit your preferences."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {UMRAH_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 0.1} className="h-full">
              <div className="group relative h-full flex flex-col overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:bg-card/50 hover:border-primary/40">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${pkg.bg} ${pkg.color} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner border border-white/10`}>
                  <pkg.icon size={32} />
                </div>

                <h3 className="relative text-xl font-bold transition-colors duration-300 group-hover:text-primary">{pkg.title}</h3>
                <p className="relative mt-2 text-2xl font-black text-foreground/90">{pkg.price}</p>

                <div className="relative mt-8 space-y-4 flex-1">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      <span className="leading-tight font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/consultation"
                  className="relative mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary/50 border border-border/50 py-4 text-sm font-bold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                >
                  Book Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Official Deals & Partnerships Section */}
      <section className="py-20 relative overflow-hidden bg-secondary/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-4">
              <Award size={16} /> Official Authorized Agent
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Direct Deals & Global Partnerships</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Air connection Travel and Tours is officially authorized by the Ministry of Hajj & Umrah. We cut out the middlemen to bring you direct contracts with top Saudi providers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { t: "Airlines", d: "Saudia, flynas, PIA", icon: Plane },
              { t: "Hotels", d: "Clock Tower, Hilton, Pullman", icon: Hotel },
              { t: "Transport", d: "SAPCTO, Private GMCs", icon: Bus },
              { t: "Visa Systems", d: "Direct Maqam Integration", icon: BadgeCheck }
            ].map((partner, idx) => (
              <Reveal key={partner.t} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center p-6 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/60">
                  <partner.icon size={28} className="text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-1">{partner.t}</h3>
                  <p className="text-xs text-muted-foreground font-semibold">{partner.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Planning Section */}
      <section className="bg-primary/5 py-24 relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary mb-2 shadow-sm">
                  <Sparkles size={14} /> Tailor-Made For You
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl leading-tight">
                  Customized Umrah Planning
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Can't find exactly what you're looking for? Our <strong>Custom Umrah Selection</strong> allows you to build your own itinerary. Choose your preferred hotels, decide how many days you want to spend in Makkah and Madinah, and select the transport that suits your family.
                </p>
                <div className="grid gap-4 pt-4">
                  {[
                    { icon: Hotel, text: "Choice of 300+ Hotels in Makkah & Madinah" },
                    { icon: Bus, text: "Private GMC or Luxury Bus Transport" },
                    {
                      icon: Calendar,
                      text: "Flexible Stay Durations",
                      extra: (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["7", "10", "15", "30"].map(d => (
                            <span key={d} className="px-3 py-1.5 rounded-xl bg-background/50 text-foreground/80 text-[11px] font-bold border border-border/50 shadow-sm transition-all cursor-default hover:border-primary/50 hover:text-primary">
                              {d} Days
                            </span>
                          ))}
                        </div>
                      )
                    },
                    { icon: Users, text: "Group or Private Family Packages" },
                  ].map((item) => (
                    <div key={item.text} className="group flex items-center gap-5 p-5 rounded-[2rem] bg-card/40 backdrop-blur-md shadow-sm border border-border/50 transition-all hover:bg-card/60 hover:border-primary/30">
                      <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-110">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <span className="font-bold text-base block text-foreground/90">{item.text}</span>
                        {item.extra}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/consultation"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                >
                  Request Custom Quote <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl isolate transform translate-z-0 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000"
                    alt="Pilgrims at Makkah"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-10 left-8 right-8 text-white backdrop-blur-sm bg-black/20 p-6 rounded-[2rem] border border-white/10">
                    <p className="text-xl md:text-2xl font-bold italic tracking-tight leading-snug">
                      "Everything was handled perfectly, from the instant visa issuance to the hotels right in front of the Haram gates."
                    </p>
                    <p className="mt-5 font-semibold opacity-90 font-display uppercase tracking-widest text-xs flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEO BLOCK - Glassmorphism Restructure */}
      <section className="container-px mx-auto max-w-5xl py-24">
        <div className="rounded-[3rem] border border-border/50 bg-card/20 backdrop-blur-md p-8 md:p-14 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Expert Umrah Travel Agency in Islamabad</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              Finding the <strong>best Umrah packages from Pakistan 2026</strong> can be overwhelming. At Air connection Travel and Tours, we simplify your spiritual journey. As a leading <strong>Umrah travel agency in Islamabad</strong>, we provide verified <strong>cheap Umrah packages</strong> that don't compromise on quality or proximity to the holy sites.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Moon size={24} className="text-primary" /> Economy & Budget Umrah 2026
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our <strong>economy Umrah packages 2026</strong> are perfect for families looking for affordability. We ensure clean, certified hotels with dedicated shuttle services to the Haram, making it the most reliable <strong>budget Umrah Islamabad</strong> option without hidden costs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Star size={24} className="text-primary" /> Luxury 5-Star Experience
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                For those seeking ultimate comfort, our <strong>luxury Umrah packages 2026</strong> feature stays in the iconic Clock Tower or hotels directly facing the Haram courtyard. With private VIP transport and premium ground handling, your focus remains entirely on your prayers.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-secondary/40 to-background border border-border/50 relative overflow-hidden group shadow-inner">
            <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform duration-700 group-hover:scale-110">
              <ShieldCheck size={160} className="text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center relative z-10">Why Book Your Umrah with Air connection Travel and Tours?</h3>

            <div className="grid sm:grid-cols-2 gap-5 relative z-10">
              {[
                { t: "Authorized Umrah Visa Agent", d: "Direct processing in Blue Area, ISB via official Saudi portals" },
                { t: "Confirmed Hotel Bookings", d: "Guaranteed Makkah & Madinah proximity before you pay" },
                { t: "Best Umrah Airfares", d: "Exclusive blocked group rates from Islamabad & Lahore" },
                { t: "24/7 Pilgrim Support", d: "Dedicated Pakistani support team on the ground in KSA" }
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-card/60 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-md hover:bg-card transition-all duration-300 hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground leading-tight mb-1.5 text-lg">{item.t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
