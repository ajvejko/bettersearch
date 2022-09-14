let web, term, lastbutton;
const white = "rgb(255, 255, 255)";
const blue = "rgb(109, 138, 255)";
const newLink = (term) =>{
    const links =  
    {
        reddit:{
            homeURL:"https://www.reddit.com",
            searchURL:`https://www.google.com/search?q=${term} site:reddit.com`
        },
        stackoverflow:{
            homeURL:"https://stackoverflow.com",
            searchURL:`https://www.google.com/search?q=${term} site:stackoverflow.com`
        },
        youtube:{
            homeURL:"https://youtube.com",
            searchURL:`https://www.youtube.com/results?search_query=${term}`
        },
        github:{
            homeURL:"https://github.com",
            searchURL:`https://www.google.com/search?q=${term} site:github.com`
        },
        google:{
            searchURL:`https://www.google.com/search?q=${term}`
        }
    }
    return links;
}

window.onload = function(){
    document.getElementById("input-search").focus();
}

function keepColor(btn){
    const button = document.getElementById(btn);
    const borderColor = window.getComputedStyle(button).borderColor;    
    //Changes border color of last button if another pressed
    if(lastbutton)
    lastbutton.style.borderColor = white;
    //Changes color and placeholder text properly
    if(borderColor === white){
        button.style.borderColor = blue;
        document.getElementById("input-search").placeholder = `Searching through ${btn}`;
        web = button.id;
    } else {
        button.style.borderColor = white;
        document.getElementById("input-search").placeholder = "Searching through everything";
        web = undefined;
    }
    //store the previous button, used for border removal
    lastbutton = document.getElementById(btn);
}

function search() {
    term = document.getElementById("input-search").value;
    const searchterm = newLink(term);
    //if no button is selected, just google
    if(!web)
    return window.open(searchterm.google.searchURL, "_self");
    //if term is empty, search homeURL else use searchURL
    !term ? window.open(searchterm[web].homeURL, "_self")
    : window.open(searchterm[web].searchURL, "_self");
}

document.body.onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
}