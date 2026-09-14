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
    midSection.classList.add("flex"); 
    midSection.classList.add("h-screen");
    footer.innerHTML = ``;

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
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 rounded-xs cursor-pointer"><svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                    </svg></button>`
                    
                document.querySelector('.upperCont').appendChild(frigeNewItem);
            }else if(food.ex<=5){
                frigeNewItem.innerHTML = `
                <input type="checkbox" value="${food.itm}" id="check"class="appearance-none h-[22px] w-[22px] border border-black rounded-[2px] inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-[20px] checked:after:text-white checked:after:font-bold">
                <li>${food.itm}</li>
                <p class="text-[15px] rounded-2xl bg-amber-200 text-center px-2  text-amber-500">${food.ex} days</p>
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 cursor-pointer rounded-xs"><svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                    </svg></button>`
                document.querySelector('.MidCont').appendChild(frigeNewItem);
            }else{
                frigeNewItem.innerHTML = `
                <input type="checkbox" value="${food.itm}"id="check" class="appearance-none h-5.5 w-5.5 border border-black rounded-xs inline-flex justify-center items-center cursor-pointer checked:bg-green-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-[20px] checked:after:font-bold ">
                <li>${food.itm}</li>
                <p class="text-[15px] rounded-2xl bg-green-200 text-center px-2  text-green-600">${food.ex} days</p>
                <button value="${food.itm}" class="deleteitm bg-amber-200 w-6 cursor-pointer rounded-xs"><svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                </button>`
                document.querySelector('.LowerCont').appendChild(frigeNewItem);
            }
        
        }

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
                
                //update via set 
                localStorage.setItem('frige',JSON.stringify(filteredList));

                document.querySelector('.upperCont').innerHTML = ``;
                document.querySelector('.MidCont').innerHTML = ``;
                document.querySelector('.LowerCont').innerHTML = ``;
                updateItems();
            });
        });
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
    findRecipeBtn.addEventListener('click',async()=>{
        openRecipe();
        //take response 

        const response = await fetch("recipes.json");
        const data = await response.json();
        console.log(data);
        console.log(promptList)
        const recipesList = data.filter((recipe)=>{
            return promptList.some((item)=>{
                return recipe.ingredients.includes(item);
            })
        })
        if(recipesList.length>3){
            midSection.classList.remove("h-screen");
        }
        recipesList.map((recipe)=>{
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add("p-1","w-full","flex","flex-col","gap-1","bg-white","border","border-[#ddd]","rounded-2xl","items-center","justify-around");
            recipeDiv.innerHTML = `
            <img class="rounded-2xl h-30 w-full object-cover "src="${recipe.RecipePic}">
            <h1 class="text-xl text-gray-800">${recipe.RecipeName}</h1>
            <p class="text-[10px] text-gray-800">Category:- ${recipe.category}</p>`

            document.querySelector('.findRecipepagetext').appendChild(recipeDiv);
        })
    });
    
    
});

findRecipeSec.addEventListener('click',openRecipe=async()=>{
    midSection.classList.remove("flex");
    footer.innerHTML = ``;

    midSection.style.backgroundColor = "rgb(173, 154, 139)";
    midSection.innerHTML = `
    <h1 class="text-[25px] text-white font-bold md:text-2xl w-full text-center">Show all recipes</h1>
    <div class="findRecipepagetext w-full  grid gap-3 items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold text-2xl">

    </div>`
})

mealPlanner.addEventListener('click',()=>{
    midSection.classList.add("flex");
    midSection.classList.add("h-screen")
    footer.innerHTML = ``;
    midSection.innerHTML = `
    <div class="MealWrap flex h-auto flex-col border overflow-hidden border-white rounded-4xl gap-0 lg:w-60/100 md:w-80/100 w-99/100 bg-gray-200">
        <h1 class="w-full max-h-20 min-h-18 bg-[rgba(0,0,0,0.1)] text-[30px] flex items-center justify-around">Meal Planner🍴</h1>
        <div class="chatSection max-h-150 min-h-100 md:min-h-112.5 lg:min-h-125 bg-white "></div>
        <div class="chatInputSec bg-[rgba(0,0,0,0.1)] p-2 flex flex-row items-center justify-between gap-1">
            <input class="inputBox px-2  bg-white rounded-2xl min-h-10 min-w-3/4" type="text" placeholder="Typing...">
            <button class="sendBtn bg-blue-500 shrink-0 cursor-pointer text-white rounded-2xl min-h-10 px-3">Send</button>
        </div>
    </div>`
    midSection.style.backgroundColor = "rgb(150, 150, 150)";

    const chatSec = document.querySelector('.chatSection');
    const sendBtn = document.querySelector('.sendBtn');
    const inputBox = document.querySelector('.inputBox');
    sendBtn.addEventListener('click',()=>{
        alert("Hello world");
    })
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
                    <p>0</p>
                </div>
                <div>
                    <p><b>Fruits</b></p>
                    <p>0</p>
                </div>
                <div>
                    <p><b>Recipes</b></p>
                    <p>0</p>
                </div>
            </div>
        </div>
        <div class="h-auto w-full p-2 flex flex-col items-center justify-center gap-2 md:max-w-55 shadow-[0px_0px_10px_rgba(0,0,0,0.7)] border rounded-2xl border-[#ddd] bg-white">
            <h4>Total frige items available:- 0</h4>
            <h4>Total expire items:- 0</h4>
            <h4>Total categories:- 0</h4>
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

