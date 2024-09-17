<div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-[100px] border-l-transparent
                      border-r-[100px] border-r-transparent
                      border-t-[50px] border-t-indigo-400/50 dark:border-t-indigo-800
                      z-10 blur-xl animate-float-top"
      ></div>

      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 
                      border-t-[100px] border-t-transparent
                      border-b-[100px] border-b-transparent
                      border-r-[50px] border-r-rose-400/50 dark:border-r-teal-800
                      z-10 blur-xl animate-float-right"
      ></div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-[100px] border-l-transparent
                      border-r-[100px] border-r-transparent
                      border-b-[50px] border-b-sky-400/50 dark:border-b-rose-800
                      z-10 blur-xl animate-float-bottom"
      ></div>

      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 
                      border-t-[100px] border-t-transparent
                      border-b-[100px] border-b-transparent
                      border-l-[50px] border-l-emerald-400/50 dark:border-l-purple-800
                      z-10 blur-xl animate-float-left"
      ></div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`absolute w-0 h-0 
                      border-l-[50px] border-l-transparent
                      border-r-[50px] border-r-transparent
                      border-b-[100px] border-b-amber-400/30 dark:border-b-orange-800/30
                      z-10 blur-xl animate-float-random-${index + 1}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      ))}

keyframes: {
  // Animación para un flotado hacia arriba
  floatTop: {
    '0%, 100%': { transform: 'translate(-50%, 0)' }, // Comienza y termina en la posición inicial
    '50%': { transform: 'translate(-50%, 20px)' }, // A mitad de la animación se desplaza 20px hacia abajo
  },
  // Animación para un flotado hacia la derecha
  floatRight: {
    '0%, 100%': { transform: 'translate(0, -50%)' }, // Comienza y termina en la posición inicial
    '50%': { transform: 'translate(-20px, -50%)' }, // A mitad de la animación se desplaza 20px hacia la izquierda
  },
  // Animación para un flotado hacia abajo
  floatBottom: {
    '0%, 100%': { transform: 'translate(-50%, 0)' }, // Comienza y termina en la posición inicial
    '50%': { transform: 'translate(-50%, -20px)' }, // A mitad de la animación se desplaza 20px hacia arriba
  },
  // Animación para un flotado hacia la izquierda
  floatLeft: {
    '0%, 100%': { transform: 'translate(0, -50%)' }, // Comienza y termina en la posición inicial
    '50%': { transform: 'translate(20px, -50%)' }, // A mitad de la animación se desplaza 20px hacia la derecha
  },
  // Animaciones aleatorias que implican traslación y rotación
  floatRandom1: {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, // Comienza y termina en la posición y rotación inicial
    '50%': { transform: 'translate(100px, 100px) rotate(180deg)' }, // A mitad de la animación, se traslada 100px en ambos ejes y gira 180 grados
  },
  floatRandom2: {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, 
    '50%': { transform: 'translate(-150px, 50px) rotate(-90deg)' }, // Movimiento aleatorio en diferentes direcciones con una rotación de -90 grados
  },
  floatRandom3: {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, 
    '50%': { transform: 'translate(50px, -100px) rotate(45deg)' }, // Movimiento hacia arriba y derecha con rotación de 45 grados
  },
  floatRandom4: {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, 
    '50%': { transform: 'translate(-100px, -50px) rotate(135deg)' }, // Movimiento diagonal hacia la izquierda y rotación de 135 grados
  },
  floatRandom5: {
    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, 
    '50%': { transform: 'translate(120px, -80px) rotate(-45deg)' }, // Movimiento diagonal hacia la derecha con una rotación de -45 grados
  },
},
animation: {
  // Asigna las animaciones definidas en los keyframes con diferentes duraciones y tipos de easing
  'float-top': 'floatTop 15s ease-in-out infinite', // Animación que flota hacia arriba durante 15 segundos
  'float-right': 'floatRight 18s ease-in-out infinite', // Animación hacia la derecha durante 18 segundos
  'float-bottom': 'floatBottom 20s ease-in-out infinite', // Animación hacia abajo durante 20 segundos
  'float-left': 'floatLeft 17s ease-in-out infinite', // Animación hacia la izquierda durante 17 segundos
  'float-random-1': 'floatRandom1 25s ease-in-out infinite', // Animación aleatoria 1 durante 25 segundos
  'float-random-2': 'floatRandom2 30s ease-in-out infinite', // Animación aleatoria 2 durante 30 segundos
  'float-random-3': 'floatRandom3 35s ease-in-out infinite', // Animación aleatoria 3 durante 35 segundos
  'float-random-4': 'floatRandom4 28s ease-in-out infinite', // Animación aleatoria 4 durante 28 segundos
  'float-random-5': 'floatRandom5 32s ease-in-out infinite', // Animación aleatoria 5 durante 32 segundos
},





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
