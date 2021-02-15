const hambergerEl = document.querySelector('.hamberger');
const navbarEl = document.querySelector('.navbar')

hambergerEl.addEventListener('click',()=>{
    navbarEl.classList.toggle('show')
})