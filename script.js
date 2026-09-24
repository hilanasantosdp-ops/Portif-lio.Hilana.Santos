/* =====================================================
   MEUS PROJETOS — é aqui que você adiciona os seus.
   Para trocar um exemplo por um projeto real:
   1) apague a linha  exemplo: true,  (ou coloque false)
   2) preencha os textos
   3) coloque a imagem em assets/ e escreva o caminho em imagem
      Ex.: imagem: "assets/meu-projeto.jpg"
   ===================================================== */
const projetos = [
  {
    exemplo: true,
    titulo: "Identidade visual (exemplo)",
    categoria: "Design",
    imagem: "",
    descricao: "Espaço para um projeto de design criado por você.",
    objetivo: "Descreva o que o projeto queria alcançar.",
    participacao: "Descreva o que você fez.",
    ferramentas: "Ex.: Canva, Photoshop, Figma",
    resultado: "Descreva o resultado.",
    aprendizados: "Descreva o que aprendeu."
  },
  {
    exemplo: true,
    titulo: "Campanha para redes (exemplo)",
    categoria: "Social Media",
    imagem: "",
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
    imagem: "",
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
    imagem: "",
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
    imagem: "",
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
    imagem: "",
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
    imagem: "",
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
    imagem: "",
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

function criarCard(p) {
  const card = document.createElement("article");
  card.className = "card";
  const img = p.imagem
    ? '<img src="' + p.imagem + '" alt="' + p.titulo + '" loading="lazy">'
    : "Imagem do projeto";
  card.innerHTML =
    '<div class="card-img">' + img + "</div>" +
    '<div class="card-corpo">' +
      (p.exemplo ? '<span class="aviso-exemplo">EXEMPLO — SUBSTITUIR</span><br>' : "") +
      '<span class="card-cat">' + p.categoria + "</span>" +
      "<h3>" + p.titulo + "</h3>" +
      "<p>" + p.descricao + "</p>" +
      "<details><summary>Ver detalhes</summary><dl>" +
        "<dt>Objetivo</dt><dd>" + p.objetivo + "</dd>" +
        "<dt>Minha participação</dt><dd>" + p.participacao + "</dd>" +
        "<dt>Ferramentas</dt><dd>" + p.ferramentas + "</dd>" +
        "<dt>Resultado</dt><dd>" + p.resultado + "</dd>" +
        "<dt>Aprendizados</dt><dd>" + p.aprendizados + "</dd>" +
      "</dl></details>" +
    "</div>";
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
