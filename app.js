const burgerBtn = document.getElementById('burger');
const menuBar = document.getElementById('menu');
const hLinks = document.querySelectorAll('.hLink');

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


