const burgerBtn = document.getElementById('burger');
const menuBar = document.getElementById('menu');
const hLinks = document.querySelectorAll('.hLink');
const moon = document.querySelector("#moon")
const body = document.querySelector("body")

burgerBtn.addEventListener('click',()=>{
    menuBar.classList.toggle('hidden')
    burgerBtn.classList.toggle('bg-white')

})
hLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        menuBar.classList.toggle('hidden')
        burgerBtn.classList.toggle('bg-white')
    
    })

})
moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})


