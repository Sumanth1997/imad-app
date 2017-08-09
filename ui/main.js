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



var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function() {
    //make a request to the server and send the name
    
    //capture a list of name and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++) {
        list +='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};
