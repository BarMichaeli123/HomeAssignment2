 function toggleMenu(){
        let mainNav = document.getElementById('mainNav');
        mainNav.classList.toggle('open');
       }

function darkMode(){
let themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
}