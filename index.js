const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('.primary-nav')
const primary = document.querySelector('.primary-navigation')
open.addEventListener("click",function(){
    open.style.transform = "rotate(1turn)"
nav.style.transform = "scaleY(1)"
open.style.display="none"
close.style.display= "block"
primary.classList.add("delaya")
})

close.addEventListener("click",function() {
    nav.style.transform="scaleY(0)"
    close.style.display = "none"
open.style.display="block"
})