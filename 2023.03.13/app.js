const http = require("http")
const fs = require("fs")

http.createServer(async(request, response) => {
    fs.readFile("index.html", "utf8", function(error, data){
        let message= "Изучаем Node.js"
        let header = "Главная страница"
        data = data.replace("{header}", header).replace("{message}", message)
        response.end(data)
    })
}).listen(3000)



// const http = require("http")
// const fs = require("fs")

// http.createServer(async(request, response) => {
//     if (request.url === "/user") {
//         const buffers = [] // буфер для получаемых данных

//         for await (const chunck of request) {
//             buffers.push(chunk) // добавляем в буфер все полученные данные
//         }

//         const user = JSON.parse(Buffer.concat(buffers).toString())
//         console.log(user.name,"-",user.age)
//         response.end("Данные успешно получены")
//     }
//     else {
//         fs.readFile("index.html", (error, data) => response.end(data))
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"))

// const http = require("http")
// const fs = require("fs")

// http.createServer(async(request, response) => {
//     if (request.url === "/user") {
//         const buffers = [] // буфер для получаемых данных

//         for await (const chunck of request) {
//             buffers.push(chunk) // добавляем в буфер все полученные данные
//         }

//         const data = Buffer.concat(buffers).toString()
//         console.log(data)
//         response.end("Данные успешно получены")
//     }
//     else {
//         fs.readFile("index.html", (error, data) => response.end(data))
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"))

// const http = require("http")
// const fs = require("fs")

// http.createServer(function(request, response){
//     if (request.url === "/user"){
//         let data = ""
//         request.on("data", chunck => {
//             data += chunck
//         });
//         request.on("end", () => {
//             console.log(data)
//             response.end("Данные успешно получены")
//         });
//     }
//     else {
//         fs.readFile("index.html", (error, data) => response.end(data))
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"))

// const http = require("http")
// const fs = require("fs")

// http.createServer(function(request, response){
//     console.log(`Запрошенный адрес: ${request.url}`) // получаем путь после слеша
//     const filePath = request.url.substr(1)
//     fs.readFile(filePath,function(error,data){
//         if(error) {
//             response.statusCode = 404
//             response.end("Resourse not found!")
//         }
//         else {
//             response.end(data)
//         }
//     })
// }).listen(3000, function(){
//     console.log("Server started at 3000")
// })

// const http = require("http")
// const fs = require("fs")

// http.createServer(function(request, response){
//     console.log(`Запрошенный адрес: ${request.url}`) // получаем путь после слеша
//     const filePath = request.url.substr(1) // смотрим, есть ли такой файл
//     fs.access(filePath, fs.constants.R_OK, err => {
//         // если произошла ошибка – отправляем статусный код 404
//         if(err) {
//             response.statusCode = 404
//             response.end("Resourse not found!")
//         }
//         else {
//             fs.createReadStream(filePath).pipe(response)
//         }
//     })
// }).listen(3000, function(){
//     console.log("Server started at 3000")
// })

// http.createServer(function(request, response){
//     response.setHeader("Content-Type", "text/html")

//     if(request.url === "/"){
//         response.statusCode = 302 // временная переадресация на адрес localhost:3000/newpage
//         response.setHeader("Location", "/newpage")
//     }
//     else if(request.url == "/newpage"){
//         response.write("New address")
//     }
//     else {
//         response.statusCode = 404; // адрес не найден
//         response.write("Not Found")
//     }
//     response.end()
// }).listen(3000)

// http.createServer(function(request, response){
//     response.setHeader("Content-Type", "text/html")

//     if(request.url === "/home" || request.url ===  "/"){
//         response.write("<h2>Home</h2>")
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>")
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>")
//     }
//     else {
//         response.write("<h2>Not found</h2>")
//     }
//     response.end()
// }).listen(3000)

// http.createServer(function(request, response){
//     response.setHeader("Content-Type", "text/html")
//     response.write("<!DOCTYPE html>")
//     response.write("<head>")
//     response.write("<title>Hello Node.js</title>")
//     response.write("<meta charset=\"utf-8\" />")
//     response.write("</head>")
//     response.write("<body><h2>Привет мир</h2></body>")
//     response.write("</html>")
//     response.end()
// }).listen(3000)

// http.createServer(function(request, response){
//     response.setHeader("UserId", 12)
//     response.setHeader("Content-Type", "text/html; charset=utf-8;")
//     response.write("<h2>hello world</h2>")
//     response.end()
// }).listen(3000)

// http.createServer(function(request, response){
//     console.log("Url: " + request.url);
//     console.log("Тип запроса: " + request.method);
//     console.log("User-Agent: "   + request.headers["user-agent"])
//     console.log("Все заголовки")
//     console.log(request.headers)

//     response.end()
// }).listen(3000)