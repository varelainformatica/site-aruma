const traducoes = {
  pt: {
    "home.hero.title":
      'Estratégia<br>e <em>inovação</em><br><span>para transformar propósito em resultados</span>',

    "home.hero.text":
      "Muitos projetos nascem da urgência, do cuidado e do desejo de mudança. Mas, na prática, lidam com a dificuldade de se manter ao longo do tempo, seja pela instabilidade de recursos, pela falta de estrutura institucional ou pelos desafios de articulação nos territórios onde atuam.",

    "home.about.label":
      "Sobre a Aruma",

    "home.about.quote":
      "A Aruma nasce do encontro entre sensibilidade e estratégia, impacto social e inteligência institucional.",

    "home.about.text1":
      "Nesse contexto, fortalecemos estruturas, cooperação e atuação institucional, lado a lado com organizações da sociedade civil, gestão pública e investimento social privado. Reconhecemos que cada território tem sua dinâmica e que mudanças consistentes nascem de processos construídos coletivamente.",
      

    "home.about.text2":
      "Por meio de metodologias participativas, a Aruma qualifica a governança, impulsiona a inovação e amplia a capacidade de gestão das iniciativas. Traduzimos diagnósticos em caminhos possíveis, para que cada organização conduza seus processos com autonomia.",

      "home.solutions.label":
  "O que desenvolvemos",

"home.solutions.title":
  "Soluções para fortalecer organizações",

"home.solutions.text":
  "Abordagens personalizadas que respondem aos desafios e oportunidades de cada contexto.",

  "home.cards.governance.title": "Governança",
"home.cards.governance.text": "Arquitetura institucional e processos",

"home.cards.programs.title": "Programas, Projetos e Políticas Públicas",
"home.cards.programs.text": "Da concepção à estruturação",

"home.cards.impact.title": "Impacto e Inteligência",
"home.cards.impact.text": "Monitoramento, análise e avaliação.",

"home.cards.training.title": "Formação e Facilitação",
"home.cards.training.text": "Desenvolvimento de equipes e processos coletivos",

"home.origin.label":
  "Origem da Aruma",

"home.origin.title":
  'Do tupi-guarani <em>ára</em> (tempo) e <em>umã</em> (antigo) a Aruma se inspira no amanhecer, símbolo de novos ciclos e transformações.',

"home.origin.text":
  "Aruma Social é uma organização global de infraestrutura para impacto social,com bases no Brasil e na Alemanha. Entre contextos, territórios e instituições.",

  "home.origin.button": "Conheça a Aruma",

  "home.projects.button": "Nossos Projetos"
  },

  en: {
    "home.hero.title":
      'Strategy<br>and <em>innovation</em><br><span>to turn purpose into results</span>',

    "home.hero.text":
      "Many projects are born out of urgency, care, and a desire for change. In practice, however, they struggle to sustain themselves over time — whether due to unstable funding, lack of institutional structure, or the difficulty of connecting actors in the territories where they work.",

    "home.about.label":
      "About Aruma",

    "home.about.quote":
      "Aruma begins where sensitivity meets strategy, social impact meets institutional intelligence.",

    "home.about.text1":
      "That is where our work begins. We strengthen structures, cooperation, and institutional practice, working side by side with civil society organizations, public administration, and private social investment. We recognize that every territory has its own dynamics, and that lasting change grows out of processes built collectively.",

    "home.about.text2":
      "Through participatory methodologies, Aruma enhances governance, drives innovation, and expands the management capacity of initiatives. We translate assessments into viable pathways, so that each organization can lead its own processes with autonomy.",

      "home.solutions.label":
  "What we build",

"home.solutions.title":
  "Solutions to strengthen organizations",

"home.solutions.text":
  "Tailored approaches that respond to the challenges and opportunities of each context.",


  "home.cards.governance.title": "Governance",
"home.cards.governance.text": "Institutional architecture and processes",

"home.cards.programs.title": "Programs, Projects, and Public Policy",
"home.cards.programs.text": "From concept to viable proposal",

"home.cards.impact.title": "Impact and Intelligence",
"home.cards.impact.text": "Monitoring, analysis, and evaluation",

"home.cards.training.title": "Training and Facilitation",
"home.cards.training.text": "Strengthening teams and participatory processes",


"home.origin.label":
  "The origin of Aruma",

"home.origin.title":
  'Aruma takes its name from the Tupi-Guarani <em>ára</em> (time) and <em>umã</em> (ancient). Like the dawn, it marks the beginning of new cycles and transformation.',

"home.origin.text":
  "Aruma Social is a global social impact infrastructure organization, based in Brazil and Germany. Across contexts, territories, and institutions.",

  "home.origin.button": "Get to know Aruma",

  "home.projects.button": "Our Projects"
  }
};

function aplicarIdioma(idioma) {
  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    const chave = elemento.dataset.i18n;

    if (traducoes[idioma]?.[chave]) {
      elemento.textContent = traducoes[idioma][chave];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((elemento) => {
    const chave = elemento.dataset.i18nHtml;

    if (traducoes[idioma]?.[chave]) {
      elemento.innerHTML = traducoes[idioma][chave];
    }
  });

  document.querySelectorAll(".lang-option").forEach((botao) => {
    botao.classList.toggle("active", botao.dataset.lang === idioma);
  });

  document.documentElement.lang = idioma === "en" ? "en" : "pt-BR";
}

document.querySelectorAll(".lang-option").forEach((botao) => {
  botao.addEventListener("click", () => {
    aplicarIdioma(botao.dataset.lang);
  });
});