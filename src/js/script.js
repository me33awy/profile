import "./header.js";

// This for change CSS file depending on size of screen
const linkTag = document.getElementsByTagName("link")[0];
// console.log(linkTag);
let windowWidthNumber = 578;

function changeLinkAttribute() {
  const mobileElements = document.querySelectorAll(".mobile");
  const desktopElements = document.querySelectorAll(".desktop");
  // console.log(mobileElements.length);

  for(const ele of desktopElements){
    if(window.innerWidth <= windowWidthNumber){
      ele.style.display = "none";
    }else{
      ele.style.display = "block";
    }
    for(const ele of mobileElements){
      if(window.innerWidth > windowWidthNumber){
        ele.style.display = "none";
      }else{
        ele.style.display = "block";
      }
    }
  }

  if (window.innerWidth <= windowWidthNumber) {
    linkTag.setAttribute("href", "./src/css/indexx1h.css");
    // console.log(linkTag);
  } else {
    linkTag.setAttribute("href", "./src/css/indexx0h.css");
    // console.log(linkTag);
  }
}

changeLinkAttribute();
window.addEventListener("resize",changeLinkAttribute);

