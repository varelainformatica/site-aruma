const traducoes = {
  pt: {
    "home.hero.title":
      'Estratégia<br>e <em>inovação</em><br><span>para transformar propósito em resultados</span>',

    "home.hero.text":
      "Muitos projetos nascem da urgência, do cuidado e do desejo de mudança. Mas, na prática, lidam com a dificuldade de se manter ao longo do tempo, seja pela instabilidade de recursos, pela falta de estrutura institucional ou pelos desafios de articulação nos territórios onde atuam."
  },

  en: {
    "home.hero.title":
      'Strategy<br>and <em>innovation</em><br><span>to turn purpose into results</span>',

    "home.hero.text":
      "Many projects are born out of urgency, care, and a desire for change. In practice, however, they struggle to sustain themselves over time — whether due to unstable funding, lack of institutional structure, or the difficulty of connecting actors in the territories where they work."
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