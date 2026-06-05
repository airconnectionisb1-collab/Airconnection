import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CountryCard } from "@/components/site/CountryCard";
import { Reveal } from "@/components/site/Reveal";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { DESTINATIONS } from "@/data/destinations";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "50+ Visa Destinations Worldwide — Apply from Islamabad | Pakistan's #1 Visa Agency" },
      {
        name: "description",
        content:
          "Air connection Travel and Tours covers 50+ countries worldwide. Expert visa assistance for USA, UK, Canada, Australia, Schengen, Dubai, Turkey, Malaysia & more from Islamabad. Pakistan's #1 visa consultancy with 98% approval rate.",
      },
      {
        name: "keywords",
        content:
          "visa destinations from pakistan, all countries visa consultant islamabad, schengen visa from pakistan, USA visa from islamabad, UK visa destinations ISB, canada immigration islamabad, australia visit visa ISB, top visa destinations pakistan, europe visa consultancy blue area, dubai visa agent islamabad, turkey visa pakistan, malaysia visa consultant islamabad, best visa consultancy for all countries pakistan",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "50+ Global Visa Destinations — Air connection Travel and Tours | Pakistan's #1" },
      {
        property: "og:description",
        content:
          "Expert visa consultancy for North America, Europe, Oceania, Asia, Middle East & Africa. 98% approval rate from Islamabad.",
      },
      { property: "og:url", content: "https://airconnection.pk/countries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "50+ Visa Destinations | Air connection Travel and Tours Pakistan" },
      { name: "twitter:description", content: "USA, UK, Canada, Schengen, Australia & 50+ more. Apply from Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/countries" },
    ],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Visa support across every continent"
        subtitle="From iconic European capitals to vibrant Middle Eastern hubs and Oceania's natural wonders."
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-7xl pt-20 pb-10">
        <div className="space-y-6 mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Our Global Destinations</h2>
          <p className="text-muted-foreground">
            Select a region or country to view detailed visa requirements, processing times, and
            required documentation.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DESTINATIONS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 8) * 0.04}>
              <CountryCard
                slug={c.slug}
                name={c.name}
                short={c.shortDesc}
                image={c.image}
                accent="View Details"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO Long Form Content Section */}
      <section className="bg-secondary/20 py-20 border-t border-border mt-10">
        <div className="container-px mx-auto max-w-4xl space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Trusted Partner for Global Destinations in Islamabad
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Choosing the right destination requires the right guidance. As the top visa
              consultancy in Islamabad, Air connection Travel and Tours simplifies the application process for over
              50 countries. Our expertise spans across multiple continents, ensuring your travel
              dreams become a reality.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Schengen & European Visas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applying for a <strong>Schengen visa from Pakistan</strong> requires precision. We
                cover all 29 Schengen member states, including popular destinations like France,
                Germany, Italy, and Spain. Whether you are aiming for a summer tour or a business
                conference, our Islamabad-based experts handle your flight reservations, hotel
                bookings, and travel insurance to meet strict embassy standards.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">The Americas (USA & Canada)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Navigating the complex requirements for a <strong>USA visa from Islamabad</strong>{" "}
                (B1/B2, F1) or a Canadian study permit demands an experienced hand. We provide
                thorough DS-160 processing, interview coaching, and documentation review to maximize
                your chances of crossing the Atlantic successfully.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">
                Oceania (Australia & New Zealand)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From the bustling streets of Sydney to the landscapes of Auckland, securing an{" "}
                <strong>Australia visit visa ISB</strong> or an NZeTA is seamless with our support.
                We assist students, tourists, and skilled workers with precise documentation
                alignment for Oceanic immigration authorities.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Middle East & Asia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking for a reliable <strong>Dubai visit visa consultant in Islamabad</strong>? We
                offer rapid processing for UAE, Qatar, Bahrain, and Saudi Arabia. Additionally, we
                facilitate visas for top Asian destinations like Malaysia, Thailand, and Singapore,
                ensuring fast turnarounds for your holiday or business trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
