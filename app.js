const burgerBtn = document.getElementById('burger');
const menuBar = document.getElementById('menu');


burgerBtn.addEventListener('click',()=>{
    menuBar.classList.toggle('hidden')
    burgerBtn.classList.toggle('bg-white')

})