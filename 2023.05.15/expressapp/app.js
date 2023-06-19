const express = require("express");
const app = express();

// создаём парсер для данных в формате json
const jsonParser = express.json();

app.post("/user", jsonParser, function (request, response){
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    response.json(request.body); // отправляем  пришедший ответ обратно
});
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
})

// app.listen(3000);









// // определяем Router
// const productRouter = express.Router();

// // определяем маршруты и их обработчики внутри роутера
// productRouter.use("/create", function(request, response){
//     response.send("Add product");
// });
// productRouter.use("/:id", function(request, response){
//     response.send(`Product ${request.params.id}`);
// });
// productRouter.use("/", function(request, response){
//     response.send("Product list");
// });
// // сопоставляем роутер с конечной точкой "/products"
// app.use("/products", productRouter);
// app.use("/info", function(request, response){
//     response.send("Website Info");
// });
// app.use("/", function(request, response){
//     response.send("Home page");
// });

// app.use("/info", function(request, response){
//     response.send("Website Info");
// });
// app.use("/products/create", function(request, response){
//     response.send("Add product");
// });
// app.use("/products/:id", function(request, response){
//     response.send(`Product ${request.params.id}`);
// });
// app.use("/products/", function(request, response){
//     response.send("Product list");
// });
// app.use("/", function(request, response){
//     response.send("Home page");
// });

// app.get("/journal/:pageName.:pageExt", function(request, response){
//     let pageName = request.params["pageName"];
//     let pageExt = request.params["pageExt"];
//     response.send(`Requested file: ${pageName}.${pageExt}`);
// });

// app.get("/category/:categoryId/products/:productId", function(request, response){
//     let catId = request.params["categoryId"];
//     let prodId = request.params["productId"];
//     response.send(`Category: ${catId} Product: ${prodId}`);
// });

// const urlencodedParser = express.urlencoded({extended: false});

// app.get("/products/:productId", function(request, response){
//     response.send("productId: " + request.params["productId"]);
// });

// // создаём парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});

// app.get("/", function(request, response){

//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/", urlencodedParser, function(request, response){
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// })

// app.use("/info", function(request, response){

//     console.log(request.query);
//     let id = request.query.user.id;
//     let name = request.query.user.name;

//     response.send("<h3>id:" + id + "<br>name: " + name + "</h3>");
// });

// app.get("/", function(request, response){
//     response.send("<h1>Home page</h1>");
// });
// app.use("/info", function(request, response){

//     console.log(request.query);
//     let names = request.query.name;
//     let responseText = "<ul>";
//     for(let i = 0; i < names.length; i++){
//         responseText += "<li>" + names[i] + "</li>";
//     }
//     responseText += "</ul>"
//     response.send(responseText);
// });

// app.get("/", function(request, response){
//     response.send("<h1>Home page</h1>");
// });
// app.use("/info", function(request, response){

//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Information</h1><p>id=" + id + "</p><p>name=" + userName + "</p>");
// });

// app.use("/homepage/foo/bar", function(request, response){
//     response.redirect(301, "..");
// });
// app.use("/homepage", function(request, response){
//     response.send("<h1>About website</h1>");
// });

// app.use("/homepage/bar", function(request, response){
//     response.redirect("/about");
// });
// app.use("/about", function(request, response){
//     response.send("<h1>About website</h1>");
// });

// app.use("/homepage/bar", function(request, response){
//     response.redirect("about");
// });
// app.use("/homepage/about", function(request, response){
//     response.send("<h1>About website</h1>");
// });

// app.use("/homepage", function(request, response){
//     response.redirect("about");
// });
// app.use("/about", function(request, response){
//     response.send("<h1>About website</h1>");
// });

// app.use("/index", function(request, response){
//     response.redirect("https://www.w3.org");
// });

// app.get(/.*(\.)html$/, function(request, response){
//     response.send(request.url);
// });

// // обработка запроса по адресу /about
// app.get("/about", function(request, response){
//     response.send("<h1>About website</h1>");
// });
// // обработка запроса по адресу /contact
// app.use("/contact", function(request, response){
//     response.send("<h1>Contacts</h1>");
// });
// // обработка запроса к корню веб-сайта
// app.get("/", function(request, response){
//     response.send("<h1>Home page</h1>");
// });

// app.use(express.static(__dirname + "/public"))
// app.use("/",function(request, response){
//     response.send("<h1>Home page</h1>");
// });

// app.use("/home/foo/bar",function(request, response){
//     response.status(500).send("Возникли проблемы с сервером");
// });

// app.use("/home/foo/bar",function(request, response){
//     response.sendStatus(500);
// });

// app.use(function(request, response){
//     response.sendFile(__dirname + "/index.html");
// });

// app.use(function(request, response){
//     response.send(`<!DOCTYPE html>
//     <html>
//         <head>
//             <title>Home</title>
//             <meta charset="utf-8" />
//         </head>
//         <body>
//             <h1>Home page</h1>
//             <h3>Hi, Kseniia!</h3>
//         </body>
//     </html>
//     `)
// }) 

// app.listen(3000);

// app.use(function(request, response){
//     // html-заголовок
//     // response.send("<h2>Hi, Kseniia!</h2>"); 
//     // объект
//     // response.send({id: 6, name: Tomas}); 
//     // массив
//     // response.send(["Tomas", "William", "Samuel"]);
//     // объект Buffer
//     response.send(Buffer.from("Hello, Kseniia"));
// }) 

// app.listen(3000);

// app.use(function(request, response, next){
//     console.log("Hello from Middleware 1!");
//     next();
// });
// app.use("/news", function(request, response, next){
//     console.log("News Middleware!");
//     response.send("News Middleware!");
// });
// app.get("/", function(request, response){
//     console.log("Route /");
//     response.send("Hello, Kseniia!");
// });
// app.listen(3000);

// app.get("/", function(request, response){
//     response.send("<h1>Привет, Ксения!</h1>");
// });
// app.get("/news", function(request, response){
//     response.send("<h1>Самые свежие новости здесь!</h1>");
// });
// app.get("/statistics", function(request, response){
//     response.send("<h1>Отслеживайте статистику вашей личной страницы здесь!</h1>");
// });
// app.get("/audios", function(request, response){
//     response.send("<h1>Музыкальный хит 1997 года: 'Angels'</h1>");
// });
// app.listen(3000);






// // подключение express
// const express = require("express");
// // создаём объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/", function(request, response){
//     // отправляем ответ
//     response.send("<h2>Привет, Ксения!</h2>");
// })
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);