import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Success Stories — Pakistan's #1 Visa Agency | Air connection Travel and Tours" },
      {
        name: "description",
        content:
          "Read 1500+ real client reviews and visa approval success stories. Air connection Travel and Tours Islamabad has a 98% approval rate for Schengen, USA, UK, Canada & Australia visas. Trusted by 20,000+ travelers.",
      },
      {
        name: "keywords",
        content: "air connection travel and tours reviews, visa approval stories pakistan, best visa consultant reviews islamabad, travel agency testimonials pakistan, visa success stories islamabad, trusted visa agent reviews",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Client Reviews — Air connection Travel and Tours | 98% Approval Rate" },
      { property: "og:description", content: "Real approval stories from 20,000+ happy travelers. Pakistan's most trusted visa agency." },
      { property: "og:url", content: "https://airconnection.pk/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        subtitle="Approval stories and honest reviews from travelers we've helped reach the world."
      />
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={(i % 6) * 0.05}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
