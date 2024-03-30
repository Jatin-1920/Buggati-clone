const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('.primary-nav')
const primary = document.querySelector('.primary-navigation')
open.addEventListener("click",function(){
    open.style.transform = "rotate(1turn)"
nav.style.transform="translateY(0)"
open.style.display="none"
close.style.display= "block"
})

close.addEventListener("click",function() {
    nav.style.transform="translateY(-100%)"
    close.style.display = "none"
open.style.display="block"
})
