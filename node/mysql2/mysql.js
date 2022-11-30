var mysql = require('mysql2')
const env = require("dotenv").config({ path : "../.env" })

const db = async () => {
  try {
    let.connention = await mysql.createConnection({
      host : process.env.host,
      user: process.env.user,
      password : process.env.password,
      database : process.env.database
    })
    let [rows, fields] = await connention.query("select * from st_info")
    console.log(rows)
  } catch (error) {
    console.log(error)
  }
};

db();