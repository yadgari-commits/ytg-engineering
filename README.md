# YTG Engineering v4.0

> **Y**adgari **T**rading **G**roup — Engineering Calculation Center
> 
> A complete offline engineering calculation toolbox for civil, structural, geotechnical, surveying, electrical, mechanical, and hydraulic engineers.

## ✨ Features

- **12 main tabs**: Basic, Scientific, Civil, Structural, Geotech, Survey, Electrical, Mechanical, Hydraulic, Converter, Formulas, Constants
- **250+ engineering constants** across 7 categories
- **765+ engineering formulas** across 18 categories
- **15 unit categories** with 200+ units (length, area, volume, force, pressure, energy, power, etc.)
- **Casio fx-991EX-level scientific calculator** (DEG/RAD/GRAD, complex numbers, matrix, vector, equations, polynomial roots, statistics)
- **30+ Civil engineering calculators** (concrete mix, BBS, earthwork, Proctor, AASHTO pavement, retaining wall, …)
- **Dark / Light / Auto theme** + **RTL/LTR** + **English / Persian (Farsi)**
- **Offline-first**: Service Worker caches every asset
- **History + Favorites + Export PDF** + **Search**
- **PWA installable** on phone, tablet, and desktop

## 🚀 Quick Start

### Run locally (web app)

Just open `index.html` in any modern browser. That's it.

### Install on phone (PWA)

1. Host the project on any static host (see below) OR open `index.html` via a local server on the same Wi-Fi.
2. Open the URL in Chrome (Android) or Safari (iOS).
3. Menu → **"Add to Home Screen"** / **"Install app"**.

The YTG icon lands on your home screen and the app opens in standalone mode, fully offline.

### Build a real Android APK (GitHub Actions — recommended)

The repo ships with a GitHub Actions workflow that builds a signed-ready APK in the cloud. **You don't need to install anything locally.**

1. Create a new repository on [github.com](https://github.com/new) (public or private).
2. Upload **all files and folders** from this directory to the repo (`Add file → Upload files`).
3. Wait ~3-5 minutes. Go to the **Actions** tab → click the latest run → scroll to **Artifacts**.
4. Download **`YTG-Engineering-APK.zip`** → extract → `app-debug.apk`.
5. Transfer the `.apk` to your Android device → tap to install (enable "Install unknown apps" once).

You can also re-run the build any time from the Actions tab → **Run workflow**.

### Build locally with Capacitor

If you want to build on your own machine:

```bash
npm install
npx cap init "YTG Engineering" com.ytg.engineering --web-dir .
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug      # debug APK
./gradlew assembleRelease    # release APK
```

Output: `android/app/build/outputs/apk/{debug,release}/app-{debug,release}.apk`

## 📁 Project Structure

```
Civil_Master_Project_v4.0/
├── index.html              Main HTML shell
├── manifest.json           PWA manifest (YTG branding)
├── sw.js                   Service Worker (offline cache)
├── icon-192.png            PWA icon 192×192
├── icon-512.png            PWA icon 512×512
├── favicon-16.png          Browser tab icon
├── favicon-32.png          Browser tab icon
├── apple-touch-icon.png    iOS home-screen icon
├── css/                    Stylesheets (main, themes, components)
├── js/                     Application modules
│   ├── app.js              Main controller
│   ├── tabs.js             Tab management
│   ├── basic.js, scientific.js
│   ├── civil.js, structural.js, geotech.js
│   ├── survey.js, electrical.js, mechanical.js, hydraulic.js
│   ├── converter.js, formula.js, constants-ui.js
│   ├── utils.js, math.js, history.js, themes.js, i18n.js
├── data/
│   ├── constants.js        250 engineering constants
│   ├── formulas-*.js       765 engineering formulas
└── .github/workflows/
    └── build-apk.yml       Auto-build APK via GitHub Actions
```

## 🌐 Free Hosting (one-click)

| Service | Method | URL Format |
|---|---|---|
| **Netlify Drop** | Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop) | `your-app.netlify.app` |
| **GitHub Pages** | Push to GitHub → Settings → Pages → main branch | `username.github.io/repo` |
| **Vercel** | Push to GitHub → import on [vercel.com](https://vercel.com) | `your-app.vercel.app` |
| **Surge** | `npx surge ./` (first time: register email) | `your-app.surge.sh` |

After hosting, you can also use [PWABuilder.com](https://www.pwabuilder.com) to generate a store-ready APK from the URL.

## 🏗️ Engineering Coverage

### Scientific calculator
- Memory: MC / MR / MS / M+ / M−
- Trig: sin / cos / tan + inverses + hyperbolic
- Powers & roots: x², x³, xʸ, √, ³√, ⁿ√
- Logs: log, ln, log₂
- Mod, factorial, random, round, floor, ceil
- Complex numbers (a + bi) with add / sub / mul / div / pow
- 3×3 Matrix operations: determinant, inverse, transpose, trace
- 3D Vector operations: dot, cross, magnitude, angle
- Equation solver: quadratic, cubic
- Polynomial root finder (Durand-Kerner up to 4th order and beyond)
- Statistics: mean, median, std, variance, range, sum

### Civil / Structural
- Concrete volume, cement, sand, aggregate, water, M20–M40 mix
- Brick, block, mortar
- Excavation, fill, earthwork (average end-area, prismoidal)
- Compaction, Proctor (5-point → OMC + MDD), field density, relative compaction
- Asphalt quantity, density, AASHTO pavement thickness
- Rebar weight, Bar Bending Schedule, tie wire, lap length
- Formwork, stairs, foundation, retaining wall

### Geotechnical
- Moisture, dry/saturated/buoyant density
- Void ratio, porosity, saturation, specific gravity
- Relative density, Atterberg limits, plasticity index, liquidity index
- OMC / MDD (Proctor 5-point), CBR
- Terzaghi & Meyerhof bearing capacity, consolidation settlement
- Rankine active & passive earth pressure

### Survey
- Traverse (multi-leg, lat/dep, closure)
- Forward computation, distance/bearing
- Shoelace area
- Bearing ↔ Azimuth (all 4 quadrants)
- Trigonometric leveling, slope ↔ horiz/vert
- UTM grid convergence

### Electrical
- Ohm's law, power, energy, resistor
- Capacitor, inductor, impedance, resonant frequency
- Power factor, three-phase power
- Transformer ratio, voltage drop, cable size
- Battery capacity / time

### Mechanical
- F = m·a, KE, PE, power, torque
- RPM ↔ rad/s, moment of inertia (sphere/cylinder/disc/point)
- Centripetal, stress, **hoop stress (PD/2t)**
- Reynolds number, Mach number
- Heat conduction & convection

### Hydraulic
- Continuity, pipe area, velocity from Q
- **Darcy-Weisbach**, **Hazen-Williams**, **Manning**
- Critical depth, Froude number, specific energy
- Rectangular weir, orifice, buoyancy
- **Pump power**, rational method

### Unit Converter
15 categories · 200+ units: length, area, volume, mass, force, pressure (kN, MPa, GPa, psi, ksi, kg/cm², N/mm²), energy, power, torque, velocity, flow (L/s, m³/h, gpm, MGD, cfs), density, time, frequency, angle, **temperature (with proper K/°C/°F/°R conversion)**.

### Formula Library
765+ formulas across 18 categories, each with name, formula, description, variables, example, notes, and tags. Full-text search and category filter.

### Engineering Constants
250 constants across math, physics, earth, materials, geotech, mechanical, electrical, thermal, hydraulic, survey, concrete — including π, e, g, density of water/steel/concrete, Young's modulus, Poisson's ratio, atmospheric pressure, universal gas constant, etc.

## 📜 License

© 2026 Yadgari Trading Group (YTG) — All rights reserved.
For personal and commercial use by YTG.

---

**YTG Engineering** — Built with care for engineers. ⚙️
