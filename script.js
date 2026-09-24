/* =====================================================
   MEUS PROJETOS — é aqui que você adiciona os seus.
   Para trocar um exemplo por um projeto real:
   1) apague a linha  exemplo: true,  (ou coloque false)
   2) preencha os textos
   3) coloque as imagens em assets/ e escreva os caminhos em imagens
      Ex.: imagens: ["assets/capa.jpg", "assets/slide-2.jpg", "assets/slide-3.jpg"]
      Com uma imagem só funciona igual: imagens: ["assets/capa.jpg"]
      Ao clicar no projeto, ele abre grande, com galeria e zoom.
      A primeira imagem da lista é a que aparece no card.
   ===================================================== */
const projetos = [
  {
    titulo: "Comunicação Política",
    categoria: "Design",
    imagens: imagens: [
  "Temos que ir conhecer o gabinete da vereadora Camilla Gonda.png",
  "gato 1.png",
  "gato 2.png",
  "gato 3.png",
  "gato 4.png",
  "gato 5.png",
  "gato 6.png",
  "gato 7.png",
  "gato 8.png"
       ],
    descricao: "Conjunto de peças para redes sociais, utilizando diferentes formatos visuais para apresentar o trabalho do gabinete, pautas públicas e conteúdos informativos.",
    objetivo: "Criar conteúdos acessíveis e visualmente atrativos para comunicar temas do mandato nas redes sociais.",
    participacao: "riação da estrutura visual, organização das informações, definição de textos e adaptação do conteúdo para o formato das redes sociais.",
    ferramentas: "Canva",
    resultado: "Peças prontas para publicação em formatos de carrossel e conteúdo vertical.",
    aprendizados: "Aprimorei a criação de conteúdos para redes sociais, hierarquia de informações, composição visual e adaptação de linguagem para diferentes público"
  },
  {
    exemplo: true,
    titulo: "Campanha para redes (exemplo)",
    categoria: "Social Media",
    imagens: [],
    descricao: "Espaço para um trabalho de social media.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: Instagram, Canva",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Texto ou roteiro (exemplo)",
    categoria: "Comunicação",
    imagens: [],
    descricao: "Espaço para um texto, roteiro ou peça de comunicação.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: Google Docs",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Ensaio fotográfico (exemplo)",
    categoria: "Fotografia",
    imagens: [],
    descricao: "Espaço para um trabalho de fotografia.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: celular, Lightroom",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Projeto de tecnologia (exemplo)",
    categoria: "Tecnologia",
    imagens: [],
    descricao: "Espaço para um site, sistema ou app que você fez.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: HTML, CSS, JavaScript",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Peça institucional (exemplo)",
    categoria: "Comunicação Institucional",
    imagens: [],
    descricao: "Espaço para um material de comunicação institucional.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: Canva",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Trabalho da escola (exemplo)",
    categoria: "Projetos acadêmicos",
    imagens: [],
    descricao: "Espaço para um projeto feito na escola ou no curso.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: linguagem ou programa usado",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Conteúdo político (exemplo)",
    categoria: "Comunicação Política",
    imagens: [],
    descricao: "Espaço para um trabalho de comunicação política que você possa mostrar.",
    objetivo: "Descreva o objetivo.",
    participacao: "Descreva sua participação.",
    ferramentas: "Ex.: Canva, Instagram",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  }
];

const categorias = ["Todos", "Design", "Social Media", "Comunicação", "Fotografia", "Tecnologia", "Comunicação Institucional", "Projetos acadêmicos", "Comunicação Política"];

/* ===== Código que monta a página (não precisa mexer) ===== */
const listaEl = document.getElementById("projetos");
const filtrosEl = document.getElementById("filtros");

function listaImagens(p) {
  if (p.imagens && p.imagens.length) return p.imagens;
  return p.imagem ? [p.imagem] : [];
}

function criarCard(p) {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Abrir projeto: " + p.titulo);
  const imgs = listaImagens(p);
  const img = imgs.length
    ? '<img src="' + imgs[0] + '" alt="' + p.titulo + '" loading="lazy">'
    : "Imagem do projeto";
  const qtd = imgs.length > 1 ? '<span class="card-qtd">' + imgs.length + " imagens</span>" : "";
  card.innerHTML =
    '<div class="card-img">' + img + qtd + "</div>" +
    '<div class="card-corpo">' +
      (p.exemplo ? '<span class="aviso-exemplo">EXEMPLO — SUBSTITUIR</span><br>' : "") +
      '<span class="card-cat">' + p.categoria + "</span>" +
      "<h3>" + p.titulo + "</h3>" +
      "<p>" + p.descricao + "</p>" +
      '<span class="card-ver">Ver projeto</span>' +
    "</div>";
  card.addEventListener("click", function () { abrirProjeto(p, card); });
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirProjeto(p, card); }
  });
  return card;
}

function mostrar(categoria) {
  listaEl.innerHTML = "";
  projetos
    .filter(function (p) { return categoria === "Todos" || p.categoria === categoria; })
    .forEach(function (p) { listaEl.appendChild(criarCard(p)); });
  filtrosEl.querySelectorAll("button").forEach(function (b) {
    b.classList.toggle("ativo", b.textContent === categoria);
  });
}

categorias.forEach(function (c) {
  const b = document.createElement("button");
  b.textContent = c;
  b.addEventListener("click", function () { mostrar(c); });
  filtrosEl.appendChild(b);
});
mostrar("Todos");

/* ===== Visualização do projeto (galeria + zoom) — não precisa mexer ===== */
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML =
  '<div class="modal-janela" role="dialog" aria-modal="true" aria-labelledby="modalTitulo">' +
    '<button class="modal-fechar" type="button" aria-label="Fechar">✕</button>' +
    '<div class="modal-galeria">' +
      '<div class="modal-palco"></div>' +
      '<div class="modal-nav">' +
        '<button type="button" class="ant" aria-label="Imagem anterior">←</button>' +
        '<span class="cont" aria-live="polite"></span>' +
        '<button type="button" class="prox" aria-label="Próxima imagem">→</button>' +
      "</div>" +
    "</div>" +
    '<div class="modal-info">' +
      '<span class="aviso-exemplo" hidden>EXEMPLO — SUBSTITUIR</span>' +
      '<span class="card-cat"></span>' +
      '<h3 id="modalTitulo"></h3>' +
      '<p class="desc"></p>' +
      "<dl></dl>" +
    "</div>" +
  "</div>";
document.body.appendChild(modal);

const zoom = document.createElement("div");
zoom.className = "zoom";
zoom.setAttribute("role", "dialog");
zoom.setAttribute("aria-modal", "true");
zoom.setAttribute("aria-label", "Imagem ampliada");
zoom.innerHTML = '<button class="zoom-fechar" type="button" aria-label="Fechar imagem ampliada">✕</button><img alt="">';
document.body.appendChild(zoom);

const palco = modal.querySelector(".modal-palco");
const navEl = modal.querySelector(".modal-nav");
const contEl = modal.querySelector(".cont");
const zoomImg = zoom.querySelector("img");
const campos = [
  ["Objetivo", "objetivo"],
  ["Minha participação", "participacao"],
  ["Ferramentas", "ferramentas"],
  ["Resultado", "resultado"],
  ["Aprendizados", "aprendizados"]
];
let projetoAtual = null, imagensAtuais = [], indice = 0, gatilho = null;

function desenhar() {
  const p = projetoAtual;
  palco.innerHTML = "";
  if (imagensAtuais.length) {
    const img = document.createElement("img");
    img.src = imagensAtuais[indice];
    img.alt = p.titulo + " — imagem " + (indice + 1) + " de " + imagensAtuais.length;
    img.title = "Clique para ampliar";
    img.addEventListener("click", abrirZoom);
    palco.appendChild(img);
  } else {
    const vazio = document.createElement("div");
    vazio.className = "modal-vazio";
    vazio.textContent = "Imagem do projeto";
    palco.appendChild(vazio);
  }
  navEl.hidden = imagensAtuais.length < 2;
  contEl.textContent = (indice + 1) + "/" + imagensAtuais.length;
}

function irPara(n) {
  if (imagensAtuais.length < 2) return;
  indice = (n + imagensAtuais.length) % imagensAtuais.length;
  desenhar();
  if (zoom.classList.contains("aberto")) zoomImg.src = imagensAtuais[indice];
}

function abrirProjeto(p, origem) {
  projetoAtual = p;
  imagensAtuais = listaImagens(p);
  indice = 0;
  gatilho = origem;
  modal.querySelector(".card-cat").textContent = p.categoria;
  modal.querySelector("h3").textContent = p.titulo;
  modal.querySelector(".desc").textContent = p.descricao;
  modal.querySelector(".aviso-exemplo").hidden = !p.exemplo;
  const dl = modal.querySelector("dl");
  dl.innerHTML = "";
  campos.forEach(function (c) {
    if (!p[c[1]]) return;
    const dt = document.createElement("dt");
    dt.textContent = c[0];
    const dd = document.createElement("dd");
    dd.textContent = p[c[1]];
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  modal.querySelector(".modal-janela").scrollTop = 0;
  desenhar();
  modal.classList.add("aberto");
  document.body.classList.add("modal-aberto");
  modal.querySelector(".modal-fechar").focus();
}

function fecharProjeto() {
  fecharZoom();
  modal.classList.remove("aberto");
  document.body.classList.remove("modal-aberto");
  if (gatilho && document.contains(gatilho)) gatilho.focus();
}

function abrirZoom() {
  zoomImg.src = imagensAtuais[indice];
  zoomImg.alt = projetoAtual.titulo;
  zoom.classList.add("aberto");
  zoom.querySelector(".zoom-fechar").focus();
}

function fecharZoom() {
  if (!zoom.classList.contains("aberto")) return;
  zoom.classList.remove("aberto");
  modal.querySelector(".modal-fechar").focus();
}

modal.querySelector(".modal-fechar").addEventListener("click", fecharProjeto);
modal.addEventListener("click", function (e) { if (e.target === modal) fecharProjeto(); });
modal.querySelector(".ant").addEventListener("click", function () { irPara(indice - 1); });
modal.querySelector(".prox").addEventListener("click", function () { irPara(indice + 1); });
zoom.addEventListener("click", fecharZoom);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("aberto")) return;
  if (e.key === "Escape") {
    if (zoom.classList.contains("aberto")) fecharZoom(); else fecharProjeto();
  } else if (e.key === "ArrowLeft") {
    irPara(indice - 1);
  } else if (e.key === "ArrowRight") {
    irPara(indice + 1);
  } else if (e.key === "Tab") {
    const area = zoom.classList.contains("aberto") ? zoom : modal;
    const foco = Array.prototype.filter.call(
      area.querySelectorAll("button"),
      function (b) { return b.offsetParent !== null || area === zoom; }
    );
    if (!foco.length) return;
    const primeiro = foco[0], ultimo = foco[foco.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  }
});

/* Deslizar o dedo no celular troca de imagem */
function ativarDeslizar(el) {
  let x0 = null;
  el.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  el.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) irPara(dx < 0 ? indice + 1 : indice - 1);
  }, { passive: true });
}
ativarDeslizar(palco);
ativarDeslizar(zoom);

/* ===== Menu do celular ===== */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    menu.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ===== Aparecer ao rolar ===== */
const blocos = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  blocos.forEach(function (b) { obs.observe(b); });
} else {
  blocos.forEach(function (b) { b.classList.add("visivel"); });
}

document.getElementById("ano").textContent = new Date().getFullYear();
