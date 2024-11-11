const wrapper =document.querySelector(".sliderWrapper")

// console.log(wrapper)

// wrapper.style.transform ="translateX(-200vw)"

const products =[{
    id:1,
    title:"Air Force",
    price:119,
    colors:[
        {
            code: "black",
            img:"img/air.png.png",
        },
        {
            code: "darkblue",
            img:"img/blue.png",
        },

    ],
},
{
    id:2,
    title:"Air Jorden",
    price:149,
    colors:[
        {
            code: "black",
            img:"img/jorden.png.png",
        },
        {
            code: "darkblue",
            img:"img/jorden.png.png",
        },

    ],
},
{
    id:3,
    title:"BLAZER",
    price:126,
    colors:[
        {
            code: "white",
            img:"img/blazer.png.png",
        },
        {
            code: "gray",
            img:"img/blazer.png.png",
        },

    ],
},
{
    id:4,
    title:"CRATER",
    price:111,
    colors:[
        {
            code: "white",
            img:"img/crater.png",
        },
        {
            code: "gray",
            img:"img/crater.png",
        },

    ],
},
{
    id:5,
    title:"HIPPIE",
    price: 99,
    colors:[
        {
            code: "white",
            img:"img/hippie.png",
        },
        {
            code: "gray",
            img:"img/hippie.png",
        },

    ],
},
];


let choosenProduct =products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");

const menuItem=document.querySelectorAll(".menuItems")

menuItem.forEach((item, index)=>{
    item.addEventListener("click" , ()=>{

        // change the current slide
        wrapper.style.transform =`translateX(${-100 * index}vw)`;
        console.log("You clicked!")

        // change the choose product
        choosenProduct =products[index]

        // change text of current product

        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent=choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img

    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        size.style.backgroundColor ="white";
        size.style.color="black";
});
size.style.backgroundColor ="black";
size.style.color="white";
});

const productButton= document.querySelector(".productBtn");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click" , ()=>{
    payment.style.display="flex";
});

close.addEventListener("click" ,()=>{
    payment.style.display="none";
});


// let currentIndex = 0;
// const slides = document.querySelectorAll(".sliderItem");

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? "block" : "none";
//     });
// }

// document.querySelector(".buyButton").addEventListener("click", () => {
//     document.querySelector(".payment").style.display = "block";
// });
// showSlide(currentIndex);






