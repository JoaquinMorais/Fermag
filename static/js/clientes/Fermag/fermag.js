var imagenes = ['static/src/clientes/Fermag/fondo1.png', 'static/src/clientes/Fermag/fondo2.jpeg', 'static/src/clientes/Fermag/fondo3.jpeg'],
    cont = 0;

function carrousel(inicio){
    inicio.addEventListener('click', e => {
        let atras = inicio.querySelector('.atras'),
            adelante = inicio.querySelector('.adelante'),
            img = inicio.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1 ];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let inicio = document.querySelector('.inicio');

    carrousel(inicio);
});

/* SLIDER */
$('input').on('change', function() {
    $('.main-container').toggleClass('blue');
});
/* ENDSLIDER */


