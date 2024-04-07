const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Users = require('./models/Users');


app.post("/",async(req,res) => {

    try {
        let user = new Users(req.body);
        let result = await user.save();
        res.send(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

app.listen(4000);