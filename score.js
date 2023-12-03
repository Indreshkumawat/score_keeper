const p1button=document.querySelector('#player1');
const p2button=document.querySelector('#player2');
const resetBtn=document.querySelector('#reset');
const score1=document.querySelector('#score1');
const score2=document.querySelector('#score2');
const upto=document.querySelector('#upto');
let scr1=0;
let scr2=0;
let winningScore=3;
let isGameover=false;
p1button.addEventListener('click',()=>{
    if(!isGameover){
    scr1+=1;
    if(scr1===winningScore){  
       isGameover=true; 
       score1.classList.add('winner');
       score2.classList.add('looser');
       p1button.disabled=true;
       p2button.disabled=true;
    }
    score1.innerText=`${scr1}`;
    } 
})
p2button.addEventListener('click',()=>{
    if(!isGameover){
    scr2+=1;
    if(scr2===winningScore){  
       isGameover=true; 
       score2.classList.add('winner');
       score1.classList.add('looser');
       p1button.disabled=true;
       p2button.disabled=true;
    }
    score2.innerText=`${scr2}`;
    } 
})
upto.addEventListener('change',()=>{
   winningScore=parseInt(upto.value);
   reset();
})
resetBtn.addEventListener('click',reset);
function reset(){
    isGameover=false;
    scr1=0;
    scr2=0;
    score1.innerText=0;
    score2.innerText=0;
    score1.classList.remove('winner','looser');
    score2.classList.remove('winner','looser');
    p1button.disabled=false;
    p2button.disabled=false;
}
