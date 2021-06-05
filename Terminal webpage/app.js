let pointer = $('.pointer');

const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));

let blinker= function()
{
    setInterval(()=>{
        setTimeout(()=>{
            pointer.show();
        },500);
        pointer.hide();
    },1000);
} 


blinker();
