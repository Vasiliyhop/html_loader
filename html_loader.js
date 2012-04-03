var sys = require('util'),
    http = require('http'),
    fs = require('fs'),

    index;

function reading_file(rf,prt) {
    reading_file = rf;
    port = prt;
    read_index();
    watching_File();
    start_server();
}
exports.reading_file = reading_file;


function read_index() {
    fs.readFile(reading_file, function (err, data) {
        if (err) {
            throw err; 
        }
        index = data;
        console.log('---read: '+reading_file);
    });
}

function watching_File() {
    fs.watchFile(reading_file, function (curr, prev) {
      console.log('---the current mtime is: ' + curr.mtime);
      console.log('---the previous mtime was: ' + prev.mtime);
      read_index();
    });
}

function start_server() {

    console.log('---server wait');
    console.log('---port:'+port);
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(index); 
        console.log('---Page load!---'); 
        response.end(); 
    }).listen(port);
}