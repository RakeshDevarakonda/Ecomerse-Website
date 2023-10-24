let flag;

document.cookie = "productVisited=; expires=21 oct 2023 00:00:00 UTC; path=/;";

if (!document.cookie.includes("productVisited=true")) {
  flag = false;
} else {
  flag = true;
}








$(document).ready(function () {
  // this code used for image slide

  let productimageintervel;

  $(".productimage").each(function () {
    let e = $(this);

    e.on("mouseenter", function () {
      let i = 1;
      productimageintervel = setInterval(function () {
        if (i <= e.children().length) {
          e.css("transform", `translateX(${i * -100}%)`);
        }
        i++;
        if (i === e.children().length + 1) {
          e.css("transform", `translateX(0%)`);

          i = 1;
        }
      }, 1500);
    });

    e.on("mouseleave", function () {
      clearInterval(productimageintervel);
    });
  });

  // this code used for image slide completed

  //banner slider

  let banner = $(".bannerimages").first();
  let i = 1;
  $(this).css("transform", "translateX(-100%)");

  let bannerintervel;

  bannerintervel = setInterval(() => {
    banner.each(function () {
      $(this).css("transform", `translateX(${i * -100}%)`);

      i++;
      if (i === 4) {
        clearInterval(bannerintervel);
        $(this).css("transform", `translateX(${0}%)`);
      }
    });
  }, 2000);

  $(".categorytext").mouseenter(function () {
    $(".categorydropdown").removeClass("d-none");
  });

  $(".categorytext").mouseleave(function () {
    $(".categorydropdown").addClass("d-none");
  });
});

//  applicable for veiw all button

let viewall = document.querySelectorAll(".viewall");

viewall.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = e.innerHTML === "Veiw All" ? "See Less" : "Veiw All";

    let wrap = e.nextElementSibling; // Get the next element sibling

    wrap.style.flexWrap = wrap.style.flexWrap === "wrap" ? "nowrap" : "wrap";

    if (e.innerHTML == "See Less") {
      wrap.style.justifyContent = "center";
    } else if (e.innerHTML == "Veiw All") {
      wrap.style.justifyContent = "flex-start";
    }
  });
});





// function letfunction2(){
  fetch("navbar.html")
  .then((response) => response.text())

  .then((data) => {
    let createElement = document.createElement("div");
    createElement.innerHTML = data;
    let navselect = createElement.querySelector("nav");
    let sectionselect = createElement.querySelector("section");

    document.querySelector(".add-navbar-content").innerHTML =
      navselect.outerHTML;
    document.querySelector(".add-section-content").innerHTML =
      sectionselect.outerHTML;

    const script = document.createElement("script");
    script.src = "navbar.js";
    document.body.appendChild(script);

    // this section data is taking info from product.html

    let sectiondatafromproduct = localStorage.getItem("setsectiondata2");

    if (sectiondatafromproduct) {
      // if data present implementing section and cart Number

      document.querySelector(".add-section-content").innerHTML =
        sectiondatafromproduct;
      document.querySelector(".cartnumber").outerHTML =
        localStorage.getItem("setcartdata2");

      // if data is present then set thieir datavaluie id to required productsection and set add to cart and added to cart

      let everycartitemlist = document.querySelectorAll(".everycartitem");
      everycartitemlist.forEach((e) => {
        let getdataid = e.getAttribute("data-valueid");
        let everycartimage = e.querySelector("img").src;
        document.querySelectorAll(".productimage img").forEach((e) => {
          if (everycartimage == e.src) {
            e.closest(".productsection").setAttribute("data-id", getdataid);
            e
              .closest(".productsection")
              .querySelector(
                "button"
              ).innerHTML = `<i class='fa fa-shopping-cart me-2'></i>Added to cart`;
            e.closest(".productsection")
              .querySelector("button")
              .classList.remove("btn-primary");
            e.closest(".productsection")
              .querySelector("button")
              .classList.add("btn-success");
          }
        });
      });

      // after all these again set local storage loads even if its reloads

      if (document.querySelector(".everycartitem")) {
        document.querySelector(".checkout").addEventListener("click", (e) => {
          localStorage.setItem(
            "checkoutdataofcartitems",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "checkoutdataofcartnumber",
            document.querySelector(".cartnumber").outerHTML
          );

          window.location.href = "checkoutpage.html";
        });
      }

      localStorage.setItem(
        "setsectiondata",
        document.querySelector("section").outerHTML
      );
      localStorage.setItem(
        "setcartdata",
        document.querySelector(".cartnumber").outerHTML
      );
      localStorage.removeItem("setsectiondata2");
    } else {
      //  if we didnt get any data from product.htmlsection then load the current section

      // fcommentout this  two lines to make changes

      if (flag) {
        document.querySelector(".add-section-content").innerHTML =
          localStorage.getItem("setsectiondata");
        document.querySelector(".cartnumber").outerHTML =
          localStorage.getItem("setcartdata");
      }

      localStorage.setItem(
        "setsectiondata",
        document.querySelector("section").outerHTML
      );
      localStorage.setItem(
        "setcartdata",
        document.querySelector(".cartnumber").outerHTML
      );

      if (document.querySelector(".everycartitem")) {
        document.querySelector(".checkout").addEventListener("click", (e) => {
          localStorage.setItem(
            "checkoutdataofcartitems",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "checkoutdataofcartnumber",
            document.querySelector(".cartnumber").outerHTML
          );

          window.location.href = "checkoutpage.html";
        });
      }

      // if data is present then set thieir datavaluie id to required productsection and set add to cart and added to cart

      let everycartitemlist = document.querySelectorAll(".everycartitem");
      everycartitemlist.forEach((e) => {
        let getdataid = e.getAttribute("data-valueid");
        let everycartimage = e.querySelector("img").src;
        document.querySelectorAll(".productimage img").forEach((e) => {
          if (everycartimage == e.src) {
            e.closest(".productsection").setAttribute("data-id", getdataid);
            e
              .closest(".productsection")
              .querySelector(
                "button"
              ).innerHTML = `<i class='fa fa-shopping-cart me-2'></i>Added to cart`;
            e.closest(".productsection")
              .querySelector("button")
              .classList.remove("btn-primary");
            e.closest(".productsection")
              .querySelector("button")
              .classList.add("btn-success");
          }
        });
      });
    }

    // taking data value id only into getdatavelueidarray only of local Storage

    // added getdatavelueidarray to avoid running of  increment or decrement

    let getdatavelueidarray = [];

    // getting data value id from every cart item and added to getdatavalueid array

    if (document.querySelector(".everycartitem")) {
      document.querySelectorAll(".everycartitem").forEach((e) => {
        let gettheid = e.getAttribute("data-valueid");
        getdatavelueidarray.push(gettheid);
      });
    }

    // if everycartitem is present when user click on everycartitem navigate to product.html

    if (document.querySelector(".everycartitem")) {
      let onclickontextnavigatetoproducthtml = document.querySelectorAll(
        ".everycartitem .setimageandname h5"
      );

      onclickontextnavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });

      let onclickonimagenavigatetoproducthtml =
        document.querySelectorAll(".everycartitem img");
      onclickonimagenavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });
    }

    let cartitems3 = document.querySelector(".add-section-content");

    let decrementButton = cartitems3.querySelectorAll(
      ".everycartitem .decrement"
    );
    let incrementButton = cartitems3.querySelectorAll(
      ".everycartitem .increment"
    );

    // increment oand decrement works only if we get section data from product.html section

    // works only if inclueds  getdatavelueidarray

    incrementButton.forEach((e) => {
      e.addEventListener("click", (event) => {
        if (
          getdatavelueidarray.includes(
            e.closest(".everycartitem").getAttribute("data-valueid")
          )
        ) {
          incrementfunction(event);
          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }
      });
    });

    decrementButton.forEach((e) => {
      e.addEventListener("click", (event) => {
        if (
          getdatavelueidarray.includes(
            e.closest(".everycartitem").getAttribute("data-valueid")
          )
        ) {
          decrementfunction(event);
          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }
      });
    });

    function decrementfunction(event) {
      let count = event.target
        .closest(".everycartitem")
        .querySelector(".count");

      if (count.textContent == 1) {
        // if count =1 then remove datavalue id and change added to cart to add to cart and change cart Number

        let deletethatitem = event.target.closest(".everycartitem");

        let countthecartnumber = document.querySelector(".cartnumber");
        countthecartnumber.textContent =
          parseInt(countthecartnumber.textContent) - 1;

        let datavalueid = deletethatitem.getAttribute("data-valueid");

        let removeitemfromcart2 = document.querySelector(
          `[data-id="${datavalueid}"]`
        );

        removeitemfromcart2.removeAttribute("data-id");
        deletethatitem.remove();
        removeitemfromcart2.querySelector(
          "button"
        ).innerHTML = `<i class='fa fa-shopping-cart me-2'></i>Add to cart`;
        removeitemfromcart2
          .querySelector("button")
          .classList.add("btn-primary");
        removeitemfromcart2
          .querySelector("button")
          .classList.remove("btn-success");

        // if have everycart item then display checkout and total rupees else dont display

        if (document.querySelector(".everycartitem")) {
          document.querySelector(".totalrupees").classList.remove("d-none");
          document.querySelector(".totalrupees").classList.add("d-flex");
        } else {
          document.querySelector(".totalrupees").classList.add("d-none");

          document.querySelector(".totalrupees").classList.remove("d-flex");
        }

        // if everycart item is present then change total rupees prices accordingly

        if (document.querySelector(".everycartitem")) {
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

      if (count.textContent > 1) {
        // if count >1 then decrease count number  and cart number decrese

        let count = event.target
          .closest(".everycartitem")
          .querySelector(".count");
        let countthecartnumber = document.querySelector(".cartnumber");
        countthecartnumber.textContent =
          parseInt(countthecartnumber.textContent) - 1;
        count.textContent = parseInt(count.textContent) - 1;

        // if everycart item is present then change total rupees prices accordingly

        if (document.querySelector(".everycartitem")) {
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
    }

    function incrementfunction(event) {
      // if count=1 change count value and cart vlaue

      let count = 1;
      let countelement1 = event.target
        .closest(".everycartitem")
        .querySelector(".count");
      countelement1.textContent = parseInt(countelement1.textContent) + count;
      let countthecartnumber = document.querySelector(".cartnumber");
      countthecartnumber.textContent =
        parseInt(countthecartnumber.textContent) + 1;

      // if everycart item is present then change total rupees prices accordingly

      if (document.querySelector(".everycartitem")) {
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

    let addtocart = document.querySelectorAll(".addtocart");
    let cartitems = document.querySelector(".cart-items");

    // here createdynamicid is Date.now random number

    let createdynamicid;

    // when user click on add to cart

    addtocart.forEach((e) => {
      e.addEventListener("click", () => {
        createdynamicid = Date.now();
        let buttontext = e.innerText;
        let productsection = e.closest(".productsection");

        if (buttontext === "Add to cart") {
          let cartnumber = document.querySelector(".cartnumber");
          let countthecartnumber = parseInt(
            document.querySelector(".cartnumber").textContent
          );

          // get name image and price from productsection

          let productData = {
            image: productsection.querySelector("img").src,
            name: productsection.querySelector(".nametag h4").textContent,
            price:
              productsection.querySelector(".price .mainprice").textContent,
          };

          // setting dataid Attribute and adding to cartitems section

          productsection.setAttribute("data-id", createdynamicid);
          addtocartitems(productData);

          // after adding chnage blue to green and add to cart to added to cart

          e.innerHTML = `   <i class='fa fa-shopping-cart blue-color me-2'></i>Added to cart`;
          e.classList.remove("btn-primary");
          e.classList.add("btn-success");
          e.setAttribute("title", "click to remove from cart");
          cartnumber.textContent = countthecartnumber + 1;

          // if everycartitem is presnt then display checkout and ttal rupees else dont display

          if (document.querySelector(".everycartitem")) {
            document.querySelector(".totalrupees").classList.remove("d-none");
            document.querySelector(".totalrupees").classList.add("d-flex");
          } else {
            document.querySelector(".totalrupees").classList.add("d-none");
            document.querySelector(".totalrupees").classList.remove("d-flex");
          }

          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }

        // if user clicks on added to cart make reverse and remove data id and remove from cart items
        else {
          let cartnumber = document.querySelector(".cartnumber");
          let countthecartnumber = parseInt(
            document.querySelector(".cartnumber").textContent
          );
          e.innerHTML = `   <i class='fa fa-shopping-cart blue-color me-2'></i>Add to cart`;
          e.classList.remove("btn-success");
          e.classList.add("btn-primary");
          e.setAttribute("title", "click to add to cart");
          let productsectionidvalue = productsection.getAttribute("data-id");
          let removeitemfromcart = document.querySelector(
            `[data-valueid="${productsectionidvalue}"]`
          );
          removeitemfromcart.remove();
          cartnumber.textContent =
            countthecartnumber -
            removeitemfromcart.querySelector("span").textContent;
          productsection.removeAttribute("data-id");
          countthecartnumber = parseInt(cartnumber.textContent);
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

          // if everycartitem is presnt then display checkout and ttal rupees else dont display

          if (document.querySelector(".everycartitem")) {
            document.querySelector(".totalrupees").classList.remove("d-none");
            document.querySelector(".totalrupees").classList.add("d-flex");
          } else {
            document.querySelector(".totalrupees").classList.add("d-none");
            document.querySelector(".totalrupees").classList.remove("d-flex");
          }

          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }
      });
    });

    // dynamically creating cart items

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
            <option >XL</option>
            <option >XXL</option>
            </select>
            </div>
            <h5 class="me-3 pricedata">${productData.price} </h5>

              <div class="counter">
                <button class="btn  decrement">-</button>
                <span class="count">1</span>
                <button class="btn increment">+</button>
              </div>
            </div>


`;

      cartitems.insertAdjacentHTML("afterbegin", cartitemdetails);
      var windowWidth = window.innerWidth;

      // if width is less than 576 then chnage choose your size text in everycart item to "size"

      if (windowWidth <= 576) {
        document.querySelector("label").textContent = "size";
      }

      // when user click on checkout navigate to payment page

      if (document.querySelector(".everycartitem")) {
        document.querySelector(".checkout").addEventListener("click", (e) => {
          localStorage.setItem(
            "checkoutdataofcartitems",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "checkoutdataofcartnumber",
            document.querySelector(".cartnumber").outerHTML
          );

          window.location.href = "checkoutpage.html";
        });
      }

      // when user click on text or image in everycart item navigate to productData.html

      let onclickontextnavigatetoproducthtml = document.querySelectorAll(
        ".everycartitem .setimageandname h5"
      );
      onclickontextnavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });

      let onclickonimagenavigatetoproducthtml =
        document.querySelectorAll(".everycartitem img");
      onclickonimagenavigatetoproducthtml.forEach((e) => {
        e.addEventListener("click", (event) => {
          everycartitemtoproduct(event);
        });
      });

      // adding new item price to existing total rupees

      let getthatpricedata = document.querySelector(".everycartitem");
      let geteverycartitemprice = parseInt(
        getthatpricedata.querySelector(".pricedata").textContent.slice(3)
      );
      let totalrupees = document.querySelector(".gettotalrupees");
      totalrupees.textContent =
        parseInt(totalrupees.textContent) + geteverycartitemprice;

      // this decremrnt and increment works only on non localStorage

      let decrementButton = cartitems.querySelector(
        ".everycartitem .decrement"
      );
      let incrementButton = cartitems.querySelector(
        ".everycartitem .increment"
      );

      // works if not includes because to avoid running multiple times

      incrementButton.addEventListener("click", (event) => {
        if (
          !getdatavelueidarray.includes(
            event.target
              .closest(".everycartitem")
              .getAttribute("data-valueid")
          )
        ) {
          incrementfunction(event);
          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }
      });

      decrementButton.addEventListener("click", (event) => {
        if (
          !getdatavelueidarray.includes(
            event.target
              .closest(".everycartitem")
              .getAttribute("data-valueid")
          )
        ) {
          decrementfunction(event);
          localStorage.setItem(
            "setsectiondata",
            document.querySelector("section").outerHTML
          );
          localStorage.setItem(
            "setcartdata",
            document.querySelector(".cartnumber").outerHTML
          );
        }
      });
    }
  });

// }



// function letfunction1(){
  


// when user click on image navigate to produc.html

let navigate_to_product_on_click_productimage =
document.querySelectorAll(".productimage");

navigate_to_product_on_click_productimage.forEach((e) => {
e.addEventListener("click", () => {
  // taking productsection data and related products data
  localStorage.setItem(
    "myproductpagedata",
    e.closest(".productsection").outerHTML
  );
  localStorage.setItem(
    "relatedproducts",
    e.closest(".allproducts").outerHTML
  );


  window.location.href = "product.html";
});
});

// taking footer to product.html

localStorage.setItem("footer", document.querySelector("footer").outerHTML);

// function to navigate on click of image or text in evericartitem to product.html

function everycartitemtoproduct(event) {
let gettingimageofeverycartitem = event.target
  .closest(".everycartitem")
  .querySelector("img").src;
document.querySelectorAll(".productimage img").forEach((e) => {
  if (gettingimageofeverycartitem == e.src) {
    localStorage.setItem(
      "myproductpagedata",
      e.closest(".productsection").outerHTML
    );
    localStorage.setItem(
      "setsectiondata",
      document.querySelector("section").outerHTML
    );
    localStorage.setItem(
      "setcartdata",
      document.querySelector(".cartnumber").outerHTML
    );

    window.location.href = "product.html";
  }
});
}





var images = document.querySelectorAll("img");

images.forEach(function(image) {
var imageUrl = image.getAttribute("src");

var preloadImage = new Image();
preloadImage.src = imageUrl;


});



window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    this.location.reload()
  }
});
