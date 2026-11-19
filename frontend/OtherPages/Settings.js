function settingsHTML(midSection){
    return midSection.innerHTML=`
    <div class="w-full p-2 lg:pr-25 flex justify-between">
        <h1 class="mode font-semibold text-gray-700 text-2xl">DarkMODE</h1>
        <label class="relative inline-flex items-center cursor-pointer">
            <!-- Hidden checkbox controls the switch -->
            <input type="checkbox" class="darkModeBtn sr-only peer">

            <!-- Rounded track -->
            <div class="w-16 h-9 bg-gray-300 peer-checked:bg-green-500 rounded-full transition-colors duration-300"></div>

            <!-- Round knob -->
            <div class="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow transition-transform duration-300 peer-checked:translate-x-7"></div>
        </label>

    </div>
    <div class="w-full pr-25">
        <hr class="w-full h-0.1 border border-[#ddd]">
    </div>
    `
    
}

export {settingsHTML}