let hora = new Date().getHours();

let decir;

if (hora >= 6 && hora < 12){
    decir = 'Buenos Dias!';
}
else if (hora >= 12 && hora <= 19) {
    decir = 'Buenas Tardes!';
}
else{
    decir = 'Buenas noches!';
};

document.getElementById("p-saludo").innerHTML = decir;
