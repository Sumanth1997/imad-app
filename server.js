var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').pool;


var config ={
    user:'sumanthmylar',
    hostname:'sumanthmylar',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));


var articals = {
'artical-one' : {
        title: 'artical one | Sumanth Mylar',
        heading: 'artical one',
        date: 'august 03 2017',
        content: `
                    <p>
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                    </p>
                    <p>
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                        this is the content of artical one.this is the content of artical one.this is the content of artical one.
                    </p>
                    
             `
                        },
'artical-two' : {
            title: 'artical two | Sumanth Mylar',
            heading: 'artical two',
            date: 'august 03 2027',
            content: `
                    <p>
                        this is the content of artical one.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.
                    </p>
                    <p>
                        this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.this is the content of artical two.
                    </p>
        `},  
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<!DOCTYPE html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                    <a href="/">=Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());
});




var names= [];
app.get('/submit-name',function(req,res) {
    //get the name from the server
    var name = req.query.name;
    names.push(name);
    
    //json javascript object notation
    res.send(JSON.stringify(names));
});




var pool=new pool(config);

app.get('/test-db' , function (req, res) 
{
//make a select request
//return a response with the results
pool.query('SELECT *FROM test',function(err,result) {
    if(err)
    {
        res.status(500).send(err.toString());
        
    } else {
        res.send(JSON.stringify(result));
    }
   });
});
app.get('/:articalName', function(req, res) {
    //articalName == artical-one
    //articals[articalName == {} content object for artical one 
    var articalName = req.params.articalName;
  res.send(createTemplate(articals[articalName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
