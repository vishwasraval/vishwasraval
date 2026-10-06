# Dr. Vishwas Raval – Academic Portfolio Website

A clean, modern, responsive academic portfolio website built from the curriculum vitae of **Dr. Vishwas Raval**.

**Associate Professor & Head**, Department of Strategic Technologies, School of National Security Studies  
**CISO & ICT Chairperson**, Central University of Gujarat

---

## Features

- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation with active section highlighting
- Sections: Home, About, Education, Experience, Research & Development, Publications (tabbed), Awards, Invited Talks, Contact & References
- All major research projects, patents, datasets, publications, and links included
- Ready for **GitHub Pages** public deployment

---

## Quick Deploy to GitHub Pages

### Option A – User/Organization site (`username.github.io`)

1. Create a new public repository named **`vishwasraval.github.io`** (or your GitHub username).
2. Upload / push the contents of this folder to the **root** of the repository (or to the `main` branch).
3. Go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`.
5. Click **Save**. Your site will be live at:  
   `https://vishwasraval.github.io`

### Option B – Project site (`username.github.io/repo-name`)

1. Create a new public repository (e.g. `portfolio` or `academic-website`).
2. Push the contents of this folder to the repository.
3. Go to **Settings → Pages**.
4. Select branch `main` and folder `/ (root)`.
5. Site will be available at:  
   `https://vishwasraval.github.io/portfolio` (replace with your repo name).

### Using Git (command line)

```bash
# Clone or create the repo first, then:
cd vishwas-raval-portfolio
git init
git add .
git commit -m "Initial academic portfolio website"
git branch -M main
git remote add origin https://github.com/vishwasraval/vishwasraval.github.io.git
git push -u origin main
```

Then enable GitHub Pages as described above.

---

## Local Preview

Simply open `index.html` in any modern browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (if you have npx)
npx serve .
```

Visit `http://localhost:8000`

---

## File Structure

```
vishwas-raval-portfolio/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, tabs, scroll effects
├── assets/             # (optional images, favicon, etc.)
└── README.md
```

---

## Customization Notes

- Colors can be changed in `css/style.css` under the `:root` variables.
- To add a profile photo, place an image in `assets/` and update the hero section.
- All external links (GitHub, ORCID, DOIs, Kaggle, etc.) are already wired.

---

## Contact

**Dr. Vishwas Raval**  
Email: [vishwas.raval@cug.ac.in](mailto:vishwas.raval@cug.ac.in)  
GitHub: [github.com/vishwasraval](https://github.com/vishwasraval)  
ORCID: [0000-0003-4889-1466](https://orcid.org/0000-0003-4889-1466)
Scopus: [36515427900] (https://www.scopus.com/authid/detail.uri?authorId=36515427900)
WoS: [AAE-8928-2020] (https://www.webofscience.com/wos/author/record/AAE-8928-2020)
Google Scholar: [rXSY32QAAAAJ] (https://scholar.google.com/citations?user=rXSY32QAAAAJ&hl=en)
Vidwan: [671942] (https://vidwan.inflibnet.ac.in/profile/671942)
YouTube: [vishwasjraval] (https://www.youtube.com/@vishwasjraval)

---

© Dr. Vishwas Raval. All rights reserved.
