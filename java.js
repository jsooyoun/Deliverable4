document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    checkVisibility(); 
    window.addEventListener('scroll', checkVisibility); 
});

document.querySelectorAll('img').forEach(img => {
    img.onerror = function() { 
      this.onerror = null; 
      this.src = 'default_image.jpg';
      this.alt = ""
    };
  });


document.getElementById('toggleGallery').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('show-images');
    if (imageContainer.classList.contains('show-images')) {
        this.textContent = 'Hide Gallery';
    } else {
        this.textContent = 'Show Gallery';
    }
});


const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

