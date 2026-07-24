// Smooth scrolling for navigation links

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });

    });
});

// Active Navigation Highlight

window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const roles = [
    "Software Developer",
    "Flutter Developer",
    "Web Developer",
    "Firebase Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();