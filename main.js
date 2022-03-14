const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


app.use("" , (req,res) => {
    res.status(201).send("hello world")
});


app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });  