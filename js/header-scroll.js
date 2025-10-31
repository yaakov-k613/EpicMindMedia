(function(){
  const header = document.querySelector('.header');
  if(!header) return;

  let ticking = false;
  function onScroll(){
    const scrolled = window.scrollY > 12; // threshold
    header.classList.toggle('is-scrolled', scrolled);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
  }, { passive:true });

  // initialize on page load
  onScroll();
})();
