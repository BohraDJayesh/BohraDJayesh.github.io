//Scrolling to the next segment js.

document.querySelector('#explore').addEventListener('click',function(){

document.querySelector('.book-container').scrollIntoView({behavior: 'smooth'});
})
document.querySelector('.Home').addEventListener('click',function(){

    document.querySelector('.banner').scrollIntoView({behavior: 'smooth'});
})

//End of that segment

//........

//Assigning z-index to each page

let pages = document.querySelectorAll('.page');
document.querySelector('.front-page').style.zIndex = `${pages.length+1}`;
for(let i=0;i<pages.length;i++)
{
    pages[i].style.zIndex = `${pages.length - i}`;
}

//Completed

//.....

//Applying the 3d effect
let i=0,bookcount =0 ;
document.querySelector('.book').addEventListener('click',function(){

    //If the click is first time the book gets shifted.

    if(bookcount === 0)
    {
        document.querySelector('.book').classList.add('shift');
        document.querySelector('.front-page').classList.add('palat');
        let tout = 0;
        function play() {
            var audio = new Audio('audio.mp3');
            audio.play();
          }
        for(let j=0;j<5;j++)
        {
            setTimeout(function()
            {
            let page = pages[j];
            page.classList.add('palat');
            i = j++;         
            },200+tout);
            tout+=200;
        }
        bookcount++;
        i++;
    }

    //else the pages shifts as designs.

    else {
    let page = pages[i];
    page.classList.add('palat');
    i++;
    function play() {
        var audio = new Audio('fliip-page.mp3');
        audio.play();
      }
    }
})