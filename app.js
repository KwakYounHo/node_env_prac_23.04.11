const mysql  = require('mysql2');
const dotenv = require('dotenv').config()

const DB     = mysql.createConnection({
  host     : process.env.mysqlHost,
  port     : process.env.mysqlPort,
  user     : process.env.mysqlUser,
  password : process.env.mysqlPassword,
  database : process.env.mysqlDatabase,
});

DB.connect(()=>{'DB가 연결 되었습니다'});

try {
  DB.query('show tables',(err,result)=>{
    if (err) throw err
    console.log(result);
  })
} catch (e) {
  console.log(e);
}

DB.end();