//Scrolling to the next segment js.
let navbar = document.querySelector('.navbar');
let wind = document.querySelector('.Windows');
document.querySelector('#explore').addEventListener('click',function(){

document.querySelector('.book-container').scrollIntoView({behavior: 'smooth'});
})
document.querySelector('.Home').addEventListener('click',function(){

    document.querySelector('.banner').scrollIntoView({behavior: 'ease-out'});
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
let topbut = document.querySelector('.top');
topbut.addEventListener('click',()=>{
    document.querySelector('.banner').scrollIntoView({behavior: 'smooth'});
    navbar.classList.remove('navswitch');
})  
//Particle Background

    //Complete