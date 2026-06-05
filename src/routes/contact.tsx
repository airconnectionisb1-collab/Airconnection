import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook } from "lucide-react";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Air connection Travel and Tours — Pakistan's #1 Visa Office in Blue Area, Islamabad" },
      {
        name: "description",
        content:
          "Contact Pakistan's best visa consultancy. Visit Air connection Travel and Tours in Blue Area, Islamabad or reach us via phone 03335457255, WhatsApp, or email. Open Mon-Sat 10AM-7PM. Expert visa & travel guidance.",
      },
      {
        name: "keywords",
        content:
          "contact Air connection Travel and Tours, visa office islamabad blue area, best visa agency address islamabad, immigration office near me islamabad, Air connection Travel and Tours phone number, WhatsApp visa agent pakistan, travel agency contact islamabad, visa consultant near me pakistan, Air connection Travel and Tours email, Air connection Travel and Tours whatsapp number",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Blue Area" },
      {
        property: "og:title",
        content: "Contact Air connection Travel and Tours — Pakistan's #1 Visa & Travel Office",
      },
      {
        property: "og:description",
        content:
          "Visit us at Blue Area, Islamabad. Expert help for Schengen, UK, USA, Canada & Australia visas. WhatsApp, phone & walk-in available.",
      },
      { property: "og:image", content: "https://airconnection.pk/src/assets/hero-travel.jpg" },
      { property: "og:url", content: "https://airconnection.pk/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Pakistan's #1 Visa Agency | Air connection Travel and Tours" },
      { name: "twitter:description", content: "Blue Area, Islamabad. Phone, WhatsApp & walk-in consultations available." },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const NEW_ADDRESS = "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Walk in, call, email or message us on WhatsApp. We typically reply within 1 business hour."
      />

      <section className="relative py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Contact Information Column */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  t: "Office",
                  d: NEW_ADDRESS,
                  href: COMPANY.mapUrl
                },
                {
                  icon: Phone,
                  t: "Phone",
                  d: COMPANY.phone,
                  href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Phone,
                  t: "Mobile",
                  d: COMPANY.mobile,
                  href: `tel:${COMPANY.mobile.replace(/\s/g, "")}`,
                },
                { icon: Mail, t: "Email", d: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Clock, t: "Hours", d: COMPANY.hours, href: null },
                {
                  icon: MessageCircle,
                  t: "WhatsApp",
                  d: COMPANY.whatsapp,
                  href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
                },
                {
                  icon: Facebook,
                  t: "Facebook",
                  d: "Follow us on Facebook",
                  href: COMPANY.socials.facebook,
                },
              ].map((b) => (
                <a
                  key={b.t}
                  href={b.href || "#"}
                  target={b.t === "Office" || b.t === "Facebook" || b.t === "WhatsApp" ? "_blank" : undefined}
                  rel={b.t === "Office" || b.t === "Facebook" || b.t === "WhatsApp" ? "noreferrer" : undefined}
                  className={`group relative flex items-center gap-5 rounded-[2rem] border border-border/40 bg-card/30 backdrop-blur-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 overflow-hidden ${!b.href ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <b.icon size={22} />
                  </span>

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1">{b.t}</p>
                    <p className="text-sm md:text-base font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground leading-relaxed">
                      {b.d}
                    </p>
                  </div>
                </a>
              ))}

              {/* Map Iframe with Glassmorphic Wrapper */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/30 p-2 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-primary/30 mt-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="overflow-hidden rounded-[2rem]">
                  <iframe
                    title="Air connection Travel and Tours office in Blue Area, Islamabad"
                    src="https://www.google.com/maps?q=Air+Connection,+Rajput+Plaza,+AKM+Fazal-ul-Haq+Rd,+Block+E,+Blue+Area,+Islamabad&z=17&output=embed"
                    loading="lazy"
                    className="h-[300px] w-full border-0 filter transition-all duration-500 group-hover:brightness-105"
                  />
                </div>
              </div>
            </div>

            {/* Form Column - Wrapped in Glassmorphism Container */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-[2.5rem] border border-border/40 bg-card/40 backdrop-blur-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-primary/10 blur-[50px] pointer-events-none" />

                <div className="mb-8 relative">
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and our visa experts will get back to you promptly.</p>
                </div>

                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
