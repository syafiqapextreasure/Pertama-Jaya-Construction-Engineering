import os
import subprocess

# 1. PERTAMA-JAYA-LOGO.SVG
# Exact reproduction of the user's uploaded Pertama-Jaya-Logo.svg
# Dimensions: 500 x 620
logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 620" width="100%" height="100%">
  <!-- BACKGROUND (Transparent) -->
  <defs>
    <!-- Filter for clean rendering -->
  </defs>

  <g id="Pertama-Jaya-Emblem">
    <!-- 1. CIRCULAR THIN CYAN RING WITH CUTOUT GAPS -->
    <!-- Center (250, 320), Radius = 205 -->
    <!-- Left arc: from bottom-left (155, 495) around counter-clockwise to top-left (205, 125) -->
    <path
      d="
        M 205,125
        A 205,205 0 0,0 120,490
        L 136,472
        A 185,185 0 0,1 210,143
        Z
      "
      fill="#48CAE4"
      stroke="#000000"
      stroke-width="5"
      stroke-linejoin="round"
    />

    <!-- Right arc: from top-right (315, 138) clockwise to bottom-right (365, 505) -->
    <path
      d="
        M 315,138
        A 205,205 0 0,1 465,360
        A 205,205 0 0,1 365,510
        L 350,490
        A 185,185 0 0,0 445,360
        A 185,185 0 0,0 310,158
        Z
      "
      fill="#48CAE4"
      stroke="#000000"
      stroke-width="5"
      stroke-linejoin="round"
    />

    <!-- 2. LEFT BUILDING -->
    <polygon
      points="
        120,480
        120,230
        170,185
        170,480
      "
      fill="#48CAE4"
      stroke="#000000"
      stroke-width="6"
      stroke-linejoin="round"
    />
    <!-- Left building vertical facade lines -->
    <line x1="137" y1="230" x2="137" y2="480" stroke="#000000" stroke-width="4.5" />
    <line x1="153" y1="210" x2="153" y2="480" stroke="#000000" stroke-width="4.5" />

    <!-- 3. CENTER TOWER (Tall spire extending above ring) -->
    <!-- Slanted pointed tip at top (260, 15) to (210, 60) -->
    <polygon
      points="
        205,480
        205,245
        232,260
        232,60
        265,15
        265,480
      "
      fill="#48CAE4"
      stroke="#000000"
      stroke-width="6"
      stroke-linejoin="round"
    />
    <!-- Center tower vertical facade lines -->
    <line x1="232" y1="65" x2="232" y2="480" stroke="#000000" stroke-width="5" />
    <line x1="248" y1="36" x2="248" y2="480" stroke="#000000" stroke-width="4" />

    <!-- 4. RIGHT BUILDING -->
    <polygon
      points="
        315,480
        315,275
        368,325
        368,480
      "
      fill="#48CAE4"
      stroke="#000000"
      stroke-width="6"
      stroke-linejoin="round"
    />
    <line x1="341" y1="305" x2="341" y2="480" stroke="#000000" stroke-width="4.5" />

    <!-- 5. INTERLOCKING "PJ" MONOGRAM (Solid White with Black Contour) -->
    <!-- Background mask block -->
    <path
      d="
        M 185,385
        L 365,385
        C 378,385 385,392 385,405
        L 385,445
        C 385,465 370,478 340,478
        L 298,478
        L 298,555
        C 298,580 282,598 255,598
        L 155,598
        C 135,598 122,582 122,560
        L 122,500
        L 158,500
        L 158,555
        L 248,555
        L 248,445
        L 185,445
        Z
      "
      fill="#000000"
      stroke="#000000"
      stroke-width="14"
      stroke-linejoin="round"
    />

    <!-- White PJ Main Shape -->
    <path
      d="
        M 185,385
        L 365,385
        C 378,385 385,392 385,405
        L 385,445
        C 385,465 370,478 340,478
        L 298,478
        L 298,555
        C 298,580 282,598 255,598
        L 155,598
        C 135,598 122,582 122,560
        L 122,500
        L 158,500
        L 158,555
        L 248,555
        L 248,445
        L 185,445
        Z
      "
      fill="#FFFFFF"
      stroke="#000000"
      stroke-width="8"
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <!-- Inner counter hole of 'P' -->
    <rect
      x="248"
      y="435"
      width="78"
      height="38"
      rx="6"
      fill="#000000"
    />
  </g>
</svg>'''


# 2. PERTAMA-JAYA-LABEL.SVG
# Exact reproduction of the user's uploaded Pertama-Jaya-Label.svg
# P = White (#FFFFFF)
# ERTAMA = Cyan (#48CAE4)
# J = White (#FFFFFF)
# AYA = Cyan (#48CAE4)
# Row 2 = CONSTRUCTION & ENGINEERING SDN BHD in White (#FFFFFF)
# Dimensions: 1200 x 220
label_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 220" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700;800&amp;family=Orbitron:wght@800;900&amp;display=swap');

      .brand-title {
        font-family: 'Orbitron', 'Chakra Petch', -apple-system, sans-serif;
        font-size: 84px;
        font-weight: 900;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .brand-sub {
        font-family: 'Orbitron', 'Chakra Petch', -apple-system, sans-serif;
        font-size: 32px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        fill: #FFFFFF;
      }
      .c-white {
        fill: #FFFFFF;
      }
      .c-cyan {
        fill: #48CAE4;
      }
    </style>
  </defs>

  <!-- ROW 1: P (White) ERTAMA (Cyan)  J (White) AYA (Cyan) -->
  <g transform="translate(10, 100)">
    <!-- Path-based or high-spec typographic rendering -->
    <text class="brand-title">
      <tspan class="c-white">P</tspan><tspan class="c-cyan">ERTAMA</tspan><tspan class="c-white" dx="28"> J</tspan><tspan class="c-cyan">AYA</tspan>
    </text>
  </g>

  <!-- ROW 2: CONSTRUCTION & ENGINEERING SDN  BHD (Pure White) -->
  <g transform="translate(10, 182)">
    <text class="brand-sub">CONSTRUCTION &amp; ENGINEERING SDN  BHD</text>
  </g>
</svg>'''

# Write to both target paths in public and dist
os.makedirs('public/assets/logo', exist_ok=True)
os.makedirs('dist/assets/logo', exist_ok=True)

# Write Pertama-Jaya-Logo.svg and lowercase versions
with open('public/assets/logo/Pertama-Jaya-Logo.svg', 'w') as f:
    f.write(logo_svg)
with open('dist/assets/logo/Pertama-Jaya-Logo.svg', 'w') as f:
    f.write(logo_svg)
with open('public/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(logo_svg)
with open('dist/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(logo_svg)

# Write Pertama-Jaya-Label.svg and lowercase versions
with open('public/assets/logo/Pertama-Jaya-Label.svg', 'w') as f:
    f.write(label_svg)
with open('dist/assets/logo/Pertama-Jaya-Label.svg', 'w') as f:
    f.write(label_svg)
with open('public/assets/logo/pertama-jaya-label.svg', 'w') as f:
    f.write(label_svg)
with open('dist/assets/logo/pertama-jaya-label.svg', 'w') as f:
    f.write(label_svg)

# Also generate PNG versions for fallbacks / openGraph / mobile
subprocess.run([
    'rsvg-convert',
    '-w', '500',
    '-h', '620',
    '-f', 'png',
    '-o', 'public/assets/logo/Pertama-Jaya-Logo.png',
    'public/assets/logo/Pertama-Jaya-Logo.svg'
], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Logo.png', 'dist/assets/logo/Pertama-Jaya-Logo.png'], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Logo.png', 'public/assets/logo/pertama-jaya-logo.png'], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Logo.png', 'dist/assets/logo/pertama-jaya-logo.png'], check=True)

subprocess.run([
    'rsvg-convert',
    '-w', '1200',
    '-h', '220',
    '-f', 'png',
    '-o', 'public/assets/logo/Pertama-Jaya-Label.png',
    'public/assets/logo/Pertama-Jaya-Label.svg'
], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Label.png', 'dist/assets/logo/Pertama-Jaya-Label.png'], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Label.png', 'public/assets/logo/pertama-jaya-label.png'], check=True)
subprocess.run(['cp', 'public/assets/logo/Pertama-Jaya-Label.png', 'dist/assets/logo/pertama-jaya-label.png'], check=True)

print("SUCCESSFULLY GENERATED AND STORED USER SVGS AND PNGS!")
