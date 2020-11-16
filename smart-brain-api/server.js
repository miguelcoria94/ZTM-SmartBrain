const express = require("express");

const app = express();

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "demo@demo.com",
      password: "password",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "345",
      name: "kim",
      email: "kim@demo.com",
      password: "password",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is working');
})

app.post('signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('error logging in')
    }
    res.json('signing')
})



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
