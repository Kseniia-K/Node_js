const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "userdb2",
    password: "Pa$$w0rd"
}).promise()

const sql = `DELETE FROM users WHERE name="Stan"`
connection.query(sql)
            .then(result =>{
                console.log(result[0])
            })
            .catch(err =>{
                console.log(err)
            })











// connection.query("SELECT * FROM users")
//             .then(([rows, fields]) =>{
//                 console.log(rows)
//             })
//             .catch(err =>{
//                 console.log(err)
//             })

// connection.query("SELECT * FROM users")
// .then(result =>{
//     console.log(result[0])
// })
// .catch(err =>{
//     console.log(err)
// })

// connection.query("SELECT * FROM users")
// .then(result =>{
//     console.log(result)
// })
// .catch(err =>{
//     console.log(err)
// })

// const user = ["Tom", 29]
// const sql = "INSERT INTO users(name, age) VALUES(?, ?)"

// connection.query(sql, user, function(err, results) {
//     if(err) console.log(err)
//     else console.log("Данные добавлены")
// })

// connection.end()

// connection.execute("SELECT * FROM users",
// function(err, results, fields) {
//     console.log(err)
//     console.log(results) // сами данные
//     console.log(fields) // мета-данные полей
// })
// connection.end()

// const sql = `DELETE FROM users WHERE name=?`
// const data = ["Kate"] // удаляем пользователей с именем Kate

// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// connection.end()

// const sql = `UPDATE users SET age=? WHERE name=?`
// const data = [33, "Alice"]

// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// connection.end()

// const sql = `SELECT * FROM users WHERE name="Bob" AND age=22`

// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     const users = results
//     for(let i = 0; i < users.length; i++){
//         console.log(users[i].name)
//     }
// })

// connection.end()

// const sql = `SELECT * FROM users`

// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     const users = results
//     for(let i = 0; i < users.length; i++){
//         console.log(users[i].name)
//     }
// })

// connection.end()

// const sql = `SELECT * FROM users`

// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// connection.end()

// const users = [
//     ["Bob", 22],
//     ["Alice", 25],
//     ["Kate", 28]
// ]
// const sql = `INSERT INTO users(name, age) VALUES ?`

// connection.query(sql, [users], function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// connection.end()

// const sql = `INSERT INTO users(name, age) VALUES('Kseniia', 18)`

// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     console.log(results.insertId)
// })

// const sql = `INSERT INTO users(name, age) VALUES('Kseniia', 18)`

// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     console.log(results)
// })

// connection.end()

// const sql = `create table if not exists users(
//     //     id int primary key auto_increment,
//     //     name varchar(255) not null,
//     //     age int not null
//     // )`
    
// connection.query(sql, function(err, results) {
//     if(err) console.log(err)
//     else console.log("Таблица создана")
// })
// connection.end()

// connection.query("SELECT * FROM users",
// function(err, results, fields) {
//     console.log(err)
//     console.log(results) // сами данные
//     console.log(fields) // мета-данные полей
// })
// connection.end()

// создание базы данных userdb2
// connection.query("CREATE DATABASE userdb2", function(err, results) {
//     if(err) console.log(err)
//     else console.log("База данных создана")
// })

// connection.end()

// тестирование подключения
// connection.connect(function(err){
//     if (err) {
//         return console.error("Ошибка: " + err.message)
//     }
//     else {
//         console.log("Подключение к серверу MySQL успешно установлено")
//     }
// })

// закрытие подключения
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message)
//     }
//     console.log("Подключение закрыто")
// })