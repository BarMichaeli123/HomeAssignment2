 function toggleMenu()
 {
    let mainNav = document.getElementById('mainNav');
     mainNav.classList.toggle('open');
 }


function darkMode() 
{
  const body = document.body;
  const darkModeClass = 'dark-mode';

  if (body.className === darkModeClass) 
  {
    body.className = '';
    sessionStorage.setItem('theme', 'light');
  } 
  else 
  {
    body.className = darkModeClass;
    sessionStorage.setItem('theme', 'dark');
  }
}

  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme === 'dark')
     {
     document.body.classList.add('dark-mode');
     }
