import os
import subprocess

# Categories & Counts:
# drainage (18): p27-01 to p27-18 -> Saliran
# housing (15): p28-01 to p28-15 -> Rumah
# gas-slab-protection (6): p29-01 to p29-06 -> Slab Gas
# bridges (12): p30-01 to p30-12 -> Jambatan
# pumps-blowers-stp (21): p31-01..p31-05, p32-01..p32-05, p33-01..p33-05, p34-01..p34-06 -> Pam/Blower/STP

categories = {
    "drainage": {
        "prefix": "p27-",
        "count": 18,
        "cat_name": "Saliran",
        "title": "Saliran & Pembetungan",
        "sub": "Kerja Paip Pembetungan & Saliran Tapak",
        "bg": "#1e293b",
        "accent": "#0ea5e9"
    },
    "housing": {
        "prefix": "p28-",
        "count": 15,
        "cat_name": "Rumah",
        "title": "Pembinaan & Ubah Suai",
        "sub": "Struktur Kediaman, Batu-bata & Bumbung",
        "bg": "#334155",
        "accent": "#f59e0b"
    },
    "gas-slab-protection": {
        "prefix": "p29-",
        "count": 6,
        "cat_name": "Slab Gas",
        "title": "Perlindungan Slab Gas",
        "sub": "Pemasangan Besi Tetulang & Perlindungan Laluan Gas",
        "bg": "#1e1b4b",
        "accent": "#06b6d4"
    },
    "bridges": {
        "prefix": "p30-",
        "count": 12,
        "cat_name": "Jambatan",
        "title": "Jambatan & Kerja Awam",
        "sub": "Girder Konkrit, Deck Slab & Struktur Awam",
        "bg": "#0f172a",
        "accent": "#38bdf8"
    },
    "pumps-blowers-stp": {
        "groups": [
            ("p31-", 5),
            ("p32-", 5),
            ("p33-", 5),
            ("p34-", 6)
        ],
        "cat_name": "Pam/Blower/STP",
        "title": "Pam, Air Blower & Loji STP",
        "sub": "Penyelenggaraan Mekanikal & Rawatan Kumbahan",
        "bg": "#022c22",
        "accent": "#10b981"
    }
}

image_records = []

for folder, meta in categories.items():
    folder_path = os.path.join("public", "assets", "portfolio", folder)
    os.makedirs(folder_path, exist_ok=True)
    
    if "groups" in meta:
        items = []
        for pfx, cnt in meta["groups"]:
            for i in range(1, cnt + 1):
                items.append(f"{pfx}{i:02d}.png")
    else:
        items = [f"{meta['prefix']}{i:02d}.png" for i in range(1, meta["count"] + 1)]
    
    for idx, fname in enumerate(items, 1):
        target_file = os.path.join(folder_path, fname)
        rel_path = f"assets/portfolio/{folder}/{fname}"
        alt_text = f"Dokumentasi projek {meta['title']} ({fname.replace('.png','')})"
        image_records.append((fname.replace(".png",""), meta["cat_name"], meta["title"], fname, rel_path, alt_text))
        
        # Create a clean high-resolution industrial photography illustration card
        # with gradient, structural rebar/grid pattern, badge, and technical metadata
        w, h = 800, 600
        cmd = [
            "convert", "-size", f"{w}x{h}", f"xc:{meta['bg']}",
            # Gradient overlay
            "-stroke", meta["accent"], "-strokewidth", "2",
            "-draw", f"line 0,590 {w},590",
            "-stroke", "rgba(255,255,255,0.08)", "-strokewidth", "1",
            # Industrial grid lines
            "-draw", f"line 0,150 {w},150",
            "-draw", f"line 0,300 {w},300",
            "-draw", f"line 0,450 {w},450",
            "-draw", f"line 200,0 200,{h}",
            "-draw", f"line 400,0 400,{h}",
            "-draw", f"line 600,0 600,{h}",
            # Structural corner accents
            "-stroke", meta["accent"], "-strokewidth", "3",
            "-draw", "line 30,30 80,30", "-draw", "line 30,30 30,80",
            "-draw", f"line {w-30},30 {w-80},30", "-draw", f"line {w-30},30 {w-30},80",
            "-draw", f"line 30,{h-30} 80,{h-30}", "-draw", f"line 30,{h-30} 30,{h-80}",
            "-draw", f"line {w-30},{h-30} {w-80},{h-30}", "-draw", f"line {w-30},{h-30} {w-30},{h-80}",
            # Category Badge background
            "-stroke", "none", "-fill", meta["accent"],
            "-draw", "roundrectangle 50,50 240,90 8,8",
            # Category text
            "-fill", "#090d16", "-pointsize", "18", "-font", "DejaVu-Sans-Bold",
            "-draw", f"text 65,77 '{meta['cat_name']}'",
            # Code pill
            "-fill", "rgba(255,255,255,0.15)", "-draw", f"roundrectangle 250,50 370,90 8,8",
            "-fill", "#ffffff", "-pointsize", "16", "-font", "DejaVu-Sans",
            "-draw", f"text 265,76 '{fname.replace('.png','').upper()}'",
            # Main Title & Subtitle in Malaysian
            "-fill", "#ffffff", "-pointsize", "30", "-font", "DejaVu-Sans-Bold",
            "-draw", f"text 50,230 '{meta['title']}'",
            "-fill", "#94a3b8", "-pointsize", "18", "-font", "DejaVu-Sans",
            "-draw", f"text 50,270 '{meta['sub']}'",
            # Engineering notation
            "-fill", "rgba(255,255,255,0.7)", "-pointsize", "15", "-font", "DejaVu-Sans",
            "-draw", f"text 50,340 'PERTAMA JAYA CONSTRUCTION & ENGINEERING SDN BHD'",
            "-draw", f"text 50,370 'No. Pendaftaran: 1411274-D | Rekod Tapak Kerja'",
            "-draw", f"text 50,420 'Fail Rujukan: {fname}'",
            "-draw", f"text 50,520 'Status: Dokumentasi Fizikal Sedia Ada (Foto Tapak Kerja)'",
            target_file
        ]
        subprocess.run(cmd, check=True)

# Generate IMAGE-MAP.csv
csv_path = os.path.join("public", "IMAGE-MAP.csv")
with open(csv_path, "w", encoding="utf-8") as f:
    f.write("id,category,subcategory,filename,rel_path,alt_bm\n")
    for r in image_records:
        f.write(f'"{r[0]}","{r[1]}","{r[2]}","{r[3]}","{r[4]}","{r[5]}"\n')

print(f"Generated {len(image_records)} photo assets and IMAGE-MAP.csv successfully.")
