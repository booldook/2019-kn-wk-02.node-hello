const express = require("express");
const app = express();

// 서버 실행
app.listen(3000, function(){
  console.log("http://127.0.0.1:3000");
});

// 정적 Route
app.use("/", express.static("./public"));

// Router-GET
app.get("/hello", function (req, res) {
  var name = req.query.name; 
  res.send(`<h1>${name}님 반갑습니다.</h1>`);
});
app.get("/test", (req, res) => {
  res.send("<h1>연습~~!!!</h1>");
});
app.get(["/book", "/book/:id"], (req, res) => {
  // primmitive - Number, String, Boolean, undefined, null
  // reference - Array, Object
  var id = req.params.id; //undefined == false
  if(!id) id = 0;
  const books = [
    {id:0, name: "별주부전",  desc: "용왕이 거북이의 간을..."},
    {id:1, name: "홍길동전",  desc: "아버지를 아버지라..."}
  ];
  res.send(`
  <h1>${books[id].name}</h1>
  <h3>${books[id].desc}</h3>
  `);
});

// Route-POST
app.post("/join-save", (req, res) => {
  res.send("저장!");
});