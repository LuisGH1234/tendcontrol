const express = require("express");
const auth = require("./auth");
const app = express();

app.set('PORT', process.env.PORT || 3000);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ hello: 'world' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const pwd = await auth.hash(password);
    res.json({ hello: 'world' });
});

app.listen(app.get('PORT'),  err => {
    if (err) return console.log(err);
});