require("dotenv").config();
const express = require("express");
const app = express();

let date =new Date().toDateString();
let expenses = [
    {id:1, amount: 2000, date:date, category:"foodstuff"}
]

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the expenses tracker backend")
})

app.get('/expenses', (req,res) => {
    res.status(200).json(expenses); 
}) 

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`API LIVE  ON ${PORT}`))