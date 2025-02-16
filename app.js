let gameSeq = [];
let userSeq =[];

let btns = ["yellow" , "red" , "purple" , "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress" , function(){
    if(start == false){
        start = true;  
        levelUp();   
    }
});

function gameFlash(btn){
    btn.classList.add("flashClass");
    setTimeout(function (){
        btn.classList.remove("flashClass");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    // random button choose
    let randIdx = Math.floor(Math.random() * 3);  
    let randColor = btns[randIdx];
    let randBtn  = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}