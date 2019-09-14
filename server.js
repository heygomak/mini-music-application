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
    user            :    'master',
    password    :   '1234',
    port             :   3306,
    database      :   'album'        
})
connection.connect();

/* Send Data Using REST */
app.get('/', (req, res) => {
    connection.query('SELECT * FROM album', function(error, result, fields){
        res.send(result);
        console.log("query 실행 결과>>>", typeof result, result);
    });
});