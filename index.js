

// translation lune

window.addEventListener('scroll', function() {
    var moon = document.querySelector('.moon');
    var scrollPosition = window.scrollY;
    var windowWidth = window.innerWidth;

    var moonWidth = moon.offsetWidth;
    var endPosition = windowWidth - moonWidth;

    moon.style.right = -(scrollPosition * 0.05) + 'px';

    if (scrollPosition > endPosition) {
        moon.style.opacity = 0;
    } else {
        moon.style.opacity = 1;
    }
});

// apparence saisie clavier


var typed = new Typed("#multiple-text", {
    strings: ["Frontend Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    smartBackspace: true,
    loop: true
});


// scroll section active link

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll =() =>{
    sections.forEach(sec =>{
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}


