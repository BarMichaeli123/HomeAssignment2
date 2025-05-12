 function toggleMenu(){
        let mainNav = document.getElementById('mainNav');
        mainNav.classList.toggle('open');
       }


function darkMode() {
  const body = document.body;
  const darkModeClass = 'dark-mode';

  if (body.className === darkModeClass) 
  {
    body.className = '';
    localStorage.setItem('theme', 'light');
  } 
  else 
  {
    body.className = darkModeClass;
    localStorage.setItem('theme', 'dark');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});