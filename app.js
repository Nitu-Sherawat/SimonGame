let gameSeq=[];
let userSeq=[];

let btns=["red","brown","blue","yellow"];
let highest_score=0;

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
    console.log("Game started");
    started=true;
    levelUp();
    }
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },400);
}

function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
  btn.classList.remove("userflash");
},200);
}

function levelUp(){
  userSeq=[];
    level++;
   h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash(randBtn);  
    console.log(gameSeq);   
} 

function checkAns(idx){
if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length===gameSeq.length){
    setTimeout(levelUp,250);
  }
}else{
  highest_score=Math.max(highest_score,level);
  h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Your highest score was ${highest_score}<br>Press any key to start`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
  },150)
  reset();
}
}

function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
  highest_score=highest_score;
}


