
// here class name media added to categorysection to show menu on click of hamburger icon


let hamburgericon = document.querySelector(".hamburgericon");
let categorysection = document.querySelector(".homecategorysection");

hamburgericon.addEventListener("click", () => {
  categorysection.classList.add("media");
});





// onlick of close mark remove media


document.querySelector(".closemark").addEventListener("click", () => {
  let categorysection2 = document.querySelector(".homecategorysection");
  categorysection2.classList.remove("media");
});



// when user click on home or men women catrgory set display to block to set display block added a class as "add"


const drop = document.querySelectorAll(".dropdown");
drop.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("add")) {
      e.classList.remove("add");
    } 
    else {
      drop.forEach((e) => {
        e.classList.remove("add");
      });
      e.classList.add("add");
    }
  });
});




// on click on cart icon display cart 


let carticon = document.querySelector(".cart-icon-logo");
let cartcrossmark = document.querySelector(".cartcrossmark");

let cartsection = document.querySelector(".cart-section");

cartsection.style.left = "-100%";

cartcrossmark.addEventListener("click", () => {
  cartsection.style.left = "-100%";
});

carticon.addEventListener("click", () => {
  cartsection.style.left = cartsection.style.left === "-100%" ? "0px" : "-100%";
});








document.querySelector(".smallscreensearch").addEventListener("click",()=>{

  if (document.querySelector(".inputsearchbox2").classList.contains("d-none")){    
  document.querySelector(".inputsearchbox2").classList.add("d-flex")
  document.querySelector(".inputsearchbox2").classList.remove("d-none")
  document.querySelector(".firstbanner").classList.add("withsearchbar")
  }
  else{

    document.querySelector(".inputsearchbox2").classList.remove("d-flex")
    document.querySelector(".inputsearchbox2").classList.add("d-none")
  document.querySelector(".firstbanner").classList.remove("withsearchbar")

  }



})










