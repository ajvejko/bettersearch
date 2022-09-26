let links = JSON.parse(localStorage.getItem("links")) || [];
//function to open the popup, 
//also decides if the added button is shortcut or search
window.onload = function(){
    links.forEach(buildbuttons);
}

function buildbuttons({name}){
    const addedButton = document.createElement("button");
    addedButton.innerText = name;
    addedButton.id = name;
    addedButton.className = "btn";
    addedButton.onclick = "keepColor()";
    document.getElementById("web").before(addedButton);
}

function addpopup(btn){
    const buttonType = document.getElementById(btn);
    let popupTitle = document.getElementById("div-popup-title");
    document.getElementById("div-popup-bg").style.display = "flex";
    if(buttonType.id == "shortcut"){
        popupTitle.innerHTML = "Add Shortcut";
        popupTitle.innerHTML = popupTitle.innerHTML.replace(/Shortcut/, "<span style='color:rgb(109, 138, 255)'>Shortcut</span>" );
    } else {
        popupTitle.innerHTML = "Add Search"
        popupTitle.innerHTML = popupTitle.innerHTML.replace(/Search/, "<span style='color:rgb(109, 138, 255)'>Search</span>" );
    }
}

function addbutton(btn){
    const buttonType = document.getElementById(btn);
    const name = document.getElementById("input-add-name").value;
    const homeURL = document.getElementById("input-add-link").value;
    const searchURL = document.getElementById("input-add-search").value;
    const addedButton = document.createElement("button");
    addedButton.innerText = name;
    addedButton.id = name;
    addedButton.className = "btn";
    document.getElementById("web").before(addedButton)
    document.getElementById("div-popup-bg").style.display = "none";
    console.log(buttonType);
    links.push({
        name,
        homeURL,
        searchURL,
    })
    localStorage.setItem("links", JSON.stringify(links));
    console.log(links);
}
