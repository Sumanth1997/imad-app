var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articalone= {
  title: 'artical one | SUmanth Mylar',
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
                    </p>`
};
function creatTemplate (data) {
    var title=data.title;
    var date=data.title;
    var heading=data.title;
    var content=data.title;
var htmlTemplate=`
<!DOCTYPE html>
    <head>
        <title>
            $(title)
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
                    $(heading)
                </h3>
                <div>
                    $(date)
                </div>
                <div>
                    $(content)
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
app.get('/artical-one', function (req, res) {
  res.send(createTemplate(articaleone));
});
app.get('/artical-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articaltwo.html'));
});
app.get('/artical-three', function (req, res) {
  res.send(path.join('this is the content for artical-three'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
