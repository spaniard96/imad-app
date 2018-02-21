var button = document.getElementById('counter');
var span = document.getElementById('count');
var counter = 0;
button.onclick = function () {
    counter += 1;
    span.innerHTML = counter.toString();   
};
var submit = document.getElementById('submit_btn');
var names = document.getElementById('name');
submit.onclick = function () {
    
    var names = ['simpson', 'grindelwald', 'phoenix'];
    var list='';
    for(var i=0; i<names.length; i++){
        list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('list');
    ul.innerHTML = list;
};