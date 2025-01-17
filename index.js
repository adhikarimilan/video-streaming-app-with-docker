const express = require('express')
const app = express()
require('dotenv').config()
const fs= require('fs')

if (!process.env.PORT){
  throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
} 

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/video", (req, res) => { 
  const path = "./videos/big_buck_bunny_720p_2mb.mp4"; 
  fs.stat(path, (err, stats) => { 
  if (err) { 
  console.error(`An error occurred: ${err}`);
  res.sendStatus(500);
  return;
  } 
  res.writeHead(200, { 
  "Content-Length": stats.size,
  "Content-Type": "video/mp4",
  }); 
  fs.createReadStream(path).pipe(res); 
  });
 });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})