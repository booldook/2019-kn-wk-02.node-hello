const express = require("express");
const app = express();

app.listen(3000, function(){
  console.log("http://127.0.0.1:3000");
});

app.get("/hello", function (req, res) {
  var name = req.query.name;
  res.send(`<h1>${name}님 반갑습니다.</h1>`);
})