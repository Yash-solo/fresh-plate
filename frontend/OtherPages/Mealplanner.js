import ItemModel from  "./ItemModel.json" with {type:"json"};
function MealPlanner(midSection,footer){

    midSection.classList.add("h-screen","flex","flex-col");
    midSection.style.backgroundColor = "white";
    midSection.classList.remove("justify-center","items-center");
    footer.innerHTML = ``;
    midSection.innerHTML = `
    <h1 class="font-bold md:text-gray-700 md:text-2xl text-lg">Plan your next week's meal</h1>
    <div class="md:grid md:grid-cols-2 md:gap-4">
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-blue-400 text-white rounded-[5px]">Monday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Monday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Monday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Monday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Monday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-red-400 text-white rounded-[5px]">Tuesday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Tuesday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Tuesday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Tuesday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Tuesday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-purple-400 text-white rounded-[5px]">Wednesday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Wednesday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Wednesday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Wednesday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Wednesday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-pink-400 text-white rounded-[5px]">Thusday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Thusday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Thusday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Thusday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Thusday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-green-400 text-white rounded-[5px]">Friday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Friday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Friday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Friday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Friday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-gray-400 text-white rounded-[5px]">Saterday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Saterday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Saterday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Saterday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Saterday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
        <div class="w-full p-2 flex flex-col items-center justify-around gap-1">
            <p class="p-1 w-full bg-orange-400 text-white rounded-[5px]">Sunday</p>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Breakfast :- </p>
                <input data-peer="Sunday" data-value="breakfast" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Lunch :- </p>
                <input data-peer="Sunday" data-value="lunch" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Snacks :- </p>
                <input data-peer="Sunday" data-value="snacks" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
            <div class="w-full p-1 border border-b-[#ddd] border-t-0 border-r-0 border-l-0 flex items-start justify-start gap-1">
                <p>Dinner :- </p>
                <input data-peer="Sunday" data-value="dinner" type="text" class="inputField focus:outline-0 px-2 ">
            </div>
        </div>
    </div>
    `
    const inputField = document.querySelectorAll('.inputField');
    inputField.forEach((input,index)=>{
        //when anyone click over it
        input.addEventListener('input',(e)=>{
            const MealPlanner = JSON.parse(localStorage.getItem("MealStorege"))||ItemModel;

            MealPlanner.forEach((day)=>{
                if(day.weekName===e.target.dataset.peer){
                    day[`${e.target.dataset.value}`] = e.target.value;
                }
            })
            
            localStorage.setItem("MealStorege",JSON.stringify(MealPlanner));
        })
        //go for next input
        input.addEventListener('keydown',(e)=>{
            if(e.key==="Enter"){
                e.preventDefault();
                const nextInput = inputField[index + 1];
                if(nextInput){
                    nextInput.focus();
                }
            }
        })
        //to read previous written queries
        const MealPlanner  = JSON.parse(localStorage.getItem("MealStorege"))||ItemModel;

        MealPlanner.forEach((day)=>{
            if(day.weekName === input.dataset.peer){
                input.value = day[`${input.dataset.value}`];
            }
        })
    })
    

}

export {MealPlanner};