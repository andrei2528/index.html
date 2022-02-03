let burger = document.getElementById("hamburger-icon");

let menuContent = document.getElementById("menu");
let close1 = document.getElementById('close-hamburger');

function appearMenu() {
    menuContent.style.display = 'block';
    menuContent.style.opacity = '100';
    burger.style.display = 'none';
}


function closeMenu() {
    menuContent.style.display = 'none';
    menuContent.style.opacity = '0';
    burger.style.display = 'block';

}
burger.onclick = appearMenu;
close1.addEventListener('click', closeMenu);
var cardAfisat1;
var cardAfisat2;
var cardAfisat3;
var card1 = document.getElementById('modelare3d');
var card2 = document.getElementById('gravare');
var card3 = document.getElementById('litere');
var card4 = document.getElementById('servicii-printare');
var card5 = document.getElementById('sublimare');
var card6 = document.getElementById('cutter-plotting');
var card7 = document.getElementById('design-grafic');
var card8 = document.getElementById('carti-de-vizita');
var card9 = document.getElementById('cadouri');
var card10 = document.getElementById('firme-luminoase');
var card11 = document.getElementById('linie');
var btnPrintare = document.getElementsByClassName('printare');