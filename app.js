//Scrolling to the next segment js.
let navbar = document.querySelector('.navbar');
let wind = document.querySelector('.Windows');
let terminalcontainer = document.querySelector('.terminal-container');
let topbut = document.querySelector('.top');

document.querySelector('#explore').addEventListener('click',function(){

document.querySelector('.book-container').scrollIntoView({behavior: 'smooth'});


})
document.querySelector('.Home').addEventListener('click',function(){

    document.querySelector('.banner').scrollIntoView({behavior: 'smoooth'});
})

//End of that segment

//........

//Assigning z-index to each page

let pages = document.querySelectorAll('.page');
document.querySelector('.front-page').style.zIndex = `${pages.length+1}`;
for(let i=pages.length-1;i>=0;i--)
{
    pages[i].style.zIndex = i;
}

//Completed

//.....

//Applying the 3d effect
let i=4,bookcount =0 ;
document.querySelector('.book').addEventListener('click',function(){

    //If the click is first time the book gets shifted.
        $(".book").css("boxShadow", "none");    //removing box shadow because it's causing a bug and i don't know why...
        $(".book").css("filter", "none");
        if(bookcount === 0)
    {
        document.querySelector('.book').classList.add('endofbook');
        document.querySelector('.book').classList.add('shift');
        document.querySelector('.front-page').classList.add('palat');
        let tout = 0;
        for(let j=0;j<5;j++)
        {
            setTimeout(function()
            {
            let page = pages[j];
            page.classList.add('palat');        
            },200+tout);
            tout+=200;
        }
        let audiovar = document.querySelector('#flipover')
        function playAudio() {
            audiovar.play();
          }
          playAudio();
        bookcount++;
    }

    //else the pages shifts as designs.

    else if(i === pages.length-1)
    {
        document.querySelector('.book').classList.remove('flip');
        document.querySelector('.front-page').classList.remove('palat');

        for(let j=0;j<pages.length;j++)
        {
            pages[j].classList.remove('palat');
        }
        document.querySelector('.book').classList.add('endofbook');
        bookcount = 0;
        i = 0;
    }

    else {
    let page = pages[i];
    page.classList.add('palat');
    let audiovar = document.querySelector('#flip')
        function playAudio() {
            audiovar.play();
          }
          playAudio();
          i++;
    }

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
//Adding double clicking event
termicon.addEventListener('dblclick',()=>{
    if(!dbclickcount){
    dbclickcount++;
    $('.terminal-container').show("200");
    //Listening to the mouse when it's on hold
terminalcontainer.addEventListener('mousedown', function(e) {
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

