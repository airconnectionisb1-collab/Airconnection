import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CountryCard } from "@/components/site/CountryCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/destinations";
import { COMPANY } from "@/data/company";
import { COUNTRIES } from "@/data/countries-data";
import { FAQS } from "@/data/faqs";
import { TESTIMONIALS } from "@/data/testimonials";
import { TRAVEL_SERVICES, VISA_SERVICES } from "@/data/services";
import { AirlinesSection } from "@/components/site/AirlinesSection";
import {
  Plane,
  Hotel,
  ShieldCheck,
  BookUser,
  Globe2,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  Map,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Clock4,
  ThumbsUp,
  FileCheck2,
  MessageSquare,
  Stamp,
  Facebook,
  Shield,
  Moon,
  Package,
  Ticket,
  FileText,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Air connection Travel and Tours — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026 | Islamabad" },
      {
        name: "description",
        content:
          "Air connection Travel and Tours is Pakistan's #1 travel agency & best visa consultant in Islamabad. IATA-accredited experts for Schengen, USA, UK, Canada & Australia visas. Cheap flights, Umrah packages, hotel bookings & travel insurance. 98% approval rate. Blue Area, Islamabad.",
      },
      {
        name: "keywords",
        content:
          "best travel agency in pakistan 2026, pakistan no 1 travel agency, top travel agency islamabad, #1 visa consultant pakistan, best visa agency islamabad blue area, top tour operator pakistan, cheap flights from pakistan, schengen visa consultant islamabad, uk visa agent islamabad, usa visa consultant pakistan, canada immigration consultant islamabad, corporate travel agency pakistan, reliable travel agents in pakistan, flight booking pakistan, hotel reservation islamabad, best travel and tours pakistan, top immigration consultant pakistan, IATA accredited travel agent islamabad, umrah packages from pakistan 2026, cheap umrah packages islamabad, travel insurance islamabad, passport services islamabad, world best travel agency, international visa consultant, visa success rate pakistan, affordable travel agency islamabad, online travel booking pakistan, multi city flights islamabad, business class deals pakistan, economy flights islamabad to london, islamabad to dubai cheap tickets, best visa approval rate pakistan, trusted visa consultant near me islamabad",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Pakistan" },
      { name: "geo.position", content: "33.7135;73.0673" },
      { name: "ICBM", content: "33.7135, 73.0673" },
      { name: "rating", content: "general" },
      { name: "revisit-after", content: "3 days" },
      { name: "language", content: "English" },
      { name: "coverage", content: "Worldwide" },
      { name: "distribution", content: "Global" },
      {
        property: "og:title",
        content: "Air connection Travel and Tours — Pakistan's No.1 Travel Agency & Best Visa Consultant 2026",
      },
      {
        property: "og:description",
        content:
          "IATA-accredited travel agency in Islamabad. Expert Schengen, USA, UK, Canada & Australia visa consultancy. Cheap flights, Umrah packages & hotel bookings. 98% approval rate.",
      },
      { property: "og:image", content: "https://airconnection.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://airconnection.pk/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:site_name", content: "Air connection Travel and Tours — Pakistan's No.1 Travel Agency" },
      {
        name: "twitter:card", content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Air connection Travel and Tours | Pakistan's #1 Travel Agency & Visa Consultant 2026",
      },
      {
        name: "twitter:description",
        content:
          "IATA-accredited. 98% visa approval rate. Schengen, UK, USA, Canada & Australia visas from Islamabad. Cheap flights & Umrah packages.",
      },
      { name: "twitter:image", content: "https://airconnection.pk/src/assets/hero-travel.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/" },
      { rel: "alternate", hrefLang: "en-PK", href: "https://airconnection.pk/" },
      { rel: "alternate", hrefLang: "en", href: "https://airconnection.pk/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://airconnection.pk/" },
    ],
  }),
  component: Home,
});

const VISA_ICONS = [Plane, Ticket, Heart, Users, Globe2, Briefcase, GraduationCap, Building2];
const TRAVEL_ICONS = [Plane, Hotel, Shield, Moon, BookUser, Package, Ticket, Globe2];
const PROCESS = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us your travel goal and we'll map the right visa pathway.",
  },
  {
    icon: FileCheck2,
    title: "Document Prep",
    desc: "We curate, review and validate every required document.",
  },
  {
    icon: Stamp,
    title: "Application & Submission",
    desc: "Forms, appointments and submission handled end-to-end.",
  },
  {
    icon: ThumbsUp,
    title: "Approval & Travel",
    desc: "Receive your visa, then we handle tickets, hotels and insurance.",
  },
];

function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Air connection Travel and Tours",
    url: "https://airconnection.pk/",
    logo: "https://airconnection.pk/logo.png",
    description: "Top Travel Agency & Visa Consultant in Pakistan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blue Area",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <Hero />

      {/* Visa Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Visa Services"
          title="Visas to anywhere you want to go"
          subtitle="Hand-crafted documentation, embassy expertise and dedicated case officers for every application."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VISA_SERVICES.map((s: { title: string; desc: string; to: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard
                icon={VISA_ICONS[i % VISA_ICONS.length]}
                title={s.title}
                desc={s.desc}
                to={s.to}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <AirlinesSection />

      {/* Destinations */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary-glow)_0%,_transparent_40%)] opacity-[0.05]" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Destinations"
            title="Explore Our Iconic Destinations"
            subtitle="Premium visa consultancy and curated travel experiences for the world's most sought-after locations."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DESTINATIONS.slice(0, 8).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CountryCard
                  slug={c.slug}
                  name={c.name}
                  short={c.shortDesc}
                  image={c.image}
                  accent="Visa Assistance"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/countries"
              className="inline-flex items-center gap-3 rounded-full border-2 border-primary/20 bg-background px-8 py-4 text-sm font-black text-primary transition-all hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-[0_10px_25px_rgba(211,47,47,0.2)]"
            >
              Browse All Destinations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Why Choose Us"
              title="A Premium Travel Consultancy You Can Trust"
              subtitle="We combine deep embassy expertise with a personalized, transparent process to ensure your application stands out from the rest."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  t: "98% Success Rate",
                  d: "Proven track record across major embassies globally.",
                  color: "from-primary/10 to-transparent",
                  iconColor: "text-primary"
                },
                { 
                  icon: Clock4, 
                  t: "Express Processing", 
                  d: "Visa documentation prepared within 48-72 hours.",
                  color: "from-emerald-500/10 to-transparent",
                  iconColor: "text-emerald-600"
                },
                {
                  icon: ShieldCheck,
                  t: "Authorized GDS",
                  official: true,
                  d: "Direct access to real-time global flight inventory.",
                  color: "from-blue-500/10 to-transparent",
                  iconColor: "text-blue-600"
                },
                {
                  icon: Sparkles,
                  t: "Expert Officers",
                  d: "Dedicated visa consultants for every client case.",
                  color: "from-amber-500/10 to-transparent",
                  iconColor: "text-amber-600"
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="group relative rounded-[2rem] border border-border/40 bg-white p-8 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:border-primary/20 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 ${b.iconColor} transition-all duration-500 group-hover:bg-white group-hover:scale-110`}>
                    <b.icon size={22} strokeWidth={2.5} />
                  </span>
                  <p className="relative mt-6 text-lg font-black text-foreground tracking-tight">{b.t}</p>
                  <p className="relative mt-2 text-[13px] text-muted-foreground font-medium leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="relative rounded-[2.5rem] border border-border/50 bg-card/80 backdrop-blur-xl p-8 sm:p-12 shadow-elevated overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                      Average Visa Approval
                    </p>
                    <p className="mt-2 text-6xl sm:text-7xl font-black gradient-text tracking-tighter">98%</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-30 animate-pulse" />
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-accent to-accent-glow text-accent-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Award size={32} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 text-center relative z-10">
                  {[
                    { n: "15+", l: "Years Exp" },
                    { n: "20K+", l: "Travelers" },
                    { n: "50+", l: "Countries" },
                  ].map((s: { n: string; l: string }) => (
                    <div key={s.l} className="rounded-2xl bg-secondary/50 p-4 border border-border/50 hover:border-primary/20 transition-colors">
                      <p className="text-2xl font-black text-foreground">{s.n}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-[15px] text-muted-foreground font-medium leading-relaxed relative z-10 border-t border-border/50 pt-8">
                  Backed by a meticulous review process and embassy-aligned documentation, our expert case
                  officers maximize approval chances for every single application.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-muted/30 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-glow)_0%,_transparent_70%)] opacity-[0.03]" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Your Journey in Four Simple Steps"
            subtitle="We handle the complexity so you can focus on the adventure ahead."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-16">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="relative group h-full rounded-[2.5rem] border border-border/40 bg-white p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2">
                  <div className="absolute -right-4 -top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white text-lg font-black shadow-lg transform group-hover:rotate-12 transition-transform">
                    0{i + 1}
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <p.icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-foreground mb-4">{p.title}</h3>
                  <p className="text-[14px] text-muted-foreground font-medium leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Travel Services"
          title="Beyond visas — your complete travel partner"
          subtitle="One team for every travel need: tickets, hotels, insurance and passports."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TRAVEL_SERVICES.map((s: { title: string; desc: string; to: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard icon={TRAVEL_ICONS[i % TRAVEL_ICONS.length]} title={s.title} desc={s.desc} to={s.to} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="Loved by travelers across Pakistan" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.05}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-5xl py-20 md:py-32">
        <SectionHeader eyebrow="FAQ" title="Your Travel Questions, Resolved" subtitle="Everything you need to know about our visa processes and travel services." />
        <div className="mt-12 p-8 md:p-12 rounded-[3.5rem] border border-border/40 bg-white shadow-xl">
          <FAQAccordion items={FAQS.slice(0, 5)} />
        </div>
      </section>

      {/* Contact */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              center={false}
              eyebrow="Contact"
              title="Let's plan your journey"
              subtitle="Drop us a message and our team will respond within 1 business hour."
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5" size={18} /> Blue Area, Islamabad, Pakistan
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary mt-0.5" size={18} />{" "}
                <a className="hover:text-primary" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Facebook className="text-primary mt-0.5" size={18} />{" "}
                <a
                  className="hover:text-primary"
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.46788506085!2d73.067341!3d33.7135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9ce9999999%3A0x9999999999999999!2sAir%20Connection%20Travel%20%26%20Tours!5e0!3m2!1sen!2spk!4v1717616428789!5m2!1sen!2spk"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
