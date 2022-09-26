let web, term, lastButton;
const WHITE = "rgb(255, 255, 255)";
const BLUE = "rgb(109, 138, 255)";
function keepColor(btn){
    const button = document.getElementById(btn);
    const borderColor = window.getComputedStyle(button).borderColor;    
    //Changes border color of last button if another pressed
    if(lastButton)
    lastButton.style.borderColor = WHITE;
    //Changes color and placeholder text properly
    if(borderColor === WHITE){
        button.style.borderColor = BLUE;
        document.getElementById("input-search").placeholder = `Searching through ${btn}`;
        web = button.id;
    } else {
        button.style.borderColor = WHITE;
        document.getElementById("input-search").placeholder = "Searching through everything";
        web = undefined;
    }
    //store the previous button, used for border removal
    lastButton = document.getElementById(btn);
}

function search(){
    term = document.getElementById("input-search").value;
    const searchTerm = newLink(term);
    //if no button is selected, just google
    if(!web)
    return window.open(searchTerm.google.searchURL, "_self");
    //if term is empty, search homeURL else use searchURL
   !term ? window.open(searchTerm[web].homeURL, "_self")
   : window.open(searchTerm[web].searchURL, "_self");
}
/* function addSearch(){
    const element = document.createElement("button");
    element.type = "button";
    element.innerHTML = "test";
    element.name = "testName";
    element.id = "testId";
    element.className = "btn";
    const foo = document.getElementById("button-web-add");
    foo.before(element);
} */

document.body.onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
}