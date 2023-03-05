const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    document.querySelector('body').classList.toggle('overflow-hidden');

})