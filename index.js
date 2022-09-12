let web, term, lastbutton;
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
        }
    }
    return links;
}
function keepColor(btn){
    const button = document.getElementById(btn);
    const borderColor = window.getComputedStyle(button).borderColor; 
    web = button.id;
    //Changes border color of last button if another pressed
    if(lastbutton != null)
    lastbutton.style.borderColor = "rgb(255, 255, 255)";
    //Changes color properly
    if(borderColor === "rgb(255, 255, 255)"){
        button.style.borderColor = "rgb(109, 138, 255)";
        document.getElementById("input-search").placeholder = `Searching through ${btn}`;
    } else {
        button.style.borderColor = "rgb(255, 255, 255)"
        document.getElementById("input-search").placeholder = "Searching through everything";
        web = "";
    }
    //store the previous button, used for border removal
    lastbutton = document.getElementById(btn);
}

function search() {
    term = document.getElementById("input-search").value;
    const searchterm = newLink(term);
    term === "" ? window.open(searchterm[web].homeURL, "_self")
    : window.open(searchterm[web].searchURL, "_self");
}

document.body.onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
}