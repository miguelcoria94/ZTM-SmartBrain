const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(404).send("This is the root")
});

app.listen(3000);