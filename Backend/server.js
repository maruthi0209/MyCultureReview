const express = require("express")
const myapp = express()

myapp.get("/", function(req, res) {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html");
    res.send("Welcome to MyCultureReview!!")
})


const port = 3000
myapp.listen(port, function () {
    console.log("Server is running at port 3000")
})