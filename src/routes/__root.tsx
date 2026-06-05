import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SplashScreen } from "@/components/site/SplashScreen";
import { COMPANY } from "@/data/company";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "ProfessionalService"],
    name: COMPANY.name,
    alternateName: ["Air connection Travel and Tours", "Air connection Travel and Tours", "Air connection Travel and Tours Islamabad"],
    description:
      "Pakistan's No.1 Travel Agency & World-Class Visa Consultant. IATA-accredited, 15+ years of excellence, 98% approval rate. Expert in Schengen, USA, UK, Canada, Australia visas, cheap flights, Umrah packages & hotel bookings from Islamabad.",
    slogan: "Pakistan's No.1 Travel Agency — Your Gateway to the World",
    image: "https://airconnection.pk/src/assets/hero-travel.jpg",
    logo: "https://airconnection.pk/logo.png",
    "@id": "https://airconnection.pk",
    url: "https://airconnection.pk",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    currenciesAccepted: "PKR, USD, EUR, GBP",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7135,
      longitude: 73.0673,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Karachi" },
      { "@type": "Continent", name: "Asia" },
      { "@type": "Continent", name: "Europe" },
      { "@type": "Continent", name: "North America" },
      { "@type": "Continent", name: "Oceania" },
    ],
    sameAs: [
      COMPANY.socials.facebook,
      COMPANY.socials.instagram,
      COMPANY.socials.linkedin,
      COMPANY.socials.twitter,
      "https://airconnection.pk",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "2847",
      reviewCount: "1523",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel & Visa Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schengen Visa Consultancy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "USA B1/B2 & F1 Visa Processing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Standard Visitor Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canada TRV & Study Permit" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Australia Subclass 600 Visa" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IATA Air Ticketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umrah Packages 2026" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Hotel Bookings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travel Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Passport Services" } },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    foundingDate: "2009",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "25+" },
    knowsAbout: ["Visa Processing", "Immigration Consultancy", "IATA Air Ticketing", "Umrah Packages", "Travel Insurance", "Hotel Bookings", "Passport Services"],
  };

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
      <SplashScreen />
      <HeadContent />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
