let pointer = $('.pointer');

const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));

let blinker= function()
{
    setInterval(()=>{
        setTimeout(()=>{
            pointer.show();
        },500);
        pointer.hide();
    },1000);
} 


let textcontain='cd skills';
let ls='ls -a1';
let i=1;

let terminal = function () {
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
blinker();
}
terminal();
let repeat = function () {
 setInterval(()=>

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
 },5120*4.3)
}
repeat();
        
