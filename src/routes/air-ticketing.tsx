import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Plane, Globe2, BadgeCheck, Banknote, Clock4, ArrowRight, Star } from "lucide-react";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { FAQAccordion } from "@/components/site/FAQAccordion";

const TICKETING_FAQS = [
  { q: "Is Air connection Travel and Tours an IATA-authorized travel agency?", a: "Yes. Air connection Travel and Tours holds full IATA accreditation, allowing us to issue tickets directly on 300+ airlines worldwide with guaranteed fare accuracy and instant e-ticket confirmation." },
  { q: "How do I get cheap flights from Islamabad to London?", a: "Contact our ticketing desk via WhatsApp or visit our Blue Area office. We compare fares across Emirates, Turkish Airlines, PIA, Qatar Airways and more to find the lowest price with the best route for ISB to LHR flights." },
  { q: "Can I book group flights for Umrah or Hajj from Islamabad?", a: "Absolutely. We specialize in group bookings for religious travel, weddings, and corporate teams. We can block seats with minimal deposits and offer flexible name-change policies." },
  { q: "Do you offer student discount flights from Pakistan?", a: "Yes. We partner with airlines like British Airways, Etihad, and Virgin Atlantic that offer special student fares with extra baggage allowance. Bring your university offer letter for eligibility." },
  { q: "What airlines can I book through Air connection Travel and Tours?", a: "We issue tickets on all major carriers including PIA, Emirates, Qatar Airways, Turkish Airlines, Etihad, Saudi Airlines, British Airways, Air Canada, Lufthansa, Singapore Airlines, Thai Airways, and 290+ more." },
  { q: "How fast can I get my e-ticket after booking?", a: "Instant. Once payment is confirmed, your e-ticket is issued within minutes and sent directly to your email and WhatsApp." },
  { q: "Do you handle flight cancellations and date changes?", a: "Yes, our 24/7 support team handles all post-booking changes including cancellations, date changes, and name corrections as per airline policy." },
  { q: "Where is your office located in Islamabad?", a: "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000. We are open Monday to Saturday, 10 AM – 7 PM." },
];

export const Route = createFileRoute("/air-ticketing")({
  head: () => ({
    meta: [
      { title: "Best Air Ticketing Agency in Islamabad 2026 — Cheap Flights, IATA Deals | Air connection Travel and Tours" },
      { name: "description", content: "Air connection Travel and Tours is Islamabad's #1 IATA-authorized air ticketing agency in Blue Area. Book cheap flights to UK, USA, Canada, Dubai, Turkey & Australia. Instant e-tickets, group bookings, student discounts & 24/7 WhatsApp support. Call 03335457255." },
      { name: "keywords", content: "best air ticketing agency Islamabad, cheap flights from Islamabad, IATA authorized travel agent Islamabad, international flight booking Pakistan, cheap tickets to UK from Islamabad, USA flight booking ISB, airline reservation Islamabad Blue Area, last minute flights Pakistan, group flight booking Islamabad, student discount tickets Islamabad, business class deals ISB, Umrah flight booking Islamabad, cheap flights to Dubai from ISB, Toronto flight from Islamabad, PIA ticket agent Islamabad, Emirates ticket Islamabad, Qatar Airways booking Pakistan, Turkish Airlines Islamabad, flight booking near me Islamabad, travel agency Blue Area Islamabad, air ticket price Islamabad to London, Islamabad to Jeddah flight, best travel agent Pakistan 2026, Air connection Travel and Tours air ticketing" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "Air connection Travel and Tours" },
      { property: "og:title", content: "Best Air Ticketing Agency in Islamabad — Cheap International Flights | Air connection Travel and Tours" },
      { property: "og:description", content: "Book the cheapest international flights from Islamabad with IATA-certified Air connection Travel and Tours. Instant e-tickets on 300+ airlines. 24/7 WhatsApp support." },
      { property: "og:url", content: "https://airconnection.pk/air-ticketing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "#1 Air Ticketing Agency Islamabad — Air connection Travel and Tours" },
      { name: "twitter:description", content: "IATA-authorized. Cheapest flights from ISB to London, Dubai, Toronto, New York & more. Instant booking." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/air-ticketing" },
    ],
  }),
  component: AirTicketing,
});

function AirTicketing() {
  return (
    <>
      <PageHero
        eyebrow="Air Ticketing"
        title="IATA-authorized tickets at the best fares"
        subtitle="Instant booking on every major airline — domestic and international — backed by 24/7 support."
      />

      {/* Integrated Booking Widget */}
      <div className="relative z-10 -mt-16 md:-mt-24 pb-12">
        <Reveal delay={0.2}>
          <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20" />}>
            <BookingWidget initialTab="flights" />
          </Suspense>
        </Reveal>
      </div>

      {/* Glassmorphism Feature Cards */}
      <section className="container-px mx-auto max-w-7xl py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { icon: BadgeCheck, t: "IATA Authorized", d: "Officially accredited ticketing agency." },
          { icon: Globe2, t: "International Routes", d: "All major airlines worldwide." },
          { icon: Banknote, t: "Best Fares", d: "Lowest available pricing, transparent fees." },
          { icon: Clock4, t: "24/7 Support", d: "Booking changes anytime, anywhere." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 0.05}>
            <div className="group relative h-full rounded-[2rem] border border-border/40 bg-card/30 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <b.icon size={24} />
              </span>
              <h3 className="relative mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-primary">{b.t}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Modern CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent" />
        <div className="container-px relative mx-auto max-w-3xl text-center z-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 shadow-inner">
            <Plane size={40} className="text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl tracking-tight">Ready to fly?</h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Send us your route and dates — we'll quote the best fare within minutes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923335457255?text=Hi%2C%20I%20need%20a%20fare%20quote%20for%20a%20flight."
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">Contact Air connection Expert</span>
            </a>
            <a
              href="https://wa.me/923335457255?text=Hi%2C%20I%20need%20a%20fare%20quote%20for%20a%20flight."
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">Contact Ticketing Officer</span>
            </a>
          </div>
        </div>
      </section>

      {/* Premium Visual Section - Glass Overlay */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="group relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
          <img
            src="/air_ticketing_hero_1777294022698.webp"
            alt="Modern Aviation"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Base image darkening */}

          <div className="relative grid lg:grid-cols-2 h-full min-h-[500px]">
            <div className="hidden lg:block" /> {/* Spacer for image */}

            {/* Glassmorphic content box */}
            <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 bg-background/60 backdrop-blur-xl border-l border-white/10 h-full transition-all duration-500 hover:bg-background/70">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-bold text-primary mb-8 shadow-sm">
                  <Plane size={14} /> Global Network
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6 leading-tight">
                  Seamless connections to over <span className="text-primary">200+ destinations</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  As an <strong>IATA-certified agency</strong>, we bridge the gap between you and
                  the world's leading airlines. Our direct integration with global distribution
                  systems (GDS) ensures that you see real-time availability and "web-only" fares
                  that aren't available to the general public.
                </p>
                <div className="grid gap-5 sm:grid-cols-2 text-sm font-semibold">
                  {['Instant E-Tickets', 'Group Discounts', 'Student Fares', 'Multi-city Routes'].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 border border-white/5">
                      <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Long Content SEO Section */}
      <section className="container-px mx-auto max-w-7xl py-24 border-t border-border/30">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl mb-8">
                Why Choose Air connection Travel and Tours for Your Flight Bookings?
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-6 text-lg">
                <p>
                  Finding the <strong>best air ticketing agency in Islamabad</strong> can be
                  overwhelming with so many options in Blue Area. However, Air connection Travel and Tours stands out
                  as a premier <strong>IATA-authorized travel agent</strong>. This status is not
                  just a badge; it signifies our commitment to professional standards, financial
                  security, and direct relationships with over 300 airlines worldwide.
                </p>
                <p>
                  Our team specializes in finding <strong>cheap flights from Islamabad</strong> to
                  major hubs including London, New York, Toronto, Dubai, and Melbourne. We don't
                  just use automated tools; our expert ticketing officers manually audit routes to
                  find hidden savings, such as "split-ticketing" or choosing alternative hubs that
                  can save you thousands of rupees on <strong>international flight bookings</strong>.
                </p>
                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Global Airline Partnerships</h3>
                <p>
                  We are proud partners with the world's leading carriers. Whether you prefer the
                  luxury of <strong>Emirates</strong> and <strong>Qatar Airways</strong>, the
                  extensive network of <strong>Turkish Airlines</strong>, or the convenience of
                  <strong>PIA</strong>, we provide seamless reservations. Our clients often enjoy
                  exclusive <strong>business class deals in ISB</strong> and early-access to
                  promotional fares for summer and winter holidays.
                </p>
              </div>
            </div>

            {/* Glassy Content Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-[2rem] bg-muted/20 backdrop-blur-md p-8 border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 hover:border-primary/30 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Globe2 size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Corporate & Group Travel</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Managing travel for a large group or a corporate team requires precision. We offer
                  specialized <strong>group flight booking in Islamabad</strong>, allowing you to
                  block seats with minimal deposits and manage name changes flexibly. Perfect for
                  weddings, sports teams, and religious groups.
                </p>
              </div>
              <div className="group rounded-[2rem] bg-muted/20 backdrop-blur-md p-8 border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 hover:border-primary/30 hover:shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <BadgeCheck size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Special Student Discounts</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traveling for studies? We assist students in securing
                  <strong>discounted tickets from Islamabad</strong> with extra baggage allowances
                  on major airlines like Virgin Atlantic, Etihad, and British Airways. Bring your
                  university offer letter and save on your first journey abroad.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Asides with glowing borders */}
          <aside className="space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary/5 backdrop-blur-xl p-8 border border-primary/20 shadow-xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <h4 className="relative font-bold text-xl mb-6 flex items-center gap-2">
                <BadgeCheck className="text-primary" size={24} /> Ticketing Checklist
              </h4>
              <ul className="relative space-y-4 text-sm font-medium">
                {[
                  "Passport validity must be at least 6 months.",
                  "Check transit visa requirements for layovers.",
                  "Ensure your name matches your passport exactly.",
                  "Verify baggage allowance (2PC vs 30KG)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <ArrowRight size={14} />
                    </span>
                    <span className="mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-accent/5 backdrop-blur-xl p-8 border border-accent/20 shadow-xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
              <h4 className="relative font-bold text-xl mb-4 flex items-center gap-2">
                <Clock4 className="text-accent" size={24} /> 24/7 Urgent Support
              </h4>
              <p className="relative text-sm text-muted-foreground mb-8 leading-relaxed">
                Flight cancelled? Need an urgent date change? Our "Human-Powered" support is
                available around the clock to handle emergencies.
              </p>
              <div className="relative space-y-3 bg-background/40 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Avg Response Time</span>
                  <span className="text-accent animate-pulse">15 Mins</span>
                </div>
                <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[95%] bg-accent rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Popular Routes - Glassmorphic Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Popular Flight Routes from Islamabad</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover our most frequently booked international sectors and the top airlines servicing them.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { route: "Islamabad → London", code: "ISB → LHR", airlines: "PIA, Emirates, Turkish" },
              { route: "Islamabad → Dubai", code: "ISB → DXB", airlines: "Emirates, flydubai, PIA" },
              { route: "Islamabad → Toronto", code: "ISB → YYZ", airlines: "Turkish, Emirates, Qatar" },
              { route: "Islamabad → Jeddah", code: "ISB → JED", airlines: "PIA, Saudi, flynas" },
              { route: "Islamabad → New York", code: "ISB → JFK", airlines: "Emirates, Turkish, Qatar" },
              { route: "Islamabad → Istanbul", code: "ISB → IST", airlines: "Turkish Airlines" },
              { route: "Islamabad → Melbourne", code: "ISB → MEL", airlines: "Emirates, Qatar, Thai" },
              { route: "Islamabad → Doha", code: "ISB → DOH", airlines: "Qatar Airways, PIA" },
            ].map((r, i) => (
              <div
                key={r.code}
                className="group relative rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/50 p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-card/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <div className="absolute top-6 right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <Plane size={16} className="text-primary rotate-45" />
                </div>
                <p className="font-bold text-lg mb-1">{r.route}</p>
                <div className="inline-flex items-center justify-center rounded-full bg-muted/50 px-3 py-1 text-xs font-mono text-muted-foreground mt-2 mb-4 border border-border/50">
                  {r.code}
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {r.airlines}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-px mx-auto max-w-4xl py-24">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-4">
            <Star size={16} /> Help Center
          </span>
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about booking flights with Air connection Travel and Tours</p>
        </div>
        <div className="rounded-[2.5rem] bg-card/30 backdrop-blur-xl border border-border/50 p-6 md:p-10 shadow-xl">
          <FAQAccordion items={TICKETING_FAQS} />
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TravelAgency",
              "name": "Air connection Travel and Tours",
              "alternateName": "Air connection Travel and Tours Air Ticketing",
              "url": "https://airconnection.pk/air-ticketing",
              "logo": "https://airconnection.pk/logo.png",
              "image": "https://airconnection.pk/air_ticketing_hero_1777294022698.webp",
              "description": "Islamabad's #1 IATA-authorized air ticketing agency. Cheap international flights, group bookings, student discounts, Umrah packages, and 24/7 WhatsApp support from Blue Area.",
              "telephone": "03335457255",
              "email": "airconnectionisb1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area",
                "addressLocality": "Islamabad",
                "addressRegion": "Islamabad Capital Territory",
                "postalCode": "44000",
                "addressCountry": "PK"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": "33.7215", "longitude": "73.0433" },
              "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "10:00", "closes": "19:00" },
              "priceRange": "$$",
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "847", "bestRating": "5" },
              "sameAs": ["https://www.facebook.com/profile.php?id=61572120569006", "https://www.instagram.com/airconnection.pk/", "https://www.linkedin.com/company/os-consultants/"]
            },
            {
              "@type": "FAQPage",
              "mainEntity": TICKETING_FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airconnection.pk" },
                { "@type": "ListItem", "position": 2, "name": "Air Ticketing", "item": "https://airconnection.pk/air-ticketing" }
              ]
            }
          ]
        })
      }} />
    </>
  );
}
