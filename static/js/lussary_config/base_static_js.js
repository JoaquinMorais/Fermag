const navBar = document.getElementById('navBar');
navBar.style.backgroundColor = 'rgb(20, 20, 20)';

const navBarlogo = document.getElementById('navBar-logo');
navBarlogo.style.display = 'block';
navBarlogo.style.zIndex = '10';

window.addEventListener("load", function(){
  
    const loader = document.querySelector("#loader-container");
    setTimeout(function() {
      loader.style.display = 'none';
      loader.className +=' hidden'
    }, 400); // espera 2 segundos antes de ocultar la pantalla de carga
});