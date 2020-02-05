// toggle side navbar
function toggleNav() {
    if (document.getElementById("sidebar").style.width == "0px") {
        document.getElementById("sidebar").style.width = "270px";
        document.getElementById("main").style.marginLeft = "270px";
        document.getElementById("toggleIcon").src = "image/hide.png";
    }
    else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        document.getElementById("toggleIcon").src = "image/open.png";
    }
}
