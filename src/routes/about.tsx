import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, Target, Eye, Users, Globe2, Sparkles, ArrowRight, ShieldCheck, Clock, Building2, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Air connection Travel and Tours — Pakistan's #1 Visa & Travel Agency Since 2009 | Islamabad" },
      {
        name: "description",
        content:
          "Air connection Travel and Tours is Pakistan's most trusted visa & travel agency since 2009. 15+ years experience, 20,000+ happy clients, 98% approval rate. IATA-accredited office in Blue Area, Islamabad. Expert team for Schengen, USA, UK, Canada & Australia visas.",
      },
      {
        name: "keywords",
        content:
          "about air connection travel and tours, best visa consultancy islamabad history, top immigration agency pakistan, trusted visa company since 2009, IATA accredited travel company islamabad, 98 percent visa approval rate pakistan, most experienced visa consultant islamabad, top rated travel agency pakistan, air connection travel and tours team, blue area visa agency",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Air connection Travel and Tours" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad" },
      { property: "og:title", content: "About Air connection Travel and Tours — Pakistan's Leading Visa & Travel Agency Since 2009" },
      {
        property: "og:description",
        content:
          "15+ years of excellence. 20,000+ happy clients. 98% approval rate. Learn about Pakistan's most trusted visa consultancy.",
      },
      { property: "og:image", content: "https://airconnection.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://airconnection.pk/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Air connection Travel and Tours | Pakistan's #1 Since 2009" },
      { name: "twitter:description", content: "15+ years, 20K+ clients, 98% approval rate. The story of Pakistan's top visa agency." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/about" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Premium visa consultancy from the heart of Islamabad"
        subtitle="Since 2009, Air connection Travel and Tours has helped over 20,000 travelers secure visas, flights and travel solutions to 50+ destinations worldwide."
      />

      {/* Main Intro & Stats Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* Story Text */}
            <Reveal>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
                  <ShieldCheck size={14} /> Established 2009
                </div>
                <h2 className="text-3xl font-bold md:text-5xl leading-tight tracking-tight">
                  Trusted advisors for <span className="text-primary">life-changing journeys</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Air connection Travel and Tours began with a simple promise — make global travel accessible to every Pakistani family, student, and professional. Today, we are recognized as one of Islamabad's premier visa consultancies, with a reputation built on absolute transparency, deep expertise, and an unwavering commitment to client success.
                  </p>
                  <p>
                    From complex Schengen and US visitor visas to family reunification and IATA-authorized global ticketing, our dedicated team in Blue Area delivers premium, white-glove service at every step of your application.
                  </p>
                </div>
                <Link
                  to="/consultation"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Free Consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Glassmorphic Stats Grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-3xl -z-10 rounded-full" />
                {[
                  { n: "15+", l: "Years of experience", icon: Clock },
                  { n: "20K+", l: "Happy travelers", icon: Users },
                  { n: "98%", l: "Approval rate", icon: Target },
                  { n: "50+", l: "Countries covered", icon: Globe2 },
                ].map((s, idx) => (
                  <div
                    key={s.l}
                    className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-card/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                    style={{ transform: `translateY(${idx % 2 === 1 ? '20px' : '0'})` }} // Staggered masonry effect
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20">
                      <s.icon size={64} className="text-primary" />
                    </div>
                    <p className="relative text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 group-hover:from-primary group-hover:to-primary-glow transition-all duration-300">
                      {s.n}
                    </p>
                    <p className="relative mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider group-hover:text-foreground/80 transition-colors">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Core Values Section (Mission/Vision/Values) */}
      <section className="bg-secondary/30 py-24 border-y border-border/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl">The Foundation of Our Success</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">The core principles that drive every application we process and every ticket we book.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                t: "Our Mission",
                d: "Empower every traveler with transparent, expert visa and travel guidance — no shortcuts, no false promises, no surprises.",
              },
              {
                icon: Eye,
                t: "Our Vision",
                d: "To be Pakistan's most universally trusted name in visa consultancy by continually setting new industry standards in service and integrity.",
              },
              {
                icon: Sparkles,
                t: "Our Values",
                d: "Honesty in assessment, expertise in execution, accountability in results, and an obsessive focus on the client experience.",
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.1} className="h-full">
                <div className="group relative h-full rounded-[2.5rem] border border-border/40 bg-card/50 backdrop-blur-md p-10 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 hover:bg-card/80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <b.icon size={28} />
                  </span>

                  <h3 className="relative mt-8 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">{b.t}</h3>
                  <p
                    className="relative mt-4 text-base text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/90"
                    dangerouslySetInnerHTML={{ __html: b.d }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey / Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-px mx-auto max-w-5xl relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-4">
                <Building2 size={16} /> Our History
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">A Legacy of Trust</h2>
            </div>
          </Reveal>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { year: "2009", title: "The Beginning", desc: "Air connection Travel and Tours opened its first small office, focusing on Umrah and basic ticketing services with a commitment to honest pricing." },
              { year: "2015", title: "IATA Accreditation", desc: "Achieved full IATA certification, allowing us to issue global air tickets directly and solidifying our status as a premium travel agency." },
              { year: "2019", title: "Visa Consultancy Expansion", desc: "Expanded our dedicated visa department to handle complex Schengen, UK, and USA cases, achieving an unprecedented 98% approval rate." },
              { year: "2026", title: "Leading the Industry", desc: "Today, we operate from a state-of-the-art office in Blue Area, recognized as Islamabad's #1 trusted visa and travel partner." },
            ].map((item, idx) => (
              <Reveal key={item.year} delay={idx * 0.1}>
                <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>

                  {/* Timeline Node */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-125">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-sm p-6 md:p-8 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:bg-card/80 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">{item.year}</span>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Global Expertise */}
      <section className="bg-primary/5 py-24 border-t border-primary/10">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="relative rounded-[3rem] overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
                  alt="Aviation and Travel"
                  className="w-full h-full object-cover min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-bold border border-white/20 mb-4">
                    <MapPin size={16} /> Blue Area, Islamabad
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">Visit our state-of-the-art office for a dedicated 1-on-1 consultation.</h3>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal>
                <h2 className="text-3xl font-bold md:text-4xl">Comprehensive Global Expertise</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">We don't just fill out forms. We strategically build your profile to ensure maximum approval chances across various travel sectors.</p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Schengen Visas", d: "Expert profiling for Europe" },
                  { t: "USA & UK Visas", d: "B1/B2 and Standard Visitor" },
                  { t: "Umrah Packages", d: "Direct Ministry allocations" },
                  { t: "Global Ticketing", d: "IATA direct lowest fares" },
                  { t: "Travel Insurance", d: "Instant Schengen compliant" },
                  { t: "Corporate Travel", d: "B2B travel management" }
                ].map((item, idx) => (
                  <Reveal key={item.t} delay={idx * 0.05}>
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-md hover:-translate-y-1">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{item.t}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
