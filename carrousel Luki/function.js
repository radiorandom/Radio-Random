const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".nav__ul");

hamburguer.addEventListener("click", responsive);

function responsive() {
	navMenu.classList.toggle("active");
}