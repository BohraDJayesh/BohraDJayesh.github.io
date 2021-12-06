let container = document.querySelector('.container');

for(let i = 0;i<319;i++) //Inserting all the divs in container div.
{
    let divf = document.createElement('div');
    divf.classList.add('hexdiv');
    container.append(divf);
    let div = document.createElement('div');
    div.classList.add(`insidehex${i}`);
    div.classList.add('insidehex');
    divf.append(div);
}

//Selecting random divs through list.
let hex = document.querySelectorAll('.hexdiv'); //object containing all the hexdivs so that
let insidehex = document.querySelectorAll('.insidehex');//I can select and resize randomly.

function hexsize(randno)
{
    insidehex[randno].style.width = "71px";
    insidehex[randno].style.height = "84.0711px";
}
// let hrtime = 1000;
function hexresize() //function to resize hexagons calling itself at particular time interval.
{
    let randno = Math.floor((Math.random() * 317) + 1);
    insidehex[randno].style.width = "68px";
    insidehex[randno].style.height = "80px";

    // setTimeout(hexsize(randno),3000);//calling function to bring back actual size of that hexagon.
    
    setInterval(hexresize,2000);
}

  hexresize(); //Calling that function to start the hexagonal effect.
// $(".insidehex").hover(function(){ //function to perform color on hover effects.
// $(this).css("background-color","#a9e5bb")
// setTimeout(() => {$(this).css("background-color","#FCF6B1")},300)
// setTimeout(() => {$(this).css("background-color","#F7B32B")},600)
// setTimeout(() => {$(this).css("background-color","#FF4365")},800)
// setTimeout(() => {$(this).css("background-color","whitesmoke")},1300)

//     });


// setInterval(() => { //the center one
//     // let randno = Math.floor((Math.random() * 317) + 1);
// setTimeout(() => {$(".insidehex159").css("background-color","#a9e5bb")},200);
// setTimeout(() => {$(".insidehex159").css("background-color","#FCF6B1")},300)
// setTimeout(() => {$(".insidehex159").css("background-color","#F7B32B")},600)
// setTimeout(() => {$(".insidehex159").css("background-color","#FF4365")},900)
// setTimeout(() => {$(".insidehex159").css("background-color","whitesmoke")},1200)   
// }, 5000);


// setInterval(()=>{
//     setTimeout(() => {$(".insidehex160").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex160").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex160").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex160").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex160").css("background-color","whitesmoke")},1200)  

//     setTimeout(() => {$(".insidehex158").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex158").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex158").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex158").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex158").css("background-color","whitesmoke")},1200)  

//     setTimeout(() => {$(".insidehex135").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex135").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex135").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex135").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex135").css("background-color","whitesmoke")},1200)  

//     setTimeout(() => {$(".insidehex134").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex134").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex134").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex134").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex134").css("background-color","whitesmoke")},1200)  

//     setTimeout(() => {$(".insidehex183").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex183").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex183").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex183").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex183").css("background-color","whitesmoke")},1200)  

//     setTimeout(() => {$(".insidehex184").css("background-color","#a9e5bb")},200);
//     setTimeout(() => {$(".insidehex184").css("background-color","#FCF6B1")},300)
//     setTimeout(() => {$(".insidehex184").css("background-color","#F7B32B")},600)
//     setTimeout(() => {$(".insidehex184").css("background-color","#FF4365")},900)
//     setTimeout(() => {$(".insidehex184").css("background-color","whitesmoke")},1200)  

// },6250)

let colorrgb = ()=>{
    let randno = Math.floor((Math.random() * 317) + 1);
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#a9e5bb")},200);
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#FCF6B1")},300)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#F7B32B")},600)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#FF4365")},900)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","whitesmoke")},1200)
}

let colorrgb2 = ()=>{
    let randno = Math.floor((Math.random() * 317) + 1);
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#F6EB14")},200);
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#FF9526")},300)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#EF4423")},600)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","#2A3492")},900)
    setTimeout(() => {$(`.insidehex${randno}`).css("background-color","whitesmoke")},1200)
}

setInterval(() => {
    colorrgb2();
}, 10);

setInterval(() => {
    colorrgb2();
}, 10);

setInterval(() => {
    colorrgb2();
}, 10);

setInterval(() => {
    colorrgb2();
}, 10);