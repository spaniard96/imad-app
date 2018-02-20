var button=doucument.getElementById("counter");
var counter=0;
button.onClick=function(){
    
    
    
    var span=doucument.getElementById('count');
    counter+=1;
    span.innerHTML=counter.toString();
};