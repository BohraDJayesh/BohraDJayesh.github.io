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
}, 1);

setInterval(() => {
    colorrgb2();
}, 2);

setInterval(() => {
    colorrgb2();
}, 3);

setInterval(() => {
    colorrgb2();
}, 4);