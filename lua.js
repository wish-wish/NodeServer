var LuaVM = require('lua.vm.js');
var fs=require('fs');
var path=require('path');

var lua = new LuaVM.Lua.State();
lua.execute('print("Hello, lua")');

var executelua=function( relfile )
{
  var lf=process.cwd()+"/"+relfile;
  fs.exists(lf, function (exists) {
      if (exists) {
        fs.readFile(lf, "binary", function (err, file) {
          lua.execute(file);
        });
      }
    }
  );
}
executelua("lua.lua");