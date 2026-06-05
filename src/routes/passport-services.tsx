import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BookUser, RefreshCcw, Flag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/passport-services")({
  head: () => ({
    meta: [
      { title: "Passport Services Islamabad 2026 — Fast Renewals & New Applications | Air connection Travel and Tours" },
      {
        name: "description",
        content:
          "Expert passport services in Islamabad by Pakistan's #1 travel agency. Fast passport applications, reliable renewals, urgent processing & USA passport services. Air connection Travel and Tours Blue Area.",
      },
      {
        name: "keywords",
        content:
          "passport services islamabad, fast passport renewal ISB, USA passport application pakistan, passport processing agency blue area, apply for new passport islamabad, urgent passport renewal islamabad, passport agent near me islamabad, overseas passport processing pakistan, passport renewal fees pakistan 2026, best passport agent islamabad",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Passport Services Islamabad — Fast Processing | Air connection Travel and Tours" },
      {
        property: "og:description",
        content: "New applications, renewals & USA passport processing from Blue Area, Islamabad.",
      },
      { property: "og:url", content: "https://airconnection.pk/passport-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Passport Services Islamabad | Air connection Travel and Tours" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/passport-services" },
    ],
  }),
  component: PassportServices,
});

function PassportServices() {
  return (
    <>
      <PageHero
        eyebrow="Passport Services"
        title="Your passport, our priority"
        subtitle="From new applications to renewals and USA passports — we handle the paperwork so you don't have to."
      />

      <section className="container-px mx-auto max-w-7xl py-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: BookUser,
            t: "Passport Applications",
            d: "Complete assistance for first-time applications.",
          },
          { icon: RefreshCcw, t: "Passport Renewals", d: "Quick, hassle-free renewal processing." },
          {
            icon: Flag,
            t: "USA Passport Applications",
            d: "Specialized USA passport service in Pakistan.",
          },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="card-3d h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                <b.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-secondary/40 py-16 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Need a passport in time for your trip?</h2>
          <p className="mt-3 text-muted-foreground">
            Talk to our team — we'll guide you through the fastest legitimate route.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Get Help Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div className="space-y-8 border-t border-border pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Reliable Passport Processing Agency in Blue Area
            </h2>
          </div>
          <div className="grid gap-8 text-muted-foreground leading-relaxed md:grid-cols-2">
            <p>
              An expired or missing passport can derail your travel plans. At Air connection Travel and Tours, we
              offer dedicated <strong>passport services in Islamabad</strong> to ensure your
              documentation is always ready for your next visa application. Whether you need to{" "}
              <strong>apply for a new passport in Islamabad</strong> or require an urgent renewal,
              our experienced team guides you through the bureaucratic processes to avoid
              unnecessary delays.
            </p>
            <p>
              In addition to standard Pakistani passport services, we provide a highly specialized{" "}
              <strong>USA passport application</strong> service. Navigating the US consulate
              requirements in Pakistan can be daunting; our experts manage the paperwork, schedule
              appointments, and review all documents for US citizens residing in Pakistan. Trust the
              top processing agency in Blue Area for secure, confidential, and fast passport
              handling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
