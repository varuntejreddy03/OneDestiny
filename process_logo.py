from PIL import Image
import numpy as np

img = Image.open(r'public/WhatsApp Image 2026-07-03 at 12.35.20 PM (1).jpeg')
arr = np.array(img)

# Background is dark maroon (~70,0,10)
bg = np.array([70, 0, 10])
diff = np.abs(arr.astype(int) - bg).sum(axis=2)
mask = diff > 60

rows = np.any(mask, axis=1)
cols = np.any(mask, axis=0)
rmin, rmax = np.where(rows)[0][[0, -1]]
cmin, cmax = np.where(cols)[0][[0, -1]]
print(f'Content bounds: rows {rmin}-{rmax}, cols {cmin}-{cmax}')
print(f'Content size: {cmax-cmin}x{rmax-rmin}')

# Crop with some padding
pad = 20
rmin = max(0, rmin - pad)
rmax = min(arr.shape[0]-1, rmax + pad)
cmin = max(0, cmin - pad)
cmax = min(arr.shape[1]-1, cmax + pad)

cropped = img.crop((cmin, rmin, cmax, rmax))
cropped.save('public/logo-cropped.png', 'PNG')
print(f'Saved cropped logo: {cropped.size}')

# Create transparent background version
rgba = cropped.convert('RGBA')
data = np.array(rgba)
# Make dark maroon background transparent
bg_mask = np.abs(data[:,:,:3].astype(int) - bg).sum(axis=2) < 60
data[bg_mask, 3] = 0
transparent = Image.fromarray(data)
transparent.save('public/logo-transparent.png', 'PNG')
print(f'Saved transparent logo: {transparent.size}')

# Create icon version (square, centered)
w, h = transparent.size
size = max(w, h)
icon = Image.new('RGBA', (size, size), (0, 0, 0, 0))
icon.paste(transparent, ((size-w)//2, (size-h)//2))
icon_resized = icon.resize((512, 512), Image.LANCZOS)
icon_resized.save('public/logo-icon-512.png', 'PNG')
print('Saved 512x512 icon')

# Also save optimized versions for web
# Full logo for navbar/footer
full_web = transparent.copy()
full_web.thumbnail((400, 200), Image.LANCZOS)
full_web.save('src/assets/logo-full.png', 'PNG')
print(f'Saved web full logo: {full_web.size}')

# Icon for navbar
icon_web = icon.resize((128, 128), Image.LANCZOS)
icon_web.save('src/assets/logo-icon.png', 'PNG')
print(f'Saved web icon logo: {icon_web.size}')

print('\nDone! Logo processed successfully.')
