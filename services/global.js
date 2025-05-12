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
  } 
  else 
  {
    body.className = darkModeClass;
  }}