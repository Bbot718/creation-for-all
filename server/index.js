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

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    db.query("SELECT * FROM T_LOGIN WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if(err){
            res.send({err: err})
        } 
        (result.length > 0) ? res.send(result) : res.send({message: "* Wrong Username or password"})  
    })
})

app.get('/users', (req, res) => {
    db.query("SELECT * FROM T_LOGIN", 
    (err, result) => {res.send(result)})
})

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO T_LOGIN (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => {
        console.log(err);
    })
})

app.post('/delete_user', (req, res) => {
    const id = req.body.id;

    db.query("DELETE FROM T_LOGIN WHERE login_id = ?", 
    [id],
    (err, result) => {console.log(err);})
})

app.get('/pageWCarouselle', (req, res) => {
    db.query("SELECT * FROM T_PAGE WHERE hasCarouselle = 1", 
    (err, result) => {res.send(result);})
})

app.get('/page', (req, res) => {
    db.query("SELECT * FROM T_PAGE", 
    (err, result) => {res.send(result);})
})

app.get('/language', (req, res) => {
    db.query("SELECT * FROM T_LANGUAGE", 
    (err, result) => {res.send(result);})
})


app.get('/content', (req, res) => {
    const page = req.query.page;

    db.query("SELECT * FROM T_CONTENT WHERE page_id = ?", [page] ,
    (err, result) => {res.send(result);})
})

 
app.listen(3001, () => {
    console.log('running on port 3001')
})
