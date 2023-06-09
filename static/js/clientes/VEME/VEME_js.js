// VARIABLES
const VEME_cartel = document.getElementById('VEME_sticky');
const VEME_cartel_nombre = document.getElementById('name');
const VEME_cartel_subnombre = document.getElementById('subname');

// EVENTOS
window.onscroll = function() {
    if (window.scrollY > screen.height/2.7 && VEME_cartel_subnombre.clientHeight > '20'){
        AchicarVEME()
    }
    
    if (window.scrollY < screen.height/3.5 && VEME_cartel_subnombre.clientHeight <= '18'){
        AumentarVEME()
    }
};

window.addEventListener("load", function(){
    const loader = document.querySelector("#loader-container");
    setTimeout(function() {
      loader.className += " hidden";
    }, 1); // espera 2 segundos antes de ocultar la pantalla de carga
});


// FUNCTIONS
function AchicarVEME(){
    VEME_cartel_nombre.style.fontSize = '65px'
    VEME_cartel_subnombre.style.fontSize = '13px'
    VEME_cartel.style.height = 'auto'
    VEME_cartel.style.padding = '8px 0px'
}
function AumentarVEME(){
    if(screen.width < 400){
        VEME_cartel_nombre.style.fontSize = '100px'
        VEME_cartel_subnombre.style.fontSize = '18px'
    }
    else{
        VEME_cartel_nombre.style.fontSize = '160px'
        VEME_cartel_subnombre.style.fontSize = '20px'
    }
    
    VEME_cartel.style.height = '20vh'
    VEME_cartel.style.padding = '0px'
}


