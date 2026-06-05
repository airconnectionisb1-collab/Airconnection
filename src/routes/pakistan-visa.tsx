import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { CheckCircle2, FileText, Globe2, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/pakistan-visa")({
  head: () => ({
    meta: [
      { title: "Pakistan Visa Consultant Islamabad | Pakistan Inbound E-Visa 2026" },
      { name: "description", content: "Expert assistance for Pakistan inbound visa (E-Visa, tourist, business, work) at Air connection Travel and Tours Islamabad. 100% online, hassle-free processing." },
      { name: "keywords", content: "pakistan inbound visa, pakistan e-visa islamabad, pakistan tourist visa, apply pakistan visa 2026, travel to pakistan visa consultancy, best visa agent pakistan" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Pakistan Inbound E-Visa Processing | Air connection Travel and Tours" },
      { property: "og:description", content: "Fast e-visa, business visa, and tourist visa services for traveling to Pakistan from anywhere globally." },
      { property: "og:url", content: "https://airconnection.pk/pakistan-visa" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/pakistan-visa" },
    ],
  }),
  component: PakistanVisaPage,
});

function PakistanVisaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    name: "Pakistan Inbound Visa Consultancy — Air connection Travel and Tours",
    description: "Secure an inbound tourist, business, or e-visa for Pakistan smoothly.",
    url: "https://airconnection.pk/pakistan-visa",
    provider: {
      "@type": "TravelAgency",
      name: "Air connection Travel and Tours",
      url: "https://airconnection.pk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    serviceType: "Inbound Pakistan Visa",
  };

  const pakistanDocs = [
    "Valid Passport Color Scan (Bio-data page, minimum 6-month validity)",
    "Recent Digital Photograph (White background, size 35x45mm, matte finish)",
    "Hotel Booking Confirmation or Invitation Letter (Sponsorship from host)",
    "Copy of Pakistani Host CNIC / Passport (If visiting family or friends)",
    "Copy of Parents' CNIC / Passport (For minors and applicants of Pakistani origin)",
    "SECP Registration Certificate or Chamber of Commerce Letter (For Business Visa)",
    "Evidence of legal residence in the country of application (For foreign applicants)",
    "Proof of Return Travel & Day-by-day Itinerary",
  ];

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <PageHero
        eyebrow="Inbound Visa"
        title="Pakistan Visa Services"
        subtitle="Complete assistance for Tourist, Business, and E-Visas to Pakistan."
      />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Inbound Pakistan Visa Processing
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We provide fast, efficient end-to-end guidance for foreign nationals applying for Pakistan E-Visa, tourist visa, and business entry permits.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <FileText size={20} />
              </span>
              <h2 className="text-2xl font-bold">Required Documents Checklist</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {pakistanDocs.map((req, idx) => (
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

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Pakistan E-Visa Portal</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The official Pakistan online visa system simplifies the process. We assemble your sponsor letters, hotel bookings, and required documentation for rapid approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Start Your Pakistan Visa Application
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our team at Air connection Travel and Tours handles file compilation and official visa submissions smoothly.
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
