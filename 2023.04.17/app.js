const mysql = require("mysql2")

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "Pa$$w0rd",
    database: "userdb2"
}).promise()

pool.execute("UPDATE users SET age=age+1 WHERE name=?", ["Stan"]) // изменение объектов
    .then(result =>{
        console.log(result[0])
        return pool.execute("SELECT * FROM users") // получение объектов
    })
    .then(result =>{
        console.log(result[0])
        pool.end()
    })
    .then(()=>{
        console.log("Пул закрыт.")
    })
    .catch(function(err) {
        console.log(err.message)
    })











// pool.execute("SELECT * FROM users")
//             .then(result =>{
//                 console.log(result[0])
//             })
//             .catch(function(err) {
//                 console.log(err.message)
//             })

// получение объектов
// pool.query("SELECT * FROM users", function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// закрытие всех подключений
// pool.end(function(err) {
//     if (err) {
//         return console.log(err.message)
//     }
//     console.log("Пул закрыт.")
// })

// добавление объекта
// const sql = "INSERT INTO users (name, age) VALUES(?, ?)"
// const data = ["Bill", 25]
// pool.query(sql, data, function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })