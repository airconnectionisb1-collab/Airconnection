import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Wallet, 
  Globe, 
  Send, 
  CheckCircle2, 
  Info,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  FileText,
  Zap,
  MapPin,
  Calendar,
  Award,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/profile-assessment")({
  head: () => ({
    meta: [
      { title: "Visa Success Probability AI | Global Passport Strength Audit | Air connection Travel and Tours" },
      {
        name: "description",
        content: "Calculate your visa approval chances instantly with the World's #1 Visa Success Probability AI. Comprehensive profile assessment for USA, UK, Canada, Australia, and Schengen. Global Passport Strength Audit by Air connection Travel and Tours Islamabad.",
      },
      {
        name: "keywords",
        content: "Visa Success Probability, Global Passport Strength Audit, US Visa Eligibility Checker, UK Visa Success Rate, Schengen Visa Assessment Pakistan, Free Visa Evaluation Islamabad, Air connection Travel and Tours Visa AI, Travel History Building Strategy",
      },
      // OpenGraph
      { property: "og:title", content: "World's #1 Visa Success Probability AI | Profile Assessment" },
      { property: "og:description", content: "Don't risk a refusal. Run your profile through our Global Visa Audit AI before applying to USA, UK, or Schengen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://airconnection.pk/profile-assessment" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Visa Success Probability AI | Global Audit" },
      { name: "twitter:description", content: "Assess your global visa chances in 60 seconds." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Air connection Travel and Tours Visa Success AI",
          "operatingSystem": "All",
          "applicationCategory": "TravelApplication",
          "description": "Artificial Intelligence driven visa eligibility and success probability assessment tool for global travel destinations.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "12500"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PKR"
          },
          "author": {
            "@type": "Organization",
            "name": "Air connection Travel and Tours",
            "url": "https://airconnection.pk"
          }
        })
      }
    ]
  }),
  component: ProfileAssessment,
});

function ProfileAssessment() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    maritalStatus: "",
    education: "",
    occupation: "",
    experience: "",
    income: "",
    bankBalance: "",
    travelHistory: "",
    stamps: "",
    refusals: "",
    destination: "",
    visaType: "tourist",
    phone: ""
  });
  const [triedNext, setTriedNext] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    // Prevent negative numbers for specific fields
    if (['age', 'experience', 'stamps', 'refusals'].includes(field)) {
      if (value !== "" && (parseInt(value) < 0 || value.startsWith('-'))) return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    if (step === 1) return !!(formData.name && formData.age && formData.maritalStatus && formData.phone);
    if (step === 2) return !!(formData.occupation && formData.experience);
    if (step === 3) return !!(formData.income && formData.bankBalance);
    if (step === 4) return !!(formData.destination && formData.visaType && formData.stamps !== "" && formData.refusals !== "" && formData.travelHistory);
    return true;
  };

  const isInvalid = (field: keyof typeof formData) => {
    if (!triedNext) return false;
    if (field === 'education') return false; // "except study"
    return formData[field] === "";
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep(s => Math.min(s + 1, totalSteps));
      setTriedNext(false);
    } else {
      setTriedNext(true);
    }
  };

  const prevStep = () => {
    setStep(s => Math.max(s - 1, 1));
    setTriedNext(false);
  };

  const generateWhatsAppLink = () => {
    const visaTypeLabels: Record<string, string> = {
      'tourist': 'Tourist / Visit',
      'business': 'Business / Conference',
      'family': 'Family Reunification',
      'b1': 'US Business (B1 Focus)',
      'b2': 'US Tourist (B2 Focus)',
      'b1b2': 'US Combined (B1/B2)',
      'me-evisa': 'ME E-Visa / On-Arrival Check',
      'me-title': 'ME Profession Title Eligibility',
      'me-long': 'ME Long-Term Stay Assessment',
      'la-waiver': 'Latin America Visa Waiver Check',
      'la-financial': 'Latin America Financial Evaluation',
      'la-interview': 'Latin America Consular Strategy',
      'nz-bonafide': 'NZ Bona Fide Applicant Assessment',
      'nz-health': 'NZ Health & Character Review',
      'nz-financial': 'NZ Financial Support Evaluation',
      'ru-loi': 'Russia/Central Asia Voucher/LOI Assessment',
      'ru-itinerary': 'Russia/Central Asia Itinerary Review',
      'ru-clearance': 'Russia/Central Asia Professional Clearance',
      'gs-strength': 'Global Passport Strength Assessment',
      'gs-regions': 'Easy Entry Region Identification',
      'gs-roadmap': '6-Month UK/US Roadmap Plan'
    };
    const visaLabel = visaTypeLabels[formData.visaType] || formData.visaType;

    const msg = `*New Profile Assessment Request*\n\n` +
      `*Personal Info*\n` +
      `Name: ${formData.name}\n` +
      `Age: ${formData.age}\n` +
      `Marital Status: ${formData.maritalStatus}\n\n` +
      `*Professional Profile*\n` +
      `Education: ${formData.education}\n` +
      `Occupation: ${formData.occupation}\n` +
      `Experience: ${formData.experience} years\n\n` +
      `*Financials*\n` +
      `Monthly Income: ${formData.income}\n` +
      `Bank Balance: ${formData.bankBalance}\n\n` +
      `*Travel Details*\n` +
      `Destination: ${formData.destination}\n` +
      `Assessment Focus: ${visaLabel}\n\n` +
      `*Travel History*\n` +
      `Visa Stamps: ${formData.stamps}\n` +
      `Total Refusals: ${formData.refusals}\n` +
      `Summary: ${formData.travelHistory}\n\n` +
      `*Contact:* ${formData.phone}`;

    return `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="bg-secondary/20 min-h-screen pb-20">
      <PageHero 
        eyebrow="Evaluation"
        title="Visa Profile Assessment"
        subtitle="Provide your details for a professional evaluation of your visa eligibility. Our experts will analyze your profile and guide you on the best path forward."
      />

      <div className="container-px mx-auto max-w-4xl -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-elevated border border-border overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-secondary/30 h-2 w-full">
            <motion.div 
              className="bg-primary h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">
            {/* Step Indicators */}
            <div className="flex justify-between mb-12 overflow-x-auto no-scrollbar pb-2">
              {[
                { id: 1, label: "Basic Info", icon: User },
                { id: 2, label: "Professional", icon: Briefcase },
                { id: 3, label: "Financials", icon: Wallet },
                { id: 4, label: "Travel Plan", icon: Globe }
              ].map((s) => (
                <div 
                  key={s.id} 
                  className={cn(
                    "flex flex-col items-center gap-2 min-w-[80px] transition-all duration-500",
                    step >= s.id ? "text-primary" : "text-muted-foreground opacity-50"
                  )}
                >
                  <div className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                    step >= s.id ? "bg-primary text-white shadow-glow" : "bg-secondary text-muted-foreground"
                  )}>
                    <s.icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-tighter">{s.label}</span>
                </div>
              ))}
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {step === 1 && (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pa-name" className="text-xs uppercase font-bold text-muted-foreground ml-1">Full Name</Label>
                    <Input 
                      id="pa-name"
                      name="name"
                      placeholder="Enter your full name" 
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('name') && "ring-2 ring-destructive")} 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-age" className="text-xs uppercase font-bold text-muted-foreground ml-1">Age</Label>
                    <Input 
                      id="pa-age"
                      name="age"
                      placeholder="e.g. 28" 
                      type="number"
                      min="0"
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('age') && "ring-2 ring-destructive")} 
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-marital-status" className="text-xs uppercase font-bold text-muted-foreground ml-1">Marital Status</Label>
                    <Select value={formData.maritalStatus || ""} onValueChange={(v) => handleInputChange('maritalStatus', v)}>
                      <SelectTrigger id="pa-marital-status" className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('maritalStatus') && "ring-2 ring-destructive")}>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced / Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-phone" className="text-xs uppercase font-bold text-muted-foreground ml-1">Phone Number</Label>
                    <Input 
                      id="pa-phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+92 300 1234567" 
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('phone') && "ring-2 ring-destructive")} 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="pa-education" className="text-xs uppercase font-bold text-muted-foreground ml-1">Highest Education</Label>
                    <Select value={formData.education || ""} onValueChange={(v) => handleInputChange('education', v)}>
                      <SelectTrigger id="pa-education" className="h-14 rounded-2xl bg-secondary/10 border-none px-6">
                        <SelectValue placeholder="Select Education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masters">Masters or Higher</SelectItem>
                        <SelectItem value="bachelors">Bachelors Degree</SelectItem>
                        <SelectItem value="diploma">Diploma / Associate</SelectItem>
                        <SelectItem value="intermediate">Intermediate / A-Levels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-occupation" className="text-xs uppercase font-bold text-muted-foreground ml-1">Occupation</Label>
                    <Input 
                      id="pa-occupation"
                      name="occupation"
                      placeholder="e.g. Software Engineer" 
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('occupation') && "ring-2 ring-destructive")} 
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-experience" className="text-xs uppercase font-bold text-muted-foreground ml-1">Work Experience (Years)</Label>
                    <Input 
                      id="pa-experience"
                      name="experience"
                      placeholder="e.g. 5" 
                      type="number"
                      min="0"
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('experience') && "ring-2 ring-destructive")} 
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pa-income" className="text-xs uppercase font-bold text-muted-foreground ml-1">Monthly Income (PKR)</Label>
                    <Input 
                      id="pa-income"
                      name="income"
                      placeholder="e.g. 150,000" 
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('income') && "ring-2 ring-destructive")} 
                      value={formData.income}
                      onChange={(e) => handleInputChange('income', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pa-bank-balance" className="text-xs uppercase font-bold text-muted-foreground ml-1">Approx Bank Balance (PKR)</Label>
                    <Input 
                      id="pa-bank-balance"
                      name="bankBalance"
                      placeholder="e.g. 2,500,000" 
                      className={cn("h-14 rounded-2xl bg-secondary/10 border-none px-6", isInvalid('bankBalance') && "ring-2 ring-destructive")} 
                      value={formData.bankBalance}
                      onChange={(e) => handleInputChange('bankBalance', e.target.value)}
                    />
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-6 md:col-span-2 border border-primary/10">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <Info className="text-primary" size={20} />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-primary">Why financials matter?</strong> Most embassies require proof of strong financial ties to your home country. Accurate details help us provide a more realistic assessment of your success chances.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <Label className="text-xs uppercase font-black text-primary tracking-[0.2em] ml-1 block">Step 1: Select Destination Tier</Label>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { id: 'tier1', label: 'Tier 1 (High Scrutiny)', countries: 'USA, UK, Canada, Australia, Schengen', color: 'bg-red-500', border: 'border-red-200', text: 'text-red-700', bg: 'bg-red-50/50' },
                        { id: 'tier2', label: 'Tier 2 (Medium)', countries: 'Japan, S. Korea, NZ, Ireland', color: 'bg-amber-500', border: 'border-amber-200', text: 'text-amber-700', bg: 'bg-amber-50/50' },
                        { id: 'tier3', label: 'Tier 3 (E-Visa/Easy)', countries: 'Turkey, GCC, SE Asia, Central Asia', color: 'bg-emerald-500', border: 'border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50/50' }
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => handleInputChange('destination', tier.id)}
                          className={cn(
                            "text-left p-6 rounded-[2rem] border-2 transition-all group relative overflow-hidden",
                            formData.destination === tier.id ? `${tier.border} ${tier.bg} shadow-md scale-[1.02]` : "border-border bg-white hover:border-primary/30",
                            isInvalid('destination') && "ring-2 ring-destructive border-destructive/20"
                          )}
                        >
                          <div className={cn("h-1 w-12 rounded-full mb-4", tier.color)} />
                          <p className={cn("text-sm font-black mb-1 uppercase tracking-tight", formData.destination === tier.id ? tier.text : "text-foreground")}>{tier.label}</p>
                          <p className="text-[10px] text-muted-foreground font-medium leading-relaxed uppercase">{tier.countries}</p>
                          {formData.destination === tier.id && (
                            <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center">
                              <CheckCircle2 size={14} className={tier.text} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Label className="text-xs uppercase font-black text-primary tracking-[0.2em] ml-1 block">Step 2: Select Purpose</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        { id: 'tourist', label: 'Tourist Visit', desc: 'Focus on family, fun, and funds.', icon: Sparkles },
                        { id: 'business', label: 'Business / Official', desc: 'Focus on company, conferences, and contracts.', icon: Briefcase }
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleInputChange('visaType', p.id)}
                          className={cn(
                            "text-left p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 group",
                            formData.visaType === p.id ? "border-primary bg-primary/5 shadow-md scale-[1.02]" : "border-border bg-white hover:border-primary/30",
                            isInvalid('visaType') && "ring-2 ring-destructive border-destructive/20"
                          )}
                        >
                          <div className={cn(
                            "h-16 w-16 rounded-2xl flex items-center justify-center transition-colors shrink-0",
                            formData.visaType === p.id ? "bg-primary text-white shadow-glow" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}>
                            <p.icon size={28} />
                          </div>
                          <div>
                            <p className="text-lg font-black uppercase tracking-tight mb-1">
                              {p.label}
                            </p>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em]">{p.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-1">
                      <Label className="text-xs uppercase font-black text-primary tracking-[0.2em]">Step 3: Run Assessment</Label>
                      <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        <Info size={12} /> Success Probability Score
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-secondary/40 to-white p-8 md:p-10 rounded-[3rem] border-2 border-border/50 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors" />
                      
                      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        {/* Probability Gauge */}
                        {(() => {
                          const incomeVal = parseInt(formData.income.replace(/\D/g, '')) || 0;
                          const stampsVal = parseInt(formData.stamps) || 0;
                          const refusalsVal = parseInt(formData.refusals) || 0;
                          
                          const score = Math.max(5, Math.min(98, 
                            (incomeVal > 300000 ? 35 : incomeVal > 150000 ? 20 : 5) +
                            (stampsVal * 12) -
                            (refusalsVal * 20) +
                            (formData.destination === 'tier3' ? 35 : formData.destination === 'tier2' ? 15 : 5)
                          ));
                          
                          const status = score > 75 ? 'Optimistic' : score > 45 ? 'Moderate' : 'Challenging';
                          const colorClass = score > 75 ? 'text-emerald-500' : score > 45 ? 'text-amber-500' : 'text-red-500';
                          
                          return (
                            <>
                              <div className="relative h-40 w-40 shrink-0">
                                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                                  <circle className="text-secondary stroke-current" strokeWidth="10" fill="transparent" r="40" cx="50" cy="50" />
                                  <motion.circle 
                                    className={cn("stroke-current transition-all duration-1000", colorClass)}
                                    strokeWidth="10" strokeDasharray="251" 
                                    strokeDashoffset={251 - (251 * score) / 100}
                                    strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" 
                                  />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <span className="text-3xl font-black tracking-tighter">{score}%</span>
                                  <span className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em] mt-1">Probability</span>
                                </div>
                              </div>

                              <div className="space-y-5 text-center md:text-left flex-1">
                                <h4 className="text-2xl font-black uppercase tracking-tight">AI Success Audit</h4>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                  {stampsVal > 3 && <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-black rounded-lg uppercase tracking-wider">Elite Traveler</span>}
                                  {incomeVal > 200000 && <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[9px] font-black rounded-lg uppercase tracking-wider">High Stability</span>}
                                  {refusalsVal > 0 && <span className="px-3 py-1 bg-red-100 text-red-700 text-[9px] font-black rounded-lg uppercase tracking-wider">Refusal Mitigation</span>}
                                  {formData.destination === 'tier1' && <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[9px] font-black rounded-lg uppercase tracking-wider">Tier 1 Scrutiny</span>}
                                </div>
                                <p className="text-sm text-muted-foreground font-bold leading-relaxed uppercase tracking-tight opacity-80">
                                  Based on your profile ({stampsVal} stamps, {incomeVal.toLocaleString()} PKR income), your probability for {formData.destination === 'tier1' ? 'Tier 1' : 'this'} region is <span className={cn("font-black", colorClass)}>{status}</span>. {refusalsVal > 0 ? 'Address previous refusals carefully.' : 'Focus on demonstrating strong ties.'}
                                </p>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 bg-secondary/10 p-8 rounded-[2.5rem]">
                    <div className="space-y-2">
                      <Label htmlFor="pa-stamps" className="text-xs uppercase font-black text-muted-foreground/60 tracking-widest ml-1">Visa Stamps</Label>
                      <Input 
                        id="pa-stamps"
                        name="stamps"
                        placeholder="Total Stamps" 
                        type="number"
                        className={cn("h-14 rounded-2xl bg-white border-none px-6 font-bold", isInvalid('stamps') && "ring-2 ring-destructive")} 
                        value={formData.stamps}
                        onChange={(e) => handleInputChange('stamps', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pa-refusals" className="text-xs uppercase font-black text-destructive/50 tracking-widest ml-1">Total Refusals</Label>
                      <Input 
                        id="pa-refusals"
                        name="refusals"
                        placeholder="Total Refusals" 
                        type="number"
                        min="0"
                        className={cn("h-14 rounded-2xl bg-white border-none px-6 font-bold", isInvalid('refusals') && "ring-2 ring-destructive")} 
                        value={formData.refusals}
                        onChange={(e) => handleInputChange('refusals', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="pa-travel-history" className="text-xs uppercase font-black text-muted-foreground/60 tracking-widest ml-1">Travel Countries</Label>
                      <Input 
                        id="pa-travel-history"
                        name="travelHistory"
                        placeholder="UAE, Turkey, Thailand etc." 
                        className={cn("h-14 rounded-2xl bg-white border-none px-6 font-bold", isInvalid('travelHistory') && "ring-2 ring-destructive")} 
                        value={formData.travelHistory}
                        onChange={(e) => handleInputChange('travelHistory', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={prevStep} 
                disabled={step === 1}
                className="h-14 px-8 rounded-2xl font-bold"
              >
                Back
              </Button>
              
              {step < totalSteps ? (
                <Button 
                  onClick={nextStep} 
                  disabled={!isStepValid()}
                  className={cn(
                    "h-14 px-10 rounded-2xl font-bold transition-all flex items-center",
                    isStepValid() 
                      ? "bg-primary text-white shadow-glow hover:scale-[1.02]" 
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                >
                  Continue
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              ) : (
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-10 rounded-2xl text-white font-bold bg-emerald-600 hover:bg-emerald-700 shadow-glow-emerald hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Submit Assessment
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Expert Analysis", d: "Your profile is reviewed by senior visa consultants." },
            { icon: CheckCircle2, t: "High Accuracy", d: "We provide realistic success probability estimates." },
            { icon: Sparkles, t: "Free Consultation", d: "No hidden charges for initial profile evaluation." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-soft"
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.t}</h4>
              <p className="text-sm text-muted-foreground">{item.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Global SEO Content Hub - Optimized for Global Rankings */}
        <section className="mt-32 border-t border-border pt-20 pb-32">
          <div className="max-w-4xl mx-auto space-y-16 px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-black uppercase tracking-tight text-foreground/80">Expert Global Visa Strategy Hub</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">Advanced Profile Auditing for Tier 1 Destinations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <ShieldCheck size={18} /> USA B1/B2 Success Probability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our AI-driven assessment focuses on Section 214(b) compliance—the most common reason for US visa refusals in Pakistan. We evaluate your "Home Ties," professional stability, and travel intent to maximize your approval chances for B1 Business and B2 Tourist visas.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <Globe size={18} /> Schengen & UK Visa Evaluation
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navigate the complex requirements of the UK Standard Visitor Visa and Schengen (Germany, France, Italy, etc.) applications. We audit your financial documentation, sponsorship letters, and itinerary consistency to meet strict consular standards.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <Award size={18} /> Global Passport Strategy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not ready for a Tier 1 visa? Our "Passport Strength Audit" identifies high-value "Bridge Countries" (like Turkey, Japan, or South Korea) that help build the travel history needed for 5-year USA or UK visa success.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <FileText size={18} /> Document Integrity Audit
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From bank statement analysis to employment verification and hotel voucher consistency, Air connection Travel and Tours Islamabad ensures your application is "decision-ready" for embassy officers.
                </p>
              </div>
            </div>

            <div className="bg-secondary/20 p-10 rounded-[2.5rem] border border-border/50 text-center space-y-6">
              <h3 className="text-xl font-black uppercase">Why Air connection Travel and Tours is Pakistan's #1 Visa Expert?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                With over 15 years of field experience in Islamabad and a 98% success rate, we don't just fill forms—we build profiles. Whether you are a solo traveler, a business professional, or a family seeking reunification, our consultative approach minimizes risk and maximizes global mobility.
              </p>
              <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['IATA Authorized', 'Islamabad Chamber of Commerce Member'].map(badge => (
                  <span key={badge} className="px-4 py-2 bg-white rounded-full text-[10px] font-bold border border-border uppercase tracking-widest">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
