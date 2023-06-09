setInterval(updateTime, 1000);

window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scroll", window.scrollY > 0);
});  

window.addEventListener("scroll", function() {
  var logo = document.querySelector(".navBar-logo");
  logo.classList.toggle("scroll", window.scrollY > 0);
});  

window.addEventListener("load", function(){
  var imagen_logo = document.getElementById('imagen-logo');

  const loader = document.querySelector("#loader-container");
  setTimeout(function() {
    loader.style.display = 'none';
  }, 400); 

  setTimeout(function() {
    imagen_logo.className += " principio-adelante-logoUnido-imagen"
  }, 400); 
  
});
  