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
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   ├── proyectos.tsx
│   │   │   └── page.tsx
│   │   ├── sobremi.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── flippedcard/
│   │   │   └── FlipCard.tsx
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   ├── sidebar/
│   │   │   └── SideBar.tsx
│   │   └── ui/
│   │       └── themeswitcher/
│   │           ├── ThemeSwitcher.tsx
│   │           ├── MoonIcon.tsx
│   │           └── SunIcon.tsx
│   ├── features/
│   │   ├── about/
│   │   │   └── AboutPage.tsx
│   │   ├── contact/
│   │   │   └── ContactPage.tsx
│   │   ├── experience/
│   │   │   └── ExperiencePage.tsx
│   │   ├── home/
│   │   │   └── HomePage.tsx
│   │   ├── projects/
│   │   │   └── ProjectsPage.tsx
│   │   └── skill/
│   │       └── SkillPage.tsx
│   ├── hook/
│   │   └── useFlipHook.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│       └── providers.tsx
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





export default function ProjectsPage() {
  return (
    <section className="pt-page pt-page-4" data-id="Portafolio">
      <div className="border-block-top-110"></div>
      <div className="section-inner">
        <div className="section-title-block">
          <div className="section-title-wrapper">
            <h2 className="section-title">Portafolio</h2>
            <p className="section-description">Mis proyectos</p>
          </div>
        </div>
        {/*  <!-- Portafolio Content --> */}
        <div className="portfolio-content">
          {/* <!-- Portafolio Grid --> */}
          <div
            id="portfolio_grid"
            className="portfolio-grid portfolio-masonry masonry-grid-3"
          >
            {/* <!-- Portafolio Item 7 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/juegoquiz.html"
                title="Juego Quiz"
              >
                {/* <img src="assets/images/portfolio/juegoquiz/quiz_1.webp"
                        srcset="assets/images/portfolio/juegoquiz/quiz_1.png" 
                        style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="Juego Quiz" title="Juego Quiz" /> */}
                <div>
                  <h5 className="name">Juego de Quiz</h5>
                  <small className="fs-6 fst-italic">Febrero-2024</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 7 --> */}
            {/* <!-- Portafolio Item 6 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/juegomemoria.html"
                title="Juego de Memoria"
              >
                {/* <img src="assets/images/portfolio/juegomemoria/memoria_1.png" srcset="
                            assets/images/portfolio/juegomemoria/memoria_1.png
                          " style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="Juego de Memoria" title="Juego de Memoria" /> */}
                <div>
                  <h5 className="name">Juego de Memoria</h5>
                  <small className="fs-6 fst-italic">Enero-2024</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 6 --> */}
            {/* <!-- Portafolio Item 5 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/newshomepage.html"
                title="News homepage"
              >
                {/*  <img src="assets/images/portfolio/news_homepage/news_homepage-1.webp" srcset="
                            assets/images/portfolio/news_homepage/news_homepage-1.png
                          " style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="News homepage" title="News homepage" /> */}
                <div>
                  <h5 className="name">News homepage</h5>
                  <small className="fs-6 fst-italic">Octubre-2023</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 5 --> */}
            {/* <!-- Portafolio Item 4 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/e-commerce.html"
                title="E-commerce"
              >
                {/* <img src="assets/images/portfolio/e-commerce/e-commerce_1.webp" srcset="
                            assets/images/portfolio/e-commerce/e-commerce_1.png
                          " style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="E-commerce" title="E-commerce" /> */}
                <div>
                  <h5 className="name">E-commerce</h5>
                  <small className="fs-6 fst-italic">Septiembre-2023</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 4 --> */}
            {/* <!-- Portafolio Item 3 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/mallasjf.html"
                title="Proyecto final Mallas Jf"
              >
                {/* <img src="assets/images/portfolio/mallasjf/mallasjf-1.webp" srcset="
                            assets/images/portfolio/mallasjf/mallasjf-1.png
                          " style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="Mallasjf-1" title="Mallasjf-1" /> */}
                <div>
                  <h5 className="name">Proyecto final Mallas Jf</h5>
                  <small className="fs-6 fst-italic">Julio-2023</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 3 --> */}
            {/* <!-- Portafolio Item 2 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/pokedex.html"
                title="Pokédex"
              >
                {/* <img src="assets/images/portfolio/pokedex/pokedex-2.webp"
                        srcset="assets/images/portfolio/pokedex/pokedex-2.png" style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="Pokédex-2" title="Pokédex-2" /> */}
                <div>
                  <h5 className="name">Pokédex</h5>
                  <small className="fs-6 fst-italic">Enero-2023</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/* <!-- /Portafolio Item 2 --> */}
            {/* <!-- Portafolio Item 1 --> */}
            <figure className="item" data-groups='["all", "media"]'>
              <a
                className="ajax-page-load"
                href="assets/portafolio/atm.html"
                title="Atm"
              >
                {/* <img src="assets/images/portfolio/atm/atm_1.webp" srcset="assets/images/portfolio/atm/atm_1.png"
                        style="
                            height: 100%;
                            width: 100%;
                            image-rendering: auto;
                          " alt="Atm_1" title="Atm_1" /> */}
                <div>
                  <h5 className="name">Cajero Automático</h5>
                  <small className="fs-6 fst-italic">Enero-2023</small>
                  <i className="get-font-icon bi bi-display"></i>
                </div>
              </a>
            </figure>
            {/*  <!-- /Portafolio Item 1 --> */}
          </div>
          {/* <!-- /Portfolio Grid --> */}
        </div>
        {/* <!-- /Portfolio Content --> */}
      </div>
    </section>
  );
}
