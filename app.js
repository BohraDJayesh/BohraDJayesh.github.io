//Scrolling to the next segment js.
let navbar = document.querySelector('.navbar');
let wind = document.querySelector('.Windows');
let terminalcontainer = document.querySelector('.terminal-container');
let topbut = document.querySelector('.top');
let taskbar = document.querySelector('.task');

document.querySelector('#explore').addEventListener('click',function(){

document.querySelector('.tv-container').scrollIntoView({behavior: 'smooth'});


})
document.querySelector('.Home').addEventListener('click',function(){

    document.querySelector('.banner').scrollIntoView({behavior: 'smoooth'});
})

//Adding animation of navbar going up if clicks on skillls
let skills = document.querySelector('.Skills');
skills.addEventListener('click',()=>{
document.querySelector('.windows-container').scrollIntoView({behavior:"smooth"});
navbar.classList.add('navswitch');
})
//Clicking on top button
topbut.addEventListener('click',()=>{
    document.querySelector('.banner').scrollIntoView({behavior: 'smooth'});
    navbar.classList.remove('navswitch');
})  
//Particle Background

    //Complete

//Adding effects when clicked on terminal
let click = 0;
let termicon = document.querySelector('.terminla-icon');
termicon.addEventListener('click',()=>{
    if(click==0)
        termicon.classList.add('terminal-click');
    click++;
})
//removing background when clicked somewhere else 
wind.addEventListener('click',()=>{
    if(!click)
        termicon.classList.remove('terminal-click');
    click=0;
})
let dbclickcount = 0;
let isDown;
//Adding double clicking event
termicon.addEventListener('dblclick',()=>{
    if(!dbclickcount){
    dbclickcount++;
    $('.terminal-container').show("200");
    //Listening to the mouse when it's on hold
taskbar.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        terminalcontainer.offsetLeft - e.clientX,
        terminalcontainer.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        terminalcontainer.style.left = (mousePosition.x + offset[0]) + 'px';
        terminalcontainer.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
//Moving with mouse completed
    }
    else{
        alert("Already Running");
    }
})
//Adding Terminal
//Done/


//Hiding the terminal as we want to open it when it's double clicked.

$('.terminal-container').hide();

//Adding the closing button of terminal

let close = document.querySelector('.suspend');
close.addEventListener('click',()=>{
    $('.terminal-container').hide("200");
    dbclickcount = 0;
})
//Done adding button.

//tv container
let power = function() {
    let body = document.getElementById("wrapper");
    body.className = (body.className == "on") ? "off" : "on";
}