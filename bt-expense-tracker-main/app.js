require("dotenv").config();
const express = require("express");
const app = express();

let date = new Date().toDateString();
let expenses = [
    { id: 1, amount: 2000, date: date, category: "foodstuff" }
];


app.use(express.json());


app.post('/add', (req, res) => {
    const { amount, category } = req.body;


    if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: "Amount must be a positive number" });
    }
    if (!category || typeof category !== 'string' || category.trim() === "") {
        return res.status(400).json({ error: "Category must be a non-empty string" });
    }


    const newExpense = {
        id: expenses.length + 1,
        amount,
        date: new Date().toDateString(),
        category: category.trim()
    };

    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API LIVE ON ${PORT}`));

