
const menubtn = document.querySelector(".menu-btn");
const list=document.querySelector(".list");
menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('open');
    list.classList.toggle('active');
});