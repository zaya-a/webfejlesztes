window.addEventListener("load",myInit,false);
var head = false;
var body = false;
function $(id){
    return document.getElementById(id);
}
function myInit(){
    $("eltunHead").style.display="none";
    $("eltunBody").style.display="none";
    $("headclick").addEventListener("click",eltun,false);
    $("bodyclick").addEventListener("click",bodytun,false);
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
function bodytun(){
    if(body){
        $("eltunBody").style.display="none";
        body=false;
    }else{
        $("eltunBody").style.display="block";
        body=true;
    }
}