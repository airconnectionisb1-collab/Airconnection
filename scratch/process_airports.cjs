const fs = require('fs');
const readline = require('readline');
const path = require('path');

const csvPath = path.join(__dirname, '../src/data/airports.csv');
const jsonPath = path.join(__dirname, '../public/data/airports.json');

const countryMap = {
  "PK": "Pakistan", "SA": "Saudi Arabia", "AE": "United Arab Emirates", "GB": "United Kingdom",
  "US": "United States", "CA": "Canada", "TR": "Turkey", "QA": "Qatar", "KW": "Kuwait",
  "OM": "Oman", "BH": "Bahrain", "JO": "Jordan", "LB": "Lebanon", "FR": "France",
  "DE": "Germany", "NL": "Netherlands", "ES": "Spain", "IT": "Italy", "CH": "Switzerland",
  "RU": "Russia", "MY": "Malaysia", "TH": "Thailand", "SG": "Singapore", "CN": "China",
  "JP": "Japan", "KR": "South Korea", "AU": "Australia", "IN": "India", "LK": "Sri Lanka",
  "BD": "Bangladesh", "ZA": "South Africa", "EG": "Egypt", "MA": "Morocco", "KE": "Kenya",
  "NG": "Nigeria", "BR": "Brazil", "MX": "Mexico"
};

// Manual Overrides for Pakistani Cities (ensuring ISB is in Islamabad)
const cityOverrides = {
  "ISB": "Islamabad",
  "KHI": "Karachi",
  "LHE": "Lahore",
  "PEW": "Peshawar",
  "QUW": "Quetta",
  "MUX": "Multan",
  "LYP": "Faisalabad",
  "SKZ": "Sukkur",
  "GWD": "Gwadar",
  "GIL": "Gilgit",
  "KDU": "Skardu"
};

const rl = readline.createInterface({
  input: fs.createReadStream(csvPath),
  crlfDelay: Infinity
});

let headers = [];
const airports = [];

rl.on('line', (line) => {
  const parts = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      parts.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current);

  if (headers.length === 0) {
    headers = parts.map(h => h.trim());
    return;
  }

  const row = {};
  headers.forEach((h, i) => {
    row[h] = parts[i] ? parts[i].trim() : '';
  });

  const iata = row['iata_code'];
  const type = row['type'];
  const isoCountry = row['iso_country'];
  
  if (iata && iata.length === 3 && type !== 'closed') {
    airports.push({
      n: row['name'],
      m: cityOverrides[iata] || row['municipality'], // Apply manual city overrides
      i: iata,
      c: countryMap[isoCountry] || isoCountry
    });
  }
});

rl.on('close', () => {
  console.log(`Updated with city overrides. Total: ${airports.length} airports.`);
  fs.writeFileSync(jsonPath, JSON.stringify(airports));
  console.log('Saved to public/data/airports.json');
});
