import {MealPlanner} from "./OtherPages/Mealplanner.js"
import {getFrigeHTML} from "./OtherPages/Frigeitem.js"

const burger = document.querySelector('#menubar');
const cross = document.querySelector('#cutbar');
const sidebar = document.querySelector('.sidebar');
const midSection = document.querySelector('.midsection');
const addItems = document.querySelector('.additem');
const frigeItems = document.querySelector('#frigeItem');
const findRecipeSec = document.querySelector('.findRecipes');
const mealPlanner = document.querySelector('.mealPlan');
const deshBoard = document.querySelector('.Dashboard');
const footer = document.querySelector('.Footer');

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
    midSection.classList.add("flex");
    footer.innerHTML = ``;
    midSection.classList.add("h-screen")
    midSection.style.backgroundColor = "seagreen";
    midSection.innerHTML = `
    <form class="flex flex-col gap-4">
        <h1 class="font-bold text-2xl text-center bg-white p-3 rounded-2xl">Add Item</h1>
        <div class="flex  flex-col  items-center p-5 bg-amber-50 border-gray-300 border rounded-[20px]">
            <ul class="grid gap-5 text-[20px]">
                <li>Enter your item name</li>
                <input id="item" class="h-8 px-2" type="text"placeholder="ex:- Tomato">
                <select class="selectCate">
                    <option  value="vegitable">Vegitable</option>
                    <option  value="Fruits">Fruit</option>
                    <option  value="Recipes">Recipes</option>
                    <option  value="other">other</option>
                </select>
                <li>In how many days your item will expire?</li>
                <input id="exdate" class="h-8 px-2" type="number" placeholder="ex:- 3">
                <button type="button" id="addBtn"class="hover:-bg-amber-200 cursor-pointer bg-amber-300 h-10 rounded-[5px]">Add item</button>
            </ul>
        </div>
    </form>`
    const AddBtn = document.querySelector('#addBtn');
    const options = document.querySelector('.selectCate');
    let itemsCategory = [];
    options.addEventListener('click',function(e){
        itemsCategory.push(e.target.value);
    })
    let items = JSON.parse(localStorage.getItem('frige'))||[];
    AddBtn.addEventListener('click',()=>{
        const category = itemsCategory[itemsCategory.length-1]
        let item = document.querySelector('#item');
        let expireD = document.querySelector('#exdate');
        items.push({itm : item.value ,ex : expireD.value,Category:category});

        //content clear
        item.value="";
        expireD.value = "";

        localStorage.setItem('frige',JSON.stringify(items));
    });
});

frigeItems.addEventListener('click',()=>{
    footer.innerHTML = ``;

    getFrigeHTML(midSection);

    
    //take all items and store them from the localstorage
    async function updateItems(){
        let items = JSON.parse(localStorage.getItem('frige'))||[];
        let MyItemPics = [];
        //create
        const myfun = async()=>{
            try{
                const response = await fetch("http://localhost:3000/fridgeItem",{
                    method:'POST',
                    headers:{ 'Content-Type': 'application/json' },
                    body:JSON.stringify(items)
                });
                if(response){
                    const data = await response.json();
                    MyItemPics.push(...data.itemPics);
                }
            }catch(err){
                console.log("Error based on something says:- ",err.message);
            }
        }
        const handler = async()=>{
            await myfun();

            for(let i=0;i<items.length;i++){
                let frigeNewItem = document.createElement('ul');
                frigeNewItem.classList.add("flex","flex-row","p-2","bg-white","rounded-[10px]","text-2xl","justify-around","items-center");
    
    
                frigeNewItem.innerHTML = `
                    <div title="Expires in:- ${items[i].ex}d" class=" p-2 flex items-center justify-around flex-col gap-2  border border-[#ddd] rounded-lg">
                        <input type="checkbox" value="${items[i].itm}"id="check" class="check appearance-none mr-13 h-5 w-5 border border-[#ddd] rounded-xs inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-[20px] checked:after:font-bold ">
                        <img class="h-17 rounded-[5px]" src="${MyItemPics[i]?MyItemPics[i]:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPp2yIijUoYN_NhUd79gE73K_MTbdk7Z5QicZgz6F1qg&s=10"}" alt="${items[i].itm}">
                        <span class="font-bold text-sm w-full text-center">${items[i].itm}</span>
                    </div>`
                    document.querySelector('.LowerCont').appendChild(frigeNewItem);
            }
            //checkbox handling and create array for prompt
            let allCheckBox = document.querySelectorAll('#check');
            
            let promptList = [];
            
            allCheckBox.forEach(checkboxes=>{
                checkboxes.addEventListener('change',()=>{
                    if(checkboxes.checked){
                        if(!promptList.includes(checkboxes.value)){
                            promptList.push(checkboxes.value.toLowerCase());
                        }
                    }else{
                        const delInx = promptList.indexOf(checkboxes.value);
                        promptList.splice(delInx,1);
                    }
                });
                
            });

            
            //make find recipe prompt and jump to find recipe section 
            const findRecipeBtn = document.querySelector('.findRecipe');
            findRecipeBtn.addEventListener('click',async()=>{
                openRecipe();
                //take response 
                try{
                    console.log(promptList);
                    //link :- http://localhost:3000/
                    const response = await fetch("https://fresh-plate.onrender.com/askRecipe",{
                        method:'POST',
                        headers:{ 'Content-Type': 'application/json' },
                        body:JSON.stringify(promptList)
                    });
                    if(response.ok){
                        const data = await response.json();
                        console.log("Data:- ",data);
                        if(data.status ===200){
                            //name the data
                            const recipes = data.item;
                            if(data.item.length>3){
                                midSection.classList.remove("h-screen");
                            }

                            //create a div
                            recipes.map((recipe)=>{
                                const recipeDiv = document.createElement('div');
                                recipeDiv.value = recipe.method;
                                recipeDiv.classList.add("checkMethod","cursor-pointer","p-1","w-full","flex","flex-col","gap-1","bg-white","border","border-[#ddd]","rounded-2xl","items-center","justify-around");
                                recipeDiv.innerHTML = `
                                <img class="rounded-2xl h-30 w-full object-cover "src="${recipe.Pic}">
                                <h1 class="text-sm text-center text-gray-800">${recipe.Name}</h1>
                                <p class="text-[10px] text-gray-800">Category:- ${recipe.category}</p>`
                        
                                document.querySelector('.findRecipepagetext').appendChild(recipeDiv);
                                
                            })
                            const allRecipe = document.querySelectorAll(".checkMethod");
                            allRecipe.forEach((recipe)=>{
                                recipe.addEventListener('click',()=>{

                                    const existingModal = document.querySelector('.methodshow');
                                    if (existingModal) existingModal.remove();//remove previous recipe


                                    const MethodDiv = document.createElement('div');
                                    MethodDiv.classList.add("methodshow","w-full","h-full","bg-[rgba(0,0,0,0.5)]","backdrop-blur-2xl","flex","items-center","justify-center","fixed","top-0","left-0")
                                    MethodDiv.innerHTML = `
                                    <div class="methodshow2 w-75 bg-[#ddd] rounded-2xl md:w-100  lg:w-120  p-3 text-center">
                                        <h1 onclick="document.querySelector('.methodshow').style.display = 'none';"class="cut cursor-pointer"><b>👈</b></h1>
                                        <h1>${recipe.value}</h1>
                                    </div>`
                                    midSection.appendChild(MethodDiv);
                                })
                            })

                        }else{
                            document.querySelector('.FoundSomething').textContent = data.message;
                        }
                        
                    }
                }catch(err){
                    throw new Error(err);
                }
                
            });
        }
        handler();
    }
    updateItems();
    
    
    
});
const openRecipe = async()=>{
    midSection.classList.remove("flex");
    footer.innerHTML = ``;

    midSection.style.backgroundColor = "rgb(173, 154, 139)";
    midSection.innerHTML = `
    <h1 class="FoundSomething text-[25px] text-white font-bold md:text-2xl w-full text-center">Show all recipes</h1>
    <div class="findRecipepagetext w-full  m-4 grid gap-3 items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold text-2xl">

    </div>`
    
}
findRecipeSec.addEventListener('click',()=>{openRecipe()})

mealPlanner.addEventListener('click',()=>{
    MealPlanner(midSection,footer);
})

function giveFooter(){
    midSection.classList.add("flex");
    footer.innerHTML = `
    <div class=" flex shadow-[0px_0px_10px_rgba(0,0,0,0.7)] flex-row items-center justify-around md:max-w-200 w-full border border-[#ddd] p-2 pt-5 rounded-[20px_20px_0px_0px] bg-white">
                <div class=" flex flex-col items-center justify-around  gap-3">
                    <h1 class="text-2xl font-bold">Fresh<span class="text-red-500">plate</span></h1>
                    <div class="flex gap-5 text-sm flex-row items-center justify-between">
                        <div class="flex flex-col items-center justify-around">
                            <span><b>Explore</b></span>
                            <span>Blogs</span>
                            <span>Adds</span>
                            <span>Docs</span>
                            <span>About</span>
                        </div>
                        <div class="flex flex-col items-center justify-around">
                            <span><b>Contect</b></span>
                            <span>Facebook</span>
                            <span>Linkdln</span>
                            <span>Instagram</span>
                            <span>Whatsup</span>
                        </div>
                    </div>
                </div>
                <div class="shadow-[0px_0px_10px_rgba(0,0,0,0.4)] p-2 max-w-1/2 border-[#ddd] rounded-2xl border flex md:flex-row flex-col items-center justify-around gap-2">
                    <img class="rounded-2xl  h-15 md:h-20" src="photos/developer.PNG" alt="developer photo">
                    <div class="text-sm text-center">
                        <h4><b>Developer</b></h4>
                        <h5>Yashraj bhati a aspiring full stack developer who practice daily to improve its skills.</h5>
                    </div>
                </div>
            </div>
        `
}
function giveDeshboard(){
    let items = JSON.parse(localStorage.getItem('frige'))||[];
    let fruits = 0;
    let vegitables = 0;
    let other = 0;
    let Recipes = 0;

    items.forEach((e)=>{
        if(e.Category==='Fruits'){
            fruits+=1;
        }else if(e.Category==="Recipes"){
            Recipes+=1;
        }else if(e.Category==="other"){
            other+=1;
        }else{
            vegitables+=1;
        }
    })
    midSection.classList.remove("h-screen")
    midSection.innerHTML = `
    <!-- Expire section items -->

    <div class="w-full rounded-2xl p-3 bg-green-600 flex items-center justify-center ">
        <div class="herosection border border-gray-400 shadow-[0px_0px_20px_rgba(0,0,0,0.7)] flex flex-col gap-5  bg-white p-3 md:w-200 w-full rounded-2xl">
            <div class="flex flex-row items-center gap-4 justify-between text-sm">
                <h4>Items which are going to expire today:- </h4>
                <a href="#">view all</a>
            </div>
            <div class="overflow-x-auto flex flex-row items-center justify-evenly gap-2 ">
                <div class="flex md:flex-row md:gap-2 p-1 flex-col items-center justify-center min-h-25 text-sm w-30 md:w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 w-12 rounded-[50%]"src="photos/tomato.jpg" alt="tomato">
                    <div>
                        <h4><b>Tomato</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- vegitable</p>
                    </div>
                    
                </div>
                <div class="flex md:gap-2 md:flex-row p-1 flex-col items-center justify-center min-h-25 text-sm w-30 md:w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 w-12 rounded-[50%]"src="photos/banana.jpg" alt="tomato">
                    <div>
                        <h4><b>Banana</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- Fruit</p>
                    </div>
                    
                </div>
                <div class="flex md:gap-2 md:flex-row p-1 flex-col items-center justify-center min-h-25 text-sm w-30 md:w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 rounded-[50%] w-12"src="photos/aalu.jpg" alt="tomato">
                    <div>
                        <h4><b>Tomato</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- vegitable</p>
                    </div>
                    
                </div>
                
            </div>


        </div>
    </div>
    <!-- Analysis div -->
    <div class="w-full p-3  flex md:flex-row flex-col items-center justify-center gap-3">
        <div class="h-auto w-full p-2 md:max-w-140 border flex flex-col gap-5 items-center justify-around rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.7)] border-[#ddd]  bg-white">
            <h4>Category wise food distributions:- </h4>
            <div class="w-full flex flex-row items-center gap-4 justify-evenly">
                <div class="flex flex-col items-center justify-between">
                    <p><b>Vegitables</b></p>
                    <p>${vegitables}</p>
                </div>
                <div>
                    <p><b>Fruits</b></p>
                    <p>${fruits}</p>
                </div>
                <div>
                    <p><b>Recipes</b></p>
                    <p>${Recipes}</p>
                </div>
                <div>
                    <p><b>Other</b></p>
                    <p>${other}</p>
                </div>
            </div>
        </div>
        <div class="h-auto w-full p-2 flex flex-col items-center justify-center gap-2 md:max-w-55 shadow-[0px_0px_10px_rgba(0,0,0,0.7)] border rounded-2xl border-[#ddd] bg-white">
            <h4>Total frige items available:- ${items.length}</h4>
            <h4>Total expire items:- 0</h4>
            <h4>Total categories:- ${items.length}</h4>
        </div>
    </div>

    <!-- Graph divs -->
    <div class="w-full  p-3 flex items-center justify-around">
        <div class=" p-2 h-auto shadow-[0px_0px_10px_rgba(0,0,0,0.7)] md:h-50 max-h-150 md:max-w-200 border border-[#ddd] rounded-2xl w-full bg-white">
            <h5>Graphs to show you exect conditions</h5>
            <div class="flex flex-col md:flex-row gap-2 items-center justify-around">
                <h1>Chart</h1>
            </div>
            

        </div>
    </div>  
    <!-- items that already expired -->
    <div class="w-full  p-3 flex  items-center justify-center">
        <div class="p-2 gap-2 border border-[#ddd] flex shadow-[0px_0px_10px_rgba(0,0,0,0.7)] md:max-w-200 flex-col items-center justify-around w-full bg-white rounded-2xl">
            <div class="flex items-center justify-between w-full">
                <h4>items already expired:- </h4>
                <a href="#">View all</a>
            </div>
            <div class="flex w-full flex-row gap-2 items-center justify-evenly">
                <div class="flex md:flex-row md:gap-2 p-1 flex-col items-center justify-center min-h-25 text-sm w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 w-12 rounded-[50%]"src="photos/tomato.jpg" alt="tomato">
                    <div>
                        <h4><b>Tomato</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- vegitable</p>
                    </div>
                    
                </div>
                <div class="flex md:gap-2 md:flex-row p-1 flex-col items-center justify-center min-h-25 text-sm  w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 w-12 rounded-[50%]"src="photos/banana.jpg" alt="tomato">
                    <div>
                        <h4><b>Banana</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- Fruit</p>
                    </div>
                    
                </div>
                <div class="flex w-1/3 md:gap-2 md:flex-row p-1 flex-col items-center justify-center min-h-25 text-sm  md:w-1/3 border border-[#ddd] rounded-2xl">
                    <img class="h-12 rounded-[50%] w-12"src="photos/aalu.jpg" alt="tomato">
                    <div>
                        <h4><b>Tomato</b></h4>
                        <p class="text-[10px]">expire date:- 24/08/2026</p>
                        <p class="text-[10px]">category:- vegitable</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
`;
}
deshBoard.addEventListener('click',()=>{
    midSection.style.backgroundColor = "white";
    giveFooter();
    giveDeshboard();
})
window.onload = function(){
    giveFooter();
    giveDeshboard();
}

