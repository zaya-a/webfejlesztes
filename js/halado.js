window.addEventListener("click",myInit, false)
var head = false;

function $(id){
    return document.getElementById(id);
}
function myInit(){
    $("eltunHead").style.visibility="hidden";
    $("headclick").addEventListener("click",eltun,false)
}
function eltun(){
    $("eltunHead").style.visibility="visibly";
    console.log("asd")
}