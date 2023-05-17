const eaNews = document.getElementById('eaNews')
const eaPlay = document.getElementById('eaPlay')
const fifa = document.getElementById('FIFA')

eaNews.addEventListener('click', active)
eaPlay.addEventListener('click', riusoP)
// function main(){
// }
// main()   
function active(){
    document.getElementById('ciaoDue').classList.add("disableLatest");
    document.getElementById('ciao').classList.remove("disableLatest");
    console.log("attivo il primo");
}

function riusoP(){
    document.getElementById('ciaoDue').classList.remove("disableLatest");
    document.getElementById('ciao').classList.add("disableLatest");
    console.log("attivo il secondo");
}