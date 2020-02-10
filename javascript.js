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

function getAllHeight() {
    getHeight1();
    getHeight2();
    getHeight3();
    getHeight4();
}

//get height
function getHeight1() {
    var imagesrc = document.getElementById('collapsible1').style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;
    console.log(height);
    document.getElementById("collapsible1").style.height = height + "px";
}

function getHeight2() {
    var imagesrc = document.getElementById('collapsible2').style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;
    document.getElementById("collapsible2").style.height = height + "px";
}

function getHeight3() {
    var imagesrc = document.getElementById('collapsible3').style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;
    document.getElementById("collapsible3").style.height = height + "px";
}

function getHeight4() {
    var imagesrc = document.getElementById('collapsible4').style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;
    document.getElementById("collapsible4").style.height = height + "px";
}

//get height of the image and collapse
function collapse1() {
    var imagesrc = document.getElementById('collapsible1').style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;

    if (document.getElementById("collapsible1").style.height == "310px") {
        document.getElementById("collapsible1").style.height = height+"px";
    }
    else {
        document.getElementById("collapsible1").style.height = "310px"
    }
}

function collapse2() {
    var imagesrc = document
        .getElementById('collapsible2')
        .style
        .backgroundImage
        .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;

    if (document.getElementById("collapsible2").style.height == "310px") {
        document.getElementById("collapsible2").style.height = height+"px";
    }
    else {
        document.getElementById("collapsible2").style.height = "310px"
    }
}

function collapse3() {
    var imagesrc = document
        .getElementById('collapsible3')
        .style
        .backgroundImage
        .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;

    if (document.getElementById("collapsible3").style.height == "310px") {
        document.getElementById("collapsible3").style.height = height+"px";
    }
    else {
        document.getElementById("collapsible3").style.height = "310px"
    }
}

function collapse4() {
    var imagesrc = document
        .getElementById('collapsible4')
        .style
        .backgroundImage
        .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];
    var image = new Image();
    image.src = imagesrc;
    var height = image.height;

    if (document.getElementById("collapsible4").style.height == "310px") {
        document.getElementById("collapsible4").style.height = height + "px";
    }
    else {
        document.getElementById("collapsible4").style.height = "310px"
    }
}