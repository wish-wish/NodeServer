
var mysql = require('mysql');
var ws = require('websocket.io');
const { count } = require('console');
var http = require('http');
const { url } = require('inspector');
var sqlc = require('./sqlclient');
var luac = require('./lua');
var buff = require('./buffer');
var game= require('./game');

var isLe = (function() {
    var buf = new ArrayBuffer(2);
    new DataView(buf).setInt16(0, 256, true);
    var edianflag = new Int16Array(buf)[0] === 256;
    if (edianflag) {
        console.log("litten edian");
    } else {
        console.log("big edian");
    }
    return edianflag;
})();

var port = 7681;
var server = ws.listen(port);
console.log("start port,"+port)
server.on('connection', function(socket) {
    console.log('new connect:'+socket);
    socket.socket.setTimeout(5 * 60 * 60 * 24 * 1000);
    socket.socket.setNoDelay(true);
    socket.on('message', function(data) {        
        var utf=new Uint16Array(data.length/2);
        for(let i=0;i<utf.length;i++)
        {
            if(isLe)
                utf[i]=data[2*i]+data[2*i+1]*256;
            else
                utf[i]=data[2*i]*256+data[2*i+1];
        }
        var str = "";
        for (var i = 0; i < utf.length; i++) {
            
            str = str + String.fromCharCode(utf[i]);            
        }
        let a=str.split(';');
        if(a.length==1)
        {
            let params=a[0].split(":");
            if(paramsa[0]=="start")
            {
                InsertLog(params[1]);
            }
            else if(params[0]=="enter")
            {
                EnterGameLog([params[1],params[2]]);
            }
            else if(params[0]=="color")
            {
                //'color:0:did:id_abc:9e46c8:c846c6:1:1:tme:1621348546430'
                let curidf=-1;
                if(params[10])
                {
                    curidf=params[10];
                }
                ColorLog([params[3],params[4],params[5],params[6],params[7],curidf,params[9]]);
            }
            else
            {
                console.log("unperocess:"+params[0]);
            }
            console.log("message:"+str);            
            //broad cast
            server.clients.forEach(function(client) {
                if(client&&client.write)
                {
                    client.write(data, { fin: true, mask: false, binary: true }, function(data) {
                        console.log("send-done");
                        client.end();//for short connect
                    });
                }
                else
                {
                    console.log('null write')
                }
            });
        }
        else
        {                        
            //TODO:data process
        }        
    });
    socket.on("error", function(data) {
        console.log('error:' + data);
    });
    socket.on("close", function() {
        console.log("connect-close");        
    });
});

server.on("close", function() {
    console.log("sys close");
});

