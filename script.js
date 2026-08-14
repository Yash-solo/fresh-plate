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
    <h1 class="font-bold md:w-2/5 w-9/10 text-2xl text-center bg-white p-3 rounded-2xl">Your frige</h1>
    <div class="frigeContainer md:w-2/5 flex flex-col gap-3 p-3 bg-white h-auto w-9/10 rounded-2xl border border-gray-500">
        <div class="firstExp p-3 min-h-35 max-h-35 w-full rounded-2xl overflow-y-auto shadow shadow-gray-400  bg-center object-cover"style="background-image:url('./imagesfrige/upper.png')">
            <div class="upperCont flex flex-col gap-2  text-2xl">
            </div>
        </div>

        <div class="secondExp p-1 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/middle.png')">
            <div class="MidCont flex flex-col gap-2  text-2xl">
            </div>
        </div>
        <div class="thirdExp p-1 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/lower.png')">
            <div class="LowerCont flex flex-col gap-2  text-2xl">
            </div>
        </div>
    </div>
    <button class="p-3 text-[20px] cursor-pointer font-bold fixed md:fixed md:bottom-3 md:right-3 bottom-1 right-1 bg-pink-900 border text-white border-white rounded-4xl">Find recipe</button>

    `;
    midSection.style.backgroundColor = "rgba(247, 30, 135)";
})