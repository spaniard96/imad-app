var button = document.getElementById('counter');
var span = document.getElementById('count');
var counter = 0;
button.onclick = function () {
    counter += 1;
    span.innerHTML = counter.toString();   
}