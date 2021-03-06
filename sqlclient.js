var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'www.5icoin.com',
    user: 'root',
    password: '-----',
    database: 'sudoku',
    port: 3306
});

connect.connect(function(error, results) {
    if (error) {
        console.log('Connection Error: ' + error.message);
        return;
    }
    console.log('Connected to MySQL');
});


UpdateChara = function(conn, tpe, value) {
    //
};

InsertLog = function(values,conn) {
    //var values = ['1', '0', '0'];
    if(conn==null)
    {
        conn=connect;
    }
    conn.query('INSERT INTO user_log SET guid = ?', values,
        function(error, results) {
            if (error) {
                console.log("ClientReady Error: " + error.message);
                conn.end();
                return;
            }
            console.log('Inserted: ' + results.affectedRows + ' row.');
            console.log('Id inserted: ' + results.insertId);
        }
    );
};

EnterGameLog = function(values,conn) {
    //var values = ['1', '0', '0'];
    if(conn==null)
    {
        conn=connect;
    }
    conn.query('INSERT INTO game_log SET guid=?,gid = ?', values,
        function(error, results) {
            if (error) {
                console.log("ClientReady Error: " + error.message);
                conn.end();
                return;
            }
            console.log('Inserted: ' + results.affectedRows + ' row.');
            console.log('Id inserted: ' + results.insertId);
        }
    );
};

ColorLog = function(values,conn) {
    //var values = ['1', '0', '0'];
    if(conn==null)
    {
        conn=connect;
    }
    conn.query('INSERT INTO color_log SET guid=?,color=?,usercolor=?,difid=?,num=?,curdif=?,usertime=?', values,
        function(error, results) {
            if (error) {
                console.log("ClientReady Error: " + error.message);
                conn.end();
                return;
            }
            console.log('Inserted: ' + results.affectedRows + ' row.');
            console.log('Id inserted: ' + results.insertId);
        }
    );
};

InsertChara = function(conn, values) {
    //var values = ['1', '0', '0'];
    conn.query('INSERT INTO card_characters SET pguid = ?, gameid = ? , timeline = ?', values,
        function(error, results) {
            if (error) {
                console.log("ClientReady Error: " + error.message);
                conn.end();
                return;
            }
            console.log('Inserted: ' + results.affectedRows + ' row.');
            console.log('Id inserted: ' + results.insertId);
        }
    );
};

GetChara = function(conn, values) {
    //var values = ["1"]
    conn.query(
        'SELECT * FROM card_characters where pguid=?', values,
        function selectCb(error, results, fields) {
            if (error) {
                console.log('GetData Error: ' + error.message);
                conn.end();
                return;
            }
            if (results.length > 0) {
                var firstResult = results[0];
                console.log('id: ' + firstResult['pguid']);
                console.log('dbase: ' + firstResult['gameid']);
            } else {
                console.log('count: ' + results.length);
            }
        });
    conn.end();
    console.log('Connection closed');
};
