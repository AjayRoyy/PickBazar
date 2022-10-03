


    let body = document.querySelector("body");
    let html = ``;

    // body.innerHTML = html;


    //header part
    let header = document.querySelector(".header")
    header.style.maxWidth = "100%";
    header.style.height = "800px";
    header.style.backgroundImage = "url(./Media/backgroundImage1920jpeg.jpg)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
    header.style.position = "relative"

    //overlay container
    let createOverlay = document.createElement("div");
    createOverlay.style.position = "absolute";
    createOverlay.style.backgroundColor = "black"
    createOverlay.style.opacity = "0.5";
    createOverlay.style.width = "100%";
    createOverlay.style.height = "100%";
    header.appendChild(createOverlay);

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

    // let dropdownlist = document.querySelectorAll(".dropdownlist");
    // dropdownlist.style.display = "inline-block";
    // dropdownlist.style.alignSelf = "baseline";
    // dropdownlist.style.height = "auto";
    // dropdownlist.style.width = "auto";
    // dropdownlist.style.marginLeft = "40px";


    // let dropdownlink = document.querySelectorAll(".dropdown div a");
    // dropdownlink.style.textDecoration = "none";
    // dropdownlink.style.color = "black";


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
    dropdownbtn.style.cursor="pointer";

    let dropdown = document.querySelector(".dropdown");
    dropdown.style.width = "auto";
    dropdown.style.height = "auto";
    dropdown.style.padding = "1rem";
    dropdown.style.fontSize = "16px";
    dropdown.style.fontWeight = "500";
    dropdown.style.backgroundColor = "white";
    dropdown.style.gap = "20px";
    dropdown.style.marginTop = "10px";
    dropdown.style.borderRadius="5px";
    dropdown.style.zIndex = "2";
    dropdown.style.display = "none";

    let arrowup = document.getElementById("up");
    let arrowdown = document.getElementById("down");
    arrowup.style.display="none";

    dropdownbtn.onclick = () => {

        if (dropdown.style.display == "none") {
            dropdown.style.display = "flex";
            dropdown.style.flexDirection = "column";
            arrowup.style.display="block";
            arrowdown.style.display="none";
            dropdown.style.transition = "2s linear"
            
        }
        else {
            dropdown.style.display = "none";
            arrowup.style.display="none";
            arrowdown.style.display="block";
            dropdown.style.transition = "2s linear"
        }
        
    }
            


    let select = ()=>{
            let a = document.querySelector(".dropdown div:nth-child(1) img");
            document.querySelector("#dropdownbtn img").src = a.src;
            let b = document.querySelector(".dropdown div:nth-child(1) span");
            document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select1 = ()=>{
        let a = document.querySelector(".dropdown div:nth-child(2) img");
        document.querySelector("#dropdownbtn img").src = a.src;
        let b = document.querySelector(".dropdown div:nth-child(2) span");
        document.querySelector("#dropdownbtn span").textContent=b.textContent;
}
    let select2 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(3) img");
            document.querySelector("#dropdownbtn img").src = a.src;
            let b = document.querySelector(".dropdown div:nth-child(3) span");
            document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select3 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(4) img");
            document.querySelector("#dropdownbtn img").src = a.src;
            let b = document.querySelector(".dropdown div:nth-child(4) span");
            document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select4 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(5) img");
        document.querySelector("#dropdownbtn img").src = a.src;
        let b = document.querySelector(".dropdown div:nth-child(5) span");
        document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select5 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(6) img");
            document.querySelector("#dropdownbtn img").src = a.src;
            let b = document.querySelector(".dropdown div:nth-child(6) span");
            document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select6 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(7) img");
            document.querySelector("#dropdownbtn img").src = a.src;
            let b = document.querySelector(".dropdown div:nth-child(7) span");
            document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }
    let select7 = ()=>{

        let a = document.querySelector(".dropdown div:nth-child(8) img");
        document.querySelector("#dropdownbtn img").src = a.src;
        let b = document.querySelector(".dropdown div:nth-child(8) span");
        document.querySelector("#dropdownbtn span").textContent=b.textContent;
    }

    let sidelist= document.querySelector(".sidelist");

        sidelist.style.width = "100%";

    let sidelistUl= document.querySelector(".sidelist ul");
            sidelistUl.style.display= "flex";
            sidelistUl.style.float= "right";
            sidelistUl.style.columnGap= "40px";
            sidelistUl.style.curso= "pointer";
            sidelistUl.style.alignItems= "center";
            sidelistUl.style.fontSize= "16px";
    
    let sidelistUlDiv = document.querySelector(".sidelist ul div");
            sidelistUlDiv.style.display= "flex";
            sidelistUlDiv.style.gap= "20px";
    
    let sidelistBtn1 = document.querySelector(".sidelist ul div li:nth-child(1)");
            sidelistBtn1.style.backgroundColor= "rgb(0,159,127)";
            sidelistBtn1.style.padding= "10px 20px";
            sidelistBtn1.style.borderRadius = "5px";
            sidelistBtn1.style.color= "white";
            sidelistBtn1.style.fontWeight= "bold";
            sidelistBtn1.style.fontSize= "14px";

    let sidelistBtn2 = document.querySelector(".sidelist ul div li:nth-child(2)");
            sidelistBtn2.style.backgroundColor= "rgb(0,159,127)";
            sidelistBtn2.style.padding= "10px 20px";
            sidelistBtn2.style.borderRadius = "5px";
            sidelistBtn2.style.color= "white";
            sidelistBtn2.style.fontWeight= "bold";
            sidelistBtn2.style.fontSize= "14px";


    let subheader1= document.querySelector(".subheader1")
    subheader1.style.width="100%"
    subheader1.style.height = "650px";
    subheader1.style.display="flex";
    subheader1.style.flexDirection="column";
    subheader1.style.justifyContent="center";
    subheader1.style.alignItems="center";
    subheader1.style.rowGap="30px";

let subheaderH1 = document.querySelector(".subheader1 h1");
subheaderH1.style.fontSize="45px"
subheaderH1.style.fontWeight="bolder";
subheaderH1.style.fontFamily = "notoSanExtraBold";

let subheaderp1 = document.querySelector(".subheader1 p");
subheaderp1.style.fontSize= "18px";
subheaderp1.style.color="grey";

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
subheaderinputbtn.style.height= "50px";
subheaderinputbtn.style.borderRadius = "0px 5px 5px 0px";
subheaderinputbtn.style.boxShadow = "0px 2px 3px grey";
subheaderinputbtn.style.color = "white";
subheaderinputbtn.style.fontWeight="bold";
subheaderinputbtn.style.fontSize="16px";
subheaderinputbtn.style.display="flex";
subheaderinputbtn.style.justifyContent="center";
subheaderinputbtn.style.alignItems="center";
subheaderinputbtn.style.gap="10px";

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.querySelector(".sidebar-body .emptybag").style.width = "300px";
    // body.style.zIndex = "2";
    // body.style.backgroundColor = "rgba(0,0,0,0.4)";
    header.style.background = "rgba(0,0,0,0.4)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".sidebar-body .emptybag").style.width = "0";
    header.style.backgroundImage = "url(./Media/backgroundImage1920jpeg.jpg)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
  }

    let addtocart= document.getElementById("addtocart");
    let cartbag = document.querySelector(".cartbag");
    let mySidenav = document.getElementById("mySidenav");
    let sidebarheader = document.querySelector(".sidebar-header");
    let sidebarbody = document.querySelector(".sidebar-body");
    let sidebarfooter = document.querySelector(".sidebar-footer");

    window.onclick = function(event) { 
        if (!event.target.matches('#dropdownbtn') && !event.target.matches(".dropdown") && !event.target.matches(".icons") && !event.target.matches(".items") ) {
          var dropdowns = document.querySelectorAll(".dropdown");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display=="flex") {
              openDropdown.style.display="none";
            }
          }
        }
    if(!event.target.matches('#addtocart') &&
     !event.target.matches(".cartbag") &&
      !event.target.matches(".cartitems")&& 
      !event.target.matches("#mySidenav") &&
       !event.target.matches(".sidebar-header") && 
       !event.target.matches(".cartbag") &&
        !event.target.matches(".sidebar-body") &&
         !event.target.matches(".emptybag") &&
         !event.target.matches(".sidebar-h3") && 
         !event.target.matches(".sidebar-footer")) 
    {
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector(".sidebar-body .emptybag").style.width = "0";
        header.style.backgroundImage = "url(./Media/backgroundImage1920jpeg.jpg)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
    }
      }
