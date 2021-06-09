var http = require("http");
var url = require("url");
var fs = require("fs");
const queryString = require("querystring");

//handle form request with post 
http.createServer(function (req, res) {
  
  var obURL = url.parse(req.url, true)
  var body = "";
  if (obURL.pathname == '/formular') {
    console.log("Form request");
    req.on('data', function(date) {
        body += date;
    });
  

    req.on("end", function(){
      var ob_body = queryString.parse(body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end();
      
      if (fs.existsSync("datef.json")){
        var date = fs.readFileSync("datef.json");
        var ob = JSON.parse(date);
      } else
        ob = [];
      ob.push(ob_body);
      fs.writeFileSync("datef.json", JSON.stringify(ob));
  
    })
   //handle xhttp obj request with get 
  }else if(obURL.pathname == '/object'){
      console.log("Object request");
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end();
   

  }
 
  
}).listen(8080);



var htmlFile;
var cssFile;

fs.readFile('notfound.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

fs.readFile('nfstyle.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});

var server = http.createServer(function (request, response) {
 
  console.log(request.url);
  switch (request.url) {
      case "/nfstyle.css" :
          console.log("intra css")
          response.writeHead(200, {"Content-Type": "text/css"}, {"Access-Control-Allow-Origin":"*"});
          response.write(cssFile);
          break;
      default :
          console.log("intra default")    
          response.writeHead(200, {"Content-Type": "text/html"},{"Access-Control-Allow-Origin":"*"});
          response.write(htmlFile);
  }
  response.end();
});


server.listen(8000);