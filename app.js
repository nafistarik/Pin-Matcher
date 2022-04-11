var screen=document.getElementsByClassName("screen")[0];
var pin = Math.floor(Math.random()*9000+1000);
var generatePin=document.getElementsByClassName("pin-generator")[0];
generatePin.addEventListener("click",function(){
    screen.innerHTML=pin;
})


var btn=document.querySelectorAll("button");
var display = document.getElementsByClassName("display")[0];

var right=document.getElementsByClassName("right")[0];
var wrong=document.getElementsByClassName("wrong")[0];

var submit=document.getElementsByClassName("submit-button")[0];
var tryy=document.getElementsByClassName("try")[0];
var tryNum=document.getElementsByClassName("try-num")[0];

function displayOnScreen(a){
btn[a].addEventListener("click",function(){
    display.innerHTML=display.innerHTML+btn[a].innerHTML;
})
}
    
submit.addEventListener("click",function(){
    if(pin==display.innerHTML){
        right.style.display="block";
        wrong.style.display="none";
        tryy.style.color="darkcyan";
    }
    else{
        wrong.style.display="block";
        right.style.display="none";
        
        tryNum.innerHTML=tryNum.innerHTML-1;
        if(tryNum.innerHTML==0){
            screen.innerHTML="";
            display.innerHTML="";
            wrong.innerHTML="Regenerate pin & try again";
            tryy.innerHTML="You can't try more";
        }
    }
})
    

document.getElementsByClassName("clear")[0].addEventListener("click",function(){
        display.innerHTML="";
    })


document.getElementsByClassName("delete")[0].addEventListener("click",function(){
    display.innerHTML=Math.floor((parseInt(display.innerHTML))/10);
    if (display.innerHTML==0){
        display.innerHTML="";
    }
})

displayOnScreen(0)
displayOnScreen(1)
displayOnScreen(2)
displayOnScreen(3)
displayOnScreen(4)
displayOnScreen(5)
displayOnScreen(6)
displayOnScreen(7)
displayOnScreen(8)
displayOnScreen(10);