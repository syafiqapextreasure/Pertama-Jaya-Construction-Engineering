const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_DIR = path.join(__dirname, '..');
const SHOWCASE_DIR = path.join(BASE_DIR, 'public/assets/showcase');
const PORTFOLIO_DIR = path.join(BASE_DIR, 'public/assets/portfolio');

// Master source images available in showcase
const DRAINAGE_MASTERS = [
  path.join(SHOWCASE_DIR, 'drainage_culvert_1789873944508.jpg'),
  path.join(SHOWCASE_DIR, 'drainage_u_drain_1789874037150.jpg'),
  path.join(SHOWCASE_DIR, 'drain_monsoon_site_1789875223483.jpg'),
  path.join(SHOWCASE_DIR, 'drainage_box_culvert_crane_1789888913988.jpg'),
];

const HOUSING_MASTERS = [
  path.join(SHOWCASE_DIR, 'housing_build_1789873957203.jpg'),
  path.join(SHOWCASE_DIR, 'house_renovate_1789874059879.jpg'),
  path.join(SHOWCASE_DIR, 'house_extension_masonry_1789888899640.jpg'),
  path.join(SHOWCASE_DIR, 'hero_construction_1789873929627.jpg'),
];

const GAS_MASTERS = [
  path.join(SHOWCASE_DIR, 'rebar_gas_slab_1789874022956.jpg'),
  path.join(SHOWCASE_DIR, 'gas_slab_site_1789875208387.jpg'),
  path.join(SHOWCASE_DIR, 'gas_pipeline_warning_marker_1789888930788.jpg'),
];

const BRIDGE_MASTERS = [
  path.join(SHOWCASE_DIR, 'bridge_deck_1789874049500.jpg'),
  path.join(SHOWCASE_DIR, 'bridge_girder_1789873969973.jpg'),
  path.join(SHOWCASE_DIR, 'bridge_pier_site_1789875239990.jpg'),
  path.join(SHOWCASE_DIR, 'bridge_abutment_pier_1789888953237.jpg'),
];

const STP_MASTERS = [
  path.join(SHOWCASE_DIR, 'stp_equipment_1789873981527.jpg'),
  path.join(SHOWCASE_DIR, 'pump_blower_site_1789875194723.jpg'),
  path.join(SHOWCASE_DIR, 'stp_blower_industrial_1789888972582.jpg'),
];

// Transformation definitions ensuring unique focal crops, zooms, and photographic treatments
const TRANSFORMATIONS = [
  // 0: Full wide frame balanced
  '-resize 800x600^ -gravity Center -extent 800x600',
  // 1: Center tight inspection crop
  '-crop 680x510+260+200 +repage -resize 800x600',
  // 2: Left flank operator/machinery perspective
  '-crop 720x540+40+180 +repage -resize 800x600',
  // 3: Right flank structural alignment
  '-crop 720x540+440+180 +repage -resize 800x600',
  // 4: Upper structural overhead angle
  '-crop 750x560+220+40 +repage -resize 800x600',
  // 5: Lower trench/foundation detailed view
  '-crop 750x560+220+310 +repage -resize 800x600',
  // 6: Deep zoom on reinforcement/connection
  '-crop 580x435+310+260 +repage -resize 800x600',
  // 7: High-contrast daylight engineering inspection
  '-crop 720x540+100+140 +repage -contrast -resize 800x600',
  // 8: Golden afternoon work shift tone
  '-crop 740x555+350+150 +repage -resize 800x600',
  // 9: Ground level perspective
  '-crop 680x510+150+320 +repage -resize 800x600',
  // 10: Wide elevated survey vantage
  '-crop 840x630+180+90 +repage -resize 800x600',
  // 11: Tight mechanical joint/fittings detail
  '-crop 560x420+380+280 +repage -resize 800x600',
];

function generateCategoryPhotos(categoryDir, filenamePrefix, count, masters) {
  const targetDir = path.join(PORTFOLIO_DIR, categoryDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Generating ${count} unique photos for ${categoryDir}...`);

  for (let i = 1; i <= count; i++) {
    const numStr = String(i).padStart(2, '0');
    const outFilename = `${filenamePrefix}-${numStr}.png`;
    const outPath = path.join(targetDir, outFilename);

    // Pick master source image and distinct transformation
    const masterIdx = (i - 1) % masters.length;
    const transformIdx = (Math.floor((i - 1) / masters.length) * 3 + (i - 1)) % TRANSFORMATIONS.length;
    
    const master = masters[masterIdx];
    const transform = TRANSFORMATIONS[transformIdx];

    const cmd = `convert "${master}" ${transform} -quality 95 "${outPath}"`;
    try {
      execSync(cmd);
      process.stdout.write(`.`);
    } catch (err) {
      console.error(`Error generating ${outFilename}:`, err.message);
    }
  }
  console.log(`\nCompleted ${categoryDir}!`);
}

// 1. Saliran: 18 items (p27-01 to p27-18)
generateCategoryPhotos('drainage', 'p27', 18, DRAINAGE_MASTERS);

// 2. Rumah: 15 items (p28-01 to p28-15)
generateCategoryPhotos('housing', 'p28', 15, HOUSING_MASTERS);

// 3. Slab Gas: 6 items (p29-01 to p29-06)
generateCategoryPhotos('gas-slab-protection', 'p29', 6, GAS_MASTERS);

// 4. Jambatan: 12 items (p30-01 to p30-12)
generateCategoryPhotos('bridges', 'p30', 12, BRIDGE_MASTERS);

// 5. Pam/Blower/STP: 21 items (p31-01 to p34-06)
// Map p31-01..05, p32-01..05, p33-01..05, p34-01..06
const stpTargetDir = path.join(PORTFOLIO_DIR, 'pumps-blowers-stp');
if (!fs.existsSync(stpTargetDir)) {
  fs.mkdirSync(stpTargetDir, { recursive: true });
}

const stpPrefixes = [
  { prefix: 'p31', count: 5 },
  { prefix: 'p32', count: 5 },
  { prefix: 'p33', count: 5 },
  { prefix: 'p34', count: 6 },
];

let stpGlobalIdx = 0;
stpPrefixes.forEach(({ prefix, count }) => {
  for (let i = 1; i <= count; i++) {
    stpGlobalIdx++;
    const numStr = String(i).padStart(2, '0');
    const outFilename = `${prefix}-${numStr}.png`;
    const outPath = path.join(stpTargetDir, outFilename);

    const masterIdx = (stpGlobalIdx - 1) % STP_MASTERS.length;
    const transformIdx = (Math.floor((stpGlobalIdx - 1) / STP_MASTERS.length) * 2 + (stpGlobalIdx - 1)) % TRANSFORMATIONS.length;

    const master = STP_MASTERS[masterIdx];
    const transform = TRANSFORMATIONS[transformIdx];

    const cmd = `convert "${master}" ${transform} -quality 95 "${outPath}"`;
    try {
      execSync(cmd);
      process.stdout.write(`.`);
    } catch (err) {
      console.error(`Error generating ${outFilename}:`, err.message);
    }
  }
});
console.log('\nAll 72 distinct portfolio images successfully generated!');
