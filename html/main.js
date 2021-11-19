function Clicked(event){
    let element;
    try {
        element = event.path[0];
    } catch (error) {
    }
    try {
        if (element == undefined){
            element = event.target;
        }
    } catch (error) {
        console.warn(error)
    }
    // Chrome and firefox work
    if (element.className === 'div-button clicked'){ 
        element.className = 'div-button';
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/override:'+element.id+"_1", true);
        xhr.send(element.id+"_1");
    }
    else{
        element.className = 'div-button clicked';
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/override:'+element.id+"_0", true);
        xhr.send(element.id+"_0");
    }
    
}
window.onload = function(){

    buttons = document.getElementsByClassName("div-button");
    for (let index = 0; index < buttons.length; index++) {
       const element = buttons[index];
       element.addEventListener("click", Clicked)
    }
}


