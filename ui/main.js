//counter code
var button=document.getElementById('counter');
button.onclick = function () {
  //create a request to a counter endpoint
  var request = new XMLHttpRequest();
  
  //capture a response and share it in a variable
  request.onreadystatechange= function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        //take action
        if(request.status === 200) {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //not done yet
  };
  //make a request
  request.open('GET','http://sumanthmylar.imad.hasura-app.io/counter'+name,true);
  request.send(null);
};




var submit=document.getElementById('submit_btn');
submit.onclick=function() {
      //create a request to a counter endpoint
  var request = new XMLHttpRequest();
  
  //capture a response and share it in a variable
  request.onreadystatechange= function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        //take action
        if(request.status === 200) {
                //capture a list of name and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++) {
        list +='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
            
        }
    }
    //not done yet
  };
  var nameInput=document.getElementById('name');
var name=nameInput.value;
  //make a request
  request.open('GET','http://sumanthmylar.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
};
    //make a request to the server and send the name
