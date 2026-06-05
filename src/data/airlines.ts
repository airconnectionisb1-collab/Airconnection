export interface Airline {
  name: string;
  category: string;
  features: string[];
  logo?: string;
}

export const AIRLINES: Airline[] = [
  // Pakistani Airlines
  {
    name: "Pakistan International Airlines (PIA)",
    category: "Pakistani",
    features: ["Largest Pakistani airline", "Extensive domestic and direct international routes"]
  },
  {
    name: "AirSial",
    category: "Pakistani",
    features: ["Modern fleet and growing domestic operations", "Service quality and punctuality focus"]
  },
  {
    name: "Fly Jinnah",
    category: "Pakistani",
    features: ["Budget-friendly fares", "Air Arabia partnership expertise"]
  },
  {
    name: "SereneAir",
    category: "Pakistani",
    features: ["Comfortable cabins and strong domestic presence", "Renowned for excellent customer service"]
  },
  // Gulf & Middle East
  {
    name: "Emirates",
    category: "Gulf & ME",
    features: ["Global connectivity through Dubai hub", "Premium cabins and extensive global network"]
  },
  {
    name: "Qatar Airways",
    category: "Gulf & ME",
    features: ["Award-winning world-class service", "Excellent connections through Doha hub"]
  },
  {
    name: "Etihad Airways",
    category: "Gulf & ME",
    features: ["Strong Middle East, Europe & NA connections", "Premium business-class luxury experience"]
  },
  {
    name: "flydubai",
    category: "Gulf & ME",
    features: ["Competitive budget-friendly fares", "Wide regional and international connectivity"]
  },
  {
    name: "Air Arabia",
    category: "Gulf & ME",
    features: ["Low-cost travel pioneer", "Strong network across GCC countries"]
  },
  {
    name: "Saudi Arabian Airlines",
    category: "Gulf & ME",
    features: ["Largest carrier for Umrah and Hajj", "Wide Middle East and international network"]
  },
  {
    name: "Flynas",
    category: "Gulf & ME",
    features: ["Affordable Saudi Arabia connectivity", "Preferred choice for labor and pilgrims"]
  },
  {
    name: "Kuwait Airways",
    category: "Gulf & ME",
    features: ["Strong Gulf regional connections", "Highly competitive transit options"]
  },
  {
    name: "Gulf Air",
    category: "Gulf & ME",
    features: ["Efficient Bahrain hub operations", "Good connectivity to Europe and Gulf"]
  },
  {
    name: "Oman Air",
    category: "Gulf & ME",
    features: ["High luxury service standards", "Convenient connections via Muscat hub"]
  },
  // Turkish & European
  {
    name: "Turkish Airlines",
    category: "Europe & Turkey",
    features: ["Flies to more countries than any other", "Superior connectivity to Americas and Africa"]
  },
  {
    name: "British Airways",
    category: "Europe & Turkey",
    features: ["Direct London services from Pakistan", "Deep reach across transatlantic network"]
  },
  // Chinese
  {
    name: "Air China",
    category: "East Asia",
    features: ["Beijing hub global connectivity", "Primary choice for China-Pakistan business"]
  },
  {
    name: "China Southern Airlines",
    category: "East Asia",
    features: ["Massive Asian regional network", "Fluid connections through Guangzhou"]
  },
  // SE Asian
  {
    name: "Thai Airways",
    category: "SE Asia",
    features: ["Strong Southeast Asia network", "Reputation for premium hospitality"]
  },
  {
    name: "Batik Air Malaysia",
    category: "SE Asia",
    features: ["Convenient Malaysia connections", "Highly competitive regional fares"]
  },
  // Central Asian
  {
    name: "Uzbekistan Airways",
    category: "Central Asia",
    features: ["Direct links to Central Asian states", "Transit options to CIS countries"]
  },
  // African
  {
    name: "Ethiopian Airlines",
    category: "Africa",
    features: ["Largest network across Africa", "Excellent North American connectivity"]
  }
];

export const TOP_PARTNERS = [
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "Etihad Airways",
  "Saudi Arabian Airlines",
  "Flynas",
  "Pakistan International Airlines",
  "flydubai"
];
