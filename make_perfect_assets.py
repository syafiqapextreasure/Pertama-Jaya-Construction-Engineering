import subprocess
import os

# 1. Standalone Emblem SVG (500x500)
# - Solid circular ring in cyan (#38bdf8) with black stroke (#000000)
# - 3 modern skyscrapers: left building, tall center tower with spire, right building
# - Prominent interlocking "PJ" monogram at bottom in pure white (#ffffff) with bold black stroke

emblem_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <g filter="url(#shadow)">
    <!-- Cyan Circular Ring -->
    <!-- Outer R=185, Inner R=155. Center at 250, 260 -->
    <!-- We draw the ring as a complete donut path -->
    <path
      d="
        M 250,75
        A 185,185 0 1,1 249.9,75
        Z
        M 250,105
        A 155,155 0 1,0 250.1,105
        Z
      "
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="7"
      fill-rule="evenodd"
    />

    <!-- BUILDINGS (Inside / In Front of Ring) -->
    <!-- Left Building -->
    <!-- Slanted roof: x=145..205, y=240..340 -->
    <polygon
      points="148,340 148,245 208,212 208,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <!-- Left building architectural vertical lines -->
    <line x1="168" y1="250" x2="168" y2="340" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
    <line x1="188" y1="235" x2="188" y2="340" stroke="#000000" stroke-width="4" stroke-linecap="round"/>

    <!-- Right Building -->
    <!-- Slanted roof: x=292..352, y=212..340 -->
    <polygon
      points="292,340 292,212 352,245 352,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <!-- Right building architectural vertical lines -->
    <line x1="312" y1="235" x2="312" y2="340" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
    <line x1="332" y1="250" x2="332" y2="340" stroke="#000000" stroke-width="4" stroke-linecap="round"/>

    <!-- Center Tall Skyscraper Tower (Extends above top of circle) -->
    <!-- Apex needle at (250, 32), shoulders at (234, 130) and (266, 130) -->
    <polygon
      points="224,340 224,205 240,218 240,110 250,32 260,110 260,218 276,205 276,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <!-- Center spire vertical centerline and architectural slots -->
    <line x1="250" y1="45" x2="250" y2="340" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
    <line x1="234" y1="225" x2="234" y2="340" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
    <line x1="266" y1="225" x2="266" y2="340" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

    <!-- Base Horizon / Ground Foundation Bar -->
    <rect x="135" y="336" width="230" height="12" rx="4" fill="#000000" />

    <!-- INTERLOCKING PJ MONOGRAM AT BOTTOM -->
    <!-- Bold white letters with heavy 8px black stroke -->
    <!-- P is on right, J curves down to left -->
    <g>
      <!-- Outer combined PJ outline and fill -->
      <path
        d="
          M 210,330
          L 316,330
          C 334,330 344,342 344,358
          L 344,380
          C 344,396 332,408 314,408
          L 282,408
          L 282,428
          C 282,442 274,452 258,452
          L 186,452
          C 170,452 158,440 158,424
          L 158,382
          C 158,374 164,368 172,368
          L 196,368
          C 204,368 210,374 210,382
          L 210,416
          L 242,416
          L 242,368
          L 210,368
          Z
        "
        fill="#ffffff"
        stroke="#000000"
        stroke-width="8"
        stroke-linejoin="round"
        stroke-linecap="round"
      />

      <!-- P Counter (Inner Loop Hole) -->
      <path
        d="
          M 282,358
          L 306,358
          C 312,358 316,362 316,368
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

print("Saved public/assets/logo/pertama-jaya-logo.svg")

# 2. Combined Full Banner SVG (Emblem + Typography Lockup)
# Matching ChatGPT Image Sep 20, 2026, 04_08_26 PM.png exactly!
# Dimensions: 880 x 180 (viewBox)
# Left: Emblem at x=10..150, y=15..165 (150x150)
# Right:
# Line 1: PERTAMA JAYA (x=175, y=95)
#   - Font: Square, extended techno sans
#   - P: white left vertical bar (#ffffff) + cyan loop (#38bdf8), thick black outline (#000000)
#   - ERTAMA: cyan (#38bdf8), thick black outline (#000000)
#   - J: white left/top bar (#ffffff) + cyan hook (#38bdf8), thick black outline (#000000)
#   - AYA: cyan (#38bdf8), thick black outline (#000000)
# Line 2: CONSTRUCTION & ENGINEERING SDN. BHD. (x=175, y=145)
#   - All in pure crisp white (#ffffff), black outline (#000000), bold extended techno font

full_banner_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,700;0,800;1,700&amp;display=swap');
      .title-text {
        font-family: 'Chakra Petch', 'Space Grotesk', 'Impact', sans-serif;
        font-weight: 800;
        font-size: 58px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .sub-text {
        font-family: 'Chakra Petch', 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 26px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        fill: #ffffff;
        stroke: #000000;
        stroke-width: 3px;
        paint-order: stroke fill;
      }
      .stk-black {
        stroke: #000000;
        stroke-width: 6px;
        stroke-linejoin: round;
        stroke-linecap: round;
        paint-order: stroke fill;
      }
    </style>
  </defs>

  <!-- LEFT EMBLEM (Scaled and positioned at x=20, y=10, size=160x160) -->
  <g transform="translate(15, 5) scale(0.34)">
    <!-- Cyan Circular Ring -->
    <path
      d="
        M 250,75
        A 185,185 0 1,1 249.9,75
        Z
        M 250,105
        A 155,155 0 1,0 250.1,105
        Z
      "
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      fill-rule="evenodd"
    />

    <!-- BUILDINGS -->
    <polygon
      points="148,340 148,245 208,212 208,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="168" y1="250" x2="168" y2="340" stroke="#000000" stroke-width="7" stroke-linecap="round"/>
    <line x1="188" y1="235" x2="188" y2="340" stroke="#000000" stroke-width="7" stroke-linecap="round"/>

    <polygon
      points="292,340 292,212 352,245 352,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="312" y1="235" x2="312" y2="340" stroke="#000000" stroke-width="7" stroke-linecap="round"/>
    <line x1="332" y1="250" x2="332" y2="340" stroke="#000000" stroke-width="7" stroke-linecap="round"/>

    <!-- Center Spire Tower -->
    <polygon
      points="224,340 224,205 240,218 240,110 250,32 260,110 260,218 276,205 276,340"
      fill="#38bdf8"
      stroke="#000000"
      stroke-width="12"
      stroke-linejoin="round"
    />
    <line x1="250" y1="45" x2="250" y2="340" stroke="#000000" stroke-width="9" stroke-linecap="round"/>
    <line x1="234" y1="225" x2="234" y2="340" stroke="#000000" stroke-width="6" stroke-linecap="round"/>
    <line x1="266" y1="225" x2="266" y2="340" stroke="#000000" stroke-width="6" stroke-linecap="round"/>

    <rect x="135" y="336" width="230" height="14" rx="4" fill="#000000" />

    <!-- MONOGRAM PJ -->
    <path
      d="
        M 210,330
        L 316,330
        C 334,330 344,342 344,358
        L 344,380
        C 344,396 332,408 314,408
        L 282,408
        L 282,428
        C 282,442 274,452 258,452
        L 186,452
        C 170,452 158,440 158,424
        L 158,382
        C 158,374 164,368 172,368
        L 196,368
        C 204,368 210,374 210,382
        L 210,416
        L 242,416
        L 242,368
        L 210,368
        Z
      "
      fill="#ffffff"
      stroke="#000000"
      stroke-width="14"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      d="
        M 282,358
        L 306,358
        C 312,358 316,362 316,368
        L 316,370
        C 316,376 312,380 306,380
        L 282,380
        Z
      "
      fill="#000000"
    />
  </g>

  <!-- RIGHT TYPOGRAPHY LOCKUP -->
  <!-- Line 1: PERTAMA JAYA -->
  <g class="title-text" transform="translate(195, 96)">
    <!-- Word 1: PERTAMA -->
    <!-- Letter P with white left stem and cyan right loop -->
    <text x="0" y="0" class="stk-black" fill="#38bdf8">PERTAMA</text>
    <!-- Overlay letter P white stem highlight -->
    <rect x="0" y="-47" width="13" height="49" rx="3" fill="#ffffff" stroke="#000000" stroke-width="4px" />

    <!-- Word 2: JAYA -->
    <text x="315" y="0" class="stk-black" fill="#38bdf8">JAYA</text>
    <!-- Overlay letter J white top/stem highlight -->
    <rect x="315" y="-47" width="13" height="34" rx="3" fill="#ffffff" stroke="#000000" stroke-width="4px" />
  </g>

  <!-- Line 2: CONSTRUCTION & ENGINEERING SDN. BHD. -->
  <text x="195" y="146" class="sub-text">CONSTRUCTION &amp; ENGINEERING SDN. BHD.</text>
</svg>'''

with open('public/assets/logo/pertama-jaya-full-lockup.svg', 'w') as f:
    f.write(full_banner_svg)

print("Saved public/assets/logo/pertama-jaya-full-lockup.svg")
