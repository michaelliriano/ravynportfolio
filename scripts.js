//function expression to select elements
const selectElement = s => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

//close the menu on click

selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

// Reveal on scroll
ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.star-gazing', { delay: 300 });
ScrollReveal().reveal('.hiking', { delay: 300 });
ScrollReveal().reveal('.camping', { delay: 300 });
ScrollReveal().reveal('.testimonial-customer', { delay: 200 });
ScrollReveal().reveal('.testimonial-text-box', { delay: 200 });
ScrollReveal().reveal('.begin-adventure', { delay: 300 });
ScrollReveal().reveal('.adventure-grid-item', { delay: 300 });
