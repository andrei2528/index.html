var btnMateriale = document.getElementById('materiale');
var btnPreturi = document.getElementById('preturi');
var tabel = document.getElementById('tabel');
var listaMateriale = document.getElementById('lista-materiale');
var chenarMateriale = document.getElementsByClassName('pubg-f');
var chenarLista = document.getElementsByClassName('mafia-II-f');



btnMateriale.onclick = function() {
    if (listaMateriale.style.display !== "none") {
        listaMateriale.style.display = "none";


    } else {
        listaMateriale.style.display = "block";
        chenarMateriale.style.height = '200vh';
    }
}
btnPreturi.onclick = function() {
    if (tabel.style.display !== "none") {
        tabel.style.display = "none";


    } else {
        tabel.style.display = "block";
        chenarLista.style.height = '200vh';
    }
}