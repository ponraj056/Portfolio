# Ponraj D — Developer Portfolio

A modern, animated personal portfolio built with React, TypeScript, and Vite — showcasing my projects, skills, certifications, and experience as a Frontend/Full Stack Developer and AI enthusiast.

🔗 **Live Site:** [ponraj-portfolio](https://ponraj-professional-portfolio.vercel.app/)

---

## ✨ Features

- Smooth scroll-based animations powered by **GSAP** and **Framer Motion**
- Interactive 3D elements with **React Three Fiber / Three.js**
- Buttery smooth scrolling via **Lenis**
- Fully responsive design across mobile, tablet, and desktop
- Sections: Hero, About, Skills, Timeline/Experience, Projects, Services, Certifications, Testimonials, Contact
- Contact form powered by **EmailJS**
- Live GitHub stats via a custom hook
- Type-animated role titles, animated counters, and scroll-triggered reveals

---

## 🛠️ Tech Stack

**Core**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS

**Animation & UX**
- GSAP + @gsap/react
- Framer Motion
- Lenis (smooth scroll)
- AOS (Animate On Scroll)
- React Type Animation
- React CountUp

**3D & Visuals**
- Three.js
- @react-three/fiber
- @react-three/drei

**Other Integrations**
- EmailJS (contact form)
- Supabase
- React Router DOM
- React Hot Toast
- Swiper (carousels)
- Lucide React / React Icons

---

## 📁 Project Structure

```
project/
├── public/
│   └── assets/
│       ├── images/        # Profile & other static images
│       └── resume/         # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Timeline/
│   │   ├── Projects/
│   │   ├── Services/
│   │   ├── Certifications/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ui/
│   ├── data/
│   │   └── index.ts        # All portfolio content (single source of truth)
│   ├── hooks/               # Custom hooks (GitHub stats, scroll progress, active section)
│   ├── utils/                # Animation utilities
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ponraj056/<repo-name>.git
cd <repo-name>/project

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
Runs the app locally at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint & Type Check

```bash
npm run lint
npm run typecheck
```

---

## ⚙️ Configuration

All personal/portfolio content (name, roles, bio, skills, education, projects, social links, etc.) is centralized in:

```
src/data/index.ts
```

Update this file to customize the portfolio with your own information — no need to touch individual components.

To change the profile photo, replace:
```
public/assets/images/profile.jpg
```

To update the resume link, replace the PDF in:
```
public/assets/resume/
```
and update `resumeUrl` in `src/data/index.ts`.

---

## 📬 Contact

- **Email:** ponrajsdr@gmail.com
- **GitHub:** [@ponraj056](https://github.com/ponraj056)
- **LinkedIn:** [ponrajdr](https://www.linkedin.com/in/ponrajdr)
- **LeetCode:** [ponraj056](https://leetcode.com/u/ponraj056/)

---

## 📄 License

This project is open for personal reference. If you'd like to reuse the code structure for your own portfolio, please provide attribution.

---

*Built with ❤️ by Ponraj D*
