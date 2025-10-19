// Footer year
document.getElementById('y').textContent = new Date().getFullYear();

// Highlight the active nav link
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && (href === here || (here==='index.html' && href==='/'))) a.classList.add('active');
  });
})();

// Reveal on scroll
const revealEls = document.querySelectorAll('.section, .card, .faq details');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); }});
},{threshold:.12});
revealEls.forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Smooth anchor scrolling (for page-internal links)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});