

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

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropmapops = document.getElementsByClassName("mapops");
var i;

for (i = 0; i < dropmapops.length; i++) {
    dropmapops[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = document.getElementsByClassName("dropmap");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}