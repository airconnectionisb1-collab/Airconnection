const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist' && f !== 'scratch') {
        walkDir(dirPath, callback);
      }
    } else {
      if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx') || dirPath.endsWith('.html') || dirPath.endsWith('.json')) {
        callback(dirPath);
      }
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Company Name
  content = content.replace(/OS Consultants/g, 'RS Travel and Tours');
  content = content.replace(/OS CONSULTANTS/g, 'RS TRAVEL AND TOURS');
  content = content.replace(/Os Consultants/g, 'Rs Travel and Tours');
  content = content.replace(/os consultants/gi, 'rs travel and tours');

  content = content.replace(/OS Travels/g, 'RS Travel and Tours');
  content = content.replace(/os travels/gi, 'rs travel and tours');

  // Domains & Emails & Socials
  content = content.replace(/osconsultants\.pk/g, 'rstravelandtours.pk');
  content = content.replace(/info@osconsultants\.pk/g, 'info@rstravelandtours.pk');
  // Avoid replacing osconsultant if it's part of a path or something critical but we need to replace the brand name
  // Actually, the prompt says "Replace all occurrences of the company name OS Consultants". 
  // We'll replace the text versions, and domains, and handles
  content = content.replace(/osconsultants/g, 'rstravelandtours');
  content = content.replace(/Osconsultants/g, 'Rstravelandtours');

  // Old Address variations
  content = content.replace(/Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6\/2 Blue Area, Islamabad, 44000/gi, 'Office 6, Mezzanine Floor, Ratta Mansion Plaza, Fazal ul Haq Road, Blue Area, Islamabad, 44000');
  content = content.replace(/Office # 3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6\/2 Blue Area/gi, 'Office 6, Mezzanine Floor, Ratta Mansion Plaza, Fazal ul Haq Road, Blue Area');
  content = content.replace(/Office #3, Aaly Plaza, Fazal-e-Haq Road, Block E G 6\/2 Blue Area/gi, 'Office 6, Mezzanine Floor, Ratta Mansion Plaza, Fazal ul Haq Road, Blue Area');
  content = content.replace(/Office #3, Aaly Plaza/gi, 'Office 6, Mezzanine Floor, Ratta Mansion Plaza');
  content = content.replace(/Aaly Plaza, Fazal-e-Haq Road/gi, 'Ratta Mansion Plaza, Fazal ul Haq Road');
  content = content.replace(/Aaly Plaza/gi, 'Ratta Mansion Plaza');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir('.', processFile);
