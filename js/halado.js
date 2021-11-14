window.addEventListener("load",myInit,false);
var head = false;
function $(id){
    return document.getElementById(id);
}
function myInit(){
    $("eltunHead").style.display="none";
    $("headclick").addEventListener("click",eltun,false)
}
function eltun(){
    if(head){
        $("eltunHead").style.display="none";
        head=false;
    }else{
        $("eltunHead").style.display="block";
        head=true;
    }
}