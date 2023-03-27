var i=document.getElementById("i");
var b=document.getElementById("b");
var m=document.getElementById("im");
b.addEventListener("click",function(){
    var text=i.value;
    var link="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text;
    m.setAttribute("src",link)
})