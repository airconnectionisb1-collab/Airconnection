import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

// Highly SEO-optimized FAQs targeting top search intents in Pakistan
const EXTENDED_FAQS = [
  {
    q: "How long does it take to process a Schengen Visa from Pakistan?",
    a: "Standard Schengen visa processing from Pakistan typically takes 15 to 30 calendar days after your appointment. However, during peak travel seasons (summer and winter holidays), it can take up to 45 days. We recommend applying at least 2 months before your intended travel date. Air connection Travel and Tours provides early appointment booking assistance to expedite the process."
  },
  {
    q: "What bank statement balance is required for a UK or Schengen visa?",
    a: "While there is no fixed 'official' amount, embassies look for a consistent closing balance that comfortably covers your entire trip (flights, hotels, daily expenses of €100-€150/day) while leaving enough funds for your return. Typically, a steady closing balance of PKR 1.5M to 2.5M over 6 months is recommended. We provide free profile assessments to guide you on exact financial requirements."
  },
  {
    q: "Do you offer Umrah visas without full packages?",
    a: "Yes, we process standalone Umrah visas for clients who wish to book their own flights and accommodations. However, booking a complete Umrah package through us often results in better overall rates due to our direct B2B contracts with Saudi hotels and airlines."
  },
  {
    q: "Are you an IATA-certified travel agency in Islamabad?",
    a: "Yes, Air connection Travel and Tours is a fully accredited IATA travel agency. This means we issue air tickets directly from our Blue Area office on over 300+ global airlines, guaranteeing the cheapest live fares without middleman markups."
  },
  {
    q: "Can I get a refund if my visa is rejected?",
    a: "Embassy visa fees and VFS/Gerry's service charges are strictly non-refundable as per government policies, regardless of the outcome. However, our consultancy fees are structured transparently, and we ensure your file is 100% accurate before submission to maximize your approval chances."
  },
  {
    q: "Do you provide cheap flights from Islamabad to London or USA?",
    a: "Absolutely. As direct ticketing agents, we offer exclusive discounted airfares from Islamabad (ISB) to major destinations like London (LHR), New York (JFK), and Toronto (YYZ) via Emirates, Qatar Airways, Turkish Airlines, and British Airways. We also offer special student baggage allowances."
  },
  {
    q: "What documents do I need for a Dubai (UAE) visit visa?",
    a: "For a standard 30-day or 60-day Dubai tourist visa, you only need a clear scanned copy of your passport (valid for 6 months), a passport-sized photograph with a white background, and your CNIC. Processing usually takes 24 to 48 working hours."
  },
  {
    q: "Where is Air connection Travel and Tours located?",
    a: "Our head office is conveniently located at Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000. We welcome walk-in consultations Monday through Saturday from 10:00 AM to 7:00 PM."
  }
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pakistan's #1 Visa & Travel Agency | Air connection Travel and Tours Islamabad" },
      {
        name: "description",
        content:
          "Frequently asked questions about Schengen visa processing, bank statements, UK visas, Umrah packages, and cheap flights. Get instant answers from Pakistan's top visa consultancy.",
      },
      {
        name: "keywords",
        content: "visa FAQ pakistan, schengen visa requirements pakistan, bank statement for uk visa, umrah visa only pakistan, travel agency questions islamabad, Air connection Travel and Tours FAQ, cheap flights islamabad FAQ",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "FAQ — Air connection Travel and Tours | Pakistan's #1 Travel Agency" },
      { property: "og:description", content: "Quick answers about visa processing, fees, documentation & travel services." },
      { property: "og:url", content: "https://airconnection.pk/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://airconnection.pk/faq" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EXTENDED_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data for Google Rich Snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Quick, honest answers to the questions our clients ask most about visas, ticketing, and Umrah."
      />

      <section className="relative py-20 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-px relative z-10 mx-auto max-w-4xl">

          {/* Glassmorphism Wrapper for FAQs */}
          <div className="rounded-[3rem] border border-border/50 bg-card/30 backdrop-blur-xl p-6 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-primary/30">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <HelpCircle size={150} className="text-primary" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles size={24} />
                </span>
                <h2 className="text-2xl font-bold">Top Client Queries</h2>
              </div>

              {/* FAQ Accordion Component */}
              <FAQAccordion items={EXTENDED_FAQS} />
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-background to-secondary/20 border border-primary/20 p-8 md:p-12 text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 translate-y-full transition-transform duration-700 group-hover:translate-y-0" />

            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg mb-6 shadow-primary/30">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold md:text-3xl mb-4">Still have questions?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Can't find the answer you're looking for? Our visa experts and travel consultants are standing by to help you plan your next journey.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/923335457255?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/30"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
