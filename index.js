

// translation lune


window.addEventListener('scroll', function(){
  let scrollPosition = window.scrollY;
  let moon = document.querySelector('.moon')

    moon.style.right = -scrollPosition * 0.06 + "px"; 
})

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

//defilement lors du changement de section

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let targetId = event.target.getAttribute('href').substr(1);
        let targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 0,
            behavior: "smooth"
        });
    });
});