import os
import glob

# Search in src, scripts directories and public/robots.txt
files = (
    glob.glob('src/**/*.ts', recursive=True) +
    glob.glob('src/**/*.tsx', recursive=True) +
    glob.glob('scripts/**/*.mjs', recursive=True) +
    ['public/robots.txt']
)

for filepath in files:
    if os.path.isdir(filepath):
        continue
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        updated = content
        # Perform replacements (case insensitive or exact matches)
        if 'rstravels.pk' in updated:
            updated = updated.replace('rstravels.pk', 'airconnection.pk')
        if 'osconsultants.pk' in updated:
            updated = updated.replace('osconsultants.pk', 'airconnection.pk')
            
        if updated != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error reading/writing {filepath}: {e}")
