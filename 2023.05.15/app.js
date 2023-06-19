// const Sequelize = require("sequelize")
// const sequelize =  new Sequelize("userdb2", "root", "Pa$$w0rd", {
//     dialect: "mysql",
//     host: "localhost",
//     define: {
//         timestamps: false
//     }
// })

// const User = sequelize.define("user", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name:  {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// })

// sequelize.sync().then(result=>{
//     console.log(result);
// })
// .catch(err=> console.log(err));

// User.create({
//     name: "Kseniia",
//     age: 18
// }).then(res=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// User.create({
//     name: "Mark",
//     age: 21
// }).then(res=>{
//     const user = {id: res.id, name: res.name, age: res.age}
//     console.log(user);
// }).catch(err=>console.log(err))

// User.findAll({raw: true}).then(users=>{
//     console.log(users)
// }).catch(err=>console.log(err))

// User.findAll({where:{name: "Mark"}, raw: true}).then(users=>{
//     console.log(users)
// }).catch(err=>console.log(err))

// User.findByPk(1)
// .then(user=>{
//     if(!user) return // если пользователь не найден
//     console.log(user.name)
// }).catch(err=>console.log(err))

// User.findOne({where: {name: "Mark"}})
// .then(user=>{
//     if(!user) return // если пользователь не найден
//     console.log(user.name, user.age)
// }).catch(err=>console.log(err))

// User.update({age: 40}, {
//     where: {
//         name: "Mark"
//     }
// }).then((res) => {
//     console.log(res)
// })

// User.destroy({
//     where: {
//         name: "Mark"
//     }
// }).then((res) => {
//     console.log(res)
// })





// const Sequelize = require("sequelize")
// const sequelize =  new Sequelize("userdb2", "root", "Pa$$w0rd", {
//     dialect: "postgres",
//     host: "localhost"
// })

// const User = sequelize.define("user", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name:  {
//         type: Sequelize.toString,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// })


// class User extends Model {}
// User.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name:  {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// }, {
//     sequelize,
//     modelName: "user"
// })