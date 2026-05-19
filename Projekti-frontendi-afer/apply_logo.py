from pathlib import Path
from PIL import Image
import numpy as np
import re

root = Path('/mnt/data/logo_work')
assets = root / 'assets'
assets.mkdir(exist_ok=True)

src = Image.open('/mnt/data/Logo.png').convert('RGBA')
arr = np.asarray(src).astype(np.float32) / 255.0
rgb = arr[..., :3]
# Estimate alpha from distance away from the white background and decontaminate edges.
diff = np.max(1.0 - rgb, axis=2)
alpha = np.clip((diff - 0.01) / 0.28, 0, 1)
# Remove tiny background noise.
alpha[alpha < 0.03] = 0
fg = rgb.copy()
nonzero = alpha > 0.001
# Undo white compositing: composite = fg*a + white*(1-a)
for c in range(3):
    chan = rgb[..., c]
    out = np.zeros_like(chan)
    out[nonzero] = np.clip((chan[nonzero] - (1 - alpha[nonzero])) / alpha[nonzero], 0, 1)
    fg[..., c] = out
rgba = np.dstack([fg, alpha])
transparent = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA')

mask = alpha > 0.05
ys, xs = np.where(mask)
bbox = (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)

def crop_with_pad(img, bbox, pad=32):
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(img.width, right + pad)
    bottom = min(img.height, bottom + pad)
    return img.crop((left, top, right, bottom))

full_logo = crop_with_pad(transparent, bbox, 36)
# Resize to a practical web asset size while keeping sharpness.
if full_logo.width > 760:
    new_h = round(full_logo.height * (760 / full_logo.width))
    full_logo = full_logo.resize((760, new_h), Image.Resampling.LANCZOS)
full_logo.save(assets / 'logo-telecom.png', optimize=True)

# Crop the symbol only for the browser tab icon.
# The uploaded mark has the round symbol as the first separated foreground segment.
cols = mask.sum(axis=0)
segments = []
in_seg = False
for i, v in enumerate(cols):
    if v > 2 and not in_seg:
        start = i
        in_seg = True
    if (v <= 2 or i == len(cols) - 1) and in_seg:
        end = i - 1 if v <= 2 else i
        if end - start > 20:
            segments.append((start, end))
        in_seg = False
icon_x1, icon_x2 = segments[0]
icon_mask = mask[:, icon_x1:icon_x2+1]
iys, ixs = np.where(icon_mask)
icon_bbox = (icon_x1 + int(ixs.min()), int(iys.min()), icon_x1 + int(ixs.max()) + 1, int(iys.max()) + 1)
icon = crop_with_pad(transparent, icon_bbox, 40)
# Make square canvas for favicons/apple icon.
size = max(icon.size)
square = Image.new('RGBA', (size, size), (255, 255, 255, 0))
square.paste(icon, ((size - icon.width)//2, (size - icon.height)//2), icon)
icon512 = square.resize((512, 512), Image.Resampling.LANCZOS)
icon512.save(assets / 'favicon.png', optimize=True)
icon512.resize((180, 180), Image.Resampling.LANCZOS).save(assets / 'apple-touch-icon.png', optimize=True)
icon512.resize((32, 32), Image.Resampling.LANCZOS).save(assets / 'favicon-32.png', optimize=True)
icon512.resize((16, 16), Image.Resampling.LANCZOS).save(assets / 'favicon-16.png', optimize=True)
icon512.save(assets / 'favicon.ico', sizes=[(16,16), (32,32), (48,48)])

favicon_links = '''  <link rel="icon" href="assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16.png">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">'''

brand_re = re.compile(r'<a(?P<attrs>[^>]*class="[^"]*(?:navbar-brand|brand-link|sidebar-brand|error-brand)[^"]*"[^>]*)>\s*Telecom Albania\s*</a>')

for path in sorted(root.glob('*.html')):
    text = path.read_text(encoding='utf-8')
    if 'assets/favicon.ico' not in text:
        text = text.replace('</title>', '</title>\n' + favicon_links, 1)

    def brand_replace(match):
        attrs = match.group('attrs')
        if 'aria-label=' not in attrs:
            attrs += ' aria-label="TeleCom home"'
        return f'<a{attrs}><img src="assets/logo-telecom.png" alt="TeleCom" class="brand-logo" /></a>'

    text = brand_re.sub(brand_replace, text)

    if path.name == '404.html' and '.error-brand .brand-logo' not in text:
        text = text.replace('    .error-brand:hover { color: var(--tx-1); }',
                            '    .error-brand:hover { color: var(--tx-1); }\n    .error-brand .brand-logo { height: 42px; width: auto; margin: 0 auto; }')

    path.write_text(text, encoding='utf-8')

css_path = root / 'css' / 'style.css'
css = css_path.read_text(encoding='utf-8')
logo_css = '''
/* ─────────────────────────────────────────────────────────
   BRAND LOGO
───────────────────────────────────────────────────────── */
.brand-logo {
  display: block;
  width: auto;
  height: 34px;
  max-width: 190px;
  object-fit: contain;
}

.nav-glass .navbar-brand,
.brand-link,
.sidebar-brand,
.error-brand {
  line-height: 1;
  text-decoration: none;
}

.nav-glass .navbar-brand {
  padding-top: 5px;
  padding-bottom: 5px;
}

.nav-glass .navbar-brand .brand-logo {
  height: 36px;
  max-width: 205px;
}

.brand-link .brand-logo {
  height: 38px;
  max-width: 210px;
}

.sidebar-brand .brand-logo {
  height: 36px;
  max-width: 174px;
}

.nav-glass .navbar-brand::before,
.brand-link::before,
.sidebar-brand::before {
  display: none;
}

@media (max-width: 575.98px) {
  .nav-glass .navbar-brand .brand-logo {
    height: 32px;
    max-width: 178px;
  }
}
'''
if 'BRAND LOGO' not in css:
    insert_after = '/* ─────────────────────────────────────────────────────────\n   NAVBAR\n───────────────────────────────────────────────────────── */'
    css = css.replace(insert_after, logo_css + '\n' + insert_after, 1)
css_path.write_text(css, encoding='utf-8')

review = root / 'LOGO_UPDATE_APPLIED.md'
review.write_text('''# Logo Update Applied\n\nUpdated the project branding with the supplied TeleCom logo.\n\n## Changes\n\n- Added optimized transparent logo assets in `assets/`.\n- Added a square symbol-only favicon set for browser tabs.\n- Added favicon links to every HTML page.\n- Replaced text-only brand marks with the supplied logo in the navbar, sidebars, auth pages, and 404 page.\n- Added responsive CSS so the logo fits cleanly on desktop, mobile, auth cards, and dashboard sidebar layouts.\n\n## Files Added\n\n- `assets/logo-telecom.png`\n- `assets/favicon.ico`\n- `assets/favicon.png`\n- `assets/favicon-32.png`\n- `assets/favicon-16.png`\n- `assets/apple-touch-icon.png`\n''', encoding='utf-8')

print('[OK] logo assets and HTML/CSS updates applied')
