document.cookie = 'productVisited=true; path=/';

// here has product id means if user click on any product image and navigate to product.html checking whether that product section alreday have dataid or not

let hasproductid;












fetch("navbar.html")
  .then((response) => response.text())

  .then((data) => {
    let createElement = document.createElement("div");
    createElement.innerHTML = data;

    let navselect = createElement.querySelector("nav");

    // setting navbar and cart and cartnumber

    document.querySelector(".add-navbar-content").innerHTML = navselect.outerHTML;
    document.querySelector(".add-section-content").innerHTML = localStorage.getItem("setsectiondata");
    document.querySelector(".cartnumber").outerHTML = localStorage.getItem("setcartdata");


    // here section data means cart items 

    if (localStorage.getItem("setsectiondata")) {





      

      // if setsectiondata have implemnt cart items cart number and also local storage to save the curent data if it reloads

      document.querySelector(".add-section-content").innerHTML = localStorage.getItem("setsectiondata");
      document.querySelector(".cartnumber").outerHTML = localStorage.getItem("setcartdata");
      localStorage.removeItem("setsectiondata");
      localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
      localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );









      if (document.querySelector(".everycartitem")){

              
        document.querySelector(".checkout").addEventListener("click",(e)=>{



          localStorage.setItem("checkoutdataofcartitems",(document.querySelector("section").outerHTML))
          localStorage.setItem("checkoutdataofcartnumber",(document.querySelector(".cartnumber").outerHTML))






          window.location.href="checkoutpage.html"



        })
      }




      if (document.querySelector(".everycartitem") && (document.querySelector(".addtocart2").innerHTML== '<i class="fa fa-shopping-cart blue-color me-2"></i>Add to cart') ){
        

        let firstimage=document.querySelector(".firstimage img").src
  
        
        document.querySelectorAll(".everycartitem").forEach((e)=>{
          
          let cartimagesrc=e.querySelector(".setimageandname img").src
          
          if (firstimage==cartimagesrc){
            
            let datavalueid=e.getAttribute("data-valueid")

            document.querySelector(".addtocart2").setAttribute("data-id",datavalueid)
            document.querySelector(".addtocart2".innerHTML== '<i class="fa fa-shopping-cart blue-color me-2"></i>Added to cart')
            document.querySelector(".addtocart2").style.backgroundColor = "#198754";



          }



        })
      }










    } 
    


    else {



      // if setsectiondata not present then apply setsectiondata2 here data2 is used after and before this code

      document.querySelector(".add-section-content").innerHTML = localStorage.getItem("setsectiondata2");
      document.querySelector(".cartnumber").outerHTML = localStorage.getItem("setcartdata2");

      document.querySelectorAll(".everycartitem").forEach((e) => {

        // if currnt producthtml page if present in everycart item it means add to cart change to added to cart and add data id alse



        if ( e.querySelector("img").src == document.querySelector(".firstimage img").src ) {
          let getdataid = e.getAttribute("data-valueid");
          document.querySelector( ".addtocart2" ).innerHTML = `<i class='fa fa-shopping-cart blue-color me-2'></i>Added to cart`;
          document.querySelector(".addtocart2").style.backgroundColor = "#198754";
          document .querySelector(".addtocart2") .setAttribute("data-id", getdataid);

    
        }
      });



      // to save all this above info use again local Storage



      localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
      localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );



      if (document.querySelector(".everycartitem")){

              
        document.querySelector(".checkout").addEventListener("click",(e)=>{



          localStorage.setItem("checkoutdataofcartitems",(document.querySelector("section").outerHTML))
          localStorage.setItem("checkoutdataofcartnumber",(document.querySelector(".cartnumber").outerHTML))






          window.location.href="checkoutpage.html"



        })
      }

    }







    const script = document.createElement("script");
    script.src = "navbar.js";
    document.body.appendChild(script);




    // on click on image and text in everycart item naviage to productaddtocartbutton.html

    if (document.querySelector(".everycartitem")) {
      let onclickontextnavigatetoproducthtml = document.querySelectorAll( ".everycartitem .setimageandname h5" );

      onclickontextnavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });
    }


    if (document.querySelector(".everycartitem")) {
      let onclickonimagenavigatetoproducthtml = document.querySelectorAll( ".everycartitem img" );

      onclickonimagenavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });
    }













    let cartitems = document.querySelector(".add-section-content");

    let decrementButton = cartitems.querySelectorAll( ".everycartitem .decrement" );
    let incrementButton = cartitems.querySelectorAll( ".everycartitem .increment" );



    // this increment and decrement only works on if localstorage is pressnt

    incrementButton.forEach((e) => {
      e.addEventListener("click", (event) => {
        incrementfunction(event);
        localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
        localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );
      });
    });

    decrementButton.forEach((e) => {
      e.addEventListener("click", (event) => {
        decrementfunction(event);
        localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
        localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );
      });
    });




    let createdynamicid = Date.now();

    let productaddtocartbutton = document.querySelector(".addtocart2");

    let countthecartnumber;

    let cartnumber = document.querySelector(".cartnumber");

    // checking the cart Number if 0 or not

    if (cartnumber.textContent != 0) {
      countthecartnumber = cartnumber.textContent;
    } 
    
    else {
      countthecartnumber = 0;
    }





// here hasproductId is not declared but its in fetch runs after all code runs so checkout the hasproductid in after fetch code


    if (hasproductid) {
      document.querySelector( ".addtocart2" ).innerHTML = `<i class='fa fa-shopping-cart blue-color me-2'></i>Added to cart`;
      document.querySelector(".addtocart2").style.backgroundColor = "#198754";
      document .querySelector(".addtocart2") .setAttribute("data-id", hasproductid);
      hasproductid = null;
    }

    // when user click on add to cart button

    productaddtocartbutton.addEventListener("click", () => {
      let buttontext = productaddtocartbutton.innerText;

      let productsection = productaddtocartbutton.closest(".imagesanddetails");

      if (buttontext === "Add to cart") {
        let productData = {
          image: productsection.querySelector(".firstimage img").src,
          name: productsection.querySelector(".productdetails .name h4") .textContent,
          price: productsection.querySelector( ".productdetails .price .mainprice" ).textContent,
        };

        let countthecartnumber =
          document.querySelector(".cartnumber").textContent;
        countthecartnumber++;

        addtocartitems(productData);
        productaddtocartbutton.setAttribute( "title", "click to remove from cart" );
        productaddtocartbutton.style.backgroundColor = "#198754";

        productaddtocartbutton.innerHTML = `<i class='fa fa-shopping-cart blue-color me-2'></i>Added to cart`;

        cartnumber.textContent = countthecartnumber;

        productaddtocartbutton.setAttribute("data-id", createdynamicid);

        if (document.querySelector(".everycartitem")) {
          document.querySelector(".totalrupees").classList.remove("d-none");
          document.querySelector(".totalrupees").classList.add("d-flex");
        } else {
          document.querySelector(".totalrupees").classList.add("d-none");

          document.querySelector(".totalrupees").classList.remove("d-flex");
        }

        localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
        localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );
      } else {
        productaddtocartbutton.setAttribute("title", "click to add to cart");
        productaddtocartbutton.style.backgroundColor = "";
        productaddtocartbutton.innerHTML = `<i class='fa fa-shopping-cart blue-color me-2'></i>Add to cart`;

        let productsectionidvalue = productaddtocartbutton.getAttribute("data-id");
        productaddtocartbutton.removeAttribute("data-id");

        let removeitemfromcart = document.querySelector( `[data-valueid="${productsectionidvalue}"]` );
        removeitemfromcart.remove();

        cartnumber.textContent = cartnumber.textContent - removeitemfromcart.querySelector("span").textContent;
        countthecartnumber = parseInt(cartnumber.textContent);

        let getthatpricedata = document.querySelectorAll(".everycartitem");

        let totalrupees = document.querySelector(".gettotalrupees");
        totalrupees.textContent = 0;

        getthatpricedata.forEach((e) => {
          let everycarteveryprice = parseInt(
            e.querySelector(".pricedata").textContent.slice(3) );
          let everycount = parseInt(e.querySelector(".count").textContent);

          let gottotalprice = parseInt(everycarteveryprice * everycount);
          totalrupees.textContent =
            gottotalprice + parseInt(totalrupees.textContent);
        });

        localStorage.setItem( "setsectiondata2", document.querySelector("section").outerHTML );
        localStorage.setItem( "setcartdata2", document.querySelector(".cartnumber").outerHTML );

        if (document.querySelector(".everycartitem")) {
          document.querySelector(".totalrupees").classList.remove("d-none");
          document.querySelector(".totalrupees").classList.add("d-flex");
        } else {
          document.querySelector(".totalrupees").classList.add("d-none");

          document.querySelector(".totalrupees").classList.remove("d-flex");
        }
      }


    });










    function addtocartitems(productData) {
      let cartitemdetails = `
    <div data-valueid=${createdynamicid}   class="d-flex  everycartitem align-items-center justify-content-evenly  " >
              <div class="d-flex flex-row align-items-center  setimageandname"> 
              <img class="me-3 productimage2" src="${productData.image}" alt="">
              <h5 class="productname">${productData.name}</h5>
              </div>
    
     <div class="chooseyoursize">
    <label >Choose a size:</label>
    
    <select>
    <option >S</option>
    <option >L</option>
    <option >xL</option>
    <option >XXL</option>
    </select>
    </div>
     <h5 class="me-3 pricedata">${productData.price}</h5>
    
    
    
    
      <div class="counter">
        <button class="decrement">-</button>
        <span class="count">1</span>
        <button class="increment">+</button>
      </div>
    </div>
    
    
    `;

      let sectionadd = document.querySelector(".cart-items");

      sectionadd.insertAdjacentHTML("afterbegin", cartitemdetails);

      var windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        document.querySelector("label").textContent = "size";
      }



      if (document.querySelector(".everycartitem")){

            
        document.querySelector(".checkout").addEventListener("click",(e)=>{



          localStorage.setItem("checkoutdataofcartitems",(document.querySelector("section").outerHTML))
          localStorage.setItem("checkoutdataofcartnumber",(document.querySelector(".cartnumber").outerHTML))






          window.location.href="checkoutpage.html"



        })
      }






      let onclickontextnavigatetoproducthtml = document.querySelectorAll(
        ".everycartitem .setimageandname h5"
      );

      onclickontextnavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });

      let getthatpricedata = document.querySelector(".everycartitem");
      let geteverycartitemprice = parseInt(
        getthatpricedata.querySelector(".pricedata").textContent.slice(3)
      );
      let totalrupees = document.querySelector(".gettotalrupees");

      totalrupees.textContent =
        parseInt(totalrupees.textContent) + geteverycartitemprice;

      let run2 = document.querySelector(".firstimage img").src;

      let cartitems = document.querySelector(".add-section-content");

      let decrementButton = cartitems.querySelectorAll(
        ".everycartitem .decrement"
      );
      let incrementButton = cartitems.querySelectorAll(
        ".everycartitem .increment"
      );

      incrementButton.forEach((e) => {
        e.addEventListener("click", (event) => {
          let checkimage = event.target
            .closest(".everycartitem")
            .querySelector("img").src;

          if (checkimage == run2) {
            incrementfunction(event);
            localStorage.setItem(
              "setsectiondata2",
              document.querySelector("section").outerHTML
            );
            localStorage.setItem(
              "setcartdata2",
              document.querySelector(".cartnumber").outerHTML
            );
          }
        });
      });

      decrementButton.forEach((e) => {
        e.addEventListener("click", (event) => {
          let checkimage = event.target
            .closest(".everycartitem")
            .querySelector("img").src;
          if (checkimage == run2) {
            decrementfunction(event);
            localStorage.setItem(
              "setsectiondata2",
              document.querySelector("section").outerHTML
            );
            localStorage.setItem(
              "setcartdata2",
              document.querySelector(".cartnumber").outerHTML
            );
          }
        });
      });
    }





    let buybuton = document.getElementsByClassName("buyandaddbutton")[1];
    
    buybuton.addEventListener("click", (event) => {


      let gettingaddtocartbutton = document.querySelector(".buyandaddbutton");
      let checkinginntertext = gettingaddtocartbutton.innerText;


      if (checkinginntertext == "Added to cart") {

        localStorage.setItem("checkoutdataofcartitems",(document.querySelector("section").outerHTML))
        localStorage.setItem("checkoutdataofcartnumber",(document.querySelector(".cartnumber").outerHTML))

        window.location.href="checkoutpage.html"

      }


      else{

        window.location.href="checkoutpage.html"
        

        let productsection=event.target.closest(".imagesanddetails")





        let productData = {
          image: productsection.querySelector(".firstimage img").src,
          name: productsection.querySelector(".productdetails .name h4") .textContent,
          price: productsection.querySelector( ".productdetails .price .mainprice" ).textContent,
        };




        let countthecartnumber = (document.querySelector(".cartnumber"));


        countthecartnumber.textContent=parseInt(countthecartnumber.textContent)+1

    


         let productaddtocartbutton=document.querySelector(".buyandaddbutton")


        productaddtocartbutton.setAttribute( "title", "click to remove from cart" );
        productaddtocartbutton.style.backgroundColor = "#198754";


        productaddtocartbutton.innerHTML = `<i class='fa fa-shopping-cart blue-color me-2'></i>Added to cart`;


        productaddtocartbutton.setAttribute("data-id", createdynamicid);


        addtocartitems(productData);


        localStorage.setItem("checkoutdataofcartitems",(document.querySelector("section").outerHTML))
        localStorage.setItem("checkoutdataofcartnumber",(document.querySelector(".cartnumber").outerHTML))

      }

    })

  });


  
  



  



  // taking data of clicked product section 
  

const storedData = localStorage.getItem("myproductpagedata");

if (storedData) {
  let tempContainer = document.createElement("div");
  tempContainer.innerHTML = storedData;
  checkproductid = tempContainer.querySelector(".productsection");


// if data id is pressnt then declare to has product id if data id is not have do nothing
  

  if (checkproductid.hasAttribute("data-id")) {

    hasproductid = checkproductid.getAttribute("data-id");
  } else {

    // here data id is not present so doing nothing
  }


  // setting name price and other details to product.html




  document.querySelector(".name").innerHTML = tempContainer.querySelector(".nametag").innerHTML;
  document.getElementsByClassName("name2")[0].innerHTML += tempContainer.querySelector(".nametag").innerHTML;
  document.querySelector(".rating").innerHTML = tempContainer.querySelector(".rating").innerHTML;
  document.querySelector(".mainprice").innerHTML = tempContainer.querySelector(".mainprice").innerHTML;
  document.querySelector(".crossprice").innerHTML = tempContainer.querySelector(".crossprice").innerHTML;

  let firstproductimage = tempContainer.querySelector(".productimage img");

  let productimage = tempContainer.querySelector(".productimage");
  let productimagechildren = productimage.children.length;

  let firstimage = document.querySelector(".firstimage img");

  firstimage.src = firstproductimage.src;

  let remiainingimages = document.querySelector(".remainingimages");

  let allproductimages = tempContainer.querySelectorAll(".productimage img");

  allproductimages.forEach((e) => {
    let remainingimagesimgtag = document.createElement("img");
    remainingimagesimgtag.src = e.src;
    remiainingimages.appendChild(remainingimagesimgtag);
  });

  let clicktochangeimage = document.querySelectorAll(".remainingimages img");
  clicktochangeimage.forEach((e) => {
    e.addEventListener("click", () => {
      firstimage.src = e.src;
    });
  });
}







// setting choose your size button

const buttons = document.querySelectorAll(".sizebutton");

buttons.forEach((button) => {
  document.querySelector(".sm").style.border = "1px solid black";

  button.addEventListener("click", () => {
    button.style.border = "1px solid black";

    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.style.border = "1px solid white";
      }
    });
  });
});



// setting choose your color button

const colors = document.querySelectorAll(".colorballs");

colors.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.border = "3px solid black";

    colors.forEach((e2) => {
      if (e2 !== e) {
        e2.style.border = "1px solid white";
      }
    });
  });
});



// setting veiw all butto

let viewall12 = document.querySelector(".viewall2");

viewall12.addEventListener("click", () => {
  viewall12.innerHTML =
    viewall12.innerHTML === "Veiw All" ? "See Less" : "Veiw All";

  let wrap = viewall12.nextElementSibling.firstChild;

  wrap.style.flexWrap = wrap.style.flexWrap === "wrap" ? "nowrap" : "wrap";


  

  if (e.innerHTML == "See Less") {
    wrap.style.justifyContent = "center";
  } else if (e.innerHTML == "Veiw All") {
    wrap.style.justifyContent = "flex-start";
  }
  
 
});





// setting replated products data

const relateddatastorage = localStorage.getItem("relatedproducts");

document.querySelector(".relatedproducts").innerHTML = relateddatastorage;

let jjkk = document .querySelector(".relatedproducts") .querySelectorAll(".productsection");

jjkk.forEach((e) => {
  if (e.querySelector(".addtocart")) {
    e.querySelector(".addtocart").remove();
  }
});




// this  is used to navigate data of related products to separate product page

let sharedata = document.querySelectorAll(".productimage");
sharedata.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem( "myproductpagedata", e.closest(".productsection").outerHTML );

    localStorage.setItem( "relatedproducts", e.closest(".allproducts").outerHTML );

    window.location.href = "product.html";
  });
});



// getting footer data


const footerfromindex = localStorage.getItem("footer");
document.querySelector(".footer").innerHTML = footerfromindex;




function decrementfunction(event) {


  let count = event.target.closest(".everycartitem").querySelector(".count");

  if (count.textContent == 1) {
    let deletethatitem = event.target.closest(".everycartitem");

    let countthecartnumber = document.querySelector(".cartnumber");
    countthecartnumber.textContent = parseInt(countthecartnumber.textContent) - 1;

    document.querySelector( ".addtocart2" ).innerHTML = `<i class='fa fa-shopping-cart me-2'></i>Add to cart`;
    document.querySelector(".addtocart2").style.backgroundColor = "";
    deletethatitem.remove();

    document.querySelector(".addtocart2").removeAttribute("data-id");

    let getthatpricedata = document.querySelectorAll(".everycartitem");

    let totalrupees = document.querySelector(".gettotalrupees");
    totalrupees.textContent = 0;

    getthatpricedata.forEach((e) => {
      let everycarteveryprice = parseInt( e.querySelector(".pricedata").textContent.slice(3) );
      let everycount = parseInt(e.querySelector(".count").textContent);

      let gottotalprice = parseInt(everycarteveryprice * everycount);
      totalrupees.textContent = gottotalprice + parseInt(totalrupees.textContent); });

    if (document.querySelector(".everycartitem")) {
      document.querySelector(".totalrupees").classList.remove("d-none");
      document.querySelector(".totalrupees").classList.add("d-flex");
    } else {
      document.querySelector(".totalrupees").classList.add("d-none");

      document.querySelector(".totalrupees").classList.remove("d-flex");
    }
  }

  if (count.textContent > 1) {
    let count = event.target.closest(".everycartitem").querySelector(".count");

    let countthecartnumber = document.querySelector(".cartnumber");
    countthecartnumber.textContent =
      parseInt(countthecartnumber.textContent) - 1;

    count.textContent = parseInt(count.textContent) - 1;

    let getthatpricedata = document.querySelectorAll(".everycartitem");

    let totalrupees = document.querySelector(".gettotalrupees");
    totalrupees.textContent = 0;

    getthatpricedata.forEach((e) => {
      let everycarteveryprice = parseInt(
        e.querySelector(".pricedata").textContent.slice(3)
      );
      let everycount = parseInt(e.querySelector(".count").textContent);

      let gottotalprice = parseInt(everycarteveryprice * everycount);
      totalrupees.textContent =
        gottotalprice + parseInt(totalrupees.textContent);
    });
  }
}

function incrementfunction(event) {
  let count = 1;

  let countelement1 = event.target
    .closest(".everycartitem")
    .querySelector(".count");

  countelement1.textContent = parseInt(countelement1.textContent) + count;

  let countthecartnumber = document.querySelector(".cartnumber");

  countthecartnumber.textContent = parseInt(countthecartnumber.textContent) + 1;

  let getthatpricedata = document.querySelectorAll(".everycartitem");

  let totalrupees = document.querySelector(".gettotalrupees");
  totalrupees.textContent = 0;

  getthatpricedata.forEach((e) => {
    let everycarteveryprice = parseInt(
      e.querySelector(".pricedata").textContent.slice(3)
    );
    let everycount = parseInt(e.querySelector(".count").textContent);

    let gottotalprice = parseInt(everycarteveryprice * everycount);
    totalrupees.textContent = gottotalprice + parseInt(totalrupees.textContent);
  });
}




function everycartitemtoproduct(event) {
  let gettingimageofeverycartitem = event.target .closest(".everycartitem") .querySelector("img").src;

  fetch("index.html")
    .then((response) => response.text())

    .then((data) => {
      let createElement = document.createElement("div");
      createElement.innerHTML = data;
      createElement.querySelectorAll(".productimage img").forEach((e) => {
        if (e.src == gettingimageofeverycartitem) {
          localStorage.setItem(
            "myproductpagedata",
            e.parentElement.closest(".productsection").outerHTML
          );
          window.location.href = "product.html";
        }
      });
    });
}



window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    this.location.reload()
  }
});