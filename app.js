let boxes = document.querySelector('.boxes');
for(let i=1;i<=150;i++)
{
    let span = document.createElement('span');
    span.classList.add('boxclass');
    span.classList.add(`box${i}`);
    boxes.appendChild(span);
    let colors = ['CAF4F4','FCFFE9','FFF2CC','FDE0D9','CAEFD1'];
    let randi = Math.floor((Math.random()*4)+1);
    let randno = Math.floor((Math.random()*10)+1);
    $(`.box${i}`).css({"width":`${randno}%`,"height":`${randno}%`});
    $(`.box${i}`).css({"backgroundColor":`#${colors[randi]}`});
    $(`.box${i}`).css({"margin":'0'});
    $(`.box${i}`).css({"padding":'0'});
    // document.querySelector(`.box${i}`).style.width(`${randno}%`);
    // document.querySelector(`.box${i}`).style.height(`${randno}%`);
}
function Resize() //function that resize randomly divs at particular interval
{
    let randno = Math.floor((Math.random()*10)+1);
    let i = Math.floor((Math.random()*150)+1);
    $(`.box${i}`).css({"width":`${randno}%`,"height":`${randno}%`});
     randno = Math.floor((Math.random()*10)+1);
     i = Math.floor((Math.random()*150)+1);
    $(`.box${i}`).css({"width":`${randno}%`,"height":`${randno}%`});
     randno = Math.floor((Math.random()*10)+1);
     i = Math.floor((Math.random()*150)+1);
    $(`.box${i}`).css({"width":`${randno}%`,"height":`${randno}%`});
    randno = Math.floor((Math.random()*10)+1);
    i = Math.floor((Math.random()*150)+1);

    setTimeout(Resize,700);
}

Resize();//calling function to start the resizing scale;