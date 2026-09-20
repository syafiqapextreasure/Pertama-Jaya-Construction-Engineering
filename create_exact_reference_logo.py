import subprocess
import os

# Let's create the EXACT SVG matching image.png:
# 1. Circular thin cyan ring
# 2. Cyan architectural buildings with vertical stripes
# 3. Center spire that pierces through the top of the ring
# 4. White PJ monogram at the bottom with black contour
# 5. Text on the right:
#    - "PERTAMA JAYA" in solid electric cyan (#00d8f6)
#    - "CONSTRUCTION & ENGINEERING SDN. BHD." in pure white (#ffffff)

# Emblem standalone SVG (300 x 300)
emblem_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <!-- THIN CYAN CIRCULAR RING -->
  <!-- Center at (150, 150), Radius = 110 -->
  <!-- Gap at top for spire (x ~ 140..160) and gap at bottom for monogram (x ~ 100..200) -->
  <path
    d="
      M 136,44
      A 110,110 0 0,0 80,225
      M 220,225
      A 110,110 0 0,0 164,44
    "
    fill="none"
    stroke="#00d8f6"
    stroke-width="5"
    stroke-linecap="round"
  />

  <!-- BUILDINGS INSIDE RING -->
  <!-- Left Building: Vertical stripes/columns -->
  <rect x="92" y="145" width="8" height="60" fill="#00d8f6" rx="2" />
  <rect x="105" y="125" width="8" height="80" fill="#00d8f6" rx="2" />
  <rect x="118" y="110" width="8" height="95" fill="#00d8f6" rx="2" />

  <!-- Center Tower: Tall spire rising above the top -->
  <!-- Body of center tower -->
  <polygon
    points="138,205 138,60 147,30 150,22 153,30 162,60 162,205"
    fill="#00d8f6"
  />
  <!-- Spire faceted architectural highlight / shadow line -->
  <line x1="150" y1="24" x2="150" y2="205" stroke="#040915" stroke-width="2.5" />

  <!-- Right Building: Shorter vertical columns -->
  <rect x="174" y="130" width="8" height="75" fill="#00d8f6" rx="2" />
  <rect x="187" y="150" width="8" height="55" fill="#00d8f6" rx="2" />

  <!-- Base line / sill -->
  <line x1="88" y1="205" x2="204" y2="205" stroke="#00d8f6" stroke-width="3" />

  <!-- INTERLOCKING WHITE "PJ" MONOGRAM AT BOTTOM -->
  <!-- Outer bold white shape with black stroke -->
  <g>
    <!-- Combined PJ silhouette -->
    <path
      d="
        M 125,188
        L 182,188
        C 192,188 198,194 198,204
        C 198,214 192,220 182,220
        L 165,220
        L 165,238
        C 165,248 158,256 148,256
        L 125,256
        C 114,256 108,248 108,238
        L 108,225
        L 122,225
        L 122,242
        L 150,242
        L 150,204
        L 125,204
        Z
      "
      fill="#ffffff"
      stroke="#040915"
      stroke-width="5"
      stroke-linejoin="round"
    />
    <!-- P Inner Loop Counter (hole) -->
    <rect x="165" y="196" width="18" height="16" rx="3" fill="#040915" />
  </g>
</svg>'''

# 2. FULL HORIZONTAL LOCKUP BANNER SVG
# Matches image.png exactly!
# Left: The exact emblem
# Right:
# Line 1: "PERTAMA JAYA" in solid cyan #00d8f6
# Line 2: "CONSTRUCTION & ENGINEERING SDN. BHD." in white #ffffff

full_lockup_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 150" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700;800&amp;family=Space+Grotesk:wght@700&amp;display=swap');
      .title-text {
        font-family: 'Chakra Petch', 'Space Grotesk', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 46px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        fill: #00d8f6;
      }
      .sub-text {
        font-family: 'Chakra Petch', 'Space Grotesk', -apple-system, sans-serif;
        font-weight: 700;
        font-size: 19.5px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        fill: #ffffff;
      }
    </style>
  </defs>

  <!-- EMBLEM on the left (at x=10, y=5, size=140x140) -->
  <g transform="translate(10, 0) scale(0.48)">
    <!-- Thin cyan circle -->
    <path
      d="
        M 136,44
        A 110,110 0 0,0 80,225
        M 220,225
        A 110,110 0 0,0 164,44
      "
      fill="none"
      stroke="#00d8f6"
      stroke-width="7"
      stroke-linecap="round"
    />

    <!-- Left Building stripes -->
    <rect x="92" y="145" width="10" height="60" fill="#00d8f6" rx="2" />
    <rect x="107" y="125" width="10" height="80" fill="#00d8f6" rx="2" />
    <rect x="122" y="110" width="10" height="95" fill="#00d8f6" rx="2" />

    <!-- Center Spire -->
    <polygon
      points="138,205 138,60 147,30 150,20 153,30 162,60 162,205"
      fill="#00d8f6"
    />
    <line x1="150" y1="22" x2="150" y2="205" stroke="#040915" stroke-width="3" />

    <!-- Right Building stripes -->
    <rect x="172" y="130" width="10" height="75" fill="#00d8f6" rx="2" />
    <rect x="187" y="150" width="10" height="55" fill="#00d8f6" rx="2" />

    <!-- Sill -->
    <line x1="88" y1="205" x2="204" y2="205" stroke="#00d8f6" stroke-width="4" />

    <!-- Monogram PJ -->
    <path
      d="
        M 125,188
        L 182,188
        C 194,188 202,195 202,206
        C 202,217 194,224 182,224
        L 165,224
        L 165,238
        C 165,250 156,258 145,258
        L 122,258
        C 112,258 105,250 105,238
        L 105,224
        L 122,224
        L 122,242
        L 148,242
        L 148,204
        L 125,204
        Z
      "
      fill="#ffffff"
      stroke="#040915"
      stroke-width="6"
      stroke-linejoin="round"
    />
    <rect x="165" y="196" width="20" height="18" rx="3" fill="#040915" />
  </g>

  <!-- TEXT ON THE RIGHT -->
  <g transform="translate(160, 0)">
    <!-- Line 1: PERTAMA JAYA (solid cyan) -->
    <text x="0" y="70" class="title-text">PERTAMA JAYA</text>

    <!-- Line 2: CONSTRUCTION & ENGINEERING SDN. BHD. (solid white) -->
    <text x="0" y="112" class="sub-text">CONSTRUCTION &amp; ENGINEERING SDN. BHD.</text>
  </g>
</svg>'''

os.makedirs('public/assets/logo', exist_ok=True)
os.makedirs('dist/assets/logo', exist_ok=True)

with open('public/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)
with open('dist/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)

with open('public/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_lockup_svg)
with open('dist/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_lockup_svg)

print("Saved SVG files.")

# Render to PNG
subprocess.run([
    'rsvg-convert',
    '-w', '500',
    '-h', '500',
    '-f', 'png',
    '-o', 'public/assets/logo/pertama-jaya-logo.png',
    'public/assets/logo/pertama-jaya-logo.svg'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-logo.png',
    'dist/assets/logo/pertama-jaya-logo.png'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-logo.png',
    'public/assets/logo/pertama-jaya-exact-logo.png'
], check=True)

subprocess.run([
    'rsvg-convert',
    '-w', '960',
    '-h', '175',
    '-f', 'png',
    '-o', 'public/assets/logo/pertama-jaya-full-banner.png',
    'public/assets/logo/pertama-jaya-full-lockup.svg'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-full-banner.png',
    'dist/assets/logo/pertama-jaya-full-banner.png'
], check=True)

print("Successfully converted to PNG!")
