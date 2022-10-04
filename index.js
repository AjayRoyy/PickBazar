


let body = document.querySelector("body");
body.style.position = "relative"
let html = ``;

// body.innerHTML = html;


//header part
let header = document.querySelector(".header")
header.style.maxWidth = "100%";
header.style.height = "800px";
header.style.backgroundImage = "url(./Media/backgroundImage1920jpeg.jpg)";
header.style.backgroundRepeat = "no-repeat";
header.style.backgroundSize = "cover    ";


//navbar part
let navbar = document.querySelector(".navbar")
navbar.style.width = "100%";
navbar.style.height = "100px";
navbar.style.padding = "2rem";
navbar.style.display = "flex";
navbar.style.alignItems = "center";

//logo part
let logodiv = document.querySelector(".logodiv");
logodiv.style.display = "flex";
logodiv.style.alignSelf = "baseline";

let logo = document.querySelector(".logo");
logo.style.width = "150px"
logo.style.height = "25px"


//icons part
let icons = document.querySelectorAll(".icons");
for (let i = 0; i < icons.length; i++) {
    icons[i].style.width = "16px";
    icons[i].style.height = "16px";
}

let dropdownlist = document.querySelector(".dropdownlist");
dropdownlist.style.display = "inline-block";
dropdownlist.style.alignSelf = "baseline";
dropdownlist.style.height = "auto";
dropdownlist.style.width = "auto";
dropdownlist.style.marginLeft = "40px";


// dropdown button
let dropdownbtn = document.querySelector("#dropdownbtn");
dropdownbtn.style.width = "160px";
dropdownbtn.style.height = "45px";
dropdownbtn.style.fontSize = "16px";
dropdownbtn.style.fontWeight = "bolder";
dropdownbtn.style.backgroundColor = "white";
dropdownbtn.style.border = "1px solid rgb(205, 205, 205)";
dropdownbtn.style.borderRadius = "5px";
dropdownbtn.style.display = "flex";
dropdownbtn.style.justifyContent = "center";
dropdownbtn.style.alignItems = "center";
dropdownbtn.style.gap = "10px";
dropdownbtn.style.color = "rgb(27, 188, 123)";
dropdownbtn.style.cursor = "pointer";

let dropdown = document.querySelector(".dropdown");
dropdown.style.width = "auto";
dropdown.style.height = "auto";
dropdown.style.padding = "1rem";
dropdown.style.fontSize = "16px";
dropdown.style.fontWeight = "500";
dropdown.style.backgroundColor = "white";
dropdown.style.gap = "20px";
dropdown.style.marginTop = "10px";
dropdown.style.borderRadius = "5px";
dropdown.style.zIndex = "2";
dropdown.style.display = "none";

let arrowup = document.getElementById("up");
let arrowdown = document.getElementById("down");
arrowup.style.display = "none";

dropdownbtn.onclick = () => {

    if (dropdown.style.display == "none") {
        dropdown.style.display = "flex";
        dropdown.style.flexDirection = "column";
        arrowup.style.display = "block";
        arrowdown.style.display = "none";
        dropdown.style.transition = "2s linear"

    }
    else {
        dropdown.style.display = "none";
        arrowup.style.display = "none";
        arrowdown.style.display = "block";
        dropdown.style.transition = "2s linear"
    }

}



let select = () => {
    let a = document.querySelector(".dropdown div:nth-child(1) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(1) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select1 = () => {
    let a = document.querySelector(".dropdown div:nth-child(2) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(2) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select2 = () => {

    let a = document.querySelector(".dropdown div:nth-child(3) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(3) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select3 = () => {

    let a = document.querySelector(".dropdown div:nth-child(4) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(4) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select4 = () => {

    let a = document.querySelector(".dropdown div:nth-child(5) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(5) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select5 = () => {

    let a = document.querySelector(".dropdown div:nth-child(6) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(6) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select6 = () => {

    let a = document.querySelector(".dropdown div:nth-child(7) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(7) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}
let select7 = () => {

    let a = document.querySelector(".dropdown div:nth-child(8) img");
    document.querySelector("#dropdownbtn img").src = a.src;
    let b = document.querySelector(".dropdown div:nth-child(8) span");
    document.querySelector("#dropdownbtn span").textContent = b.textContent;
}

let sidelist = document.querySelector(".sidelist");

sidelist.style.width = "100%";

let sidelistUl = document.querySelector(".sidelist ul");
sidelistUl.style.display = "flex";
sidelistUl.style.float = "right";
sidelistUl.style.columnGap = "40px";
sidelistUl.style.curso = "pointer";
sidelistUl.style.alignItems = "center";
sidelistUl.style.fontSize = "16px";

let sidelistUlDiv = document.querySelector(".sidelist ul div");
sidelistUlDiv.style.display = "flex";
sidelistUlDiv.style.gap = "20px";

let sidelistBtn1 = document.querySelector(".sidelist ul div li:nth-child(1)");
sidelistBtn1.style.backgroundColor = "rgb(0,159,127)";
sidelistBtn1.style.padding = "10px 20px";
sidelistBtn1.style.borderRadius = "5px";
sidelistBtn1.style.color = "white";
sidelistBtn1.style.fontWeight = "bold";
sidelistBtn1.style.fontSize = "14px";

let sidelistBtn2 = document.querySelector(".sidelist ul div li:nth-child(2)");
sidelistBtn2.style.backgroundColor = "rgb(0,159,127)";
sidelistBtn2.style.padding = "10px 20px";
sidelistBtn2.style.borderRadius = "5px";
sidelistBtn2.style.color = "white";
sidelistBtn2.style.fontWeight = "bold";
sidelistBtn2.style.fontSize = "14px";


let subheader1 = document.querySelector(".subheader1")
subheader1.style.width = "100%"
subheader1.style.height = "650px";
subheader1.style.display = "flex";
subheader1.style.flexDirection = "column";
subheader1.style.justifyContent = "center";
subheader1.style.alignItems = "center";
subheader1.style.rowGap = "30px";

let subheaderH1 = document.querySelector(".subheader1 h1");
subheaderH1.style.fontSize = "45px"
subheaderH1.style.fontWeight = "bolder";
subheaderH1.style.fontFamily = "notoSanExtraBold";

let subheaderp1 = document.querySelector(".subheader1 p");
subheaderp1.style.fontSize = "18px";
subheaderp1.style.color = "grey";

let subheaderinputdiv = document.querySelector(".subheader1 div");
subheaderinputdiv.style.display = "flex";
subheaderinputdiv.style.justifyContent = "center";

let subheaderinput = document.querySelector(".subheader1 div input");
subheaderinput.style.outline = "none";
subheaderinput.style.border = "none";
subheaderinput.style.width = "600px";
subheaderinput.style.height = "50px";
subheaderinput.style.borderRadius = "5px 0px 0px 5px";
subheaderinput.style.boxShadow = "0px 2px 3px grey";
subheaderinput.style.textAlign = "center";

let subheaderinputbtn = document.querySelector(".subheader1 div button");
subheaderinputbtn.style.backgroundColor = "rgb(0,159,127)"
subheaderinputbtn.style.border = "none";
subheaderinputbtn.style.width = "150px";
subheaderinputbtn.style.height = "50px";
subheaderinputbtn.style.borderRadius = "0px 5px 5px 0px";
subheaderinputbtn.style.boxShadow = "0px 2px 3px grey";
subheaderinputbtn.style.color = "white";
subheaderinputbtn.style.fontWeight = "bold";
subheaderinputbtn.style.fontSize = "16px";
subheaderinputbtn.style.display = "flex";
subheaderinputbtn.style.justifyContent = "center";
subheaderinputbtn.style.alignItems = "center";
subheaderinputbtn.style.gap = "10px";


let createOverlay = document.createElement("div");
    createOverlay.style.position = "absolute";
    createOverlay.style.backgroundColor = "black"
    createOverlay.style.opacity = "0.5";
    createOverlay.style.width = "100%";
    createOverlay.style.height = "100%";
    createOverlay.style.top = "0";
    createOverlay.style.left = "0";

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.querySelector(".sidebar-body .emptybag").style.width = "300px";
    body.appendChild(createOverlay);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".sidebar-body .emptybag").style.width = "0";
    body.removeChild(body.lastChild);
}

let addtocart = document.getElementById("addtocart");
addtocart.style.width = "80px";
addtocart.style.height = "100px";
addtocart.style.backgroundColor = "rgb(0,159,127)";
addtocart.style.position = "fixed";
addtocart.style.top = "50%";
addtocart.style.right = "0%";
addtocart.style.borderRadius = "5px 0px 0px 5px";
addtocart.style.display = "flex";
addtocart.style.justifyContent = "center";
addtocart.style.flexDirection = "column";
addtocart.style.alignItems = "center";
addtocart.style.color = "white";
addtocart.style.gap = "10px";
addtocart.style.zIndex = "1";

let cartbag = document.querySelector(".addtocart div .cartbag");
cartbag.style.width = "20px";
cartbag.style.height = "20px";

let cartbagitemscount = document.querySelector(".addtocart div span");
cartbagitemscount.style.fontSize = "14px";
cartbagitemscount.style.fontWeight = "bold";

let addtocartDiv1 = document.querySelector(".addtocart div:nth-child(1)");
addtocartDiv1.style.display = "flex";
addtocartDiv1.style.justifyContent = "center";
addtocartDiv1.style.alignItems = "center";
addtocartDiv1.style.gap = "5px";

let addtocartDiv2 = document.querySelector(".addtocart div:nth-child(2)");
addtocartDiv2.style.width = "60px";
addtocartDiv2.style.height = "40px";
addtocartDiv2.style.backgroundColor = "white";
addtocartDiv2.style.color = "rgb(0,159,127)";
addtocartDiv2.style.display = "flex";
addtocartDiv2.style.justifyContent = "center";
addtocartDiv2.style.alignItems = "center";
addtocartDiv2.style.borderRadius = "5px";
addtocartDiv2.style.fontSize = "16px";
addtocartDiv2.style.fontWeight = "bold";
addtocartDiv2.style.zIndex = "-1";

let mySidenav = document.getElementById("mySidenav");
mySidenav.style.height = "100%";
mySidenav.style.width = "0";
mySidenav.style.position = "fixed";
mySidenav.style.zIndex = "1";
mySidenav.style.top = "0";
mySidenav.style.right = "0";
mySidenav.style.backgroundColor = "white";
mySidenav.style.overflowX = "hidden";
mySidenav.style.transition = "0.5s";

let sidebarheader = document.querySelector(".sidenav .sidebar-header");
sidebarheader.style.borderBottom = "1px solid rgba(187, 187, 187, 0.501)";
sidebarheader.style.width = "100%";
sidebarheader.style.height = "70px";
sidebarheader.style.display = "flex";
sidebarheader.style.alignItems = "center";
sidebarheader.style.paddingLeft = "2rem";
sidebarheader.style.gap = "30px";

let sidebarcartbag = document.querySelector(".sidenav .sidebar-header .cartbag");
sidebarcartbag.style.color = "rgb(0,159,127)";
sidebarcartbag.style.fontWeight = "bolder";

let sidebarcartitems = document.querySelector(".sidenav .sidebar-header span");
sidebarcartitems.style.color = "rgb(0,159,127)";
sidebarcartitems.style.fontWeight = "bolder";

let sidebarclosebtn = document.querySelector(".sidenav .sidebar-header .closebtn");
sidebarclosebtn.style.position = "absolute";
sidebarclosebtn.style.top = "20px";
sidebarclosebtn.style.left = "75%";
sidebarclosebtn.style.fontSize = "36px";
sidebarclosebtn.style.marginLeft = "50px";
sidebarclosebtn.style.width = "20px";
sidebarclosebtn.style.height = "20px";
sidebarclosebtn.style.backgroundColor = "rgb(228, 228, 228)";
sidebarclosebtn.style.borderRadius = "50%";
sidebarclosebtn.style.padding = "5px";


let sidebarbody = document.querySelector(".sidebar-body");
sidebarbody.style.width = "100%";
sidebarbody.style.height = "80%";
sidebarbody.style.display = "flex";
sidebarbody.style.justifyContent = "center";
sidebarbody.style.alignItems = "center";
sidebarbody.style.flexDirection = "column";

let sidebarbodyh3 = document.querySelector(".sidebar-body h3");
sidebarbodyh3.style.color = "rgb(0,159,127)";

let sidebarbodyemptybag = document.querySelector(".sidebar-body .emptybag");

sidebarbodyemptybag.style.width = "300px";
sidebarbodyemptybag.style.height = "400px";
sidebarbodyemptybag.style.color = "rgb(0,159,127)";

let sidebarfooter = document.querySelector(".sidebar-footer");
sidebarfooter.style.width = "100%";
sidebarfooter.style.height = "80px";
sidebarfooter.style.display = "flex";
sidebarfooter.style.justifyContent = "center";
sidebarfooter.style.alignItems = "center";

let sidebarfootercheckout = document.querySelector(".checkout");
sidebarfootercheckout.style.width = "80%";
sidebarfootercheckout.style.height = "50px";
sidebarfootercheckout.style.backgroundColor = "rgb(0,159,127)";
sidebarfootercheckout.style.display = "flex";
sidebarfootercheckout.style.alignItems = "center";
sidebarfootercheckout.style.justifyContent = "end";
sidebarfootercheckout.style.borderRadius = "50px";
sidebarfootercheckout.style.padding = "5px";

let checkoutsapn1 = document.querySelector(".checkout span:nth-child(1)");
checkoutsapn1.style.width = "70%";
checkoutsapn1.style.color = "white";
checkoutsapn1.style.fontWeight = "bold";
checkoutsapn1.style.fontSize = "16px";
checkoutsapn1.style.float = "left";

let checkoutsapn2 = document.querySelector(".checkout span:nth-child(2)");
checkoutsapn2.style.backgroundColor = "white";
checkoutsapn2.style.color = "rgb(0,159,127)";
checkoutsapn2.style.borderRadius = "50px";
checkoutsapn2.style.padding = "10px 20px";
checkoutsapn2.style.fontWeight = "bold";


// CAROUSAL 
let carouselcontainer = document.querySelector(".carousel-container");
let carouselbtnback = document.getElementById("carouselbtnback");
let carouselbtnforward = document.getElementById("carouselbtnforward");
let cauroselitems = document.querySelectorAll(".content img");

let currentImage = 0;
let content = document.querySelector(".content");
carouselbtnforward.style.display="none"

carouselbtnback.onclick = () => {
        if (currentImage === 105) {
            currentImage = 210;
            carouselbtnforward.style.display="block"
            carouselbtnback.style.display="none"
        } else {
            carouselbtnforward.style.display="block"
            currentImage+=105;
        }
    cauroselitems.forEach((slide, indx) => {
        slide.style.transform = `translateX(${1*(indx - currentImage)}%`;
        slide.style.transition = "0.3s linear";
      });
      console.log(currentImage);
}

carouselbtnforward.onclick = () => {
    if (currentImage === 105) {
        currentImage = 0;
        carouselbtnforward.style.display="none";
        carouselbtnback.style.display="block";
      } else {
          currentImage-=105;
          carouselbtnback.style.display="block";
      }
    cauroselitems.forEach((slide, indx) => {
        slide.style.transform = `translateX(${(indx - currentImage)}%`;
        slide.style.transition = "0.3s linear";   
      });
      console.log(currentImage);
}

window.onclick = function (event) {
    if (!event.target.matches('#dropdownbtn') &&
        !event.target.matches(".dropdown") &&
        !event.target.matches(".icons") &&
        !event.target.matches(".items") &&
        !event.target.matches("#up") &&
        !event.target.matches("#down")) {
        var dropdowns = document.querySelectorAll(".dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
    if (!event.target.matches('#addtocart') &&
        !event.target.matches(".cartbag") &&
        !event.target.matches(".cartitems") &&
        !event.target.matches("#mySidenav") &&
        !event.target.matches(".sidebar-header") &&
        !event.target.matches(".cartbag") &&
        !event.target.matches(".sidebar-body") &&
        !event.target.matches(".emptybag") &&
        !event.target.matches(".sidebar-h3") &&
        !event.target.matches(".sidebar-footer")) {
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector(".sidebar-body .emptybag").style.width = "0";

        if(body.lastChild==createOverlay)
        {
            body.removeChild(body.lastChild);
        }
    }
}



