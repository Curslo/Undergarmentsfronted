import express from 'express';

const app = express();

app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
    res.render("index");
  });
  
  //route for magic page
  app.get("/magic", function (req, res) {
    res.render("magic");
  });
  

const PORT = 7000;

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));