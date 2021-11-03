
//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



function overlay() {
    this.classList.toggle("active");
    console.log(`clicked`);
} 



const projects = document.querySelectorAll(".overlayDiv");

projects.forEach(n => n.addEventListener("click", overlay));