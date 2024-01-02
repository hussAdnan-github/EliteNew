// loader
window.addEventListener('load' , () =>{
    const loader = document.querySelector('.loader');
    const bgLoader = document.querySelector('.bg-loader')
    loader.classList.add('hide-load');
    bgLoader.classList.add('hide-load');

    loader.addEventListener('transitionend' , () =>{
      document.body.removeChild('leader');
    })
  })



  
  window.addEventListener('scroll' , ()=>{
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky' , window.scrollY > 0 );
    
  
  })
const up = document.querySelector(".up")
const down = document.querySelector(".down")

const facebook = document.querySelector(".facebook")
const instgram = document.querySelector(".instgram")
const whatsapp = document.querySelector(".whatsapp")


const phoneCard = document.querySelector('.phone-about .card')
// const cardText = document.querySelector('.phone-about .card .card-text')



window.onscroll = function() {
    this.scrollY >= 500 ? up.classList.add("show") : up.classList.remove("show");
    this.scrollY >= 600 ? facebook.classList.add("show") : facebook.classList.remove("show");
    this.scrollY >= 700 ? instgram.classList.add("show") : instgram.classList.remove("show");
    this.scrollY >= 800 ? whatsapp.classList.add("show") : whatsapp.classList.remove("show");

}

// phoneCard.onmouseenter = () =>{
//     window.scrollTo({
//         top: 830,
//         behavior: "smooth",
//     })
// }
up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
}

down.onclick = function() {
    window.scrollTo({
        top: 700,
        behavior: "smooth",

    })
}

