

document.cookie = 'productVisited=true; path=/';


fetch("navbar.html").then((response) => response.text()).then((data) => {


    let createElement = document.createElement("div");
    createElement.innerHTML = data;
    let navselect = createElement.querySelector("nav");
    let sectionselect = createElement.querySelector("section");

    document.querySelector(".add-navbar-content").innerHTML = navselect.outerHTML;
    document.querySelector(".add-section-content").innerHTML = sectionselect.outerHTML;











    const script = document.createElement("script");
    script.src = "navbar.js";
    document.body.appendChild(script);






    let gettingsectiondataforcheckout = localStorage.getItem("checkoutdataofcartitems")

    if (gettingsectiondataforcheckout) {
        document.querySelector(".add-section-content").innerHTML = gettingsectiondataforcheckout;
        document.querySelector(".cartnumber").outerHTML = localStorage.getItem("checkoutdataofcartnumber");




        localStorage.removeItem("checkoutdataofcartitems")








        let section = document.querySelector("section")



        let decrementbuttonincart = section.querySelectorAll(".decrement")
        let incrementButtonincart = section.querySelectorAll(".increment")
        let gettingcartnumber = document.querySelector(".cartnumber")







        incrementButtonincart.forEach((e) => {
            e.addEventListener("click", (event) => {


                incrementonclickchange(event)
            })
        })
        decrementbuttonincart.forEach((e) => {

            e.addEventListener("click", (event) => {
                decrementonclickchange(event)

            })



        })




        if (document.querySelector(".everycartitem")) {

            let onclickontextnavigatetoproducthtml = document.querySelectorAll(".everycartitem .productname");

            onclickontextnavigatetoproducthtml.forEach((e) => {
                e.addEventListener("click", (event) => {
                    everycartitemtoproduct(event);
                });
            });
        }


        if (document.querySelector(".everycartitem")) {
            let onclickonimagenavigatetoproducthtml = document.querySelectorAll(".everycartitem .productimage2 img");

            onclickonimagenavigatetoproducthtml.forEach((e) => {
                e.addEventListener("click", (event) => {
                    everycartitemtoproduct(event);
                });
            });
        }







        if (document.querySelector(".everycartitem")){

            let totalruppesdiv2 = document.querySelector(".totalrupees");

            totalruppesdiv2.classList.remove("d-none");
            totalruppesdiv2.classList.add("d-flex");
        }




        









        localStorage.setItem("dataafterrefreshincheckoutsection", (document.querySelector("section").outerHTML))
        localStorage.setItem("dataafterrefreshofcartnumber", (document.querySelector(".cartnumber").outerHTML))




        localStorage.setItem("setsectiondata2", document.querySelector("section").outerHTML);
        localStorage.setItem("setcartdata2", document.querySelector(".cartnumber").outerHTML);
        localStorage.setItem("setsectiondata", document.querySelector("section").outerHTML);
        localStorage.setItem("setcartdata", document.querySelector(".cartnumber").outerHTML);


        


        
        
        








    }


    else {





        document.querySelector(".add-section-content").innerHTML = localStorage.getItem("dataafterrefreshincheckoutsection");
        document.querySelector(".cartnumber").outerHTML = localStorage.getItem("dataafterrefreshofcartnumber");


        if (!document.querySelector(".everycartitem")) {
            document.querySelector(".ordernow").disabled = true
            document.querySelector(".ordernow button").style.cursor = "not-allowed"
            document.querySelector(".ordernow button").innerText = "Your Cart Is Empty Please Add Some Products"
            document.querySelector(".ordernow button").style.backgroundColor="grey"





        }


















        let section = document.querySelector("section")



        let decrementbuttonincart = section.querySelectorAll(".decrement")
        let incrementButtonincart = section.querySelectorAll(".increment")
        let gettingcartnumber = document.querySelector(".cartnumber")







        incrementButtonincart.forEach((e) => {
            e.addEventListener("click", (event) => {


                incrementonclickchange(event)
            })
        })
        decrementbuttonincart.forEach((e) => {

            e.addEventListener("click", (event) => {
                decrementonclickchange(event)

            })



        })

        if (document.querySelector(".everycartitem")) {

            let onclickontextnavigatetoproducthtml = document.querySelectorAll(".everycartitem .productname");

            onclickontextnavigatetoproducthtml.forEach((e) => {
                e.addEventListener("click", (event) => {
                    everycartitemtoproduct(event);
                });
            });
        }


        if (document.querySelector(".everycartitem")) {
            let onclickonimagenavigatetoproducthtml = document.querySelectorAll(".everycartitem .productimage2 img");

            onclickonimagenavigatetoproducthtml.forEach((e) => {
                e.addEventListener("click", (event) => {
                    everycartitemtoproduct(event);
                });
            });
        }






        localStorage.setItem("setsectiondata2", document.querySelector("section").outerHTML);
        localStorage.setItem("setcartdata2", document.querySelector(".cartnumber").outerHTML);
        localStorage.setItem("setsectiondata", document.querySelector("section").outerHTML);
        localStorage.setItem("setcartdata", document.querySelector(".cartnumber").outerHTML);


        
        
        






    }



    













})













let cartdetails = document.querySelector(".cartdetails")
let createelement = document.createElement("div")


if (localStorage.getItem("checkoutdataofcartitems")) {




    createelement.innerHTML = localStorage.getItem("checkoutdataofcartitems")
    createelement.querySelectorAll(".everycartitem").forEach((e) => {


        let gettingimage = (e.querySelector("img").src)
        let gettingname = e.querySelector(".setimageandname h5").textContent
        let gettingprice = (e.querySelector(".pricedata")).textContent
        let gettingcounter = (e.querySelector(".counter").querySelector(".count").textContent)
        let gettingdatavalueid = (e.getAttribute("data-valueid"))





        let createcartitems = `
                <div data-valueid2=${gettingdatavalueid} class="d-flex flex-row  everycartitem justify-content-evenly align-items-center mb-4">
                                <div class="image productimage2"><img class="" src="${gettingimage}" alt=""></div>
                                <div class="name productname">${gettingname}</div>
                                <div class="pricedata">${gettingprice}</div>
                                <div class="counter">
                                        <button class="btn  decrement">-</button>
                                        <span class="count">${gettingcounter}</span>
                                        <button class="btn increment">+</button>
                                </div>
                </div>
                `


        cartdetails.insertAdjacentHTML("beforeend", createcartitems);





        if (document.querySelector(".everycartitem")) {


            let totalrupeediv = document.querySelector(".totalrupeedetails");
            totalrupeediv.classList.remove("remove")




            let getthatpricedata = document.querySelectorAll(".everycartitem");

            let totalrupees = document.querySelector(".gettotalrupees");

            totalrupees.textContent = 0;

            getthatpricedata.forEach((e) => {
                let everycarteveryprice = parseInt(e.querySelector(".pricedata").textContent.slice(3));
                let everycount = parseInt(e.querySelector(".count").textContent);
                let gottotalprice = parseInt(everycarteveryprice * everycount);
                totalrupees.textContent = gottotalprice + parseInt(totalrupees.textContent);
            });
        }
    })









    let cartdetails2 = document.querySelector(".totalrupeesandcartdetails")




    let decrementbuttonincart = cartdetails2.querySelectorAll(".decrement")
    let incrementButtonincart = cartdetails2.querySelectorAll(".increment")
    let gettingcartnumber = document.querySelector(".cartnumber")





    incrementButtonincart.forEach((e) => {
        e.addEventListener("click", (event) => {
            console.log("object2")

            incrementonclickchange(event)
        })
    })


    decrementbuttonincart.forEach((e) => {
        e.addEventListener("click", (event) => {
            console.log("object11")

            decrementonclickchange(event)
        })

    })


    if (document.querySelector(".everycartitem")) {

        let onclickontextnavigatetoproducthtml = document.querySelectorAll(".everycartitem .productname");

        onclickontextnavigatetoproducthtml.forEach((e) => {
            e.addEventListener("click", (event) => {
                everycartitemtoproduct(event);
            });
        });
    }


    if (document.querySelector(".everycartitem")) {
        let onclickonimagenavigatetoproducthtml = document.querySelectorAll(".everycartitem .productimage2 img");

        onclickonimagenavigatetoproducthtml.forEach((e) => {
            e.addEventListener("click", (event) => {
                everycartitemtoproduct(event);
            });
        });
    }







    localStorage.setItem("gettotalrupeesandtotalcartdetails", document.querySelector(".totalrupeesandcartdetails").innerHTML)

}





else {






    document.querySelector(".totalrupeesandcartdetails").innerHTML = localStorage.getItem("gettotalrupeesandtotalcartdetails")



    let cartdetails = document.querySelector(".totalrupeesandcartdetails")




    let decrementbuttonincart = cartdetails.querySelectorAll(".decrement")
    let incrementButtonincart = cartdetails.querySelectorAll(".increment")
    let gettingcartnumber = document.querySelector(".cartnumber")





    incrementButtonincart.forEach((e) => {
        e.addEventListener("click", (event) => {
            incrementonclickchange(event)

        })
    })


    decrementbuttonincart.forEach((e) => {
        e.addEventListener("click", (event) => {
            decrementonclickchange(event)
        })

    })




    if (document.querySelector(".everycartitem")) {

        let onclickontextnavigatetoproducthtml = document.querySelectorAll(".everycartitem .productname");

        onclickontextnavigatetoproducthtml.forEach((e) => {
            e.addEventListener("click", (event) => {
                everycartitemtoproduct(event);
            });
        });
    }


    if (document.querySelector(".everycartitem")) {
        let onclickonimagenavigatetoproducthtml = document.querySelectorAll(".everycartitem .productimage2 img");

        onclickonimagenavigatetoproducthtml.forEach((e) => {
            e.addEventListener("click", (event) => {
                everycartitemtoproduct(event);
            });
        });
    }


















}













const footerfromindex = localStorage.getItem("footer");
document.querySelector(".footer").innerHTML = footerfromindex;





function incrementonclickchange(event) {



    let gettingcartnumber = document.querySelector(".cartnumber")



    let countnumber = (event.target.parentElement.querySelector(".count"))


    countnumber.textContent = parseInt(countnumber.textContent) + 1


    gettingcartnumber.textContent = parseInt(gettingcartnumber.textContent) + 1










    let gettingtotalrupees = (event.target.closest(".everycartitem").parentElement.nextElementSibling.querySelector(".gettotalrupees"))










    let gettingeverycartitem = event.target.closest(".everycartitem").parentElement.querySelectorAll(".everycartitem")




    gettingtotalrupees.textContent = 0;




    gettingeverycartitem.forEach((e) => {


        let everycarteveryprice = parseInt(e.querySelector(".pricedata").textContent.slice(3));
        let everycount = parseInt(e.querySelector(".count").textContent);
        let gottotalprice = parseInt(everycarteveryprice * everycount);
        gettingtotalrupees.textContent = gottotalprice + parseInt(gettingtotalrupees.textContent);



    });





    if (event.target.parentElement.closest(".cartdetails")) {

        let takingcountnumber = event.target.parentElement.querySelector(".count").textContent
        let takingtotalrupeenumber = (event.target.parentElement.closest(".cartdetails").nextElementSibling.querySelector(".gettotalrupees")).textContent
        let takingdatavlaueid2 = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid2")
        let gettingsameeverycartiteminsection = (document.querySelector(`[data-valueid="${takingdatavlaueid2}"]`));

        gettingsameeverycartiteminsection.querySelector(".count").textContent = takingcountnumber
        document.querySelector("section").querySelector(".gettotalrupees").textContent = takingtotalrupeenumber





    }

    else {


        let takingcountnumber = event.target.parentElement.querySelector(".count").textContent


        let takingtotalrupeenumber = event.target.parentElement.closest("section").querySelector(".gettotalrupees").textContent


        let takingdatavlaueid = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid")


        let gettingsameeverycartitemincartdetails = (document.querySelector(`[data-valueid2="${takingdatavlaueid}"]`));

        gettingsameeverycartitemincartdetails.querySelector(".count").textContent = takingcountnumber



        document.querySelector(".cartdetails").nextElementSibling.querySelector(".gettotalrupees").textContent = takingtotalrupeenumber


    }






    localStorage.setItem("dataafterrefreshincheckoutsection", (document.querySelector("section").outerHTML))
    localStorage.setItem("dataafterrefreshofcartnumber", (document.querySelector(".cartnumber").outerHTML))


    localStorage.setItem("gettotalrupeesandtotalcartdetails", document.querySelector(".totalrupeesandcartdetails").innerHTML)








    localStorage.setItem("setsectiondata2", document.querySelector("section").outerHTML);
    localStorage.setItem("setcartdata2", document.querySelector(".cartnumber").outerHTML);
    localStorage.setItem("setsectiondata", document.querySelector("section").outerHTML);
    localStorage.setItem("setcartdata", document.querySelector(".cartnumber").outerHTML);// product.js


    
    
    











}












function decrementonclickchange(event) {




    let gettingcartnumber = document.querySelector(".cartnumber")
    let countnumber = (event.target.parentElement.querySelector(".count"))
    gettingcartnumber.textContent = parseInt(gettingcartnumber.textContent) - 1


    if (countnumber.textContent == 1) {


        let gettingtotalrupees = (event.target.closest(".everycartitem").parentElement.nextElementSibling.querySelector(".gettotalrupees"))
        let gettingeverycartitem = event.target.closest(".everycartitem").parentElement.querySelectorAll(".everycartitem")
        gettingtotalrupees.textContent = 0;
        gettingeverycartitem.forEach((e) => {
            if (event.target != e.querySelector(".decrement")) {
                let everycarteveryprice = parseInt(e.querySelector(".pricedata").textContent.slice(3));
                let everycount = parseInt(e.querySelector(".count").textContent);
                let gottotalprice = parseInt(everycarteveryprice * everycount);
                gettingtotalrupees.textContent = gottotalprice + parseInt(gettingtotalrupees.textContent);
            }
        });

        if (event.target.parentElement.closest(".cartdetails")) {
            let takingcountnumber = event.target.parentElement.querySelector(".count").textContent
            let takingtotalrupeenumber = (event.target.parentElement.closest(".cartdetails").nextElementSibling.querySelector(".gettotalrupees")).textContent
            let takingdatavlaueid2 = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid2")
            let gettingsamedatavalueidinsection = (document.querySelector(`[data-valueid="${takingdatavlaueid2}"]`));
            let gettingsamedtavalieidincartdetails = document.querySelector(`[data-valueid2="${takingdatavlaueid2}"]`)
            gettingsamedatavalueidinsection.querySelector(".count").textContent = takingcountnumber
            document.querySelector("section").querySelector(".gettotalrupees").textContent = takingtotalrupeenumber

            if (event.target.closest(".everycartitem").parentElement.children.length == 3) {
                let totalrupeediv = document.querySelector(".totalrupeedetails");
                totalrupeediv.classList.add("remove")
                let totalruppesdiv2 = document.querySelector(".totalrupees");
                totalruppesdiv2.classList.add("d-none");
                totalruppesdiv2.classList.remove("d-flex");

            }

            gettingsamedatavalueidinsection.remove()
            gettingsamedtavalieidincartdetails.remove()


        }




        else {

            let takingcountnumber = event.target.parentElement.querySelector(".count").textContent
            let takingtotalrupeenumber = event.target.parentElement.closest("section").querySelector(".gettotalrupees").textContent
            let takingdatavlaueid = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid")
            let gettingsameeverycartitemincartdetails = (document.querySelector(`[data-valueid2="${takingdatavlaueid}"]`));
            gettingsameeverycartitemincartdetails.querySelector(".count").textContent = takingcountnumber
            document.querySelector(".cartdetails").nextElementSibling.querySelector(".gettotalrupees").textContent = takingtotalrupeenumber
            let gettingsamedatavalueidinsection = (document.querySelector(`[data-valueid="${takingdatavlaueid}"]`));
            let gettingsamedtavalieidincartdetails = document.querySelector(`[data-valueid2="${takingdatavlaueid}"]`)
            if (event.target.parentElement.parentElement.closest(".cart-items").children.length == 1) {
                let totalruppesdiv2 = document.querySelector(".totalrupees");
                totalruppesdiv2.classList.add("d-none");
                totalruppesdiv2.classList.remove("d-flex");
                let totalrupeediv = document.querySelector(".totalrupeedetails");
                totalrupeediv.classList.add("remove")
            }
            gettingsamedatavalueidinsection.remove()
            gettingsamedtavalieidincartdetails.remove()



        }



        if (!document.querySelector(".everycartitem")) {
            document.querySelector(".ordernow").disabled = true
            document.querySelector(".ordernow button").style.cursor = "not-allowed"
            document.querySelector(".ordernow button").innerText = "Your Cart Is Empty Please Add Some Products"
            document.querySelector(".ordernow button").style.backgroundColor="grey"






        }


    }


    else {


        countnumber.textContent = parseInt(countnumber.textContent) - 1




        let gettingtotalrupees = (event.target.closest(".everycartitem").parentElement.nextElementSibling.querySelector(".gettotalrupees"))
        let gettingeverycartitem = event.target.closest(".everycartitem").parentElement.querySelectorAll(".everycartitem")
        gettingtotalrupees.textContent = 0;

        gettingeverycartitem.forEach((e) => {

            let everycarteveryprice = parseInt(e.querySelector(".pricedata").textContent.slice(3));
            let everycount = parseInt(e.querySelector(".count").textContent);
            let gottotalprice = parseInt(everycarteveryprice * everycount);
            gettingtotalrupees.textContent = gottotalprice + parseInt(gettingtotalrupees.textContent);
        });







        if (event.target.parentElement.closest(".cartdetails")) {

            let takingcountnumber = event.target.parentElement.querySelector(".count").textContent
            let takingtotalrupeenumber = (event.target.parentElement.closest(".cartdetails").nextElementSibling.querySelector(".gettotalrupees")).textContent
            let takingdatavlaueid2 = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid2")
            let gettingsameeverycartiteminsection = (document.querySelector(`[data-valueid="${takingdatavlaueid2}"]`));

            gettingsameeverycartiteminsection.querySelector(".count").textContent = takingcountnumber
            document.querySelector("section").querySelector(".gettotalrupees").textContent = takingtotalrupeenumber





        }

        else {


            let takingcountnumber = event.target.parentElement.querySelector(".count").textContent


            let takingtotalrupeenumber = event.target.parentElement.closest("section").querySelector(".gettotalrupees").textContent


            let takingdatavlaueid = event.target.parentElement.closest(".everycartitem").getAttribute("data-valueid")


            let gettingsameeverycartitemincartdetails = (document.querySelector(`[data-valueid2="${takingdatavlaueid}"]`));

            gettingsameeverycartitemincartdetails.querySelector(".count").textContent = takingcountnumber



            document.querySelector(".cartdetails").nextElementSibling.querySelector(".gettotalrupees").textContent = takingtotalrupeenumber


        }



    }





    localStorage.setItem("dataafterrefreshincheckoutsection", (document.querySelector("section").outerHTML))
    localStorage.setItem("dataafterrefreshofcartnumber", (document.querySelector(".cartnumber").outerHTML))


    localStorage.setItem("gettotalrupeesandtotalcartdetails", document.querySelector(".totalrupeesandcartdetails").innerHTML)





    localStorage.setItem("setsectiondata2", document.querySelector("section").outerHTML);
    localStorage.setItem("setcartdata2", document.querySelector(".cartnumber").outerHTML);
    localStorage.setItem("setsectiondata", document.querySelector("section").outerHTML);
    localStorage.setItem("setcartdata", document.querySelector(".cartnumber").outerHTML);// product.js


    
    
    



}




function everycartitemtoproduct(event) {
    let gettingimageofeverycartitem = event.target.closest(".everycartitem").querySelector("img").src;

    fetch("index.html")
        .then((response) => response.text())

        .then((data) => {
            let createElement = document.createElement("div");
            createElement.innerHTML = data;
            createElement.querySelectorAll(".productimage img").forEach((e) => {
                if (e.src == gettingimageofeverycartitem) {

                    let getdatavalueid2=event.target.closest(".everycartitem").getAttribute("data-valueid2")
                    e.parentElement.closest(".productsection").setAttribute("data-id",getdatavalueid2)

                    
                    localStorage.setItem( "myproductpagedata", e.parentElement.closest(".productsection").outerHTML );

                    window.location.href = "product.html";
                }
            });
        });
}





document.getElementById("form1").addEventListener("submit", function (event) {


    event.preventDefault()



})

let flag;




document.querySelectorAll("#form1 input").forEach((e) => {

    e.addEventListener("input", () => {

        let allinputs = document.querySelectorAll("#form1 input")



        for (let i = 0; i <= allinputs.length - 1; i++) {




            if (allinputs[i].value.length >= 1) {
                flag = true
            }
            else {
                flag = false


                if (document.querySelector(".orderbutton12").hasAttribute("data-bs-toggle")) {
                    document.querySelector(".orderbutton12").removeAttribute("data-bs-toggle")
                    document.querySelector(".orderbutton12").removeAttribute("data-bs-target")
                }


                break
            }



        }



        if (flag && document.querySelector(".everycartitem")) {


            document.querySelector(".orderbutton12").setAttribute("data-bs-toggle", "modal")
            document.querySelector(".orderbutton12").setAttribute("data-bs-target", "#exampleModal")


            document.querySelector(".circular-progress").innerHTML = ""
            document.querySelector(".succesfull").classList.remove("kk")



            let circularProgress = document.querySelector(".circular-progress")


            let progressStartValue = 0;
            let progressEndValue = 100
            let speed = 12;

            circularProgress.style.background = `conic-gradient(#6fff00 ${(parseInt(progressStartValue) + 1) * 3.6}deg, #ededed 0deg)`

            let progress = setInterval(() => {

                progressStartValue++;

                circularProgress.style.background = `conic-gradient(#6fff00 ${progressStartValue * 3.6}deg, #ededed 0deg)`

                if (progressStartValue == progressEndValue) {


                    clearInterval(progress);

                    circularProgress.innerHTML = '  <img src="images/yes.png" alt="">';

                    document.querySelector(".succesfull").classList.add("kk")

                    document.querySelector(".circular-progress").style.background = "conic-gradient(#6fff00  3.6deg, #ededed 0deg)"


                }


            }, speed);


        }



    })
})










document.querySelector(".orderbutton12").addEventListener("click", () => {
    if (document.querySelector("#form1").checkValidity()) {

        document.querySelector(".circular-progress").innerHTML = ""
            document.querySelector(".succesfull").classList.remove("kk")



                let circularProgress = document.querySelector(".circular-progress")


                let progressStartValue = 0;
                let progressEndValue = 100
                let speed = 12;

                circularProgress.style.background = `conic-gradient(#6fff00 ${(parseInt(progressStartValue) + 1) * 3.6}deg, #ededed 0deg)`

                let progress = setInterval(() => {

                    progressStartValue++;

                    circularProgress.style.background = `conic-gradient(#6fff00 ${progressStartValue * 3.6}deg, #ededed 0deg)`

                    if (progressStartValue == progressEndValue) {


                        clearInterval(progress);

                        circularProgress.innerHTML = '  <img src="images/yes.png" alt="">';

                        document.querySelector(".succesfull").classList.add("kk")

                        document.querySelector(".circular-progress").style.background = "conic-gradient(#6fff00  3.6deg, #ededed 0deg)"


                    }


                }, speed);
    }
})





window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      this.location.reload()
    }
  });