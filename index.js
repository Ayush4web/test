const express = require('express')
const app = express();



const port = process.env.port || 5000

app.get("/", (req, res) => {
   res.send("hellooooooo")
})

app.listen(port,()=>console.log("server listening.."))