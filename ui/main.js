//counter code
var button=document.getElementById('counter');
button.onclick = function () {
  //create a request to a counter endpoint
  var request = new XMLHttpRequest();
  
  //capture a response and share it in a variable
  request.onreadystatechange= function() {
    if(requset.readystate === XMLHttpRequest.DONE) {
        //take action
        if(request.status == 200) {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML =counter.toString();
        }
    }
    //not done yet
  };
  //make a request
  request.open('GET','http://sumanthmylar.imad.hasura-app.io/counter',true);
  request.send(null);
};