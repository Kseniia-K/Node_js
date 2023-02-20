// const http = require("http")

// let message = "Привет, мир!" // перезаписала переменную с английского на русский язык
// http.createServer(function(request,response){

//     console.log(message)
//     response.end(message)

// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов на порту 3000")
// })

// function displaySync(data){
//     console.log(data);
// }

// console.log("Начало работы программы");

// displaySync("Обработка данных...");

// console.log("Завершение работы программы");

// function displaySync(data, callback){
//     // с помощью случайного числа определяем ошибку
//     var randInt = Math.random() * (10 - 1) + 1
//     var err = randInt > 5 ? new Error("Ошибка выполнения. randInt больше 5"): null

//     setTimeout(function(){
//         callback(err, data)
//     }, 0)
// }

// console.log("Начало работы программы")

// displaySync("Обработка данных...", function(err, data){
//     if(err) throw err
//     console.log(data)
// })

// console.log("Завершение работы программы")

function displaySync(callback){
    callback()
}

console.log("Начало работы программы")

setTimeout(function(){
    console.log("timeout 500"); 
}, 500)

setTimeout(function(){
    console.log("timeout 100"); 
}, 100)

displaySync(function(){console.log("without timeout")})
console.log("Завершение работы программы")