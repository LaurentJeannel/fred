var http = require('https');
var fs = require('fs');
var request=require('request')
var fileUrl = "https://github.com/LaurentJeannel/progtv2/archive/master.zip";
var output = "./plugins/time/beta.zip";

request({url: fileUrl, encoding: null}, function(err, resp, body) {
  if(err) throw err;
  fs.writeFile(output, body, function(err) {
    console.log("file written!");

  var unzipper=require('C:\\JarvisIA\\plugins\\time\\unzipper')
  
    fs.createReadStream('C:\\JarvisIA\\plugins\\time\\beta.zip').pipe(unzipper.Extract({ path: 'C:\\JarvisIA\\plugins\\time\\12' }));

  });
});