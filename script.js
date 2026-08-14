const burger = document.querySelector('#menubar');
const cross = document.querySelector('#cutbar');
const sidebar = document.querySelector('.sidebar');
const midSection = document.querySelector('.midsection');
const addItems = document.querySelector('.additem');
const frigeItems = document.querySelector('#frigeItem');

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

addItems.addEventListener('click',()=>{
    midSection.style.backgroundColor = "seagreen";
    midSection.innerHTML = `
    <form class="flex flex-col gap-4">
        <h1 class="font-bold text-2xl text-center bg-white p-3 rounded-2xl">Add Item</h1>
        <div class="flex  flex-col  items-center p-5 bg-amber-50 border-gray-300 border rounded-[20px]">
            <ul class="grid gap-5 text-[20px]">
                <li>Enter your item name</li>
                <input id="item" class="h-8 px-2" type="text"placeholder="ex:- Tomato">
                <li>In how many days your item will expire?</li>
                <input id="exdate" class="h-8 px-2" type="number" placeholder="ex:- 3">
                <button type="button" id="addBtn"class="cursor-pointer bg-amber-300 h-10 rounded-[5px]">Add item</button>
            </ul>
        </div>
    </form>`
    const AddBtn = document.querySelector('#addBtn');

    let items = JSON.parse(localStorage.getItem('frige'))||[];
    AddBtn.addEventListener('click',()=>{
        let item = document.querySelector('#item');
        let expireD = document.querySelector('#exdate');
        items.push({itm : item.value ,ex : expireD.value });

        //content clear
        item.value="";
        expireD.value = "";

        localStorage.setItem('frige',JSON.stringify(items));
        alert("Your item added succesfully");
    })
})

frigeItems.addEventListener('click',()=>{
    midSection.innerHTML = `
    `;
    midSection.style.backgroundColor = "rgba(242, 105, 158, 0.929)";
})