```
Estructura Screaming Architecture

cvactualizada/
├── .next/
├── node_modules/
├── public/
│   ├── isoTipoCA.svg	
│   ├── LogoCA.svg
│   └── documents/
│       ├── cv.pdf
│       └── portfolio.pdf
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── contacto/
│   │   │   │   └── page.tsx
│   │   │   ├── educacion/
│   │   │   │   └── page.tsx
│   │   │   ├── experiencia/
│   │   │   │   └── page.tsx
│   │   │   ├── habilidades/
│   │   │   │   └── page.tsx
│   │   │   ├── inicio/
│   │   │   │   └── page.tsx
│   │   │   ├── proyectos/
│   │   │   │   └── page.tsx
│   │   │   └── sobremi/
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── core/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── header/
│   |   │   │       ├── DesktopMenu.tsx
│   │   │   │       └── MobileMenu.tsx
│   │   │   ├── footer/
│   │   │   │   └── SocialFooter.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── hooks/
│   │   │   └── useFlipHook.tsx
│   │   └── utils/
│   │       └── providers.tsx
│   ├── features/
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   └── AboutContent.tsx
│   │   │   └── AboutPage.tsx
│   │   ├── contact/
│   │   │   ├── components/
│   │   │   │   └── ContactForm.tsx
│   │   │   └── ContactPage.tsx
│   │   ├── experience/
│   │   │   ├── components/
│   │   │   │   └── ExperienceTimeline.tsx
│   │   │   └── ExperiencePage.tsx
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── IntroductionText.tsx
│   │   │   └── HomePage.tsx
│   │   ├── projects/
│   │   │   ├── components/
│   │   │   │   └── ProjectGrid.tsx
│   │   │   └── ProjectsPage.tsx
│   │   ├── education/
│   │   │   ├── components/
│   │   │   │   └── EducationList.tsx
│   │   │   └── EducationPage.tsx
│   │   └── skills/
│   │       ├── types/
│   │       │   └── index.ts
│   │       ├── data/
│   │       │   └── skillsData.ts
│   │       ├── components/
│   │       │   └── SkillGrid.tsx
│   │       └── SkillsPage.tsx
│   └── shared/
│       ├── components/
│       │   ├── Logo.tsx
│       │   ├── FlipCard.tsx
│       │   └── ui/
│       │       └── ThemeSwitcher/
│       │           ├── ThemeSwitcher.tsx
│       │           ├── MoonIcon.tsx
│       │           └── SunIcon.tsx
│       └── styles/
│           └── globals.css 
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```
