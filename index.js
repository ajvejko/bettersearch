let lastbutton;
let web = "";
function keepColor(btn){
    const button = document.getElementById(btn);
    const borderColor = window.getComputedStyle(button).borderColor; 
    web = button.id.toLocaleLowerCase();
    console.log(web);
    //Changes border color of last button if another pressed
    if(lastbutton != null)  
    lastbutton.style.borderColor = "rgb(255, 255, 255)";
    //Changes color properly
    borderColor === "rgb(255, 255, 255)" ? button.style.borderColor = "rgb(109, 138, 255)"  
    : button.style.borderColor = "rgb(255, 255, 255)";
    //Changes placeholder text
    if(borderColor != "rgb(109, 138, 255)"){
        document.getElementById("input-search").placeholder = `Searching through ${btn}`;
    } else {
        document.getElementById("input-search").placeholder = "Searching through everything"
        web = "";
    }
    //store the previous button, used for border removal
    lastbutton = document.getElementById(btn);
}

function search() {
    let search = document.getElementById("input-search").value;
    search += ` site:${web}.com`;
    //if no specific web is searched
    if(web === "")
    search = document.getElementById("input-search").value;;
    window.open("http://google.com/search?q="+search);
}

document.body.onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
}