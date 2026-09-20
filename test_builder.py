import subprocess

# Let's inspect available fonts on the system that might match the extended square techno font
res = subprocess.run(["fc-list", ":", "family"], capture_output=True, text=True)
fonts = sorted(list(set([f.strip() for f in res.stdout.split('\n') if f.strip()])))
print("Available fonts:", len(fonts))
for f in fonts[:30]:
    print(" -", f)
