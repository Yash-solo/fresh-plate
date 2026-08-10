const burger = document.querySelector('#menubar');
const cross = document.querySelector('#cutbar');
const sidebar = document.querySelector('.sidebar');
burger.addEventListener('click',()=>{
    sidebar.style.display = 'flex';
    cross.style.display = "flex";
    burger.style.display = "none";
})

cross.addEventListener('click',()=>{
    sidebar.style.display = "none";
    cross.style.display = "none";
    burger.style.display = "flex";
})