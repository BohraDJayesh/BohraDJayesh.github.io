//Scrolling to the next segment js.

document.querySelector('#explore').addEventListener('click',function(){

document.querySelector('.book-container').scrollIntoView({behavior: 'smooth'});
})
document.querySelector('.Home').addEventListener('click',function(){

    document.querySelector('.container-main').scrollIntoView({behavior: 'smooth'});
})

//End of that segment

//........

//Assigning z-index to each page

let pages = document.querySelectorAll('.page');

for(let i=0;i<pages.length;i++)
{
    pages[i].style.zIndex = `${pages.length - i}`;
}

//Completed

//.....

//Applying the 3d effect
let i=0;
document.querySelector('.book').addEventListener('click',function(){
    let page = pages[i];
    page.classList.add('palat');
    i++;
})