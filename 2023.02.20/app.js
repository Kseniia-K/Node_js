// const fs = require("fs")

// // асинхронное чтение
// fs.readFile("hello.txt", "utf8",
//             function(error,data){
//                 console.log("Асинхронное чтение файла")
//                 if(error) throw error // если возникла
//                 console.log(data) // выводим считанные данные
// });

// // синхронное чтение
// console.log("Синхронное чтение файла")
// let fileContent = fs.readFileSync("hello.txt", "utf8")
// console.log(fileContent)


// const fs = require("fs")
// let newFileContent = fs.writeFileSync("hello.txt", "Привет, миииир!!!") // синхронная запись файла
// console.log(`Синхронная запись завершена. Новое содержимое файла: "${fs.readFileSync("hello.txt", "utf-8")}"`)


// const fs = require("fs")

// fs.writeFile("hello.txt", "Hello мир!", function(error){
//     if(error) throw error // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:")
//     let data = fs.readFileSync("hello.txt", "utf8")
//     console.log(data) // выводим считанные данные
// })

// const fs = require("fs")

// fs.appendFileSync("hello.txt", "Привет ми ми ми") // синхронная дозапись

// // асинхронная дозапись
// fs.appendFile("hello.txt", "Привет, МИР!", function(error){
//     if(error) throw error // если возникла ошибка
//     console.log("Запись файла завершена. Содержимое файла:")
//     let data = fs.readFileSync("hello.txt", "utf8")
//     console.log(data) // выводим считанные данные
// })

// const fs = require("fs")
// fs.unlinkSync("hello.txt") // синхронное удаление

// асинхронное удаление

// const fs = require("fs")

// fs.unlink("hello.txt", (err)=>{
//     if (err) console.log(err) // если возникла ошибка
//     else console.log("hello.txt was deleted")
// })

// const Emitter = require("events")
// let emitter = new Emitter()
// let eventName = "greet"
// emitter.on(eventName, function(){
//     console.log("Hello all!")
// });

// emitter.on(eventName, function(){
//     console.log("Привет!")
// });

// emitter.emit(eventName)

// const Emitter = require("events")
// let emitter = new Emitter()
// let eventName = "greet"
// emitter.on(eventName, function(data){
//     console.log(data)
// });

// emitter.emit(eventName, "Привет пир!")


// const util = require("util")
// const EventEmitter = require("events")

// function User(){
// }
// util.inherits(User, EventEmitter)

// let eventName = "greet"
// User.prototype.sayHi = function(data){
//     this.emit(eventName, data)
// }
// let user  = new User()
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data)
// })

// user.sayHi("Добрый день")


// const EventEmitter = require("events")

// let eventName = "greet"

// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data)
//     }
// }

// let user = new User()
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data)
// })

// user.sayHi("Добрый день")

// const fs = require("fs")

// let writeableStream = fs.createWriteStream("hello.txt")
// writeableStream.write("Привет, мир!")
// writeableStream.write("Продолжение записи \n")
// writeableStream.end("Завершение записи")
// let readableStream = fs.createReadStream("hello.txt", "utf8")

// readableStream.on("data", function(chunk){
//     console.log(chunk)
// });


// const fs = require("fs")

// let readableStream = fs.createReadStream("hello.txt", "utf8")

// let writeableStream = fs.createWriteStream("some.txt")

// readableStream.on("data", function(chunk){
//     writeableStream.write(chunk)
// })


// const fs = require("fs")

// let readableStream = fs.createReadStream("hello.txt", "utf8")

// let writeableStream = fs.createWriteStream("some2.txt")

// readableStream.pipe(writeableStream)


const fs = require("fs")
const zlib = require("zlib")

let readableStream = fs.createReadStream("hello.txt", "utf8")

let writeableStream = fs.createWriteStream("hello.txt.gz")

let gzip = zlib.createGzip()

readableStream.pipe(gzip).pipe(writeableStream)