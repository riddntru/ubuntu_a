var mysql = require("mysql")
const env = require("dotenv").config({ path : "../.env" })

var connection = mysql. createConnection({
  host : process.env.host,
  user : process.enc.user,
  password : process.env.password,
  databass : process.enc.databass
})

connection.connect(function(err){
  if(!err) {
    console.log(process.env.host, "Databass is connected... \n\n")
  } else {
    console.log("Error connecting databass...\n\n")
  }
})
