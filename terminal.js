$('#graph-container').hide();
//
//Making the blinking pointer..
let commandlist = ["ls","clear","mousepad skills.txt","ls -a","wget resume.pdf"];
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
    if((e.keyCode>=65 && e.keyCode<=90)||(e.keyCode==173)||e.keyCode==190||e.keyCode==59||e.keyCode==191)  //Meaning if it's an alphabet or special symbol
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

        else if(inputcommand == commandlist[2])
        {
            $('#graph-container').show("slow"); 
            setTimeout(function(){
            let chart = new CanvasJS.Chart("graph-container",{
                animationEnabled: true,
                title:{
                    text:"Skills of Jayesh Dutt Bohra"
                },
                axisX:{
                    interval:1
                },
                axisY2:{
                    interlacedColor: "rgb(1,77,101,0.2)",
                    gridColor:"rgba(1,77,101,0.1)",
                    title:"Diffrent Skills"
                },
                data:[{
                    type:"bar",
                    name:"skills",
                    color:"#27a47b",
                    dataPoints:[
                        { y: 10, label: "HTML" },
                        { y: 7, label: "CSS" },
                        { y: 8, label: "Javascript" },
                        { y: 6, label: "C" },
                        { y: 6, label: "C++" },
                        { y: 5, label: "Python" },
                        { y: 7, label: "Illustrator" },
                        { y: 0, }
                    ]
                }]
            });
            chart.render();
        },800);
        $('#graph-container').on('click',()=>{
            $("#graph-container").hide("slow");
        })
        }
        else if(inputcommand == commandlist[4])
        {
            document.querySelector('#resume').click();
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