import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Heart,
  Plane,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { VISA_SERVICES } from "@/data/site";

export const Route = createFileRoute("/visa-services")({
  head: () => ({
    meta: [
      { title: "#1 Visa Consultant in Islamabad 2026 | Best Visa Services in Pakistan | Air connection Travel and Tours" },
      {
        name: "description",
        content:
          "Air connection Travel and Tours: Pakistan's #1 visa consultant in Islamabad. 98% approval rate for UK, USA, Canada, Schengen, Australia, Dubai & Turkey visas. IATA-accredited, Blue Area office. Expert documentation, interview prep & fast processing.",
      },
      {
        name: "keywords",
        content:
          "best visa consultant islamabad 2026, #1 visa agency pakistan, uk visit visa islamabad, usa B1/B2 visa consultant islamabad, canada immigration agent islamabad, schengen visa consultant islamabad blue area, dubai visa agent pakistan, turkey visa consultant ISB, business visa islamabad, family visa consultant pakistan, visa rejection help islamabad, visa refusal appeal pakistan, best visa approval rate pakistan, trusted visa company islamabad, affordable visa services pakistan, express visa processing islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Pakistan's #1 Visa Consultant 2026 — 98% Approval Rate | Air connection Travel and Tours Islamabad" },
      {
        property: "og:description",
        content:
          "Expert visa consultancy for UK, USA, Canada, Schengen, Australia & 50+ countries. High approval rates and professional documentation from Blue Area, Islamabad.",
      },
      { property: "og:image", content: "https://airconnection.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://airconnection.pk/visa-services" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Visa Consultant Islamabad | Air connection Travel and Tours" },
      { name: "twitter:description", content: "98% approval rate. UK, USA, Canada, Schengen & Australia visas from Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/visa-services" },
    ],
  }),
  component: VisaServices,
});

const ICONS = [Plane, Heart, Users, Globe2, GraduationCap, Briefcase];

function VisaServices() {
  return (
    <>
      <PageHero
        eyebrow="Visa Services"
        title="Visas tailored to your journey"
        subtitle="Whether you're visiting family, studying abroad or expanding your business — our expert team handles every detail."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
        </Reveal>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VISA_SERVICES.map((s: { title: string; desc: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={ICONS[i % ICONS.length]}
                title={s.title}
                desc={s.desc}
                to="/consultation"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeader
              center={false}
              eyebrow="What's included"
              title="End-to-end documentation & embassy support"
            />
            <ul className="space-y-3 text-sm">
              {[
                "Personalized visa pathway assessment",
                "Document checklist tailored to your case",
                "Form filling & application review",
                "Embassy appointment booking",
                "Interview preparation & coaching",
                "Real-time application tracking",
              ].map((it) => (
                <li key={it} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} /> <span>{it}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
            >
              Start Your Application <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elevated">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Approval Rate
              </p>
              <p className="mt-2 text-6xl font-bold gradient-text">98%</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Across Schengen, UK, USA, Canada and Australia categories combined — based on the
                last 24 months of completed cases.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comprehensive Visa Information (SEO Optimized) */}
      <section className="container-px mx-auto max-w-5xl py-20 md:py-28">
        <div className="space-y-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Expert Visa Consultants in Islamabad for Global Destinations
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              As the <strong>best visa consultant in Islamabad (ISB)</strong>, Air connection Travel and Tours
              provides end-to-end immigration and travel solutions. Whether you are seeking a{" "}
              <strong>top visa consultant in Islamabad</strong>, planning a European tour, or
              navigating complex family reunification processes, our certified experts ensure a
              smooth, transparent, and successful application journey.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">Schengen Visa from Pakistan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Applying for a <strong>Schengen visa in Islamabad</strong> can be complex due to
                stringent documentation requirements. As a top{" "}
                <strong>Europe visa consultant in Islamabad</strong>, we specialize in tourist,
                business, and family visit visas for all 26 Schengen states, including Germany,
                France, Italy, and Spain. We handle your complete itinerary, hotel bookings, and
                travel insurance to maximize your approval chances.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">UK Visa Consultant Islamabad</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a Business Visa, a Standard Visitor Visa, or a Tourist
                Visa, our <strong>top visa agents in ISB</strong> provide comprehensive guidance. We
                assist with UKVI requirements, financial proof compilation, and interview
                preparation, making us the most <strong>reliable visa consultant ISB</strong> for
                United Kingdom immigration.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">
                USA Visa Processing (B1/B2)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Securing a US visa requires meticulous preparation. Our{" "}
                <strong>USA visa consultant ISB</strong> team offers specialized interview coaching
                and DS-160 form filling services. From B1/B2 tourist visas to business visas, we
                provide the <strong>best visa guidance</strong> to confidently face the US
                embassy consular officers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">
                Canada & Australia Visas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Looking for reliable visit visa pathways? We handle visitor applications for Canada (TRV) and Australia (Subclass 600) with the highest level of professionalism and accuracy. Let our international visa experts simplify the process for you.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-to-br from-secondary/80 to-background border border-white/10 p-8 md:p-12 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  Why Choose the Top Visa Consultancy in ISB?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Located conveniently in Blue Area, Air connection Travel and Tours is recognized as the{" "}
                  <strong>best immigration agency in Islamabad</strong>. We don't just fill out
                  forms; we provide strategic <strong>visa solutions ISB</strong> tailored to your
                  specific profile.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 text-sm text-foreground/80 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Authorized visa agent ISB
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Fast visa processing Islamabad
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Visa documentation Islamabad
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <CheckCircle2 size={16} />
                    </span>{" "}
                    Embassy visa support Islamabad
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
