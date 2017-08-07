//counter code
var button=document.getElementById('counter');
var counter =0;
button.onclick = function(){
  //make a request to a counter endpoint
  
  //capture a response and share it in a variable
  
  //render the variable in the correct span
  counter = counter +1;
  var span=document.getElementById('count');
  span.innerHTML =counter.toString();
};