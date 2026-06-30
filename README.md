# MD Shahidul Islam Tanveer — Personal Portfolio

A modern, cybersecurity-focused personal portfolio built with **Next.js**, **React**, **Tailwind CSS**, and **Motion**. This portfolio presents my identity as a Computer Science and Engineering graduate, AI Automation Engineer, and cybersecurity-focused builder with interests in defensive security, AI automation, threat-aware systems, and research-driven problem solving.

## Overview

This portfolio is designed to be more than a basic personal website. It works as an interactive professional identity system where visitors can quickly understand who I am, what I build, what I research, and how to contact me.

The design focuses on:

- Cybersecurity-focused personal branding
- AI automation and intelligent system development
- Research-oriented academic identity
- Clean visual hierarchy and premium UI rhythm
- FPS-friendly animations and responsive layout
- Fast scanning for recruiters, professors, collaborators, and clients

## Live Demo

Add your deployed portfolio link here:

```txt
https://your-portfolio-link.com
```

## About Me

I am **MD Shahidul Islam Tanveer**, a cybersecurity-focused Computer Science and Engineering graduate from **Daffodil International University** and currently working as an **AI Automation Engineer at Betopia Group**.

My journey into cybersecurity began with curiosity, hidden patterns, technical reading, security puzzles, and stories like **Cicada 3301**. Today, my work connects cybersecurity with AI automation, agentic systems, LLM workflows, business automation, and research-driven problem solving.

During my undergraduate journey, I independently worked on a cybersecurity honeypot-based research thesis focused on real-world attacker behavior.

## Key Sections

### Hero
A premium landing section that introduces the portfolio with a futuristic cybersecurity and AI-focused identity.

### About
A compact **Contender Identity Dossier** that highlights personal identity, passion, origin story, current work, and research proof.

### Projects
A timeline-style project portfolio focused on AI systems, automation workflows, RAG-based assistants, security-aware systems, and real-world engineering work.

### Research
An academic research section featuring cybersecurity, honeypot-based attacker behavior analysis, machine learning research, and ongoing security-focused directions.

### Skills
An interactive **Skill Intelligence Map** covering AI engineering, backend engineering, automation systems, frontend/web, data & machine learning, and security research direction.

### Education
A polished academic section presenting BSc, HSC, and SSC details with a cybersecurity-focused academic identity.

### Contact
A professional contact gateway with separate professional and academic email channels, GitHub, LinkedIn, Facebook, and CV link placeholder.

## Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion**
- **Lucide React Icons**
- **React Icons**

## Project Structure

Depending on how you organize the project, the optimized files are commonly used like this:

```txt
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── effects/
│   │   └── StarBackwall.tsx
│   │
│   ├── layout/
│   │   └── Navbar.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       └── ProfileFlipPanel.tsx
```

If your project does not use a `src/` directory, place the files in the matching `app/` and `components/` folders.

## Installation

Clone the repository:

```bash
git clone https://github.com/SI-Tanveer/your-repository-name.git
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the project in your browser:

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the project in development mode.

```bash
npm run build
```

Builds the project for production.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint checks.

## Customization Guide

### Update Contact Links

Edit the contact-related constants inside `page.tsx`:

```tsx
const professionalEmail = "shahidulislamtanvir00@gmail.com";
const educationalEmail = "islam15-6538@diu.edu.bd";
const cvDriveLink = "#";
```

Replace `cvDriveLink` with your Google Drive CV link when ready.

### Update Social Profiles

Edit the `contactLinks` array inside `page.tsx`:

```tsx
const contactLinks = [
  {
    title: "GitHub",
    href: "https://github.com/SI-Tanveer",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/si-tanveer",
  },
];
```

### Update Projects

Edit the `featuredProjects` array inside `page.tsx`.

Each project supports:

- title
- type
- status
- description
- icon
- technology stack

### Update Research Items

Edit the `researchItems` array inside `page.tsx`.

Use the `highlight: true` property for the main featured research work.

### Update Skills

Edit the `skillStacks` array inside `page.tsx`.

Each skill group supports:

- category
- signal
- focus
- skills
- orbit position

### Update Education

Edit the `educationItems` array inside `page.tsx`.

Current academic details include:

- BSc in Computer Science & Engineering, Major in Cybersecurity
- Daffodil International University
- HSC from Rajshahi Govt. City College, Rajshahi
- SSC from Court Model High School, Rajshahi

## Performance Notes

The portfolio has been optimized for smoother visual experience:

- Reduced excessive section height
- Balanced card spacing and visual rhythm
- FPS-friendly star background
- Reduced heavy repeated animations
- Scroll handling optimized in navbar
- More compact About, Education, and Contact sections
- Clean responsive behavior for laptop and mobile screens

## Deployment

You can deploy this portfolio easily on platforms like:

- Vercel
- Netlify
- Hostinger VPS
- Cloudflare Pages

For Vercel:

```bash
npm run build
```

Then connect your GitHub repository to Vercel and deploy.

## Contact

**Professional Email**  
shahidulislamtanvir00@gmail.com

**Educational Email**  
islam15-6538@diu.edu.bd

**GitHub**  
https://github.com/SI-Tanveer

**LinkedIn**  
https://www.linkedin.com/in/si-tanveer

**Facebook**  
https://www.facebook.com/share/1D7G9Yn877/

## Author

**MD Shahidul Islam Tanveer**  
Cybersecurity-focused CSE Graduate  
AI Automation Engineer  
Daffodil International University

## License

This is a personal portfolio project. You may use the structure or design approach for learning and inspiration, but the personal content, identity, research descriptions, and branding belong to MD Shahidul Islam Tanveer.
