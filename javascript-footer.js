let selectButton = document.querySelector(".selectRegion");
let nationsList = document.querySelector(".nationsSelect");
let arrowUp = document.getElementById("arrow-up")

function showMenu(){
    if (nationsList.style.visibility == 'visible') {
        nationsList.style.visibility = 'hidden';
        arrowUp.style.transform = "rotate(360deg)";
    }
    else{
        nationsList.style.visibility = 'visible';
        arrowUp.style.transform = "rotate(180deg)";
    }
    
}

let selectButton2 = document.querySelector(".selectRegion1");
let nationsList2 = document.querySelector(".nationsSelect1");
let arrowUp2 = document.getElementById("arrow-up1")

function showMenu2(){
    if (nationsList2.style.visibility == 'visible') {
        nationsList2.style.visibility = 'hidden';
        arrowUp2.style.transform = "rotate(360deg)";
    }
    else{
        nationsList2.style.visibility = 'visible';
        arrowUp2.style.transform = "rotate(180deg)";
    }
    
}
    