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

function uno(){
    document.querySelector('.containerCardLatestUno').classList.remove("disableLatest");
    document.querySelector('.containerCardLatestDue').classList.add("disableLatest");              
    
    
    console.log("attivo il primo");
}

function due(){
    document.querySelector('.containerCardLatestDue').classList.remove("disableLatest");              
    document.querySelector('.containerCardLatestUno').classList.add("disableLatest");              
    
    console.log("attivo il secondo");
}