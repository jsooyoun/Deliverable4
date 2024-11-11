/*will run when document is loadad*/
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    /*selects all "section ids*/

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

            /*defines when a section should fade in*/

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        /*for each section, if the top of the section is less than the fade-in boundary,
        it is visible, and the section.visible css is applied */
    }

    checkVisibility(); 
    window.addEventListener('scroll', checkVisibility); 
});

/*class JS, that replaces images that do not have a corresponding file with the default image*/
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() { 
      this.onerror = null; 
      this.src = 'default_image.jpg';
      this.alt = ""
    };
  });


/*defines a function that occurs whenever the "toggleGallery" gets clicked*/
document.getElementById('toggleGallery').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('show-images');
    /*toggles if the images in imageContainer (the gallery) are showed or not*/
    if (imageContainer.classList.contains('show-images')) {
        this.textContent = 'Hide Gallery';
    } else {
        this.textContent = 'Show Gallery';
    }
    /*determines the text in the gallery button*/
});


/*if the "hamburger menu" gets clicked, the "activeness" (presence) of the navigation links is determined*/
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

