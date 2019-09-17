/* Server Initialize */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.listen(port, ()=>console.log(`Listening on port ${port}`));

/* MySQL 연동 */
var mysql  = require('mysql');
var connection = mysql.createConnection({
    host            :    'localhost',
    user            :    'root',
    password    :   '1234',
    port             :   3306,
    database      :   'ALBUM'        
})
connection.connect();

/* Send Data Using REST */
app.get('/', (req, res) => {
    connection.query('SELECT album_id, album_title, album_image_uri, album_artist FROM album', 
        function(error, result, fields){
            console.log("변환후>>>", JSON.stringify(result));
            console.log("변환전>>>", result);
            res.send(result); 
    });
});

app.get('/{album_id}', (req, res) => {
    connection.query('SELECT * FROM album', 
        function(error, result, fields){
            res.send(result);
    });
});