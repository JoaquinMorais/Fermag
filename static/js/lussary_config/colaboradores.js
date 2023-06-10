var cards = []
var difuminados

var card1 = document.getElementById("card-1")
var difuminado1 = document.getElementById("difuminado-1")

var card2 = document.getElementById("card-2")
var difuminado2 = document.getElementById("difuminado-2")

var card3 = document.getElementById("card-3")
var difuminado3 = document.getElementById("difuminado-3")

var card4 = document.getElementById("card-4")
var difuminado4 = document.getElementById("difuminado-4")

var card5 = document.getElementById("card-5")
var difuminado5 = document.getElementById("difuminado-5")

var cards = [
  [card1,difuminado1],
  [card2,difuminado2],
  [card3,difuminado3],
  [card4,difuminado4],
  [card5,difuminado5],
]



function addEvento(card, difuminado){
  card.addEventListener('mouseover', function() {
    difuminado.style.backdropFilter = "blur(0)";
  });
  card.addEventListener('mouseout', function() {
    difuminado.style.backdropFilter = "blur(2px)";
  });
}

cards.forEach(i => {
  addEvento(i[0],i[1])
});

window.addEventListener("load", function(){
  
  setTimeout(() => {
    cards.forEach(i => {
      i[0].className = "content";
    });
  }, "1500");
});











/*  */







