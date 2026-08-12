const burger = document.querySelector('#menubar');
const cross = document.querySelector('#cutbar');
const sidebar = document.querySelector('.sidebar');
burger.addEventListener('click',()=>{
    sidebar.classList.remove('left-0');
    sidebar.classList.toggle('-left-full');
    sidebar.classList.toggle('left-0');
    sidebar.classList.remove('-left-full')
    cross.style.display = "flex";
    burger.style.display = "none";
})

cross.addEventListener('click',()=>{
    sidebar.classList.remove('left-0');
    sidebar.classList.toggle('-left-full');
    cross.style.display = "none";
    burger.style.display = "flex";
})