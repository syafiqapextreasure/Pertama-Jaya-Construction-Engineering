import os

# --- 1. THE EXACT STANDALONE EMBLEM SVG ---
# 500 x 500 viewBox
# - A bold cyan ring (outer R=195, inner R=155) centered at (250, 250)
# - 3 cyan high-rise towers:
#     * Left building: width 65, height from 350 to 220, angled roof sloping up to center
#     * Center building: width 70, height from 350 up to 30! Spire apex at (250, 30), shoulders at (232, 115) and (268, 115)
#     * Right building: width 65, height from 350 to 220, angled roof sloping up to center
#     * Architectural lines on facades
# - Solid horizontal base bar at y=346..356
# - Prominent interlocking white PJ monogram at bottom (x=165..335, y=325..465)
#     * Solid white (#FFFFFF) fill
#     * Bold 9px black outline (#000000)
#     * Rounded corners

emblem_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <filter id="emblem-shadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <g filter="url(#emblem-shadow)">
    <!-- 1. FULL CYAN CIRCULAR RING (Donut) -->
    <!-- Outer circle R=190, Inner circle R=155, Center=(250, 250) -->
    <path
      d="
        M 250,60
        A 190,190 0 1,1 249.9,60
        Z
        M 250,95
        A 155,155 0 1,0 250.1,95
        Z
      "
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="8"
      stroke-linejoin="round"
      fill-rule="evenodd"
    />

    <!-- 2. LEFT BUILDING -->
    <polygon
      points="145,350 145,248 210,210 210,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="8"
      stroke-linejoin="round"
    />
    <line x1="167" y1="252" x2="167" y2="350" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
    <line x1="189" y1="236" x2="189" y2="350" stroke="#000000" stroke-width="5" stroke-linecap="round"/>

    <!-- 3. RIGHT BUILDING -->
    <polygon
      points="290,350 290,210 355,248 355,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="8"
      stroke-linejoin="round"
    />
    <line x1="311" y1="236" x2="311" y2="350" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
    <line x1="333" y1="252" x2="333" y2="350" stroke="#000000" stroke-width="5" stroke-linecap="round"/>

    <!-- 4. CENTER TALL SKYSCRAPER TOWER (Spire rises high above the ring) -->
    <polygon
      points="218,350 218,200 234,212 234,105 250,30 266,105 266,212 282,200 282,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="8"
      stroke-linejoin="round"
    />
    <!-- Center spire vertical divider & facade lines -->
    <line x1="250" y1="42" x2="250" y2="350" stroke="#000000" stroke-width="6" stroke-linecap="round"/>
    <line x1="234" y1="220" x2="234" y2="350" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
    <line x1="266" y1="220" x2="266" y2="350" stroke="#000000" stroke-width="4" stroke-linecap="round"/>

    <!-- 5. BASE HORIZONTAL GROUND BEAM -->
    <rect x="135" y="344" width="230" height="14" rx="4" fill="#000000" />

    <!-- 6. PJ INTERLOCKING MONOGRAM -->
    <!-- Solid white (#FFFFFF) with thick black contour (#000000) -->
    <g>
      <!-- Main outer body of PJ -->
      <path
        d="
          M 210,326
          L 316,326
          C 334,326 346,338 346,356
          L 346,378
          C 346,396 334,408 316,408
          L 282,408
          L 282,428
          C 282,444 272,456 256,456
          L 186,456
          C 168,456 156,444 156,426
          L 156,380
          C 156,372 162,366 170,366
          L 196,366
          C 204,366 210,372 210,380
          L 210,418
          L 242,418
          L 242,366
          L 210,366
          Z
        "
        fill="#ffffff"
        stroke="#000000"
        stroke-width="10"
        stroke-linejoin="round"
        stroke-linecap="round"
      />

      <!-- P Inner Counter Hole -->
      <path
        d="
          M 282,356
          L 306,356
          C 312,356 316,360 316,366
          L 316,370
          C 316,376 312,380 306,380
          L 282,380
          Z
        "
        fill="#000000"
      />
    </g>
  </g>
</svg>'''

with open('public/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)

print("Created public/assets/logo/pertama-jaya-logo.svg")

# --- 2. THE COMPLETE LOCKUP BANNER SVG ---
# 960 x 180 viewBox
# - Left: Emblem (scaled and centered at x=10..160, y=10..170)
# - Right:
#     * Row 1: PERTAMA JAYA (x=185, y=98)
#         - Cyan fill (#38bdf8), thick black outline (#000000)
#         - Bold, square-geometric extended font
#         - Pure continuous text with zero gaps
#     * Row 2: CONSTRUCTION & ENGINEERING SDN. BHD. (x=185, y=146)
#         - Crisp white fill (#ffffff), solid black outline (#000000)
#         - Bold extended font, single line

full_banner_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700;800&amp;family=Space+Grotesk:wght@700&amp;display=swap');
      .brand-title {
        font-family: 'Chakra Petch', 'Space Grotesk', sans-serif;
        font-weight: 800;
        font-size: 60px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        fill: #38bdf8;
        stroke: #000000;
        stroke-width: 6px;
        stroke-linejoin: round;
        stroke-linecap: round;
        paint-order: stroke fill;
      }
      .brand-subtitle {
        font-family: 'Chakra Petch', 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 25.5px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        fill: #ffffff;
        stroke: #000000;
        stroke-width: 3.5px;
        stroke-linejoin: round;
        stroke-linecap: round;
        paint-order: stroke fill;
      }
    </style>
  </defs>

  <!-- Left: Emblem -->
  <g transform="translate(15, 6) scale(0.336)">
    <!-- Cyan Circular Ring -->
    <path
      d="
        M 250,60
        A 190,190 0 1,1 249.9,60
        Z
        M 250,95
        A 155,155 0 1,0 250.1,95
        Z
      "
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
      fill-rule="evenodd"
    />

    <!-- Left Building -->
    <polygon
      points="145,350 145,248 210,210 210,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="167" y1="252" x2="167" y2="350" stroke="#000000" stroke-width="8" stroke-linecap="round"/>
    <line x1="189" y1="236" x2="189" y2="350" stroke="#000000" stroke-width="8" stroke-linecap="round"/>

    <!-- Right Building -->
    <polygon
      points="290,350 290,210 355,248 355,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="311" y1="236" x2="311" y2="350" stroke="#000000" stroke-width="8" stroke-linecap="round"/>
    <line x1="333" y1="252" x2="333" y2="350" stroke="#000000" stroke-width="8" stroke-linecap="round"/>

    <!-- Center Tall Spire Tower -->
    <polygon
      points="218,350 218,200 234,212 234,105 250,30 266,105 266,212 282,200 282,350"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="250" y1="42" x2="250" y2="350" stroke="#000000" stroke-width="10" stroke-linecap="round"/>
    <line x1="234" y1="220" x2="234" y2="350" stroke="#000000" stroke-width="6" stroke-linecap="round"/>
    <line x1="266" y1="220" x2="266" y2="350" stroke="#000000" stroke-width="6" stroke-linecap="round"/>

    <!-- Ground Beam -->
    <rect x="135" y="344" width="230" height="14" rx="4" fill="#000000" />

    <!-- Monogram PJ -->
    <path
      d="
        M 210,326
        L 316,326
        C 334,326 346,338 346,356
        L 346,378
        C 346,396 334,408 316,408
        L 282,408
        L 282,428
        C 282,444 272,456 256,456
        L 186,456
        C 168,456 156,444 156,426
        L 156,380
        C 156,372 162,366 170,366
        L 196,366
        C 204,366 210,372 210,380
        L 210,418
        L 242,418
        L 242,366
        L 210,366
        Z
      "
      fill="#ffffff"
      stroke="#000000"
      stroke-width="15"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      d="
        M 282,356
        L 306,356
        C 312,356 316,360 316,366
        L 316,370
        C 316,376 312,380 306,380
        L 282,380
        Z
      "
      fill="#000000"
    />
  </g>

  <!-- Right: Typography Lockup -->
  <!-- Line 1: PERTAMA JAYA -->
  <text x="190" y="98" class="brand-title">PERTAMA JAYA</text>

  <!-- Line 2: CONSTRUCTION & ENGINEERING SDN. BHD. -->
  <text x="190" y="146" class="brand-subtitle">CONSTRUCTION &amp; ENGINEERING SDN. BHD.</text>
</svg>'''

with open('public/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_banner_svg)

print("Created public/assets/logo/pertama-jaya-full-lockup.svg")

# Also copy to dist if dist exists
os.makedirs('dist/assets/logo', exist_ok=True)
with open('dist/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(emblem_svg)
with open('dist/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_banner_svg)

print("Copied SVG assets to dist/assets/logo/")
