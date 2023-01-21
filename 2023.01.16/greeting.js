// let x = 1;
// let result = x => Math.sin(x);
// console.log(result(x));

// let currentDateTime = new Date();
// module.exports.date = currentDateTime;

// module.exports.getMessage = function(name){
//     let hour = currentDateTime.getHours();
//     if(hour > 16){
//         return "Добрый вечер, " + name;
//     }
//     else if(hour > 12){
//         return "Добрый день, " + name;
//     }
//     else{
//         return "Доброе утро, " + name;
//     }
// }

// module.exports.name = "Alice";

let currentDateTime = new Date();
global.date = currentDateTime;

module.exports.getMessage = function(){
    let hour = currentDateTime.getHours();
    if(hour > 16){
        return "Добрый вечер, " + global.name;
    }
    else if(hour > 12){
        return "Добрый день, " + global.name;
    }
    else{
        return "Доброе утро, " + global.name;
    }
}
