const frecciaR = document.querySelector('.scrollLR');
const frecciaL = document.querySelector('.scrollLL');
const scrollbarL = document.querySelector('#hiddenButtonLatest');
frecciaR.addEventListener('click', rightBtn)
frecciaL.addEventListener('click', leftBtn)

function rightBtn (){
    scrollbarL.scrollLeft += 280;
    frecciaL.classList.add('scrollVisible')
    frecciaR.classList.remove('scrollVisible')
}
function leftBtn (){
    scrollbarL.scrollLeft -= 350;
    frecciaR.classList.add('scrollVisible')
    frecciaL.classList.remove('scrollVisible')
}

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
    document.querySelector('#cardUnoL').classList.add("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.add("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.add("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.add("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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

    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.add("activeLatest");
    document.querySelector('#cardSei').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.add("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.add("activeLatest");
    document.querySelector('#cardOttoL').classList.remove("activeLatest");
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
    document.querySelector('#cardUnoL').classList.remove("activeLatest");
    document.querySelector('#cardTreL').classList.remove("activeLatest");
    document.querySelector('#cardQuattroL').classList.remove("activeLatest");
    document.querySelector('#cardCinqueL').classList.remove("activeLatest");
    document.querySelector('#cardSeiL').classList.remove("activeLatest");
    document.querySelector('#cardSetteL').classList.remove("activeLatest");
    document.querySelector('#cardDueL').classList.remove("activeLatest");
    document.querySelector('#cardOttoL').classList.add("activeLatest");
}