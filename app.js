let display= document.getElementById("showResult");
let btn=document.querySelectorAll("button");
let result="";
let ev="";
let input=document.getElementById("input");

function btnclick(e){
    (e.value==="%") ? ev+="/100*" : ev+=e.value;
    (e.value==="**") ?result+="^" : result+=e.value;
    input.value=result;
}

function showResult(){
  input.value=eval(ev);
  result=eval(ev);
}

function clearResult(){
    result=""
    input.value=""
    ev=""
}
function backSpace(){
    result=result.slice(0, -1);
    input.value=result;
}