import { COMPANY as COMPANY_NEW } from "./company";
import { NAV_LINKS as NAV_LINKS_NEW } from "./navigation";
import { VISA_SERVICES as VISA_SERVICES_NEW, TRAVEL_SERVICES as TRAVEL_SERVICES_NEW } from "./services";
import { TESTIMONIALS as TESTIMONIALS_NEW } from "./testimonials";
import { FAQS as FAQS_NEW } from "./faqs";
import { COUNTRIES as COUNTRIES_NEW } from "./countries-data";

export const COMPANY = COMPANY_NEW;
export const NAV_LINKS = NAV_LINKS_NEW;
export const VISA_SERVICES = VISA_SERVICES_NEW;
export const TRAVEL_SERVICES = TRAVEL_SERVICES_NEW;
export const TESTIMONIALS = TESTIMONIALS_NEW;
export const FAQS = FAQS_NEW;
export const COUNTRIES = COUNTRIES_NEW;

// For backward compatibility, but discourage using these from site.ts
export * from "./regions/schengen-countries";
export * from "./regions/south-asia_countries";
export * from "./regions/central-asia_countries";
export * from "./regions/north-africa_countries";
export * from "./regions/southern-africa_countries";
export * from "./regions/middle-east_countries";
export * from "./regions/east-asia_countries";
export * from "./regions/americas-countries";
export * from "./regions/europe-others_countries";
export * from "./regions/south-america_countries";
export * from "./regions/oceania-countries";
