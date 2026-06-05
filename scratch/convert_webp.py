from PIL import Image
import os

def convert_to_webp(filepath, max_width=1200, quality=80):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    img = Image.open(filepath)
    if img.width > max_width:
        ratio = max_width / float(img.width)
        new_height = int(float(img.height) * float(ratio))
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
    base_path = os.path.splitext(filepath)[0]
    webp_path = base_path + ".webp"
    
    img.save(webp_path, "WEBP", quality=quality)
    print(f"Converted {filepath} to WebP: {os.path.getsize(webp_path)/1024:.1f} KB")

# Convert the two hero images to WebP
convert_to_webp("src/assets/umrah-hero.png")
convert_to_webp("public/air_ticketing_hero_1777294022698.png")
