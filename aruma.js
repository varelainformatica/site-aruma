function go(id) {
  // Se for clique no Fale Conosco, apenas desliza a tela até o formulário fixo no rodapé
  if (id === 'contato') {
    var elementoAlvo = document.getElementById('page-contato');
    if (elementoAlvo) elementoAlvo.scrollIntoView({ behavior: 'smooth' });
    return; 
  }

  // Comportamento normal para as outras páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  var pg = document.getElementById('page-' + id);
  
  if (pg) {
    pg.classList.add('active');
    
    if (id === 'quem') {
      var elementoAlvo = document.getElementById('quem');
      if (elementoAlvo) elementoAlvo.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  
  document.querySelectorAll('.nl a').forEach(a => a.classList.toggle('on', a.dataset.p === id));
  
  setTimeout(() => {
    document.querySelectorAll('#page-' + id + ' .ai').forEach(el => {
      el.classList.remove('v');
      void el.offsetWidth;
    });
    ob.disconnect();
    document.querySelectorAll('.ai').forEach(el => ob.observe(el));
  }, 30);
}

var ob = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) x.target.classList.add('v');
  });
}, { threshold: 0.06, rootMargin: '-24px' });

document.querySelectorAll('.ai').forEach(el => ob.observe(el));

var nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('up', window.scrollY > 8), { passive: true });

setTimeout(() => {
  var img = document.getElementById('hero-photo');
  if (img) {
    img.style.transition = 'transform 12s ease';
    img.style.transform = 'scale(1.06)';
  }
}, 80);