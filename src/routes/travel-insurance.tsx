import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, HeartPulse, CalendarX2, Globe2, ArrowRight, CheckCircle2, Award, FileText, Briefcase } from "lucide-react";

export const Route = createFileRoute("/travel-insurance")({
  head: () => ({
    meta: [
      { title: "Best Travel Insurance in Pakistan 2026 — Schengen Compliant | Air connection Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Get the cheapest Schengen-compliant travel insurance in Pakistan. Official partners of Jubilee, Adamjee & United Insurance. €30,000+ medical cover, instant policy from Air connection Travel and Tours Islamabad.",
      },
      {
        name: "keywords",
        content:
          "best travel insurance pakistan 2026, schengen approved travel insurance islamabad, cheapest travel insurance pakistan, travel medical insurance ISB, jubilee travel insurance, adamjee travel insurance, united insurance pakistan, official travel insurance partner islamabad, trip cancellation cover pakistan, buy travel insurance blue area, europe visa insurance islamabad, instant travel insurance policy islamabad",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "Best Travel Insurance Pakistan — Schengen Compliant | Air connection Travel and Tours" },
      { property: "og:description", content: "Instant Schengen-compliant travel insurance. Official partners of top insurers in Pakistan. €30,000+ medical cover." },
      { property: "og:url", content: "https://airconnection.pk/travel-insurance" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Travel Insurance Pakistan | Air connection Travel and Tours" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/travel-insurance" },
    ],
  }),
  component: TravelInsurance,
});

function TravelInsurance() {
  const PARTNERS = [
    { name: "Jubilee Insurance", desc: "Premium Global Coverage" },
    { name: "Adamjee Insurance", desc: "Trusted Embassy Approved" },
    { name: "United Insurance", desc: "Best Value Packages" },
    { name: "EFU General", desc: "Comprehensive Protection" }
  ];

  return (
    <>
      <PageHero
        eyebrow="Travel Insurance"
        title="Travel covered. Mind at ease."
        subtitle="Schengen-compliant policies, global medical cover and trip cancellation protection from Pakistan's most trusted providers."
      />

      {/* Features Grid - Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: HeartPulse,
              t: "Medical Coverage",
              d: "Up to €50,000+ for medical emergencies, hospitalization, and repatriation abroad.",
            },
            {
              icon: CalendarX2,
              t: "Trip Protection",
              d: "Financial protection and refunds for unexpected trip cancellations, delays, or lost baggage."
            },
            {
              icon: ShieldCheck,
              t: "Schengen Compliant",
              d: "Meets and exceeds all mandatory minimum €30,000 Schengen visa insurance requirements.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.1}>
              <div className="group relative h-full rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-card/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <b.icon size={28} />
                </span>

                <h3 className="relative mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-primary">{b.t}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">
                  {b.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Official Partners Section */}
      <section className="py-16 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-4">
              <Award size={16} /> Official Issuing Partners
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Backed by Pakistan's Top Insurers</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We are an officially authorized agency to generate instant, verifiable travel insurance policies from the nation's most reputable providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARTNERS.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.1}>
                <div className="group flex flex-col items-center justify-center text-center rounded-[2rem] border border-border/50 bg-background/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:bg-card/60">
                  <Briefcase size={32} className="text-muted-foreground mb-4 group-hover:text-primary transition-colors duration-300" />
                  <h3 className="font-bold text-lg">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-semibold">{partner.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative overflow-hidden py-24 mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent" />
        <div className="container-px relative mx-auto max-w-3xl text-center z-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 shadow-inner">
            <Globe2 size={40} className="text-accent animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl tracking-tight">Insure your journey today</h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Don't let unforeseen circumstances ruin your trip. Secure your verifiable travel insurance instantly over WhatsApp or at our Blue Area office.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 mt-8 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-2">
              Get Insurance Quote <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* SEO Content Section - Expanded & Restructured */}
      <section className="container-px mx-auto max-w-5xl py-24">
        <div className="rounded-[3rem] border border-border/50 bg-card/20 backdrop-blur-md p-8 md:p-14 shadow-xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-4">
              <ShieldCheck size={16} /> Worldwide Protection
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">
              Comprehensive Travel & Medical Insurance in Pakistan
            </h2>
          </div>

          <div className="space-y-10">
            {/* Row 1 */}
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <FileText size={20} className="text-primary" /> Schengen Visa Requirements
                </h3>
                <p>
                  Applying for a visa to Europe? Securing <strong className="text-foreground">Schengen approved travel insurance in Islamabad</strong> is a mandatory, non-negotiable step in your application process. All Schengen embassies require a valid policy covering the exact duration of your stay.
                </p>
                <p>
                  At Air connection Travel and Tours, we provide strictly compliant policies that meet the mandatory minimum <strong>€30,000 medical emergency coverage</strong> required by Schengen states, ensuring your visa application is processed without delays or risk of rejection due to invalid insurance.
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Award size={20} className="text-primary" /> Official Partner Agency
                </h3>
                <p>
                  As an officially authorized issuer, we are direct partners with Pakistan's leading insurance corporations including <strong className="text-foreground">Jubilee Insurance, Adamjee Insurance, and United Insurance</strong>.
                </p>
                <p>
                  This direct partnership means your policy is instantly generated, digitally verifiable by any embassy worldwide via a QR code or policy number, and offered at the <strong>cheapest travel insurance rates in Pakistan</strong>—with no hidden middleman fees.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Row 2 */}
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="rounded-3xl bg-muted/30 p-8 border border-border/50 shadow-inner">
                <h4 className="text-lg font-bold text-foreground mb-6">What our policies cover:</h4>
                <ul className="space-y-4">
                  {[
                    'Emergency medical expenses and hospital stays',
                    'Medical evacuation and repatriation',
                    'Trip cancellations and severe delays',
                    'Loss of passport or checked baggage',
                    'COVID-19 related medical coverage (optional add-on)'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <h3 className="text-xl font-bold text-foreground mb-2">Instant Issuance in Blue Area</h3>
                <p>
                  We understand that travel preparations can be rushed. Whether you need coverage for a USA visa, a UK family visit, or a European tour, you can get your policy instantly.
                </p>
                <p>
                  Simply send us a picture of your passport via WhatsApp, or visit our office in Blue Area, Islamabad. Our agents will generate your official, verifiable travel insurance certificate within <strong>15 minutes</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
