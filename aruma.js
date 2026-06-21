function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  var pg=document.getElementById('page-'+id);
  if(pg){
    pg.classList.add('active');
    window.scrollTo({top:0,behavior:'instant'});
    // ATUALIZA A URL: Salva o nome da página na barra de endereços (Ex: site.com/#quem)
    window.location.hash = id;
  }
  document.querySelectorAll('.nl a').forEach(a=>a.classList.toggle('on',a.dataset.p===id));
  setTimeout(()=>{
    document.querySelectorAll('#page-'+id+' .ai').forEach(el=>{el.classList.remove('v');void el.offsetWidth});
    ob.disconnect();document.querySelectorAll('.ai').forEach(el=>ob.observe(el));
  },30);
}

// LEITOR DE LINK: Se o usuário der F5 ou usar um link direto, o site abre na página certa
window.addEventListener('DOMContentLoaded', () => {
  var hash = window.location.hash.replace('#', '');
  if (hash && ['home', 'quem', 'atuacao', 'contato'].includes(hash)) {
    go(hash);
  } else {
    go('home');
  }
});

var ob=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('v')})},{threshold:0.06,rootMargin:'-24px'});
document.querySelectorAll('.ai').forEach(el=>ob.observe(el));
var nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20));