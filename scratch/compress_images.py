from PIL import Image
import os

def compress_image(filepath, max_width=None, quality=85):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
    
    orig_size = os.path.getsize(filepath)
    img = Image.open(filepath)
    
    # Keep alpha channel (transparency) if PNG
    has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
    
    # Resize if max_width is specified
    if max_width and img.width > max_width:
        ratio = max_width / float(img.width)
        new_height = int(float(img.height) * float(ratio))
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
    ext = os.path.splitext(filepath)[1].lower()
    if ext == '.png':
        # Optimize PNG
        img.save(filepath, "PNG", optimize=True)
    elif ext in ('.jpg', '.jpeg'):
        # Optimize JPEG
        img.save(filepath, "JPEG", quality=quality, optimize=True)
        
    new_size = os.path.getsize(filepath)
    reduction = (orig_size - new_size) / 1024
    print(f"Optimized {filepath}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Saved {reduction:.1f} KB)")

# Compress logo.png (resizing to max 400px width since it's only displayed small in headers)
compress_image("src/assets/logo.png", max_width=400)

# Overwrite copies in public folder
compress_image("public/favicon.png", max_width=128)
compress_image("public/logo.png", max_width=400)

# Compress larger hero images (setting max_width to 1200px and compressing)
compress_image("src/assets/umrah-hero.png", max_width=1200)
compress_image("public/air_ticketing_hero_1777294022698.png", max_width=1200)
