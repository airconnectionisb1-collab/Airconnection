import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://airconnection.pk';

const SITE_DATA_PATH = path.resolve('src/data/site.ts');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');

// Read the site data file
const siteDataContent = fs.readFileSync(SITE_DATA_PATH, 'utf-8');

// Function to extract slugs from an exported array
function extractSlugs(arrayName) {
  const slugs = [];
  const regex = new RegExp(`export const ${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
  const match = siteDataContent.match(regex);
  if (match) {
    const arrayContent = match[1];
    const slugRegex = /slug:\s*"([^"]+)"/g;
    let slugMatch;
    while ((slugMatch = slugRegex.exec(arrayContent)) !== null) {
      slugs.push(slugMatch[1]);
    }
  }
  return slugs;
}

// Static routes
const routes = [
  '/',
  '/about',
  '/visa-services',
  '/countries',
  '/air-ticketing',
  '/hotel-booking',
  '/travel-insurance',
  '/passport-services',
  '/contact',
  '/consultation'
];

// Extract dynamic country routes
const countries = extractSlugs('COUNTRIES');
countries.forEach(slug => routes.push(`/countries/${slug}`));

const schengen = extractSlugs('SCHENGEN_COUNTRIES');
schengen.forEach(slug => routes.push(`/countries/schengen/${slug}`));

const southAsia = extractSlugs('SOUTH_ASIA_COUNTRIES');
southAsia.forEach(slug => routes.push(`/countries/south-asia/${slug}`));

const centralAsia = extractSlugs('CENTRAL_ASIA_COUNTRIES');
centralAsia.forEach(slug => routes.push(`/countries/central-asia/${slug}`));

const northAfrica = extractSlugs('NORTH_AFRICA_COUNTRIES');
northAfrica.forEach(slug => routes.push(`/countries/north-africa/${slug}`));

const southernAfrica = extractSlugs('SOUTHERN_AFRICA_COUNTRIES');
southernAfrica.forEach(slug => routes.push(`/countries/southern-africa/${slug}`));

// Build the XML
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

routes.forEach(route => {
  const priority = route === '/' ? '1.0' : route.split('/').length > 2 ? '0.7' : '0.8';
  const changefreq = route === '/' ? 'weekly' : 'monthly';
  sitemapXml += `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>`;

// Write to public folder
fs.writeFileSync(SITEMAP_PATH, sitemapXml);
console.log(`Generated sitemap with ${routes.length} URLs at ${SITEMAP_PATH}`);
