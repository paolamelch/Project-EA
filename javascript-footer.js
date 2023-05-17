const square = document.querySelectorAll(".featured-square");
const squareContainer = document.querySelectorAll(".translateContainer");
const officialSite = document.querySelectorAll(".official-site");

function mouseOver(arr){
    arr.forEach((el)=> el.addEventListener('mouseover',function(){
        squareContainer.forEach((el) =>{
            el.style.transform = "translateY(-10%)";
            el.style.transition = "all 0.5s ease"; 
        });
        officialSite.forEach((el) =>{
            el.style.visibility = "visible";
        })
    }));

}
function mouseOut(arr){
    arr.forEach((el)=> el.addEventListener('mouseout',function(){
        squareContainer.forEach((el) =>{
            el.style.transform = "translateY(0%)";
        });
        officialSite.forEach((el) =>{
            el.style.visibility = "hidden";
        })
    }));
};

mouseOver(square)
mouseOut(square);




const selectButton = document.querySelector(".selectRegion");
const nationsList = document.querySelector(".nationsSelect");
const arrowUp = document.getElementById("arrow-up")

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

const selectButton2 = document.querySelector(".selectRegion1");
const nationsList2 = document.querySelector(".nationsSelect1");
const arrowUp2 = document.getElementById("arrow-up1")

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
    