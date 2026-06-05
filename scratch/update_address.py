import os

replacements = {
    "src/data/company.ts": [
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area, Islamabad, 44000, Pakistan",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000")
    ],
    "src/routes/__root.tsx": [
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area"),
        ('"postalCode": "446000"', '"postalCode": "44000"')
    ],
    "src/routes/contact.tsx": [
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area, Islamabad, 44000, Pakistan",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000")
    ],
    "src/routes/air-ticketing.tsx": [
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area, Islamabad 44000, Pakistan.",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000."),
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area"),
        ('"postalCode": "446000"', '"postalCode": "44000"')
    ],
    "src/routes/faq.tsx": [
        ("Our head office is conveniently located at Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area, Islamabad 44000, Pakistan. We welcome walk-in consultations",
         "Our head office is conveniently located at Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000. We welcome walk-in consultations")
    ],
    "src/routes/pakistan-visa.tsx": [
        ("Air Connection, Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area",
         "Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area")
    ]
}

for filepath, changes in replacements.items():
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (does not exist)")
        continue
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        updated = content
        for old_str, new_str in changes:
            if old_str in updated:
                updated = updated.replace(old_str, new_str)
            else:
                print(f"Warning: '{old_str[:30]}' not found in {filepath}")
                
        if updated != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated)
            print(f"Successfully updated {filepath}")
        else:
            print(f"No changes made to {filepath}")
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
