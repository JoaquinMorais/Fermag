// Variables
const nav = document.querySelector("nav");
const menu = document.getElementById('menu');
const links = menu.querySelectorAll("ul li a");
const logo = document.getElementById('logo');


// EVENTOS
// Evento loader
window.addEventListener("load", function(){
  const loader = document.querySelector("#loader");
  const loader_container = document.querySelector("#loader-container");
  
  setTimeout(function() {
    loader.className += " hidden";
    loader_container.className += " hidden";
  }, 800); 
});




// Evento hover links
links.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.color = 'white';
  });
  link.addEventListener('mouseout', function() {
    if(window.scrollY > 0){
      this.style.color = 'rgb(0, 0, 40)';
    }
    else{
      this.style.color = '#fff';
    }
  });
});

// Evento Hover Img
logo.addEventListener('mouseover', function() {
  changeImage(logo,"logoFermagBlanco.webp");
});
logo.addEventListener('mouseout', function() {
  if(window.scrollY > 0){
    changeImage(logo,"logoFermagColor.webp");
  }
  else{
    changeImage(logo,"logoFermagBlanco.webp");
  }
});

// Evento Scroll page
window.addEventListener("scroll", function() {
  if(window.scrollY > 0){
    nav.classList.toggle("scroll",true);
    changeColorLinks(true);
  }
  else{
    nav.classList.toggle("scroll",false);
    changeColorLinks(false);
  }
  
});  


//SCROLL SERVICIOS
$(document).ready(function() {
  // Agrega un efecto de desplazamiento suave a todos los enlaces que apunten a anclas en la misma página
  $('a[href*="#"]').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});

//redirect Rutas
window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  var targetSection = urlParams.get('goTo');
  if (targetSection) {
      var element = document.getElementById(targetSection);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }
}


// FUNCIONES
function changeImage(img,name_image,timeout = 0){
  setTimeout(()=>{
    img.setAttribute("src","/static/src/clientes/Fermag/"+name_image);
  },timeout);
}

function changeColorLinks(state){
  if(state){
    links.forEach(link => {
      link.style.color = 'rgb(0, 0, 40)';
    });
    changeImage(logo,"logoFermagColor.webp",100);
  }
  else{
    links.forEach(link => {
      link.style.color = 'white';
    });
    changeImage(logo,"logoFermagBlanco.webp",100);
  }
}