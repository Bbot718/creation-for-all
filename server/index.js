const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'creation_for_all',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/getLogin', (req, res) => {
    const query = "SELECT * FROM T_LOGIN";
    db.query(query, (error, result) => res.send(result))
});

app.listen(3001, () => {
    console.log('running on port 3001')
});