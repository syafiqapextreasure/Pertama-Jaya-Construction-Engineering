import subprocess
import os

# 1. Emblem SVG - exactly reproducing the emblem on the left of image.png
emblem_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <!-- THIN CYAN CIRCULAR RING -->
  <!-- Center (100, 95), Radius = 68 -->
  <circle
    cx="100"
    cy="95"
    r="68"
    fill="none"
    stroke="#00D2FF"
    stroke-width="4.5"
  />

  <!-- BUILDINGS INSIDE RING (Cyan #00D2FF) -->
  <g fill="#00D2FF">
    <!-- Left building vertical columns (3 columns, stepped) -->
    <rect x="62" y="96" width="5.5" height="42" rx="1" />
    <rect x="71" y="80" width="5.5" height="58" rx="1" />
    <rect x="80" y="68" width="5.5" height="70" rx="1" />

    <!-- Center Spire (tall skyscraper piercing through the top of the circle) -->
    <polygon points="94,138 94,40 100,12 106,40 106,138" />

    <!-- Right building vertical columns -->
    <rect x="119" y="82" width="5.5" height="56" rx="1" />
    <rect x="128" y="98" width="5.5" height="40" rx="1" />
  </g>

  <!-- Facet line down center spire -->
  <line x1="100" y1="13" x2="100" y2="138" stroke="#050c1e" stroke-width="1.8" />

  <!-- Base sill line -->
  <line x1="58" y1="138" x2="142" y2="138" stroke="#00D2FF" stroke-width="2.5" />

  <!-- MONOGRAM "PJ" (Pure White #FFFFFF with dark outline) -->
  <!-- Interlocking P on the right, J looping on the left/bottom -->
  <g>
    <!-- Background blackout to hide lines behind monogram -->
    <path
      d="
        M 80,118
        L 126,118
        C 136,118 142,124 142,133
        C 142,142 136,148 126,148
        L 112,148
        L 112,160
        C 112,170 104,177 94,177
        L 80,177
        C 70,177 64,170 64,160
        L 64,148
        L 76,148
        L 76,164
        L 98,164
        L 98,131
        L 80,131
        Z
      "
      fill="#050c1e"
      stroke="#050c1e"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <!-- White PJ shape -->
    <path
      d="
        M 80,118
        L 126,118
        C 136,118 142,124 142,133
        C 142,142 136,148 126,148
        L 112,148
        L 112,160
        C 112,170 104,177 94,177
        L 80,177
        C 70,177 64,170 64,160
        L 64,148
        L 76,148
        L 76,164
        L 98,164
        L 98,131
        L 80,131
        Z
      "
      fill="#ffffff"
      stroke="#050c1e"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <!-- P Counter (inner hole) -->
    <rect x="112" y="125" width="15" height="15" rx="2" fill="#050c1e" />
  </g>
</svg>'''

# 2. Complete Exact Lockup SVG (Banner) - 100% Identical to image.png
full_lockup_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 140" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700;800&amp;display=swap');
      .title {
        font-family: 'Chakra Petch', 'Space Grotesk', -apple-system, sans-serif;
        font-weight: 800;
        font-size: 42px;
        letter-spacing: 0.05em;
        fill: #00D2FF;
      }
      .subtitle {
        font-family: 'Chakra Petch', 'Space Grotesk', -apple-system, sans-serif;
        font-weight: 700;
        font-size: 19px;
        letter-spacing: 0.075em;
        fill: #FFFFFF;
      }
    </style>
  </defs>

  <!-- EMBLEM ON LEFT (scaled and positioned) -->
  <g transform="translate(10, -5) scale(0.75)">
    <!-- Thin cyan circle -->
    <circle cx="100" cy="95" r="68" fill="none" stroke="#00D2FF" stroke-width="5" />

    <!-- Buildings -->
    <g fill="#00D2FF">
      <rect x="62" y="96" width="6" height="42" rx="1" />
      <rect x="71" y="80" width="6" height="58" rx="1" />
      <rect x="80" y="68" width="6" height="70" rx="1" />

      <!-- Center Spire piercing top -->
      <polygon points="94,138 94,40 100,10 106,40 106,138" />

      <!-- Right columns -->
      <rect x="119" y="82" width="6" height="56" rx="1" />
      <rect x="128" y="98" width="6" height="40" rx="1" />
    </g>
    <!-- Center spire facet -->
    <line x1="100" y1="11" x2="100" y2="138" stroke="#050c1e" stroke-width="2" />
    <line x1="58" y1="138" x2="142" y2="138" stroke="#00D2FF" stroke-width="2.5" />

    <!-- White Monogram -->
    <path
      d="
        M 80,118
        L 126,118
        C 136,118 142,124 142,133
        C 142,142 136,148 126,148
        L 112,148
        L 112,160
        C 112,170 104,177 94,177
        L 80,177
        C 70,177 64,170 64,160
        L 64,148
        L 76,148
        L 76,164
        L 98,164
        L 98,131
        L 80,131
        Z
      "
      fill="#050c1e"
      stroke="#050c1e"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <path
      d="
        M 80,118
        L 126,118
        C 136,118 142,124 142,133
        C 142,142 136,148 126,148
        L 112,148
        L 112,160
        C 112,170 104,177 94,177
        L 80,177
        C 70,177 64,170 64,160
        L 64,148
        L 76,148
        L 76,164
        L 98,164
        L 98,131
        L 80,131
        Z
      "
      fill="#ffffff"
      stroke="#050c1e"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <rect x="112" y="125" width="15" height="15" rx="2" fill="#050c1e" />
  </g>

  <!-- TEXT ON RIGHT -->
  <g transform="translate(180, 0)">
    <!-- Row 1: PERTAMA JAYA (Solid vibrant cyan #00D2FF) -->
    <text x="0" y="65" class="title">PERTAMA JAYA</text>

    <!-- Row 2: CONSTRUCTION & ENGINEERING SDN. BHD. (Solid white #FFFFFF) -->
    <text x="0" y="105" class="subtitle">CONSTRUCTION &amp; ENGINEERING SDN. BHD.</text>
  </g>
</svg>'''

with open('public/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)
with open('dist/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)

with open('public/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_lockup_svg)
with open('dist/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_lockup_svg)

# Convert to PNG at high resolution
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
    '-h', '180',
    '-f', 'png',
    '-o', 'public/assets/logo/pertama-jaya-full-banner.png',
    'public/assets/logo/pertama-jaya-full-lockup.svg'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-full-banner.png',
    'dist/assets/logo/pertama-jaya-full-banner.png'
], check=True)

print("SUCCESSFULLY GENERATED MATCHING ASSETS!")
