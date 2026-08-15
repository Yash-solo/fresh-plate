const burger = document.querySelector('#menubar');
const cross = document.querySelector('#cutbar');
const sidebar = document.querySelector('.sidebar');
const midSection = document.querySelector('.midsection');
const addItems = document.querySelector('.additem');
const frigeItems = document.querySelector('#frigeItem');
const findRecipeSec = document.querySelector('.findRecipes');

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
    });
});

frigeItems.addEventListener('click',()=>{

    midSection.innerHTML = `
    <h1 class="font-bold md:w-1/2 w-9/10 text-2xl text-center bg-white p-3 rounded-2xl">Your frige</h1>
    <div class="frigeContainer md:w-1/2 flex flex-col gap-3 p-3 bg-white h-auto w-9/10 rounded-2xl border border-gray-500">
        <div class="firstExp p-3 min-h-35 max-h-35 w-full rounded-2xl overflow-y-auto shadow shadow-gray-400  bg-center object-cover"style="background-image:url('./imagesfrige/upper.png')">
            <div class="upperCont flex flex-col gap-2  text-2xl">
            </div>
        </div>

        <div class="secondExp p-3 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/middle.png')">
            <div class="MidCont flex flex-col gap-2  text-2xl">
            </div>
        </div>
        <div class="thirdExp p-3 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/lower.png')">
        <div class="LowerCont flex flex-col gap-2  text-2xl">
        </div>
        </div>
    </div>
    <button class="findRecipe p-3 hover:bg-pink-800 text-[20px] cursor-pointer font-bold fixed md:fixed md:bottom-3 md:right-3 bottom-1 right-1 bg-pink-900 border text-white border-white rounded-4xl">Find recipe</button>
        
        `;
    //screen background
    midSection.style.backgroundColor = "rgba(4, 1, 43)";
    
    //take all items and store them from the localstorage
    function updateItems(){
        let items = JSON.parse(localStorage.getItem('frige'))||[];
            
        //create
        for(let food of items){
            let frigeNewItem = document.createElement('ul');
            frigeNewItem.classList.add("flex","flex-row","p-2","bg-white","rounded-[10px]","text-2xl","justify-around","items-center");

            if(food.ex<=3){
                frigeNewItem.innerHTML = `
                <input type="checkbox"value="${food.itm}" id="check"class="appearance-none h-[22px] w-[22px] border border-black rounded-[2px] inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-[20px] checked:after:text-white checked:after:font-bold">
                <li>${food.itm}</li>
                <p class="text-[15px] rounded-2xl bg-red-300 text-center px-2  text-red-500">${food.ex} days</p>
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 rounded-xs cursor-pointer">:</button>`
                    
                document.querySelector('.upperCont').appendChild(frigeNewItem);
            }else if(food.ex<=5){
                frigeNewItem.innerHTML = `
                <input type="checkbox" value="${food.itm}" id="check"class="appearance-none h-[22px] w-[22px] border border-black rounded-[2px] inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-[20px] checked:after:text-white checked:after:font-bold">
                <li>${food.itm}</li>
                <p class="text-[15px] rounded-2xl bg-amber-200 text-center px-2  text-amber-500">${food.ex} days</p>
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 cursor-pointer rounded-xs">:</button>`
                document.querySelector('.MidCont').appendChild(frigeNewItem);
            }else{
                frigeNewItem.innerHTML = `
                <input type="checkbox" value="${food.itm}"id="check" class="appearance-none h-5.5 w-5.5 border border-black rounded-xs inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-[20px] checked:after:font-bold ">
                <li>${food.itm}</li>
                <p class="text-[15px] rounded-2xl bg-green-200 text-center px-2  text-green-600">${food.ex} days</p>
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 cursor-pointer rounded-xs">:</button>`
                document.querySelector('.LowerCont').appendChild(frigeNewItem);
            }
        
        }
    }
    updateItems();

    //checkbox handling and create array for prompt
    let allCheckBox = document.querySelectorAll('#check');
    let promptList = [];
    
    allCheckBox.forEach(checkboxes=>{
        checkboxes.addEventListener('change',()=>{
            if(checkboxes.checked){
                if(!promptList.includes(checkboxes.value)){
                    promptList.push(checkboxes.value);
                }
            }else{
                const delInx = promptList.indexOf(checkboxes.value);
                promptList.splice(delInx,1);
            }
        });
        
    });
    
    //make find recipe prompt and jump to find recipe section 
    const findRecipeBtn = document.querySelector('.findRecipe');
    findRecipeBtn.addEventListener('click',()=>{
        openRecipe();
        console.log(`Give me 4 recipes which can I make using this items ${promptList}. always remember you have to suggest a recipe which anyone can make using only this 3 items.`);
    });
    
    //delete a perticular item via update
    const deleteItem = document.querySelectorAll('.deleteitm');
    deleteItem.forEach(btn=>{
        btn.addEventListener('click',()=>{
            //update local storage using array filter
            let allItemsList = JSON.parse(localStorage.getItem('frige'));
            let filteredList = allItemsList.filter(ele=>{
                return ele.itm !== btn.value;
            });
            console.log(allItemsList);
            console.log(filteredList);
            

            localStorage.setItem('frige',JSON.stringify(filteredList));
            document.querySelector('.upperCont').innerHTML = ``;
            document.querySelector('.MidCont').innerHTML = ``;
            document.querySelector('.LowerCont').innerHTML = ``;
            updateItems();
        });
    });
});

findRecipeSec.addEventListener('click',openRecipe=()=>{
    midSection.style.backgroundColor = "rgb(173, 154, 139)";
    midSection.innerHTML = `
    <h1 class="font-bold text-2xl">Here I will show recipes</h1>`
})