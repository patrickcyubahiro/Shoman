var http = require('http');

// let input = document.querySelector('input');
// let input = document.querySelector('textarea');

document.getElementByID("openFile").addEventListener('change', function(){
        var fr = new FileReader();
        fr.onload = function()
        {
                document.getElementById("fileContents").textContent = this.result;
        }
        fr.readAsText(this.files[0]);
})



var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url)
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('My first Assignment');
});
server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
