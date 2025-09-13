const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

// const budget = {
//     myBudget: [
//         {
//             title: 'Eat out',
//             budget: 35
//         },
//         {
//             title: 'Rent',
//             budget: 375
//         },
//         {
//             title: 'Groceries',
//             budget: 110
//         },
//     ]
// };


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', (err, data) => {
        if (err) throw err;
        let budget = JSON.parse(data);
        res.json(budget);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});