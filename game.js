var game = function() {
    this.gid = 0;
    this.name = "Fruit";
    this.configs = [];

    function sendData(data) {

    }
};

var game_room = function() {
    this.rid = 0;
    this.rname = "花开富贵";
    this.tables = [];

    function sendData(data) {

    }
};

var game_table = function() {
    this.tid = 0;
    this.tname = "四方进宝";
    this.seats = [];

    function init(seat_count) {
        for (var i = 0; i < seat_count; i++) {
            var seat = new game_seat();
            this.seats.push(seat);
        }
    }

    function sendData(data) {

    }
};

var game_seat = function() {
    this.sid = 0;
    this.sname = "东";
    this.conn = null;

    function sendData(data) {

    }
};

var game_play = function() {
    this.game = game;
    this.room = game_room;
    this.table = game_table;

    function user_in(conn) {
        console.log("user_in");
    }

    function user_quit(conn) {
        console.log("user_quit");
    }

    function user_getdata(conn) { //获取配置
        console.log("user_getdata");
    }

    function start() {
        console.log("start");
    }

    function end() {
        console.log("end");
    }
};

var bets_game = function() {
    this.game_play = game_play;

    function user_singlebets(data) {
        console.log("user_singlebets");
    }

    function user_bets(data) {
        console.log("user_bets");
    }

    function user_autostart(data) {
        console.log("user_autostart");
    }

    function user_start(data) {
        console.log("user_start");
    }

    function user_skipanim(data) {
        console.log("user_skipanim");
    }

    function user_end(data) {
        console.log("user_end");
    }
};

var seats_game = function() {
    this.game_play = game_play;

    function user_start(data) {
        console.log("user_start");
    }

    function user_turn_play(data) {
        console.log("user_play:" + data);
    }

    function user_end(data) {
        console.log("user_end");
    }
};