function getFrigeHTML(midSection){
    midSection.style.backgroundColor = "white";
    return midSection.innerHTML=`
    <div class="h-full w-full bg-white p-2">
        <h1 class="font-bold text-lg md:text-2xl m-2 ">Our Fridge Item</h1>
        <div class="LowerCont grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-1">
            
        </div>
        <button class="findRecipe p-3 hover:bg-pink-800 text-[20px] cursor-pointer font-bold fixed md:fixed md:bottom-3 md:right-3 bottom-1 right-1 bg-pink-900 border text-white border-white rounded-4xl">Find recipe</button>
    </div>
    `




    // return midSection.innerHTML=`
    // <h1 class="font-bold md:w-1/2 w-9/10 text-2xl text-center bg-white p-3 rounded-2xl">Your frige</h1>
    // <div class="frigeContainer md:w-1/2 flex flex-col gap-3 p-3 bg-white h-auto w-9/10 rounded-2xl border border-gray-500">
    //     <div class="firstExp p-3 min-h-35 max-h-35 w-full rounded-2xl overflow-y-auto shadow shadow-gray-400  bg-center object-cover"style="background-image:url('./imagesfrige/upper.png')">
    //         <div class="upperCont flex flex-col gap-2  text-2xl">
    //         </div>
    //     </div>

    //     <div class="secondExp p-3 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/middle.png')">
    //         <div class="MidCont flex flex-col gap-2  text-2xl">
    //         </div>
    //     </div>
    //     <div class="thirdExp p-3 min-h-35 overflow-y-auto max-h-35 w-full rounded-2xl shadow shadow-gray-400 overflow-hidden bg-center object-cover"style="background-image:url('./imagesfrige/lower.png')">
    //     <div class="LowerCont flex flex-col gap-2  text-2xl">
    //     </div>
    //     </div>
    // </div>
    // 
        
    // `
}

export {getFrigeHTML};