function Clicked(event){
    element = event.path[0]
    if (element.className === 'div-button clicked'){ 
        element.className = 'div-button';
    }
    else{
        element.className = 'div-button clicked';
    }
    
}
window.onload = function(){

    buttons = document.getElementsByClassName("div-button");
    for (let index = 0; index < buttons.length; index++) {
       const element = buttons[index];
       element.addEventListener("click", Clicked)
    }
}


