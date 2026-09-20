import subprocess
import os

# Ultra-precise SVG mirroring the user's uploaded pertama-jaya-logo.png
# 600 x 600 viewBox
# Center at (300, 310)

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Sharp crisp rendering -->
  </defs>

  <g id="logo-emblem">
    <!-- 1. CYAN CIRCULAR RING (with gap at top for center tower, and gap at bottom for monogram) -->
    <!-- Outer radius: 230, Inner radius: 195. Center: (300, 310) -->
    <!-- Left arc of ring: from bottom-left (190, 480) around counter-clockwise to top-left (252, 95) -->
    <path
      d="
        M 252,95
        A 230,230 0 0,0 160,470
        L 186,450
        A 195,195 0 0,1 260,126
        Z
      "
      fill="#5ed0fe"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <!-- Right arc of ring: from top-right (355, 120) around clockwise to bottom-right (420, 500) -->
    <path
      d="
        M 355,120
        A 230,230 0 0,1 420,510
        L 394,484
        A 195,195 0 0,0 348,152
        Z
      "
      fill="#5ed0fe"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <!-- 2. LEFT BUILDING (Slanted roof, facets) -->
    <polygon
      points="170,470 170,250 240,215 240,470"
      fill="#5ed0fe"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <!-- Left building vertical facade lines -->
    <line x1="192" y1="254" x2="192" y2="470" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
    <line x1="216" y1="237" x2="216" y2="470" stroke="#000000" stroke-width="5" stroke-linecap="round"/>

    <!-- 3. RIGHT BUILDING (Lower building, sloping down right) -->
    <polygon
      points="370,470 370,295 440,345 440,470"
      fill="#5ed0fe"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <!-- Right building vertical facade line -->
    <line x1="405" y1="328" x2="405" y2="470" stroke="#000000" stroke-width="5" stroke-linecap="round"/>

    <!-- 4. CENTER TALL SKYSCRAPER TOWER (Punches through top of the ring) -->
    <!-- Spire tip at (326, 15) down to (262, 70), notch on left at (262, 260) to (290, 275) -->
    <polygon
      points="
        262,470
        262,265
        290,280
        290,70
        330,15
        330,470
      "
      fill="#5ed0fe"
      stroke="#000000"
      stroke-width="7"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <!-- Center tower vertical facade dividers -->
    <line x1="290" y1="75" x2="290" y2="470" stroke="#000000" stroke-width="6" stroke-linecap="round"/>
    <line x1="310" y1="42" x2="310" y2="470" stroke="#000000" stroke-width="4" stroke-linecap="round"/>

    <!-- 5. HORIZONTAL FOUNDATION BEAM -->
    <rect x="170" y="466" width="270" height="12" rx="3" fill="#000000" />

    <!-- 6. INTERLOCKING MONOGRAM "PJ" AT BOTTOM -->
    <!-- Solid silver-white fill (#EEEEEE) with bold black 8px contour -->
    <g id="monogram-pj">
      <!-- Combined outer contour of PJ -->
      <path
        d="
          M 242,385
          L 385,385
          C 415,385 432,402 432,425
          L 432,455
          C 432,478 415,496 385,496
          L 350,496
          L 350,560
          C 350,580 335,595 310,595
          L 215,595
          C 192,595 175,578 175,555
          L 175,495
          C 175,485 183,476 193,476
          L 225,476
          C 235,476 242,484 242,494
          L 242,545
          L 282,545
          L 282,476
          L 242,476
          Z
        "
        fill="#eeeeee"
        stroke="#000000"
        stroke-width="9"
        stroke-linejoin="round"
        stroke-linecap="round"
      />

      <!-- P Inner Counter Slot -->
      <rect
        x="335"
        y="420"
        width="45"
        height="36"
        rx="6"
        fill="#000000"
      />

      <!-- Additional interior contour line between P and J for visual separation -->
      <path
        d="M 282,476 L 350,476 L 350,496"
        fill="none"
        stroke="#000000"
        stroke-width="7"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </g>
  </g>
</svg>'''

# Save SVG
os.makedirs('public/assets/logo', exist_ok=True)
os.makedirs('dist/assets/logo', exist_ok=True)

with open('public/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(svg_content)
with open('dist/assets/logo/pertama-jaya-logo.svg', 'w') as f:
    f.write(svg_content)

print("Saved SVG files.")

# Render to PNG at 600x600 using rsvg-convert
subprocess.run([
    'rsvg-convert',
    '-w', '600',
    '-h', '600',
    '-f', 'png',
    '-o', 'public/assets/logo/pertama-jaya-logo.png',
    'public/assets/logo/pertama-jaya-logo.svg'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-logo.png',
    'dist/assets/logo/pertama-jaya-logo.png'
], check=True)

# Also copy to pertama-jaya-exact-logo.png for backward compatibility
subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-logo.png',
    'public/assets/logo/pertama-jaya-exact-logo.png'
], check=True)

subprocess.run([
    'cp',
    'public/assets/logo/pertama-jaya-logo.png',
    'dist/assets/logo/pertama-jaya-exact-logo.png'
], check=True)

print("Successfully generated high-res PNG files!")
