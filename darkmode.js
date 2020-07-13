let darkMode = localStorage.getItem('darkMode');
const darkmodebutton = document.querySelector('#darkmodebutton');

console.log(darkMode);
const darkTogglerFunc  = () => {
  console.log('in func');
  document.body.classList.toggle("dark-mode");
  document.querySelector('nav').classList.toggle('dark-mode-navbar');
  darkMode = localStorage.getItem('darkMode');
  console.log(darkMode);
  if(darkMode !== 'enabled') {
    localStorage.setItem('darkMode','enabled');
  }
  else {
    localStorage.setItem('darkMode', null);
  }
}

if(darkMode === 'enabled') {
  document.body.classList.toggle("dark-mode");
  document.querySelector('nav').classList.toggle('dark-mode-navbar');
}

darkmodebutton.addEventListener('click', () => {
  darkTogglerFunc();
})