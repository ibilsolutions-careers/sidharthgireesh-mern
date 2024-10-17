const express = require("express");
const cors =  require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
const bookRouter = require("./Routes/books");

app.use("/books", bookRouter);
app.listen(5000, function () { console.log("Server is listening on port 5000") })

mongoose
  .connect('mongodb+srv://root:root@books-store-mern.c7ba8z1.mongodb.net/books-collection?retryWrites=true&w=majority')
  .then(() => {
    console.log('App connected to database');
    app.listen(5555, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });