var button= document.getElementById('counter');
var counter=0;
button.onClick=function(){
    
    /*var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.state === 200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    request.open('GET','http://imad.hasura.io/counter',true);
    request.send(null);*/
    var span = document.getElementById('count');
    counter += 1;
    span.innerHTML = counter.toString();
};