let links = JSON.parse(localStorage.getItem('links')) || [];
let web, term, lastButton;
const WHITE = 'rgb(255, 255, 255)';
const BLUE = 'rgb(109, 138, 255)';
//runs buildbuttons function on load
window.onload = function(){
    links.forEach(buildbuttons);
}
//function for controlling the buttons colors
function keepColor(btn){
    const button = document.getElementById(btn);
    const borderColor = window.getComputedStyle(button).borderColor;    
    //Changes border color of last button if another pressed
    if(lastButton)
    lastButton.style.borderColor = WHITE;
    //Changes color and placeholder text properly
    if(borderColor === WHITE){
        button.style.borderColor = BLUE;
        document.getElementById('input-search').placeholder = `Searching through ${btn}`;
        web = button.id;
    } else {
        button.style.borderColor = WHITE;
        document.getElementById('input-search').placeholder = 'Searching through everything';
        web = undefined;
    }
    //store the previous button, used for border removal
    lastButton = document.getElementById(btn);
}
//function to search
function search(){
    term = document.getElementById('input-search').value;
    const pressed = web;
    //Loop through links array to find the proper link that is pressed.
    for(let i = 0; i <= links.length - 1; i++){
        if(links[i].name === web){
            const searchTerm = links[i].searchURL + term};
            const searchHome = links[i].homeURL;
        if(term === ""){
            window.open(searchHome, '_self');
        } else{window.open(searchTerm,'_self');}
    }
}
//builds buttons on load up
function buildbuttons({name}){
    const addedButton = document.createElement('button');
    addedButton.innerText = name;
    addedButton.id = name;
    addedButton.className = 'btn';
    addedButton.onclick = function(){keepColor(addedButton.id)};
    document.getElementById('web').before(addedButton);
}
//opens the popup
function addpopup(btn){
    const buttonType = document.getElementById(btn);
    let popupTitle = document.getElementById('div-popup-title');
    document.getElementById("div-popup-bg").style.display = 'flex';
    if(buttonType.id == 'shortcut'){
        popupTitle.innerHTML = 'Add Shortcut';
        popupTitle.innerHTML = popupTitle.innerHTML.replace(/Shortcut/, '<span style="color:rgb(109, 138, 255)">Shortcut</span>' );
    } else {
        popupTitle.innerHTML = 'Add Search';
        popupTitle.innerHTML = popupTitle.innerHTML.replace(/Search/, '<span style="color:rgb(109, 138, 255)">Search</span>' );
    }
}

//adds new button
function addbutton(btn){
    const buttonType = document.getElementById(btn);
    const name = document.getElementById('input-add-name').value;
    const homeURL = document.getElementById('input-add-link').value;
    const searchURL = document.getElementById('input-add-search').value;
    const addedButton = document.createElement('button');
    addedButton.innerText = name;

    addedButton.id = name;
    addedButton.className = 'btn';
    //NOTE: This does work, but only on reload, will have to look into that.
    addedButton.addEventListener('click',keepColor,false);
    document.getElementById('web').before(addedButton)
    document.getElementById('div-popup-bg').style.display = 'none';
    links.push({
        name,
        homeURL,
        searchURL,
    })
    localStorage.setItem('links', JSON.stringify(links));
}
//enter press
document.body.onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
}