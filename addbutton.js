//function to open the popup, 
//also decides if the added button is shortcut or search
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
