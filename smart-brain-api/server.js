const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.listen(3000, () => {
    console.log('listening on port 3000....')
});

/* 
/ --> res = this is working
/signin --> POST = succes/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/
