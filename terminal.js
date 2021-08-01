let pointer = $('.pointer');
let count = 0;
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
let inputValue=null;
let inputCommand=[];
let commands = {LS:"intermediate.html intermediate.css intermediate.js",su:"Permission not granted"};
let blinker= function(pointer)
{
    setInterval(()=>{
        setTimeout(()=>{
            pointer.show();
        },500);
        pointer.hide();
    },1000);
} 
blinker(pointer);