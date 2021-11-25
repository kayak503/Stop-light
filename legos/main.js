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
        xhr.open('GET', '/update/override:'+element.id+"_1", true);
        xhr.send(element.id+"_1");
    }
    else{
        element.className = 'div-button clicked';
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/update/override:'+element.id+"_0", true);
        xhr.send(element.id+"_0");
    }
    
}

function Update(){
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                Update_lights(xhr.response.split(",").map( item => parseInt(item)));
            }
          }

        xhr.open('GET', '/update/get', true);
        xhr.send(400);

}
function Update_lights(states){
    const IDS = ["RED","YELLOW","GREEN"]
    for(let index =0; index < 3; index++){
        const element = document.getElementById(IDS[index])
        if (states[index]){
            element.className = 'div-button';
        }
        else
        {
            element.className = 'div-button clicked';
        }
    }
}

window.onload = function(){

    buttons = document.getElementsByClassName("div-button");
    for (let index = 0; index < buttons.length; index++) {
       const element = buttons[index];
       element.addEventListener("click", Clicked)
    }
}


