const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/routes/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('import { BookingWidget } from "@/components/site/BookingWidget";')) {
    content = content.replace(
      'import { BookingWidget } from "@/components/site/BookingWidget";',
      'import React, { Suspense } from "react";\nconst BookingWidget = React.lazy(() => import("@/components/site/BookingWidget").then(m => ({ default: m.BookingWidget })));'
    );
    
    // Check if React is imported
    if (content.match(/import React[, ].*from ['"]react['"]/)) {
        // Remove the duplicate React import we just added
        content = content.replace('import React, { Suspense } from "react";\n', 'import { Suspense } from "react";\n');
    }
    
    // Add Suspense around BookingWidget
    content = content.replace(/<BookingWidget (.*?)\/>/g, '<Suspense fallback={<div className="h-[200px] w-full animate-pulse rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" />}><BookingWidget $1/></Suspense>');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
