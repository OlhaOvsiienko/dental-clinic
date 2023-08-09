document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
  
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          // Scroll to the target section
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });