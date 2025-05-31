document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  this.reset();
});
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing! Check your email for updates.");
  this.reset();
});




// // Detect when the element is in the viewport
// function isInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }

// // Add the 'visible' class when element is in viewport
// function handleScroll() {
//   const sections = document.querySelectorAll('.fade-in-section');
//   sections.forEach(section => {
//     if (isInViewport(section)) {
//       section.classList.add('visible');
//     }
//   });
// }

// // Listen for scroll events
// window.addEventListener('scroll', handleScroll);
// window.addEventListener('load', handleScroll); // Run on page load too
