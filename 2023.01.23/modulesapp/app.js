// const express = require("express");
// const app = express();

// app.get("/", function(request, response){
//     response.end("Hello from Express!");
// });
// app.listen(3000);

let name = process.argv[2];
let age = process.argv[3];

console.log("name: " + name);
console.log("age: " + age);