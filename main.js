const projects = [
  {
    id: 'casa-amora', number: '01', name: 'Casa Amora', short: 'Um refúgio de afeto imaginado em cores quentes e formas orgânicas.',
    category: 'IDENTIDADE VISUAL', kind: 'ESTUDO CONCEITUAL', year: '2026',
    cover: 'assets/casa-amora-cover.svg', detail: 'assets/casa-amora-detail.svg',
    alt: 'Composição de identidade visual conceitual para Casa Amora, com flores e tipografia vinho sobre fundo rosado.',
    storyTitle: 'Um lugar para<br><em>sentir-se em casa.</em>',
    story: 'Casa Amora é um exercício autoral de identidade para uma marca imaginária de hospedagem afetiva. A direção visual combina formas botânicas, contrastes delicados e uma paleta que evoca calor, cuidado e memória.',
    quote: 'O afeto também mora nos detalhes.',
    captions: ['ESTUDO DE MARCA · COMPOSIÇÃO PRINCIPAL', 'PALETA, TIPOGRAFIA E GESTOS BOTÂNICOS']
  },
  {
    id: 'mormaco', number: '02', name: 'Mormaço', short: 'Uma campanha imaginária com gosto de verão, pausa e tardes longas.',
    category: 'CAMPANHA & DIREÇÃO DE ARTE', kind: 'ESTUDO CONCEITUAL', year: '2026',
    cover: 'assets/mormaco-cover.svg', detail: 'assets/mormaco-detail.svg',
    alt: 'Cartaz conceitual Mormaço com formas de sol, frutas e tipografia em tons de terracota e vinho.',
    storyTitle: 'Um verão que<br><em>fica na pele.</em>',
    story: 'Mormaço explora o imaginário de uma bebida brasileira inventada: calor de fim de tarde, fruta fresca e sombra boa. O sistema gráfico parte de formas solares, cores terrosas e uma tipografia de presença para criar uma campanha cheia de ritmo.',
    quote: 'Devagar também é um jeito de chegar.',
    captions: ['CAMPANHA IMAGINÁRIA · PEÇA DE ABERTURA', 'ESTUDO DE FORMAS, COR E MOVIMENTO']
  },
  {
    id: 'entrelinhas', number: '03', name: 'Entrelinhas', short: 'Um pequeno universo editorial dedicado ao que merece ser lido com calma.',
    category: 'PROJETO EDITORIAL', kind: 'ESTUDO CONCEITUAL', year: '2025',
    cover: 'assets/entrelinhas-cover.svg', detail: 'assets/entrelinhas-detail.svg',
    alt: 'Capa conceitual da publicação Entrelinhas, com desenho de linhas e tipografia serifada em vinho.',
    storyTitle: 'O que existe<br><em>entre as linhas.</em>',
    story: 'Uma publicação imaginária sobre cultura, imagem e pequenos modos de viver. O projeto estuda hierarquia tipográfica, ritmo de leitura e a convivência entre respiro, palavra e gesto gráfico.',
    quote: 'Toda boa história deixa espaço para olhar.',
    captions: ['CAPA E SISTEMA EDITORIAL · ESTUDO', 'EXPERIMENTO TIPOGRÁFICO E COMPOSIÇÃO']
  },
  {
    id: 'vinho-de-domingo', number: '04', name: 'Vinho de Domingo', short: 'Uma identidade de embalagem pensada para encontros sem pressa.',
    category: 'EMBALAGEM & IDENTIDADE', kind: 'ESTUDO CONCEITUAL', year: '2025',
    cover: 'assets/vinho-cover.svg', detail: 'assets/vinho-detail.svg',
    alt: 'Rótulo e embalagem imaginários Vinho de Domingo em uma composição de cores vinho, rosa e creme.',
    storyTitle: 'Um brinde ao<br><em>tempo sem pressa.</em>',
    story: 'Vinho de Domingo é um conceito de rótulo para uma marca fictícia que celebra encontros cotidianos. A linguagem visual usa lettering editorial, um selo gráfico e uma paleta vínica para criar uma presença acolhedora e despretensiosa.',
    quote: 'O melhor plano é ter tempo.',
    captions: ['ESTUDO DE RÓTULO · SÉRIE IMAGINÁRIA', 'SISTEMA VISUAL DE EMBALAGEM']
  },
  {
    id: 'jardim-de-dentro', number: '05', name: 'Jardim de Dentro', short: 'Conteúdo visual sobre cuidado, natureza e beleza no cotidiano.',
    category: 'SOCIAL & CONTEÚDO', kind: 'ESTUDO CONCEITUAL', year: '2024',
    cover: 'assets/jardim-cover.svg', detail: 'assets/jardim-detail.svg',
    alt: 'Composição botânica conceitual Jardim de Dentro com folhas, flores e tipografia em verde oliva e vinho.',
    storyTitle: 'Florescer<br><em>por dentro.</em>',
    story: 'Um exercício de direção visual para uma marca fictícia de bem-estar botânico. O estudo leva o repertório de jardim para um sistema de conteúdo digital: composições leves, formas ilustradas e mensagens curtas que convidam a desacelerar.',
    quote: 'Cuidar também é um gesto criativo.',
    captions: ['ESTUDO DE CONTEÚDO · SÉRIE VISUAL', 'FORMAS BOTÂNICAS E MENSAGENS CURTAS']
  }
];

const siteHeader = document.querySelector('#site-header');
const mainSite = document.querySelector('#main-site');
const siteFooter = document.querySelector('#site-footer');
const projectView = document.querySelector('#project-view');
const projectContent = document.querySelector('#project-content');
const pageTurn = document.querySelector('#page-turn');
const pageNumber = document.querySelector('#page-number');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeProject = null;
let savedHomeScroll = 0;
let isAnimating = false;

function projectUrl(id) {
  return `#projeto/${id}`;
}

function setPageNumber(number = '01') {
  pageNumber.innerHTML = `<span>${number}</span><i></i><span>05</span>`;
}

function turnPage(callback) {
  if (motionReduced || isAnimating) {
    callback();
    return;
  }
  isAnimating = true;
  pageTurn.classList.remove('is-active');
  void pageTurn.offsetWidth;
  pageTurn.classList.add('is-active');
  window.setTimeout(callback, 355);
  window.setTimeout(() => {
    pageTurn.classList.remove('is-active');
    isAnimating = false;
  }, 760);
}

function projectPageMarkup(project, index) {
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return `
    <article class="project-page">
      <div class="project-page__top">
        <button class="back-projects" type="button" data-back>← VOLTAR AOS PROJETOS</button>
        <span class="project-page__counter">${project.number} <i>/</i> 05</span>
      </div>
      <header class="project-page__intro">
        <span class="project-page__label">PROJECT ${project.number} <i>·</i> ${project.kind}</span>
        <h1>${project.name.replace(' ', '<br><em>')}${project.name.includes(' ') ? '</em>' : ''}</h1>
        <p>${project.short}</p>
      </header>
      <figure class="project-page__hero">
        <img src="${project.cover}" alt="${project.alt}">
        <figcaption><span>${project.number} / ESTUDO VISUAL</span><span>${project.name.toUpperCase()} · ${project.year}</span></figcaption>
      </figure>
      <div class="project-page__facts" aria-label="Informações do estudo">
        <div class="project-page__fact"><span>DISCIPLINA</span><b>${project.category}</b></div>
        <div class="project-page__fact"><span>TIPO</span><b>${project.kind}</b></div>
        <div class="project-page__fact"><span>ANO DO ESTUDO</span><b>${project.year}</b></div>
      </div>
      <section class="project-page__story" aria-label="Sobre o estudo">
        <h2>${project.storyTitle}</h2>
        <p>${project.story}</p>
      </section>
      <div class="project-page__gallery">
        <figure><img src="${project.detail}" alt="Detalhe complementar do estudo conceitual ${project.name}." loading="lazy"><figcaption>${project.captions[0]}</figcaption></figure>
        <figure><img src="${project.cover}" alt="Variação da composição visual de ${project.name}." loading="lazy"><figcaption>${project.captions[1]}</figcaption></figure>
      </div>
      <blockquote class="project-page__quote"><span>✳</span><p>“${project.quote}”</p><span>✳</span></blockquote>
      <nav class="project-page__nav" aria-label="Navegar entre projetos">
        <button type="button" data-project="${previous.id}"><span>← PREVIOUS PROJECT</span><b>${previous.name}</b></button>
        <button type="button" data-project="${next.id}"><span>NEXT PROJECT →</span><b>${next.name}</b></button>
      </nav>
    </article>`;
}

function showProject(id, { push = false, animate = true } = {}) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  if (!activeProject && !projectView.hidden) return;
  if (!activeProject) savedHomeScroll = window.scrollY;

  const render = () => {
    activeProject = id;
    setPageNumber(project.number);
    projectContent.innerHTML = projectPageMarkup(project, projects.indexOf(project));
    siteHeader.hidden = true;
    mainSite.hidden = true;
    siteFooter.hidden = true;
    projectView.hidden = false;
    document.body.classList.add('is-project-open');
    pageNumber.classList.add('is-visible');
    window.scrollTo(0, 0);
    if (push) history.pushState({ view: 'project', id }, '', projectUrl(id));
  };

  if (animate && !projectView.hidden) {
    turnPage(render);
  } else if (animate) {
    turnPage(render);
  } else {
    render();
  }
}

function showHome({ push = false, animate = true, target = null, restore = false } = {}) {
  const finish = () => {
    activeProject = null;
    projectView.hidden = true;
    projectContent.innerHTML = '';
    siteHeader.hidden = false;
    mainSite.hidden = false;
    siteFooter.hidden = false;
    document.body.classList.remove('is-project-open');
    pageNumber.classList.remove('is-visible');
    setPageNumber('01');
    if (push) history.replaceState({ view: 'home' }, '', target ? `#${target}` : '#projetos');
    const destination = target ? document.getElementById(target) : null;
    const scrollTop = destination ? destination.getBoundingClientRect().top + window.scrollY : (restore ? savedHomeScroll : 0);
    window.scrollTo({ top: scrollTop, behavior: motionReduced ? 'auto' : 'smooth' });
  };
  if (activeProject && animate) turnPage(finish);
  else finish();
}

function handleProjectNavigation(id) {
  if (!projects.some((project) => project.id === id)) return;
  if (!activeProject) {
    showProject(id, { push: true });
    return;
  }
  turnPage(() => {
    const project = projects.find((item) => item.id === id);
    activeProject = id;
    setPageNumber(project.number);
    projectContent.innerHTML = projectPageMarkup(project, projects.indexOf(project));
    window.scrollTo(0, 0);
    history.pushState({ view: 'project', id }, '', projectUrl(id));
  });
}

document.addEventListener('click', (event) => {
  const projectTrigger = event.target.closest('[data-project]');
  if (projectTrigger) {
    event.preventDefault();
    handleProjectNavigation(projectTrigger.dataset.project);
    return;
  }
  if (event.target.closest('[data-back]')) {
    event.preventDefault();
    showHome({ push: true, target: 'projetos' });
  }
});

window.addEventListener('popstate', () => {
  const match = window.location.hash.match(/^#projeto\/([a-z0-9-]+)$/i);
  if (match) {
    showProject(match[1], { animate: true });
  } else if (activeProject) {
    const target = window.location.hash.replace('#', '');
    showHome({ animate: true, target: document.getElementById(target) ? target : 'projetos', restore: !target });
  }
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mainNav.classList.toggle('is-open', !isOpen);
});

mainNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    mainNav.classList.remove('is-open');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeProject) showHome({ push: true, target: 'projetos' });
});

// Abre um estudo diretamente quando o endereço #projeto/nome é compartilhado.
const initialRoute = window.location.hash.match(/^#projeto\/([a-z0-9-]+)$/i);
if (initialRoute) showProject(initialRoute[1], { animate: false });

// Entradas sutis ao rolar; conteúdo permanece visível caso o navegador não suporte IntersectionObserver.
const revealItems = document.querySelectorAll('.section-kicker, .projects__heading, .project-card, .about__layout, .skills-block, .journey__heading, .timeline__item, .contact__layout');
if ('IntersectionObserver' in window && !motionReduced) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}

document.querySelector('#current-year').textContent = new Date().getFullYear();
