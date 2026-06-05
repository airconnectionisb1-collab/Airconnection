import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DESTINATIONS, type VisaType } from "@/data/destinations";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  MapPin,
  Briefcase,
  GraduationCap,
  Plane,
  Building2,
  HelpCircle,
} from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import {
  COMPANY,
  SCHENGEN_COUNTRIES,
  SOUTH_ASIA_COUNTRIES,
  CENTRAL_ASIA_COUNTRIES,
  NORTH_AFRICA_COUNTRIES,
  SOUTHERN_AFRICA_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  EAST_ASIA_COUNTRIES,
  SOUTH_AMERICA_COUNTRIES,
  OCEANIA_COUNTRIES,
} from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const destination = DESTINATIONS.find((c) => c.slug === params.slug);
    if (!destination) throw notFound();
    return destination;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.seoTitle || "Visa Consultant Islamabad"} | Air connection Travel and Tours` },
      { name: "description", content: loaderData?.seoDescription || "" },
      { name: "keywords", content: loaderData?.keywords || "" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: `${loaderData?.seoTitle || "Visa Consultant Islamabad"} | Air connection Travel and Tours` },
      { property: "og:description", content: loaderData?.seoDescription || "" },
      { property: "og:url", content: `https://airconnection.pk/countries/${loaderData?.slug || ""}` },
      { property: "og:image", content: loaderData?.image || "https://airconnection.pk/logo.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "Air connection Travel and Tours — Pakistan's No.1 Travel Agency" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData?.name || ""} Visa Consultant Islamabad | Air connection Travel and Tours` },
      { name: "twitter:description", content: loaderData?.seoDescription || "" },
      { name: "twitter:image", content: loaderData?.image || "https://airconnection.pk/logo.png" },
    ],
    links: [
      { rel: "canonical", href: `https://airconnection.pk/countries/${loaderData?.slug || ""}` },
    ],
  }),
  component: DestinationHub,
});

function getIconForVisa(slug: string) {
  if (slug.includes("study")) return <GraduationCap size={24} />;
  if (slug.includes("work")) return <Briefcase size={24} />;
  if (slug.includes("business")) return <Building2 size={24} />;
  return <Plane size={24} />;
}

function DestinationHub() {
  const dest = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Destination Guide"
        title={`${dest.name} Visa Services`}
        subtitle={dest.shortDesc}
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}>
          <BookingWidget initialTab="visa" />
        </Suspense>
      </div>

      {/* Individual Schengen Countries (Conditional - Moved to Top) */}
      {dest.slug === "schengen" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Schengen Destinations
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Select Your Destination Country</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore requirements and top attractions for the most popular European states. We
                  handle appointments and documentation for all 29 countries.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {SCHENGEN_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.02}>
                  <Link
                    to="/countries/schengen/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                            {c.popularPlaces.length > 3 && (
                              <span className="text-[10px] text-white/60 font-medium">
                                +{c.popularPlaces.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual South Asia Countries (Conditional) */}
      {dest.slug === "south-asia" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  South Asia & Beyond
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Popular Regional Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for Thailand, Malaysia, and other favorite destinations.
                  We provide fast-track e-visa and sticker visa services.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {SOUTH_ASIA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/south-asia/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual Central Asia Countries (Conditional) */}
      {dest.slug === "central-asia" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Central Asia & Turkey
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Silk Road Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore requirements for Turkey, Azerbaijan, and the majestic Central Asian
                  states. We specialize in fast-track e-visas and official sticker visa dossiers.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {CENTRAL_ASIA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/central-asia/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Individual North Africa Countries (Conditional) */}
      {dest.slug === "north-africa" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Mediterranean & Sahara
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">North African Wonders</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for Egypt, Morocco, and more. We handle complex sticker
                  visa applications and e-visa processing for the African continent.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {NORTH_AFRICA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/north-africa/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Individual Southern Africa Countries (Conditional) */}
      {dest.slug === "southern-africa" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Safari & Paradise
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Southern & East Africa</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  From South African safaris to the beaches of Mauritius, we handle all your visa
                  documentation and travel authorizations for the African continent.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {SOUTHERN_AFRICA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/southern-africa/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual Middle East Countries (Conditional) */}
      {dest.slug === "middle-east" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Middle East
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Middle Eastern Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for UAE, Saudi Arabia, Qatar, Bahrain, and more.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {MIDDLE_EAST_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/middle-east/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual East Asia Countries (Conditional) */}
      {dest.slug === "east-asia" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  East Asia
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">East Asian Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for Japan, South Korea, China, and more. We handle sticker visas and provide comprehensive application support.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {EAST_ASIA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/east-asia/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place: string) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual South America Countries (Conditional) */}
      {dest.slug === "south-america" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  South America
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">South American Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for Brazil, Argentina, Colombia, and more.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {SOUTH_AMERICA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/south-america/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place: string) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual Oceania Countries (Conditional) */}
      {dest.slug === "oceania" && (
        <section className="bg-secondary/30 py-16 border-b border-border">
          <div className="container-px mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Oceania
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">Oceania Destinations</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Explore visa requirements for Australia, New Zealand, Fiji, and more.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {OCEANIA_COUNTRIES.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link
                    to="/countries/oceania/$country"
                    params={{ country: c.slug }}
                    className="group relative flex h-[240px] sm:h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elevated hover:border-primary/50"
                  >
                    {/* Background Image */}
                    {c.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={c.image}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {c.code && (
                            <img
                              src={`https://flagcdn.com/w40/${c.code}.png`}
                              alt=""
                              className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0"
                            />
                          )}
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>

                      {/* Popular Places Design */}
                      {c.popularPlaces && (
                        <div className="mt-auto">
                          <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold mb-2">
                            Top Attractions
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.popularPlaces.slice(0, 3).map((place: string) => (
                              <span
                                key={place}
                                className="inline-flex items-center gap-1 rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-medium text-white group-hover:bg-primary/30 transition-colors border border-white/5"
                              >
                                <MapPin size={8} className="shrink-0" /> {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-2 border-t border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-[11px] font-semibold text-white flex items-center gap-1.5 group-hover:bg-primary/20">
                      <FileText size={12} /> View Requirements
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="container-px mx-auto max-w-5xl py-20">
        {/* Intro */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Expert Immigration Guidance for {dest.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{dest.intro}</p>
        </div>

        {/* Visa Types Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <FileText size={20} />
            </span>
            <h2 className="text-3xl font-bold">Select Your Visa Type</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {dest.visas.map((v: VisaType, i: number) => (
              <Reveal key={v.slug} delay={i * 0.05}>
                <Link
                  to="/countries/$slug/visa/$visaType"
                  params={{ slug: dest.slug, visaType: v.slug }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift transition-all hover:border-primary/50"
                >
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft mb-4">
                      {getIconForVisa(v.slug)}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.heroText}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent group-hover:underline">
                    View Requirements & Fees{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 mb-20">
          {/* General Requirements */}
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-6">General Requirements</h3>
            <ul className="space-y-4">
              {dest.generalRequirements.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-muted-foreground leading-relaxed text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step by Step */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Application Process</h3>
            <div className="space-y-6">
              {dest.stepByStep.map((step: { title: string; desc: string }, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {idx + 1}
                    </span>
                    {idx !== dest.stepByStep.length - 1 && (
                      <div className="w-px h-full bg-border my-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        {dest.faqs && dest.faqs.length > 0 && (
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle size={36} className="mx-auto text-accent mb-4" />
              <h2 className="text-3xl font-bold">{dest.name} Visa FAQs</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {dest.faqs.map((faq: { q: string; a: string }, i: number) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>

      {/* Trust & Contact Section */}
      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Why Choose Air connection Travel and Tours in Islamabad?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As an authorized and trusted visa consultant in Blue Area, Islamabad, we boast a 98%
                approval rate across global destinations. We provide transparent, end-to-end
                guidance without hidden fees or false promises.
              </p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> 15+ Years of Proven Experience
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> IATA Authorized Travel Agent
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> Dedicated Case Officers
                </li>
              </ul>

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-soft hover:-translate-y-0.5 transition-transform hover:border-primary"
                >
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="bg-card rounded-[2rem] border border-border p-8 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold mb-2">Get a Free Evaluation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Enter your details and our {dest.name} visa experts will contact you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
