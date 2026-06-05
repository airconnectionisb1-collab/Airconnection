import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Visa Consultation — Pakistan's #1 Visa Expert | Air connection Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Book a free 15-minute visa consultation with Pakistan's best visa consultants. Get expert pathway analysis, document checklist & honest fee estimate. No obligation. Air connection Travel and Tours Blue Area, Islamabad.",
      },
      {
        name: "keywords",
        content: "free visa consultation islamabad, book visa appointment pakistan, visa expert consultation blue area, free immigration advice islamabad, Air connection Travel and Tours consultation, visa pathway assessment pakistan",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "PK-IS" },
      { property: "og:title", content: "Free Visa Consultation — Pakistan's #1 Visa Expert" },
      {
        property: "og:description",
        content: "15 minutes with a senior visa consultant — no obligation. Expert pathway & document checklist.",
      },
      { property: "og:url", content: "https://airconnection.pk/consultation" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/consultation" },
    ],
  }),
  component: Consultation,
});

function Consultation() {
  return (
    <>
      <PageHero
        eyebrow="Free Consultation"
        title="15 minutes that changes your travel plans"
        subtitle="Tell us about your goal — we'll respond with a clear pathway, timeline and honest fee estimate."
      />
      <section className="container-px mx-auto max-w-7xl py-20 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Why book a consultation?</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Personalized visa pathway recommendation",
              "Document checklist tailored to your case",
              "Realistic timeline & fee transparency",
              "Senior consultant — no junior reps",
              "100% obligation-free",
            ].map((it) => (
              <li key={it} className="flex gap-3">
                <CheckCircle2 className="text-primary mt-0.5" size={18} /> {it}
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-foreground">
            <Sparkles size={14} className="text-accent" /> Average response: under 1 business hour
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
