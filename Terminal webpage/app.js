let pointer = $('.pointer');
let count = 0;
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
let inputValue=null;
let inputCommand=[];
//Now we will make a object which will store our commands and their outputa....
let commands = {LS:"intermediate.html intermediate.css intermediate.js",su:"Permission not granted"};
let blinker= function(pointer)
{
    setInterval(()=>{
        setTimeout(()=>{
            pointer.show();
        },500);
        pointer.hide();
    },1000);
} 
let once = 0;
let textcontain='cd skills';
let ls='ls -a1';
let i=1;
let terminal = function () {
    try {
 let commands = function () 

 {       $('.pointer').remove();
    $('.maindiv2').remove();
   let j=10;
        for(let cd of textcontain)
        {   let space = document.querySelector('.space');
            let para = document.querySelector('#para');
            let span = document.createElement("span");
            
            setTimeout(()=>
            {
                span.classList.add(`word${i}`);
                span.innerText=`${cd}`;
                para.appendChild(span);
                pointer.appendTo(para);
                i++;
                console.log(j);
            },j)

            j*=2;
        }
}
commands();

     i=0;
    let j=10;
     $('.terminal').css("display","flex");
        let type2 = function ()
        {
            $('.maindiv2').remove();
            let p=document.createElement("p");
        p.innerText="themaxfort@JayeshDB:~/Skills$";
         p.classList.add('para2');
        //   pointer.st
        //  let para=document.querySelector('#para');
         let div=document.createElement("div");
         div.classList.add('maindiv');
         let space = document.querySelector('.space');
         div.innerHTML='<br>';
         $('div').css("display","block");
         $('.terminal').css("display","flex");

        //  let br = document.querySelector('br');
        // p.textContent='themaxfort@JayeshDB:~$';
             
            //  space.appendChild(br);
     for(const ls1 of ls)
     {
         setTimeout( ()=>{
            let word = document.createElement("span");
            word.innerHTML=`${ls1}`
             space.appendChild(div);
            div.appendChild(p);
             p.appendChild(word); 
             pointer.appendTo(p);
             i++;
         },j)
     j*=2;
    }
}
wait(5120).then(()=>{
    type2();    //  i=0;
})
    
    i=0;
    j=10;
let type3 = function ()
        {
            $('.maindiv2').remove();

            let p=document.createElement("p");
        p.innerText="themaxfort@JayeshDB:~/Skills$";
         p.classList.add('para3');
        //   pointer.st
        //  let para=document.querySelector('#para');
         let div=document.createElement("div");
         div.classList.add('maindiv2');
         let space = document.querySelector('.space');
         div.innerHTML='<br>';
         $('div').css("display","block");
         $('.terminal').css("display","flex");
        //  let br = document.querySelector('br');
        // p.textContent='themaxfort@JayeshDB:~$';
        space.appendChild(div);
            div.appendChild(p);
            let skills = 'intermediate.html intermediate.css intermediate.js';
            //  space.appendChild(br);
     for(let k=0;k<skills.length;k++)
     {
         setTimeout( ()=>{
             let ls1 = skills[k];
            let word = document.createElement("span");
            word.innerText=ls1
             p.appendChild(word); 
             pointer.appendTo(p);
             i++;
         },j)
     j*=2;
    }
}
wait(5120*2).then(()=>{
    type3();
})

}
catch {
    prompt("Enterng Self Mode!!!!!");
}
finally{
    console.log('Entering into mode ')
}
}
terminal();

blinker(pointer);

// let keyUp = function(inputValue,count){
//     if(inputValue==='Backspace')
//     {

//     }
//     else if(inputValue==='Enter')
//     {

//     }
//     else
//     {
//          $(`.input${count}`).keyup(function(e){
//             inputValue = e.code;
//             let span = document.createElement('span');
//             let para = document.createElement("p");
//             para.classList.add(`para${count}`);
//             span.innerText = (inputValue.slice(3,inputValue.length));
//             para.appendChild(span);
//             pointer.after(span);
            
//         });
//     }
// }

// let makeInput = function(count)
// {
//     let input = document.createElement("input");
//     // let p = 
//     input.type="text";
//     input.classList.add(`input${count}`);
//     let space = document.querySelector('.space');
//     let para = document.createElement("p");
//     para.classList.add(`para${count}`);
//     space.appendChild(para);
//     let span = document.createElement(`span${count}`);
//     span.classList.add(`span${count}`);
//     para.appendChild(span);
//     span.appendChild(input);
//     $(`.span${count}`).css("padding-left","0.25em");
//     $(`.span${count}`).css("display","inline-block");
//     $(`span${count}`).css("opacity","0");
//     pointer.prependTo(para)
// }
// count++;
// let SelfMode = function () {
//     if(count===0)
//     {
//     let input = document.createElement("input");
//     // let p = 
//     input.type="text";
//     input.classList.add(`input${count}`);
//     let space = $('.space');
//     let para = $('#para');
//     let span = document.createElement(`span${count}`);
//     span.classList.add(`span${count}`);
//     para[0].appendChild(span);
//     span.appendChild(input);
//     $(`.span${count}`).css("padding-left","0.25em");
//     $(`.span${count}`).css("display","inline-block");
//     $(`span${count}`).css("opacity","0");
//     keyUp(inputValue,count);
//     inputValue=null;
//     }
//     else
//     {
//         makeInput(count);
//         keyUp(inputValue,count);
        
//     }

//     // while(inputValue.key!=)
//     // {

//     // }


// }


let repeat = setInterval(()=>

 {          
     $('.pointer').remove();
     $('.space').empty();
         let p = document.createElement("p");
         p.id="para";
         p.innerText="themaxfort@JayeshDB:~$ ";
         let span = document.createElement("span");
         let space = document.querySelector('.space');
         space.appendChild(p);
         span.classList.add("pointer");
         p.appendChild(span);
         $('.pointer').appendTo('#para');
         $('.maindiv2').remove();
         terminal();
 },5120*4.3);
let z=0;
let terminalinfo = function()
{      if(z===0)
    {
        z++;
        let spanhover = document.querySelector('.spanhover');
        spanhover.innerHTML = '<br>Hello Amigos!!!<br>This terminal is still in development But still you can use some command Like :<br>1.)ls <br>2.)clear';
    $('.spanhover').animate({
        opacity:'1',
        transition: '0.25s',
        height: '22vh',
        width: '51vh',
        padding:'2vh'
    })
    let spanpointer = document.createElement('span');
    spanpointer.classList.add('pointer');
    spanhover.appendChild(spanpointer);
    let pointer2 = $('.pointer');
    blinker(pointer2);
    let crossbutton = document.createElement('span');
    crossbutton.classList.add('crossbutton');
    spanhover.appendChild(crossbutton);
    $('.crossbutton').prependTo('.spanhover');
    $('.crossbutton').css("content","url(crossimage.png)")
    $('.crossbutton').css("width","1vh");
    $('.crossbutton').css("height","1vh");
    $('.crossbutton').css("display","block");
    // crossbutton.innerHTML = "<br>";
    $('.crossbutton').on("click",function(){
        $('.spanhover').hide('slow');
        $('spanhover').remove();
        
    })
}
}

let inputstart = function (pointer) 
{   

    //Hover over

    let terminalContainer = document.querySelector('.terminal-container');
let spanhover = document.createElement("span");
spanhover.classList.add("spanhover");
terminalContainer.appendChild(spanhover);
$('.spanhover').prependTo('body');
$('.spanhover').css("opacity","0");
// $('.spanhover').fadeout();

terminalContainer.addEventListener("mouseover", function(){
    terminalinfo();
});

    //whole terminal thing

    let space = document.querySelector('.space');
let para = document.querySelector('#para');
let input = document.createElement('input');
input.classList.add('inputdata');
para.appendChild(input);
// pointer.appendTo(para);
// blinker(pointer);
$('.inputdata').css("transform","translateX(0.25em)")
$('.inputdata').css("position","absolute")
$('.inputdata').css("width","50%")
$('.inputdata').css("height","44em")
$('.inputdata').css("opacity","0")
$('.inputdata').on("keyup",function(e){
    if(e.code==='Backspace')
    {   console.log(e.code);
        let delspan = document.querySelector(`.span${count}`);
        delspan.remove();
        inputCommand.pop();
        count--;
    }
    else if(e.keyCode===32)
    {   count++;
        let inputValue=" ";
        let span = document.createElement('span');
        span.classList.add(`span${count}`); 
        span.innerText=inputValue;
        para.appendChild(span);
        console.log(inputValue)
        pointer.appendTo(para)
        inputCommand.push(inputValue);

    }
    else if(e.code=='Enter')
    {
        inputCommand.toString();
        let flag=true;
        i=0;
        while(flag)
        {
            let cmdstrings = Object.keys(commands)[i];
            if(inputCommand=="L,S")
            {
                para = document.createElement('p');
                para.innerText = "themaxfort@JayeshDB:~$";
                space.appendChild(para);
                span = document.createElement('span');
                span.innerText = 'intermediate.html intermediate.css intermediate.js';
                para.appendChild(span);
                flag = false;
            }
            else if(inputCommand=="C,L,E,A,R")
            {
                $('.space').empty();
                let p = document.createElement("p");
                p.id="para";
                p.innerText="themaxfort@JayeshDB:~$ ";
                let span = document.createElement("span");
                let space = document.querySelector('.space');
                space.appendChild(p);
                span.classList.add("pointer");
                p.appendChild(span);
                // $('.pointer').appendTo('#para');
                // let pointer = $('.pointer');
                // p.appendChild(pointer);
                blinker(pointer);  
                // let input = document.createElement('input');
                // input.classList.add('inputdata');
                // p.appendChild(input);  
                i++;  
                $('.spanhover').hide('slow');
                $('spanhover').remove();
                inputstart(pointer);
                flag = false;   

            }
            else 
            {
                let para = document.createElement('p');
                para.innerText = "themaxfort@JayeshDB:~$";
                space.appendChild(para);
                span = document.createElement('span');
                span.innerText = "Enter a valid command !!!";
                para.appendChild(span);
                flag = false;
            }


        }
        if(i===0)
        {
        para = document.createElement('p');
        para.innerText = "themaxfort@JayeshDB:~$";
        space.appendChild(para);
        inputCommand=[];
        pointer.appendTo(para);
        }

    }
    else if(e.keyCode>=65 && e.keyCode<=90)
    {   count++;
        $('.pointer').remove();
        let inputValue=e.code[3];
        let span = document.createElement('span');
        span.classList.add(`span${count}`); 
        span.innerText=inputValue;
        para.appendChild(span);
        console.log(inputValue)
        pointer.appendTo(para)
        inputCommand.push(inputValue);
    }
})

}
 
$('.space').on("click",function() {
    if(once==0)
    {    once++;

    clearInterval(repeat);
    $('.terminal').hide();

    $('.space').empty();
    $('.space').css("opacity","0.0");

    setTimeout(()=>{
        $('.space').css("opacity","1");
        $('.space').empty();
        let p = document.createElement("p");
         p.id="para";
         p.innerText="themaxfort@JayeshDB:~$ ";
         let span = document.createElement("span");
         let space = document.querySelector('.space');
         space.appendChild(p);
         span.classList.add("pointer");
         p.appendChild(span);
         $('.pointer').appendTo('#para');
         let pointer = $('.pointer');
         blinker(pointer);         
        inputstart(pointer);
    },11000)

    alert('Entering into Self Mode !!!!!');
    alert('Wait for 5 secs ');
}

})
        