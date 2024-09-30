const navBar = document.querySelector(".dropdown")
function hamburg(){
    navBar.style.setProperty('transform', 'translate(0px)', 'important'); 
}
function cancel(){
navBar.style.setProperty('transform', 'translateY(-500px)', 'important'); 
}

const text = [
    "Developer",
    "Designer",
    "Programmer"
];
let speed = 100; // Speed for typing each character
const textElement = document.querySelector(".typewritter-text");
let textIndex = 0; 
let charIndex = 0;

// Function to handle typing the text
function typewriter() {
    if (charIndex < text[textIndex].length) {
        textElement.innerHTML += text[textIndex].charAt(charIndex); 
        charIndex++;
        setTimeout(typewriter, speed); 
    } else {
        setTimeout(eraseText, 1000); 
    }
}

// Function to handle erasing the text
function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1); 
        setTimeout(eraseText, 50); 
    } else {
        textIndex = (textIndex + 1) % text.length; 
        charIndex = 0;
        setTimeout(typewriter, 500); 
    }
}

window.onload = typewriter;


// Animation
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 0.5, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.image', {opacity: 0, duration: 1, delay:0.9, x: 60})
gsap.from('h1', {opacity: 0, duration: 1, delay: 0.5, y: 25, ease:'expo.out', stagger: .3})
gsap.from('p', {opacity: 0, duration: 1, delay:0.8, y: 25})
gsap.from('.typewritter', {opacity: 0, duration: 1, delay: 0.7, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.logo , .links', {opacity:0, duration: 1, delay:0.5, y: 25, ease:'expo.out'});
gsap.from('.socials , button', {opacity: 0, duration: 1, delay: 1, y: 25, ease:'expo.out', stagger: .2})


var icon = document.querySelector(".mode i")
icon.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if (icon.classList.contains("fa-sun")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
})