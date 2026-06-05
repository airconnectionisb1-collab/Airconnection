import schengenImg from "@/assets/dest-schengen.jpg";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import canadaImg from "@/assets/dest-canada.jpg";
import australiaImg from "@/assets/dest-australia.jpg";
import nzImg from "@/assets/dest-nz.jpg";
import qatarImg from "@/assets/dest-qatar.jpg";
import bahrainImg from "@/assets/dest-bahrain.jpg";
import middleEastImg from "@/assets/dest-middleeast.jpg";
import southAsiaImg from "@/assets/dest-southasia.jpg";
import centralAsiaImg from "@/assets/dest-centralasia.jpg";
import northAfricaImg from "@/assets/dest-northafrica.jpg";
import southAfricaImg from "@/assets/dest-southafrica.jpg";

export type VisaType = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  heroText: string;
  requirements: string[];
  fees: string;
  processingTime: string;
  tips: string[];
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  shortDesc: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  intro: string;
  generalRequirements: string[];
  stepByStep: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  visas: VisaType[];
};

const defaultVisas = (countryName: string): VisaType[] => [
  {
    slug: "visit-visa",
    name: "Visit Visa",
    seoTitle: `${countryName} Visit Visa Consultant in Islamabad | Air connection Travel and Tours`,
    seoDescription: `Apply for a ${countryName} visit visa from Pakistan. Complete documentation, fast processing, and high approval rates from our Blue Area office.`,
    keywords: `${countryName} visit visa, ${countryName} tourist visa Pakistan, ${countryName} visa consultant Islamabad`,
    heroText: `Explore ${countryName} with a hassle-free visit visa. We handle all documentation and appointment scheduling.`,
    requirements: [
      "Original Passport with at least 6 months validity (with copies of previous visas)",
      "CNIC Copy (A4 size)",
      "2 to 4 recent Photographs (White background, non-glossy, 35x45mm or 50x50mm as per embassy)",
      "Family Registration Certificate (FRC) or MRC (if traveling with spouse)",
      "Bank Statement (Last 6 months, signed and stamped by the bank)",
      "Account Maintenance Certificate from the bank",
      "National Tax Number (NTN) & Income Tax Returns for the last 2-3 years",
      "Employment Letter on company letterhead (Salary slips for the last 3 months)",
      "For Business Owners: Chamber of Commerce Certificate & Business Letterhead",
      "Confirmed Flight Itinerary & Hotel Booking",
      "Polio Vaccination Certificate (Updated/Yellow card)",
      "Detailed Cover Letter explaining the purpose of visit and ties to Pakistan",
    ],
    fees: "Varies depending on embassy fees and our service charges.",
    processingTime: "Typically 2 to 4 weeks.",
    tips: [
      "Ensure your bank statement shows a consistent closing balance.",
      "Provide strong ties to Pakistan (property, business, family).",
    ],
  },

  {
    slug: "business-visa",
    name: "Business Visa",
    seoTitle: `${countryName} Business Visa Agent Islamabad | Fast Processing`,
    seoDescription: `Apply for a ${countryName} business visa from Pakistan. Expert documentation for conferences, meetings, and trade shows.`,
    keywords: `${countryName} business visa Islamabad, attend conference in ${countryName}, business visa consultant Pakistan`,
    heroText: `Expand your global network. We provide seamless business visa processing for conferences, meetings, and trade shows in ${countryName}.`,
    requirements: [
      "Valid Passport",
      "Official Invitation Letter from the host company/event",
      "Company Registration (SECP/Chamber of Commerce)",
      "Company Bank Statement (Last 6 months)",
      "Tax Returns (FBR)",
      "Proof of ongoing business activities",
      "Cover Letter from the local company",
    ],
    fees: "Varies.",
    processingTime: "Typically 2 to 4 weeks.",
    tips: [
      "Ensure the invitation letter clearly states the purpose and duration of the trip.",
      "Show strong company financials.",
    ],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    slug: "schengen",
    name: "Schengen Area",
    image: schengenImg,
    shortDesc:
      "Visit 29 European countries on a single visa. Expert documentation and appointments.",
    seoTitle: "Schengen Visa Consultant Islamabad | Top Europe Visa Agency",
    seoDescription:
      "Apply for Schengen visa from Pakistan. Air connection Travel and Tours provides expert documentation, fast processing, and high approval rates for all 29 European countries.",
    keywords:
      "Schengen visa Islamabad, best visa consultant Islamabad, Europe visa from Pakistan, apply Schengen visit visa ISB",
    intro:
      "The Schengen Area offers unparalleled access to 29 European countries. Due to strict embassy regulations, applying for a Schengen visa from Pakistan requires meticulous preparation. We provide end-to-end support for Germany, France, Italy, Spain, and more.",
    generalRequirements: [
      "Original Passport (valid 6 months beyond stay with 2 blank pages)",
      "NADRA Family Registration Certificate (FRC)",
      "Updated Polio Vaccination Card (Mandatory for Pakistanis)",
      "Travel Medical Insurance (Minimum €30,000 coverage, Schengen approved)",
      "Last 6 Months Bank Statement & Maintenance Certificate (Signed/Stamped)",
      "NTN & Tax Returns (Last 2 years)",
      "Professional Proof: Employment letter + 3 salary slips OR Business docs",
      "Confirmed Return Flight Booking & Hotel Reservations",
      "Visa Fee: 90 EUR (Standard) - Payable in PKR at center",
    ],
    stepByStep: [
      {
        title: "Consultation",
        desc: "We review your profile and select the best embassy based on your itinerary.",
      },
      {
        title: "Documentation",
        desc: "We compile your cover letter, financial proofs, and bookings.",
      },
      { title: "Appointment", desc: "We secure an early appointment at VFS/BLS/Gerry's." },
      { title: "Submission", desc: "You submit the file and biometrics at the center." },
    ],
    faqs: [
      {
        q: "Which Schengen embassy is easiest to get a visa from?",
        a: "It depends entirely on your genuine itinerary and financial profile. We help determine the best route.",
      },
      {
        q: "Is travel insurance mandatory?",
        a: "Yes, a minimum of €30,000 coverage is required by all Schengen states.",
      },
    ],
    visas: defaultVisas("Schengen"),
  },
  {
    slug: "united-states",
    name: "United States",
    image: usaImg,
    shortDesc: "B1/B2 tourist and business visa processing and interview prep.",
    seoTitle: "USA Visa Consultant Islamabad | B1/B2 Visa",
    seoDescription:
      "Expert USA visa consultants in Islamabad. We handle DS-160 forms, appointment scheduling, and provide intensive interview preparation.",
    keywords:
      "USA visa consultant Pakistan, US visa Islamabad, B1/B2 visa Pakistan",
    intro:
      "Securing a US visa requires a flawlessly completed DS-160 and exceptional interview skills. We specialize in B1/B2 visitor visas, providing complete profile assessments and mock interviews to ensure you face the consular officer with confidence.",
    generalRequirements: [
      "Original Passport (Valid for 6 months + previous passports)",
      "DS-160 Online Confirmation Page",
      "MRV Fee Receipt ($185 / approx. 52,000 PKR)",
      "Interview Appointment Confirmation (Islamabad or Karachi)",
      "CNIC and Family Documents (FRC/MRC)",
      "Proof of Assets & Professional Ties to Pakistan",
      "Detailed Travel Itinerary & US Host Information",
    ],
    stepByStep: [
      {
        title: "Profile Evaluation",
        desc: "We assess your background to identify strengths and weaknesses.",
      },
      {
        title: "DS-160 Filling",
        desc: "We meticulously fill out your DS-160 form based on your personal and professional history.",
      },
      {
        title: "Fee & Appointment",
        desc: "We generate the fee challan (CGI Federal) and book your embassy interview at the earliest available slot.",
      },
      {
        title: "Mock Interview",
        desc: "Intensive 1-on-1 interview preparation session to refine your answers.",
      },
    ],
    faqs: [
      {
        q: "Do I need confirmed tickets before the US visa interview?",
        a: "No, the US embassy recommends NOT buying tickets until your visa is approved.",
      },
      {
        q: "How long is the B1/B2 visa valid for?",
        a: "Typically, Pakistani citizens are issued 5-year multiple-entry visas.",
      },
      {
        q: "What is the DS-160 form?",
        a: "It is the online non-immigrant visa application form that is the primary source of information for the consular officer.",
      },
    ],
    visas: [
      {
        slug: "b1-b2-visa",
        name: "B1/B2 Visitor Visa",
        seoTitle: "USA B1/B2 Visitor Visa Consultant Islamabad | US Tourist Visa",
        seoDescription:
          "Expert assistance for USA B1/B2 visitor visas in Islamabad. Complete DS-160 filling, interview coaching, and documentation support.",
        keywords:
          "USA tourist visa Pakistan, US B1/B2 visa consultant Islamabad, apply US visit visa ISB",
        heroText:
          "The B1/B2 visa is for people traveling to the United States temporarily for business (B1) or for pleasure or medical treatment (B2).",
        requirements: [
          "Original Passport and all previous passports",
          "DS-160 Form: Precise personal, family, and educational history",
          "Education documents (Matric to highest degree - for reference)",
          "Travel history for the last 5 years (countries and dates)",
          "Current Social media identifiers",
          "Information about your US contact (Host/Hotel/Company)",
          "Bank Statement (Last 6 months - signed/stamped)",
          "Last 3 years Tax Returns (FBR) & NTN",
          "Salary Slips (3 months) & Employment Letter with leave approval",
          "Property Documents (Lease/Registry) to show ties to Pakistan",
          "Family Registration Certificate (FRC)",
        ],
        fees: "$185 Embassy Fee + Service Charges",
        processingTime:
          "Interview dependent (can be immediate or take 4-8 weeks if administrative processing occurs).",
        tips: [
          "Be honest and consistent during the interview.",
          "Keep your answers concise and directly address the officer's questions.",
          "Dress professionally for the interview.",
        ],
      },
      ...defaultVisas("United States").filter((v) => v.slug !== "visit-visa"),
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    image: ukImg,
    shortDesc: "Standard Visitor and Business visa expertise.",
    seoTitle: "UK Visa Consultant Islamabad | Best Visa Consultancy ISB",
    seoDescription:
      "Apply for a UK visa from Islamabad. Expert processing for UK standard visitor and business visas with high success rates.",
    keywords:
      "UK visa consultant Islamabad, UK visit visa Pakistan, apply UK visa ISB",
    intro:
      "From historic London to the Scottish Highlands, the UK is a top destination for Pakistanis. We offer expert guidance on UK Standard Visitor Visas, ensuring strict compliance with UKVI rules.",
    generalRequirements: [
      "Original Passport (Current & Previous)",
      "CNIC & NADRA Family Registration Certificate (FRC)",
      "Bank Statement (Last 6 months) with verifiable source of income",
      "Last 3 years Tax Returns (FBR) and NTN Certificate",
      "Professional Docs: Salary slips + Job letter OR Business Letterhead/NTN",
      "Visa Fee: £135 (approx 48,000 PKR) - Standard 6-month visa",
      "TB Test Certificate (Only if applying for stay > 6 months)",
    ],
    stepByStep: [
      {
        title: "Initial Assessment",
        desc: "Evaluating your eligibility for the desired UK visa tier.",
      },
      { title: "Application Compilation", desc: "Filling out the complex UKVI forms accurately." },
      {
        title: "Document Upload",
        desc: "Digitally scanning and uploading documents to the VFS portal.",
      },
      {
        title: "Biometrics",
        desc: "Attending your appointment at the local UK Visa Application Centre.",
      },
    ],
    faqs: [
      {
        q: "Do I need an interview for a UK Visit Visa?",
        a: "Generally, no. Decisions are made based on your submitted documents.",
      },
      {
        q: "What is a TB test and when is it required?",
        a: "A Tuberculosis test from an approved clinic is mandatory if you are applying to stay in the UK for more than 6 months.",
      },
      {
        q: "How much is the UK visit visa fee?",
        a: "The standard visitor visa for up to 6 months is currently £135.",
      },
    ],
    visas: [
      {
        slug: "standard-visitor-visa",
        name: "Standard Visitor Visa",
        seoTitle: "UK Standard Visitor Visa Consultant Islamabad | UK Tourist Visa",
        seoDescription:
          "Expert assistance for UK standard visitor visas in Islamabad. Complete UKVI application, document scanning, and checklist support.",
        keywords:
          "UK tourist visa Pakistan, UK standard visitor visa ISB, apply UK visit visa Pakistan",
        heroText:
          "The UK Standard Visitor visa allows you to visit the UK for leisure, business, or other reasons for up to 6 months.",
        requirements: [
          "Original Passport and copies of all pages (current & old)",
          "Bank Statement (Last 6 months, Signed and Stamped)",
          "Account Maintenance Certificate",
          "Income Tax Returns (Last 3 Years) & NTN Certificate",
          "Salary Slips (Last 3 months) or Business Registration Docs",
          "Family Registration Certificate (FRC) from NADRA",
          "Property or Asset documents (Investment/Registry) in Pakistan",
          "Confirmed Hotel Booking & Onward Flight Reservation",
          "Detailed Cover Letter and Planned Itinerary",
          "Polio Vaccination Card (Yellow card)",
        ],
        fees: "£135 Embassy Fee + Service Charges",
        processingTime: "Typically 3 weeks (Priority options available for 5 working days).",
        tips: [
          "The UKVI is very strict about the source of funds; ensure all large deposits are explained.",
          "Provide a clear, day-by-day itinerary in your cover letter.",
          "Ensure your sponsor's documents (if applicable) are complete.",
        ],
      },
      ...defaultVisas("United Kingdom").filter((v) => v.slug !== "visit-visa"),
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    image: canadaImg,
    shortDesc: "Visit visas and Tourist pathway guidance.",
    seoTitle: "Canada Visit Visa Consultant ISB | Canada Visa Pakistan",
    seoDescription:
      "Top Canada visa consultant in Islamabad. We assist with Canada visit visas and provide expert tourism guidance.",
    keywords:
      "Canada visit visa consultant ISB, Canada visa Islamabad, IRCC authorized consultant",
    intro:
      "Canada's welcoming policies make it a dream destination. However, IRCC processing requires extreme attention to detail. We assist with Temporary Resident Visas (TRV) and tourist applications.",
    generalRequirements: [
      "Valid Passport (Scan of all pages required for upload)",
      "Visa Fee: $100 CAD + Biometrics: $85 CAD (approx 38,000 PKR total)",
      "IMM Application Forms (Correctly validated)",
      "Digital Photo (35mm x 45mm, white background, < 240KB)",
      "NADRA Family Registration Certificate (FRC)",
      "Proof of Financial Support (6 months bank statements)",
      "Cover Letter / Statement of Purpose (SOP)",
      "Updated Polio Card",
    ],
    stepByStep: [
      {
        title: "Document Gathering",
        desc: "We provide a customized checklist based on your profile.",
      },
      {
        title: "IRCC Portal",
        desc: "We create and manage your application on the IRCC secure portal.",
      },
      {
        title: "Biometrics Request",
        desc: "Once requested, we help you schedule biometrics at VFS.",
      },
      {
        title: "Passport Request",
        desc: "Upon approval, we handle passport submission for visa stamping.",
      },
    ],
    faqs: [
      {
        q: "Can I apply for a Canada visa online?",
        a: "Yes, almost all Canada visa applications are now submitted online via the IRCC portal.",
      },
      {
        q: "Do I need a biometric appointment?",
        a: "Yes, if you haven't provided biometrics to Canada in the last 10 years, you must do so at VFS.",
      },
      {
        q: "What is the total Canada visa fee?",
        a: "The processing fee is $100 CAD, and the biometrics fee is $85 CAD, totaling $185 CAD.",
      },
    ],
    visas: [
      {
        slug: "visitor-visa",
        name: "Visitor Visa (TRV)",
        seoTitle: "Canada Visitor Visa Consultant Islamabad | TRV Pakistan",
        seoDescription:
          "Apply for a Canada Temporary Resident Visa (TRV) from Islamabad. Expert guidance for documentation, SOPs, and financial proofs.",
        keywords:
          "Canada tourist visa Pakistan, Canada TRV consultant Islamabad, apply Canada visit visa ISB",
        heroText:
          "The Temporary Resident Visa (TRV) allows you to visit Canada for tourism, family visits, or business meetings.",
        requirements: [
          "Digital Copy of Original Passport (All pages)",
          "Digital Photographs (Passport size, white background)",
          "Bank Statement (Last 6 months, verifiable)",
          "Account Maintenance Certificate",
          "Employment Letter, Leave Approval & Salary Slips",
          "For Business: NTN, Tax returns (3 years) & Chamber Certificate",
          "Family Registration Certificate (FRC)",
          "Comprehensive Statement of Purpose (SOP)",
          "Proof of Assets (Property, Cars, Investments in Pakistan)",
        ],
        fees: "$185 CAD (Processing + Biometrics) + Service Charges",
        processingTime: "Typically 4 to 12 weeks depending on embassy workload.",
        tips: [
          "Your SOP is the most important part of your application; make it convincing.",
          "Ensure all translations (if any) are from authorized translators.",
          "Show clear ties to Pakistan to prove you will return.",
        ],
      },
      ...defaultVisas("Canada").filter((v) => v.slug !== "visit-visa"),
    ],
  },
  {
    slug: "middle-east",
    name: "Middle East",
    image: middleEastImg,
    shortDesc: "Dubai (UAE), Saudi Arabia (Umrah/Tourist), and Oman visas.",
    seoTitle: "Middle East Visa Consultant Islamabad | Dubai, KSA, Oman",
    seoDescription:
      "Top visa agency for Middle East travel in Islamabad. Fast Dubai visit visas, Saudi tourist visas, and Oman eVisas.",
    keywords:
      "Dubai visit visa services ISB, Saudi tourist visa Pakistan, Middle East visa consultant Islamabad",
    intro:
      "We are your premier partner for Middle Eastern travel. From instant Dubai (UAE) eVisas to the new Saudi Tourist visas and Oman applications, we provide rapid, reliable service with minimum documentation required.",
    generalRequirements: [
      "Passport Copy (First page)",
      "Passport Size Photo (White background)",
      "CNIC Copy",
      "Visa Fees: Dubai ($85-$100), Saudi Tourist ($130+)",
    ],
    stepByStep: [
      { title: "Instant Processing", desc: "Most Middle East visas require minimal paperwork." },
      { title: "Submission", desc: "We submit via our authorized B2B portals." },
      {
        title: "Approval",
        desc: "Receive your eVisa via email or WhatsApp in as little as 24-48 hours.",
      },
    ],
    faqs: [
      {
        q: "How fast can I get a Dubai visa?",
        a: "Standard processing is 2-3 days, but express options are available.",
      },
    ],
    visas: defaultVisas("Middle East"),
  },
  {
    slug: "south-asia",
    name: "South Asia",
    image: southAsiaImg,
    shortDesc: "Sri Lanka, Maldives, and regional visas handled seamlessly.",
    seoTitle: "South Asia Visa Agent Islamabad | Sri Lanka & Maldives",
    seoDescription:
      "Expert travel assistance for South Asian destinations. Apply for Sri Lanka ETA and get guidance for Maldives visa on arrival.",
    keywords: "Sri Lanka visa Pakistan, Maldives travel agent Islamabad",
    intro:
      "Planning a tropical getaway? We handle Sri Lanka ETA (Electronic Travel Authorization) applications instantly and provide complete guidance on required documents for destinations offering visa-on-arrival, like the Maldives.",
    generalRequirements: [
      "Valid Passport",
      "Return Ticket",
      "Hotel Reservation",
      "Sufficient Funds for stay",
    ],
    stepByStep: [
      { title: "ETA Processing", desc: "We file electronic authorizations where applicable." },
      {
        title: "On-Arrival Prep",
        desc: "We provide you with a printed checklist to show immigration upon arrival.",
      },
    ],
    faqs: [
      {
        q: "Do I need a prior visa for Maldives?",
        a: "No, Maldives offers visa on arrival for Pakistani passport holders, provided you have a hotel booking and return ticket.",
      },
    ],
    visas: defaultVisas("South Asia"),
  },
  {
    slug: "central-asia",
    name: "Central Asia",
    image: centralAsiaImg,
    shortDesc: "Azerbaijan, Uzbekistan, and Turkey eVisas.",
    seoTitle: "Central Asia & Turkey Visa Consultant Islamabad",
    seoDescription:
      "Reliable visa processing for Turkey, Azerbaijan, and Uzbekistan from Pakistan.",
    keywords: "Turkey visa consultant Islamabad, Azerbaijan eVisa Pakistan",
    intro:
      "Central Asia is rapidly growing as a tourism hotspot. We provide lightning-fast eVisa services for Azerbaijan and Uzbekistan, and offer complete file preparation for Turkish sticker visas (or eVisas for valid Schengen/US visa holders).",
    generalRequirements: [
      "Passport",
      "Photo",
      "Visa Fees: Azerbaijan ($26), Uzbekistan ($20), Turkey Sticker ($60+)",
      "For Turkey (Sticker): Bank statements, employment proof, hotel/flight reservations.",
    ],
    stepByStep: [
      { title: "Assessment", desc: "Determining if you qualify for an eVisa (e.g., for Turkey)." },
      {
        title: "File Preparation",
        desc: "If a sticker visa is needed, we prepare the complete dossier for Gerry's (Anatolia).",
      },
    ],
    faqs: [
      {
        q: "Can I get a Turkey eVisa on a Pakistani passport?",
        a: "Only if you hold a valid visa or residence permit from a Schengen country, US, UK, or Ireland.",
      },
    ],
    visas: defaultVisas("Central Asia"),
  },
  {
    slug: "north-africa",
    name: "North Africa",
    image: northAfricaImg,
    shortDesc: "Egypt and Morocco visa assistance.",
    seoTitle: "Egypt & Morocco Visa Consultant Islamabad",
    seoDescription:
      "Apply for Egypt and Morocco visas from Pakistan. Professional file preparation in Islamabad.",
    keywords: "Egypt visa Pakistan, Morocco visa consultant Islamabad",
    intro:
      "Explore the pyramids of Egypt or the vibrant markets of Morocco. We assist in preparing robust applications for North African embassies, ensuring all required approvals and hotel vouchers are in place.",
    generalRequirements: [
      "Valid Passport",
      "Visa Form",
      "Polio Certificate",
      "Confirmed Hotel & Flight",
      "Bank Statement",
    ],
    stepByStep: [
      {
        title: "Document Compilation",
        desc: "Ensuring all embassy-specific requirements are met.",
      },
      {
        title: "Submission",
        desc: "Guidance on submitting to the respective embassies in Islamabad.",
      },
    ],
    faqs: [
      {
        q: "Do these countries offer eVisas?",
        a: "Currently, Pakistani citizens generally require sticker visas applied for at the embassy.",
      },
    ],
    visas: defaultVisas("North Africa"),
  },
  {
    slug: "southern-africa",
    name: "Southern Africa",
    image: southAfricaImg,
    shortDesc: "Expert processing for South Africa, Mauritius, and Kenya.",
    seoTitle: "Southern & East Africa Visa Consultant Islamabad",
    seoDescription:
      "Reliable visa processing for South Africa, Mauritius, and Kenya from Pakistan.",
    keywords: "South Africa visa Pakistan, Mauritius visa consultant Islamabad",
    intro:
      "Southern and East Africa offer breathtaking safaris and tropical paradises. We handle sticker visas for South Africa and electronic travel authorizations for Mauritius, Kenya, and Seychelles.",
    generalRequirements: [
      "Passport",
      "Photos",
      "Confirmed Hotel & Flight",
      "Bank Statement (6 Months)",
      "Yellow Fever Certificate (for specific entries)",
    ],
    stepByStep: [
      {
        title: "Dossier Prep",
        desc: "Organizing your financial and identity documents for embassy or online filing.",
      },
      {
        title: "Authorization",
        desc: "Securing eTAs or submitting physical passports to the High Commission.",
      },
    ],
    faqs: [
      {
        q: "Is a yellow fever shot mandatory?",
        a: "Only if you are traveling from or through an infected zone, but it is often recommended for many African nations.",
      },
    ],
    visas: defaultVisas("Southern Africa"),
  },
  {
    slug: "east-asia",
    name: "East Asia",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    shortDesc: "China, Japan, and South Korea visa assistance.",
    seoTitle: "East Asia Visa Consultant Islamabad | Japan & South Korea",
    seoDescription:
      "Reliable visa processing for Japan, South Korea, and China from Pakistan.",
    keywords: "Japan visa Pakistan, South Korea visa consultant Islamabad",
    intro:
      "East Asia is a hub of technological advancement and rich cultural heritage. We provide expert assistance for securing visas to Japan, South Korea, and China.",
    generalRequirements: [
      "Original Passport",
      "Photos (Size varies by country)",
      "Bank Statement (6 Months)",
      "NTN & Tax Returns",
      "Employment/Business Docs",
    ],
    stepByStep: [
      {
        title: "Profile Assessment",
        desc: "Ensuring you meet the financial and travel history requirements.",
      },
      {
        title: "File Compilation",
        desc: "Preparing a strong case for the embassy.",
      },
    ],
    faqs: [
      {
        q: "Do I need an interview for a Japan visa?",
        a: "Generally no, but the embassy may call you for an interview if they need more information.",
      },
    ],
    visas: defaultVisas("East Asia"),
  },
  {
    slug: "south-america",
    name: "South America",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1200",
    shortDesc: "Brazil, Argentina, Colombia & more.",
    seoTitle: "South America Visa Agent Islamabad | Brazil & Argentina",
    seoDescription:
      "Reliable visa processing for Brazil, Argentina, Colombia from Pakistan.",
    keywords: "Brazil visa Pakistan, Argentina visa consultant Islamabad",
    intro:
      "Explore the diverse cultures and landscapes of South America. We provide expert assistance for securing tourist and business visas.",
    generalRequirements: [
      "Original Passport",
      "Photos",
      "Bank Statement (6 Months)",
      "NTN & Tax Returns",
    ],
    stepByStep: [
      {
        title: "Assessment & Planning",
        desc: "Checking your specific documentation requirements.",
      },
      {
        title: "File Compilation",
        desc: "Preparing the visa application file completely.",
      },
    ],
    faqs: [
      {
        q: "How long does standard processing take for South America visas?",
        a: "Typically 3 to 6 weeks, depending on the embassy's specific guidelines.",
      },
    ],
    visas: defaultVisas("South America"),
  },
  {
    slug: "oceania",
    name: "Oceania",
    image: "https://beantowntraveller.com/wp-content/uploads/2018/07/IMG_2484-scaled.jpg",
    shortDesc: "Australia, New Zealand, Fiji & more.",
    seoTitle: "Oceania Visa Agent Islamabad | Australia & New Zealand",
    seoDescription:
      "Expert visa assistance for Australia and New Zealand from Pakistan.",
    keywords: "Australia visa Pakistan, New Zealand visa consultant Islamabad",
    intro:
      "From pristine beaches and coral reefs to magnificent mountains, Oceania has it all. We provide comprehensive visa assistance.",
    generalRequirements: [
      "Original Passport",
      "Photos",
      "Bank Statement (6 Months)",
      "NTN & Tax Returns",
    ],
    stepByStep: [
      {
        title: "Initial Assessment",
        desc: "Reviewing your eligibility and documentation.",
      },
      {
        title: "Submission & Tracking",
        desc: "Preparing and handling the application process.",
      },
    ],
    faqs: [
      {
        q: "How long is an Australian visitor visa valid for?",
        a: "Typically up to 3 years with multiple entries, allowing stays up to 3 or 6 months per visit.",
      },
    ],
    visas: defaultVisas("Oceania"),
  },
  {
    slug: "australia",
    name: "Australia",
    image: australiaImg,
    shortDesc: "Subclass 600 visitor visa processing and expert documentation.",
    seoTitle: "Australia Visa Consultant Islamabad | Subclass 600 Visa Pakistan",
    seoDescription: "Apply for an Australia visit visa from Pakistan. Air connection Travel and Tours provides expert subclass 600 documentation, online submission, and high approval rates from Islamabad.",
    keywords: "Australia visa consultant Islamabad, Australia visit visa Pakistan, subclass 600 visa Pakistan, Australia tourist visa Islamabad",
    intro: "Australia offers magnificent beaches, unique wildlife, and vibrant multicultural cities. However, the Australian Home Affairs department requires a solid, well-documented online application. We guide you through every step of the Subclass 600 visitor visa process.",
    generalRequirements: [
      "Original Passport (Valid for at least 6 months + previous passports)",
      "CNIC Copy (A4 size)",
      "Two Recent Photos (35x45mm, white background, matte finish)",
      "NADRA Family Registration Certificate (FRC)",
      "Account Maintenance Certificate & 6-Month Verifiable Bank Statement",
      "NTN Certificate & Last 3 Years FBR Tax Returns",
      "Professional Docs: Salary slips + Job letter OR Business Registration/Chamber Certificate",
      "Polio Vaccination Certificate",
      "Confirmed Flight Itinerary & Hotel Booking",
      "Comprehensive Cover Letter & Day-by-day Itinerary",
    ],
    stepByStep: [
      { title: "Profile Evaluation", desc: "We review your travel history and financial standing to ensure a strong case." },
      { title: "Online Submission", desc: "We manage your complete application via the ImmiAccount portal." },
      { title: "Biometrics", desc: "We help you schedule and prepare for your biometrics appointment at VFS." },
      { title: "Visa Grant", desc: "Once processed, your grant notice is received electronically." },
    ],
    faqs: [
      { q: "How long is an Australian visitor visa valid for?", a: "Typically up to 3 years with multiple entries, allowing stays up to 3 or 6 months per visit." },
      { q: "Is a medical checkup required?", a: "Usually not for short-term visitor visas unless you are over 75 or plan to stay longer than 6 months." },
      { q: "What is the subclass 600 visa fee?", a: "The base application charge is currently 190 AUD, payable online." },
    ],
    visas: [
      {
        slug: "visitor-visa",
        name: "Visitor Visa (Subclass 600)",
        seoTitle: "Australia Subclass 600 Visitor Visa Consultant Islamabad",
        seoDescription: "Expert assistance for Australian Subclass 600 visitor visas in Islamabad. Complete ImmiAccount management and documentation support.",
        keywords: "Australia subclass 600 visa Pakistan, Australia tourist visa consultant ISB",
        heroText: "The Visitor visa (subclass 600) lets you visit Australia as a tourist, to see family and friends or for purposes other than business or medical treatment.",
        requirements: [
          "Scan of all passport pages (including stamps and previous visas)",
          "Passport-size photographs (digital copy)",
          "Bank Statement (Last 6 months, Signed/Stamped)",
          "Account Maintenance Certificate from your bank",
          "Employment Letter and Salary Slips (Last 3 months)",
          "Business Registration Documents (if self-employed)",
          "Family Registration Certificate (FRC) and MRC (if applicable)",
          "Property Documents (optional but recommended to show ties)",
          "Planned Itinerary and Cover Letter",
        ],
        fees: "190 AUD Embassy Fee + Service Charges",
        processingTime: "Typically 2 to 4 weeks (can vary by season).",
        tips: [
          "Ensure all documents are clear color scans.",
          "Show sufficient funds for your entire stay in Australia.",
          "Provide evidence of your employment or business to prove you will return to Pakistan.",
        ],
      },
      ...defaultVisas("Australia").filter((v) => v.slug !== "visit-visa"),
    ],
  },
];
