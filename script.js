let value1=document.getElementById("box1")
let value2=document.getElementById("box2")

let result=0;
let result1=0;
function add1R(){
result+=1;
value1.innerHTML=result;
}
function add2R(){
result+=2;
value1.innerHTML=result;
}
function add3R(){
result+=3;
value1.innerHTML=result;
}

function add1B(){
result1+=1;
value2.innerHTML=result1;
}

function add2B(){
result1+=1;
value2.innerHTML=result1;
}

function add3B(){
result1+=1;
value2.innerHTML=result1;
}
function reset(){
result=0;
result1=0;
value1.innerHTML=result;
value2.innerHTML=result1;
}

