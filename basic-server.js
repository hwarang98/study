/* Express and cors  */
const express = require('express') // 모듈 불러오기
const cors = require('cors') // cors 미들웨어 불러오기

const app = express() // 서버 만들기
app.use(cors()) // 모든 cors 허용 
app.use(express.json({strict: false}));

const PORT = 5000;
const ip = 'localhost';
app.use(express.static('client'))

// get
app.get('/', function(req, res){
  res.send('hello world!')
  console.log("get에 왔나?")
})

// post
app.post('/upper', function(req, res){
  console.log("upper은  왔나?")
  let result = req.body;
  result = result.toUpperCase();
  console.log("result: ", result)
  res.json(result)
})
app.post('/lower', function(req, res){
  console.log("lower은 왔나?")
  let result = req.body;
  result = result.toLowerCase();
  console.log("result: ", result)
  res.json(result)
})
app.listen(PORT, ()=>{
  console.log(`http server listen on ${ip}:${PORT}`);
})



// lower
// upper



