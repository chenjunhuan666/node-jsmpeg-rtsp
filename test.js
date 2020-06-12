// const express = require('express')
// var cors = require('cors');
// //初始化express服务器对象
// const app = express()

//跨域解决
// app.all("*",(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*")
//     res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
//     res.header("Content-Type","application/json;charset=utf-8")
//     next()
// })

// app.use(cors({
//     origin:['http://localhost:3001'],
//     methods:['GET','POST'],
//     alloweHeaders:['Conten-Type', 'Authorization']
// }));

Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://www.mym9.com/101065?from=2019-06-28/01:12:13',
  // streamUrl: 'rtsp://admin:abc123456@192.168.2.174:554/mpeg4/ch33/sub/av0_0',
  // streamUrl: 'rtsp://218.204.223.237:554/live/1/0547424F573B085C/gsfp90ef4k0a6iap.sdp',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-b:v': '2000k',
    '-s': '1920 1080',
  }
})
