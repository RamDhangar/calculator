let display= document.getElementById("showResult");
let btn=document.querySelectorAll("button");
let result="";
let input=document.getElementById("input");

function btnclick(e){
    result+=e.value;
    input.value=result;

}

function showResult(){
  input.value=eval(result);
  result=eval(result);
}

function clearResult(){
    result=""
    input.value=""
}
function backSpace(){
    result=result.slice(0, -1);
    input.value=result;
}