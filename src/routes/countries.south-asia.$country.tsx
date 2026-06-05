import { createFileRoute, notFound } from "@tanstack/react-router";
import { SOUTH_ASIA_COUNTRIES } from "@/data/regions/south-asia_countries";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Globe2 } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/countries/south-asia/$country")({
  loader: ({ params }) => {
    const country = SOUTH_ASIA_COUNTRIES.find((c) => c.slug === params.country);
    if (!country) throw notFound();
    return country;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || "South Asia Visa Consultant Islamabad"} | Pakistan's #1 Visa Agency 2026` },
      { name: "description", content: loaderData?.description ? `${loaderData.description} Air connection Travel and Tours Islamabad — Pakistan's #1 visa agency. 98% approval rate, IATA-accredited, Blue Area office.` : "" },
      { name: "keywords", content: `${loaderData?.keywords || ""}, best south asia visa consultant islamabad, top south asia visa agent pakistan, south asia visa success rate pakistan, south asia visa from pakistan 2026, Air connection Travel and Tours south asia visa, blue area visa consultant` },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: `${loaderData?.name || "South Asia"} Visa Consultant Islamabad — Pakistan's #1 | Air connection Travel and Tours` },
      { property: "og:description", content: loaderData?.description || "" },
      { property: "og:url", content: `https://airconnection.pk/countries/south-asia/${loaderData?.slug || ""}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "Air connection Travel and Tours — Pakistan's No.1 Travel Agency" },
      { property: "og:image", content: loaderData?.image || "" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData?.name || ""} Visa Consultant Islamabad | Air connection Travel and Tours` },
      { name: "twitter:description", content: loaderData?.description || "" },
      { name: "twitter:image", content: loaderData?.image || "" },
    ],
    links: [
      { rel: "canonical", href: `https://airconnection.pk/countries/south-asia/${loaderData?.slug || ""}` },
    ],
  }),
  component: SouthAsiaCountryPage,
});

function SouthAsiaCountryPage() {
  const country = Route.useLoaderData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    name: `${country.name} Visa Consultancy — Air connection Travel and Tours Islamabad`,
    description: country.description,
    url: `https://airconnection.pk/countries/south-asia/${country.slug}`,
    provider: {
      "@type": "TravelAgency",
      name: "Air connection Travel and Tours",
      url: "https://airconnection.pk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 6, Mezzanine Floor, Ratta Mansion Plaza, Fazal ul Haq Road, Blue Area",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "2847",
      },
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    serviceType: `${country.name} South Asia Visa Consultancy`,
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <PageHero
        eyebrow="South Asia & Beyond"
        title={country.name}
        subtitle={`Expert visa consultancy for ${country.name} in Islamabad.`}
        backgroundImage={country.image}
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        {/* Intro */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            {country.name} Visa Services in Islamabad
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{country.intro}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          {/* Main Requirements */}
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <FileText size={20} />
              </span>
              <h2 className="text-2xl font-bold">Required Documents Checklist</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {country.docs.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-muted-foreground leading-relaxed font-medium text-xs">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Travel Tip</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                For {country.name}, we recommend applying at least 15 days in advance. We handle
                mandatory hotel and flight bookings for your application.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary-glow">Consultancy Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Accurate form filling",
                  "Rapid e-visa processing",
                  "Verified hotel vouchers",
                  "Complete file assembly",
                ].map((tip, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2 font-medium">
                    <span className="text-primary">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Contact Section */}
      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your {country.name} Journey Today
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our experts at Pakistan's no.1 travel agency and consultancy are ready to handle your {country.name} visa application
                with speed and precision.
              </p>

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
              <h3 className="text-2xl font-bold mb-2">Book a Free Assessment</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Discuss your {country.name} visa application with our senior consultants.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
