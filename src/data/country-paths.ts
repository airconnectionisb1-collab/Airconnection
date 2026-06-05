// This map helps BookingWidget navigate to the correct regional page 
// without needing to import the full country data (intro, docs, etc.).
// This saves ~100KB in the main bundle.

export const COUNTRY_PATH_MAP: Record<string, string> = {
  // Schengen
  "germany": "schengen",
  "france": "schengen",
  "italy": "schengen",
  "spain": "schengen",
  "netherlands": "schengen",
  "switzerland": "schengen",
  "austria": "schengen",
  "belgium": "schengen",
  "denmark": "schengen",
  "greece": "schengen",
  "norway": "schengen",
  "portugal": "schengen",
  "sweden": "schengen",
  "czech-republic": "schengen",
  "estonia": "schengen",
  "finland": "schengen",
  "hungary": "schengen",
  "iceland": "schengen",
  "latvia": "schengen",
  "lithuania": "schengen",
  "luxembourg": "schengen",
  "malta": "schengen",
  "poland": "schengen",
  "slovakia": "schengen",
  "slovenia": "schengen",
  
  // South Asia
  "sri-lanka": "south-asia",
  "maldives": "south-asia",
  "thailand": "south-asia",
  "malaysia": "south-asia",
  "vietnam": "south-asia",
  "cambodia": "south-asia",
  "nepal": "south-asia",
  
  // Central Asia
  "turkey": "central-asia",
  "azerbaijan": "central-asia",
  "uzbekistan": "central-asia",
  "kazakhstan": "central-asia",
  
  // North Africa
  "egypt": "north-africa",
  "morocco": "north-africa",
  "tunisia": "north-africa",
  "algeria": "north-africa",
  
  // Middle East
  "united-arab-emirates": "middle-east",
  "dubai": "middle-east",
  "saudi-arabia": "middle-east",
  "oman": "middle-east",
  "kuwait": "middle-east",
  "qatar": "middle-east",
  "bahrain": "middle-east",
  "jordan": "middle-east",
  "lebanon": "middle-east",
  
  // Americas
  "united-states": "americas",
  "canada": "americas",
  "mexico": "americas",
  "brazil": "americas",
  
  // East Asia
  "china": "east-asia",
  "japan": "east-asia",
  "south-korea": "east-asia",
  "hong-kong": "east-asia",
  
  // South America
  "argentina": "south-america",
  "colombia": "south-america",
  "peru": "south-america",
  "chile": "south-america",
  
  // Oceania
  "australia": "oceania",
  "new-zealand": "oceania",
  "fiji": "oceania",
};
