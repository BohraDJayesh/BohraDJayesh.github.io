//Making the blinking pointer..

let pointer = $('.pointer');
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
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

//Done 
//Making a virtual click.
let para = document.querySelector('#para');
let space = document.querySelector('.space');
let inputterminal = $('#inputterminal');
// inputterminal.hide();
$('.space').on('click', function(e){
    inputterminal.focus();
    inputterminal.select();
  });

//Adding element previously the pointer by taking whatever the user is typing

let spancount = 0; //Counting the no of spans

let inputcommand = " "; //For getting input for inputcommand.

inputterminal.on('keyup',function(e){
    
    let value = e.key;
    let span = document.createElement('span');
    if(e.keyCode>=65 && e.keyCode<=90)  //Meaning if it's an alphabet
    {
    span.innerText = `${value}`;
    span.classList.add(`span${spancount}`);
    para.appendChild(span);
    console.log(value);
    pointer.appendTo(para);
    spancount++;
    inputcommand += e.keyCode; //Adding values to our input variable.
    }
    else if(e.keyCode===32)         //Meaning if it's a space
    {
        span.innerText = " ";
        span.classList.add(`span${spancount}`);
        para.appendChild(span);
        console.log(value);
        pointer.appendTo(para);
        spancount++;
        inputcommand += " ";
    }
    else if(e.code=='Backspace')
    {   
        let delspan = document.querySelector(`.span${spancount-1}`);
        delspan.remove();
        spancount--;
        inputcommand.slice(0, inputcommand.length - 1);
    }
    else if(e.code == "Enter")
    {

    }

});