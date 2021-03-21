var net = require('net');

var num=0;
var srv=net.createServer(function (c) {
    console.log('client connect'+c.remoteAddress);
    c.setTimeout(5 * 60 * 60 * 24 * 1000);
    c.setNoDelay(true);
    c.on('data',function(data){
        num++;
        console.log('net data');
    })
    c.on('end',function () {
        console.log('disocnnect');
    })
})

var nport=7682;
srv.listen(nport,function(){
    console.log('listen:'+nport);
})