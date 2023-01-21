// const http = require("http")
// http.createServer(function(request,response){

//     response.end("Hello  NodeJS!")

// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000")
// })

// const os = require("os")

// let userName = os.userInfo().username

// console.log(userName)

// const os = require("os");
// const greeting = require("./greeting");

// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require("./user.js");

// let name = new User("Kseniia", 17);
// name.sayHi();

// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`);

// var greeting2 = require("./greeting.js");
// greeting2.name = "Bob";

// console.log(`Hello ${greeting2.name}`);
// console.log(`Hello ${greeting1.name}`);

// const welcome = require("./welcome");

// welcome.getMorningMessage();
// welcome.getEveningMessage();

const greeting = require("./greeting");

global.name = "Kseniia";

global.console.log(date);
console.log(greeting.getMessage());
