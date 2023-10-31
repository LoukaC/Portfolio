// translation lune

window.addEventListener('scroll', function() {
    var moon = document.querySelector('.moon');
    var scrollPosition = window.scrollY;
    var windowWidth = window.innerWidth;

    var moonWidth = moon.offsetWidth;
    var endPosition = windowWidth - moonWidth;

    moon.style.right = -(scrollPosition * 0.3) + 'px';

    if (scrollPosition > endPosition) {
        moon.style.opacity = 0;
    } else {
        moon.style.opacity = 1;
    }
});

// apparence saisie clavier


var typed = new Typed("multiple-text",{
    strings: ["Frontend Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})