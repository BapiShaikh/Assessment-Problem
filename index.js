const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require('path');


app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


const user = [
  {
    name: "Bapi Shaikh",
    email: "bapi@gmail.com",
    age: 24,
    city: "Kolkata",
    profession: "Software Engineer",
  },
];

app.get("/", (req, res) => {
  res.render("app", { user });
});

app.get("/user/add", (req, res) => {
  res.render("addUser");
});
app.post("/user/add", (req, res) => {
  const { name, email, age, city, profession } = req.body;
  user.push({ name, email, age, city, profession });
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Server is Running ...");
});
