const eaNews = document.getElementById('eaNews')
const eaPlay = document.getElementById('eaPlay')
const fifa = document.getElementById('FIFA')
const fUno = document.getElementById('F1')
const madden = document.getElementById('Madden')
const apex = document.getElementById('Apex')
const theSims = document.getElementById('TheSims')
const battle = document.getElementById('Battle')


eaNews.addEventListener('click', uno)
eaPlay.addEventListener('click', due)
fifa.addEventListener('click', tre)
fUno.addEventListener('click', quattro)
madden.addEventListener('click', cinque)
apex.addEventListener('click', sei)
theSims.addEventListener('click', sette)
battle.addEventListener('click', otto)

function uno() {
    document.querySelector('.unoFra').classList.remove("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");
    console.log("attivo il primo");
}

function due() {
    document.querySelector('.dueFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function tre() {
    document.querySelector('.treFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function quattro() {
    document.querySelector('.quattroFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function cinque() {
    document.querySelector('.cinqueFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function sei() {
    document.querySelector('.seiFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function sette() {
    document.querySelector('.setteFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");
    document.querySelector('.ottoFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}
function otto() {
    document.querySelector('.ottoFra').classList.remove("disableLatest");
    document.querySelector('.unoFra').classList.add("disableLatest");
    document.querySelector('.treFra').classList.add("disableLatest");
    document.querySelector('.quattroFra').classList.add("disableLatest");
    document.querySelector('.cinqueFra').classList.add("disableLatest");
    document.querySelector('.seiFra').classList.add("disableLatest");
    document.querySelector('.setteFra').classList.add("disableLatest");
    document.querySelector('.dueFra').classList.add("disableLatest");

    console.log("attivo il secondo");
}