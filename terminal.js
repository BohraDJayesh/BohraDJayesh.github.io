//Data for chart graph
let data = {
    header: ["Jayesh", "Skills "],
    rows: [
      ["HTML", 1500],
      ["CSS", 87000],
      ["Javascript", 175000],
      ["Python", 10000],
      ["C", 25000],
      ["C++", 25000],
      ["Iran (1990)", 50000]
  ]}
//

//Making the blinking pointer..
let commandlist = ["ls","clear","mousepad skills.txt","ls -a"];
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
let clear =0;
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

let inputcommand = ""; //For getting input for inputcommand.

inputterminal.on('keyup',function(e){
    
    let value = e.key;
    console.log(e.keyCode);
    let span = document.createElement('span');
    if((e.keyCode>=65 && e.keyCode<=90)||(e.keyCode==173)||e.keyCode==190)  //Meaning if it's an alphabet or special symbol
    {
    span.innerText = `${value}`;
    span.classList.add(`span${spancount}`);
    para.appendChild(span);
    pointer.appendTo(para);
    spancount++;
    inputcommand += e.key; //Adding values to our input variable.
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
    else if(e.code === 'Backspace')
    {   console.log(e.code);
        inputcommand = inputcommand.slice(0, inputcommand.length - 1);
        let delspan = document.querySelector(`.span${spancount-1}`);
        delspan.remove();
        spancount--;
    }
    else if(e.code == "Enter")
    {   
        if(inputcommand==commandlist[0])    //ls
            {  
                para = document.createElement('p');
                para.innerText = "themaxfort@JayeshDB:~$";
                space.appendChild(para);
                let span = document.createElement('span');
                span.innerHTML = " Contactme.deb ";
                para.appendChild(span);
                pointer.appendTo(para);
                inputcommand = "";
            }
        else if(inputcommand == commandlist[1])     //Clear
        {
            $('.space').empty();
            para = document.createElement('p');
            para.innerText = "themaxfort@JayeshDB:~$";
            space.appendChild(para);
            let span = document.createElement("span");
            space.appendChild(para);
            inputcommand = "";
            clear=1;
        }
        else if(inputcommand == commandlist[3])
        {
            para = document.createElement('p');
            para.innerText = "themaxfort@JayeshDB:~$";
            space.appendChild(para);
            let span = document.createElement('span');
            span.innerHTML = " Contactme.deb .Skills.txt";
            para.appendChild(span);
            pointer.appendTo(para);
            inputcommand = "";
        }

        else if(inputcommand == commandlist[4])
        {
            let chart = anychart.bar();
            chart.data(data);
            chart.title("Skills Of Jayesh Dutt Bohra");
            chart.container('space');
            chart.draw();
        }

        if(!clear)
        {
        para = document.createElement('p');
        para.innerText = "themaxfort@JayeshDB:~$";
        space.appendChild(para);
        pointer.appendTo(para);
        inputcommand = "";
        }
        clear=0;

    }

});