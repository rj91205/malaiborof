window.addEventListener("mouseover", play);
window.addEventListener("click", play);
function play() {
    document.getElementById("a").play();
}

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "165px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}