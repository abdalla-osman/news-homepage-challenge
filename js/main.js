let buttonMenu=document.querySelectorAll('.navbtn img');
let nav=document.querySelector('.menu');
let overley=document.querySelector('.ovrley');
buttonMenu.forEach((i)=>{
    i.addEventListener('click',()=>{
        nav.classList.toggle('closeMenu')
        overley.classList.toggle('active')
    })
})