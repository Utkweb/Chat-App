const express = require("express");
const app = express();
const cors = require('cors');
const userRouter =require('./router/userRouter');
const api_config = require('./config');
const port = api_config.port;

app.use(express.json());

// use to connect the frontend to backend 

app.use(cors({origin:'http://localhost:3000'}));

app.use('/user',userRouter);

app.get("/home", (req, res) => {
  res.send("Namaste Duniyaaa!");
});

app.listen(port, () => {
  console.log("the server is started");
});
