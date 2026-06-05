import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

import { COMPANY } from "@/data/company";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const message = `*New Enquiry from Website*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Destination: ${data.country || "Not specified"}

*Message:*
${data.message}`;

    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.5rem] border border-border/40 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Munawar Abbas" required autoComplete="name" />
        <Field label="Email Address" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
        <Field label="WhatsApp Number" name="phone" placeholder="+92 333 5457255" required autoComplete="tel" />
        <Field
          label="Target Destination"
          name="country"
          placeholder="Schengen, UK, USA"
          defaultValue={defaultSubject}
          autoComplete="off"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2 ml-1">
          Travel Plans & Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-border/60 bg-muted/20 px-5 py-4 text-sm font-medium outline-none transition-all focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/40"
          placeholder="Mention your visa type, preferred travel dates, and any specific questions you have..."
        />
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-sm font-black text-white shadow-[0_10px_25px_rgba(211,47,47,0.3)] transition-all hover:shadow-[0_15px_35px_rgba(211,47,47,0.4)] hover:-translate-y-1 md:w-auto active:translate-y-0 group"
      >
        {sent ? (
          <>
            <CheckCircle2 size={18} /> Connecting WhatsApp...
          </>
        ) : (
          <>
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Send Your Inquiry
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2 ml-1">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="w-full h-14 rounded-2xl border border-border/60 bg-muted/20 px-5 py-3 text-sm font-bold outline-none transition-all focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/40"
      />
    </label>
  );
}
