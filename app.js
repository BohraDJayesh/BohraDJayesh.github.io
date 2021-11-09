let container = document.querySelector('.container');

for(let i = 0;i<319;i++) //Inserting all the divs in container div.
{
    let divf = document.createElement('div');
    divf.classList.add('hexdiv');
    container.append(divf);
    let div = document.createElement('div');
    div.classList.add('insidehex');
    divf.append(div);
}

//Selecting random divs through list.
let hex = document.querySelectorAll('.hexdiv'); //object containing all the hexdivs so that
let insidehex = document.querySelectorAll('.insidehex');//I can select and resize randomly.
function hexresize() 
{
    let randno = Math.floor((Math.random() * 378) + 1);
    hex[randno].style.width

    setInterval(hexresize,1000);
}

// hexresize();