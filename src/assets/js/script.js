let imgHome = document.getElementById("img-home");
let frame = document.getElementById("frame-map");
imgHome.addEventListener('mouseover', zoomImgHome);

function myFunction() {
   let topNav = document.getElementById("top-nav");

   if(topNav.className === "top-nav") {
       topNav.className += " responsive";
   } else {
       topNav.className = "top-nav";
   }
}

function zoomImgHome() {
     imgHome.style.height = '420px';
     imgHome.style.width = '500px';
}

function outImgHome() {
    imgHome.style.height = "350px";
    imgHome.style.width = "350px";
}

function zoomImgMap() {
    frame.style.height = '400px';
    frame.style.width = '450px';
}

function outImgMap() {
   frame.style.height = '350px';
   frame.style.width = '380px';
}

