import subprocess
import os

# Create an SVG overlay that directly renders the architectural geometry of Screenshot 1
# Width 1920, Height 900
svg_bg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <!-- Brushed blue metal gradient -->
    <linearGradient id="blueMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0052cc" />
      <stop offset="25%" stop-color="#0080ff" />
      <stop offset="50%" stop-color="#00b4d8" />
      <stop offset="75%" stop-color="#0052cc" />
      <stop offset="100%" stop-color="#002b66" />
    </linearGradient>

    <!-- Deep royal blue gradient for main band -->
    <linearGradient id="royalBlue" x1="0%" y1="30%" x2="100%" y2="70%">
      <stop offset="0%" stop-color="#003580" />
      <stop offset="20%" stop-color="#0066cc" />
      <stop offset="50%" stop-color="#0099ff" />
      <stop offset="70%" stop-color="#0066cc" />
      <stop offset="100%" stop-color="#002966" />
    </linearGradient>

    <!-- Dark grey metallic ribbon gradient -->
    <linearGradient id="greyRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>

    <!-- Golden/cyan luminous edge glow filter -->
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <pattern id="diagStripes" width="20" height="20" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="20" stroke="#38bdf8" stroke-width="1" opacity="0.08" />
    </pattern>
  </defs>

  <!-- BACKGROUND BASE: Deep corporate navy -->
  <rect width="100%" height="100%" fill="#030816" />

  <!-- TOP-LEFT ANGULAR BLUE METALLIC BANDS (Screenshot 1 signature style) -->
  <!-- Band 1: Large diagonal band cutting across top-left -->
  <polygon
    points="-80,0 280,0 60,420 -80,240"
    fill="url(#blueMetal)"
    opacity="0.85"
    stroke="#fef08a"
    stroke-width="2.5"
    filter="url(#goldGlow)"
  />
  
  <!-- Band 2: Secondary parallel diagonal band -->
  <polygon
    points="320,0 440,0 240,320 180,320"
    fill="url(#blueMetal)"
    opacity="0.9"
    stroke="#fef08a"
    stroke-width="2.5"
    filter="url(#goldGlow)"
  />

  <!-- Secondary parallel accent strip -->
  <polygon
    points="470,0 520,0 340,240 300,240"
    fill="#38bdf8"
    opacity="0.6"
    stroke="#fef08a"
    stroke-width="1.5"
  />

  <!-- CENTER-RIGHT ANGULAR DARK GREY RIBBON (Screenshot 1) -->
  <polygon
    points="1300,380 1560,380 1200,900 980,900"
    fill="url(#greyRibbon)"
    opacity="0.92"
    stroke="#64748b"
    stroke-width="2"
  />

  <!-- HORIZONTAL / SLANTED VIBRANT BLUE METALLIC MAIN BAND (Screenshot 1) -->
  <!-- Crosses horizontally across the lower middle -->
  <polygon
    points="0,420 1920,420 1920,680 0,680"
    fill="url(#royalBlue)"
    opacity="0.75"
    stroke="#fef08a"
    stroke-width="3"
    filter="url(#goldGlow)"
  />

  <!-- Diagonal brushed metal texture overlay inside band -->
  <rect x="0" y="420" width="1920" height="260" fill="url(#diagStripes)" opacity="0.35" />

  <!-- Top and Bottom bright golden-white laser accent lines for horizontal band -->
  <line x1="0" y1="420" x2="1920" y2="420" stroke="#fef08a" stroke-width="3" opacity="0.85" />
  <line x1="0" y1="680" x2="1920" y2="680" stroke="#fef08a" stroke-width="3" opacity="0.85" />

  <!-- BOTTOM SKYSCRAPER PERSPECTIVE SILHOUETTES (Left & Right) -->
  <g opacity="0.25" fill="#475569">
    <!-- Left building facades -->
    <polygon points="0,900 0,690 120,640 260,730 260,900" />
    <polygon points="260,900 260,750 380,690 450,780 450,900" />
    <!-- Right building facades -->
    <polygon points="1450,900 1450,770 1620,700 1780,780 1780,900" />
    <polygon points="1780,900 1780,710 1920,650 1920,900" />
  </g>

  <!-- OVERALL DARK VIGNETTE & CONTRAST SHIELDS -->
  <!-- Dark gradient shield on the left side where hero text sits -->
  <rect width="1150" height="900" fill="url(#leftTextShield)" />
  
  <linearGradient id="leftTextShield" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#020617" stop-opacity="0.94" />
    <stop offset="50%" stop-color="#020617" stop-opacity="0.82" />
    <stop offset="85%" stop-color="#020617" stop-opacity="0.45" />
    <stop offset="100%" stop-color="#020617" stop-opacity="0.0" />
  </linearGradient>

  <!-- Top and bottom dark edge gradients to seamlessly blend with header and next section -->
  <linearGradient id="topEdge" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#020617" stop-opacity="0.95" />
    <stop offset="100%" stop-color="#020617" stop-opacity="0.0" />
  </linearGradient>
  <rect x="0" y="0" width="1920" height="180" fill="url(#topEdge)" />

  <linearGradient id="bottomEdge" x1="0%" y1="100%" x2="0%" y2="0%">
    <stop offset="0%" stop-color="#020617" stop-opacity="0.98" />
    <stop offset="100%" stop-color="#020617" stop-opacity="0.0" />
  </linearGradient>
  <rect x="0" y="720" width="1920" height="180" fill="url(#bottomEdge)" />
</svg>'''

os.makedirs('public/assets/hero', exist_ok=True)
os.makedirs('dist/assets/hero', exist_ok=True)

with open('public/assets/hero/hero-screenshot1-graphic.svg', 'w') as f:
    f.write(svg_bg)
with open('dist/assets/hero/hero-screenshot1-graphic.svg', 'w') as f:
    f.write(svg_bg)

print("Saved SVG graphic overlay!")
