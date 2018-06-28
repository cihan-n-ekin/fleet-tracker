
function nav(x){
    if (document.getElementById("sidenav").style.width == "250px"){
        closeNav(x)
    } else {
        openNav(x)
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav(x) {
    x.classList.toggle("change");
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav(x) {
    x.classList.toggle("change");
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
