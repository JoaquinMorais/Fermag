window.addEventListener("load", function(){
  const loader = document.querySelector("#loader");
  const loader_container = document.querySelector("#loader-container");
  
  setTimeout(function() {
    loader.className += " hidden";
    loader_container.className += " hidden";
  }, 400); 
});
    


  $(document).ready(function() {
    // Agrega un efecto de desplazamiento suave a todos los enlaces que apunten a anclas en la misma página
    $('a[href*="#"]').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function() {
          window.location.hash = hash;
        });
      }
    });
  });


  