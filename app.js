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