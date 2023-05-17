const eaNews = document.getElementById('eaNews')
const eaPlay = document.getElementById('eaPlay')
const fifa = document.getElementById('FIFA')

eaNews.addEventListener('click', riuso)
eaPlay.addEventListener('click', riusoP)

function riuso(){
    document.getElementById('eaN').classList.add("disableLatest");
    document.getElementById('eaP').classList.remove("disableLatest");
    console.log("attivo il primo");
}

function riusoP(){
    document.getElementById('eaN').classList.remove("disableLatest");
    document.getElementById('eaP').classList.add("disableLatest");
    console.log("attivo il secondo");
}