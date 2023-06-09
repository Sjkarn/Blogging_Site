const express = require("express");
const bodyParser = require('body-parser');
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://Aradhybly81:Aradhybly81@cluster0.tw2agat.mongodb.net/Blog",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is connected..."))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + " " + (process.env.PORT || 3000));
});