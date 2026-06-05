import { createFileRoute, notFound } from "@tanstack/react-router";
import { DESTINATIONS } from "@/data/destinations";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, FileText, Banknote, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import React, { Suspense } from "react";
const BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/countries/$slug_/visa/$visaType")({
  loader: ({ params }) => {
    const destination = DESTINATIONS.find((c) => c.slug === params.slug);
    if (!destination) throw notFound();
    const visa = destination.visas.find((v) => v.slug === params.visaType);
    if (!visa) throw notFound();
    return { destination, visa };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.visa.seoTitle || "Visa Consultant Islamabad" },
      { name: "description", content: loaderData?.visa.seoDescription || "" },
      { name: "keywords", content: loaderData?.visa.keywords || "" },
    ],
  }),
  component: VisaSubPage,
});

function VisaSubPage() {
  const { destination, visa } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={`${destination.name} Visas`} title={visa.name} subtitle={visa.heroText} />

      <div className="-mt-20 relative z-50 container-px mx-auto max-w-7xl">
        <Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget initialTab="visa" /></Suspense>
      </div>

      <section className="container-px mx-auto max-w-5xl py-20">
        {/* Intro */}
        <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Expert Processing for {destination.name} {visa.name}s
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            As the top visa consultancy in Islamabad, Air connection Travel and Tours ensures your{" "}
            {visa.name.toLowerCase()} application for {destination.name} is meticulously prepared.
            We guide you through the entire process, minimizing errors and maximizing your chances
            of approval.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          {/* Main Requirements */}
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <FileText size={20} />
              </span>
              <h2 className="text-2xl font-bold text-foreground">Required Documents Checklist</h2>
            </div>
            <ul className="space-y-4">
              {visa.requirements.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-0.5 flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-muted-foreground leading-relaxed font-medium text-sm">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Banknote size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Estimated Fees</h3>
              </div>
              <p className="text-sm text-muted-foreground">{visa.fees}</p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-accent" />
                <h3 className="font-bold text-lg">Processing Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">{visa.processingTime}</p>
            </div>

            {visa.tips && visa.tips.length > 0 && (
              <div className="rounded-2xl border border-border bg-primary/5 p-6 shadow-soft border-primary/20">
                <h3 className="font-bold text-lg mb-4 text-primary-glow">Expert Tips</h3>
                <ul className="space-y-3">
                  {visa.tips.map((tip: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust & Contact Section */}
      <section className="bg-secondary/30 py-20 border-t border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to apply for your {visa.name}?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Don't risk your application with incomplete documents. Let the best{" "}
                {destination.name} visa consultants in Islamabad handle your case.
              </p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> Form Filling & Error Checking
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> Document Translation &
                  Attestation Guidance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} /> Appointment Scheduling & Mock
                  Interviews
                </li>
              </ul>

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
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold mb-2">Book a Free Assessment</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Leave your contact info and our experts will reach out to discuss your{" "}
                {visa.name.toLowerCase()} for {destination.name}.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
