function animateOnScroll() {
  const hiddenElements = document.querySelectorAll('.no-show');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  hiddenElements.forEach((el) => observer.observe(el));
}

function scrollToTop() {
  // Get the button
  const mybutton = document.getElementById('btn-back-to-top');

  // When the user scrolls down 20px from the top of the document, show the button

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton?.classList.remove('hidden');
    } else {
      mybutton?.classList.add('hidden');
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When the user clicks on the button, scroll to the top of the document
  mybutton?.addEventListener('click', backToTop);

  window.addEventListener('scroll', scrollFunction);
}

// animateOnScroll();
// scrollToTop();
