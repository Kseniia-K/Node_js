// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("userdb2", "root", "Pa$$w0rd", {
//     dialect: "mysql",
//     host: "localhost",
//     define: {
//         timestamps: false
//     }
// });

// const Student = sequelize.define("student", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// const Course = sequelize.define("course", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// // промежуточная сущность, которая связывает курс и студента
// const Enrolment = sequelize.define("enrolment", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     grade: { // оценка студента по данному курсу
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// Student.belongsToMany(Course, {through: Enrolment});
// Course.belongsToMany(Student, {through: Enrolment});

// sequelize.sync({force: true}).then(()=>{
//     console.log("Tables have been created");
// }).catch(err=>console.log(err));

// Course.create({name: "JS"});
// Course.create({name: "TS"});
// Course.create({name: "Node.js"});

// Student.create({name: "Kseniia"});
// Student.create({name: "Mariia"});
// Student.create({name: "Mark"});


// получаем пользователя с именем Kseniia
// Student.findOne({where: {name: "Kseniia"}})
// .then(student=>{
//     if(!student) return;

//     // добавим Ксении курс по Node.js
//     Course.findOne({where: {name: "Node.js"}})
//     .then(course=>{
//         if(!course) return;
//         student.addCourse(course, {through: {grade: 1}});
//     });
// });


// Student.findOne({where: {name: "Kseniia"}})
// .then(student=>{
//     if(!student) return;
//     student.getCourses().then(courses=>{
//         for(course of courses){
//             console.log(course.name);
//         }
//     });
// });



// Student.findOne({where: {name: "Kseniia"}})
// .then(student=>{
//     if(!student) return;
//     student.getCourses().then(courses=>{
//         for(course of courses){
//             console.log("course:", course.name, "grade:", course.enrolment.grade);
//         }
//     });
// });


// Student.findOne({where: {name: "Kseniia"}})
// .then(student=>{
//     if(!student) return;
//     student.getCourses().then(courses=>{
//         for(course of courses){
//             if(course.name==="Node.js") course.enrolment.destroy();
//         }
//     });
// });
















// const Coach = sequelize.define("coach", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// const Team = sequelize.define("team", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });
// Coach.hasOne(Team, {onDelete: "cascade"});


// sequelize.sync({force: true}).then(()=>{
//     console.log("Tables have been created");
// }).catch(err=>console.log(err));

// // добавляем тренера
// Coach.create({name: "Tom Johnes"})
// .then(coach=>{
//     // добавляем команду
//     Team.create({name: "Liverpool"}).then(team=>{
//         // устанавливаем для тренера команду
//         coach.setTeam(team).catch(err=>console.log(err));
//     });
// }).catch(err=>console.log(err));

// // получаем тренера с id=1
// Coach.findByPk(1).then(coach=>{
//     if(!coach) return console.log("Coach not found");
//     coach.getTeam().then(team=>{
//         console.log(coach.name, "-", team.name);
//     });
// });

// // добавляем тренера 2
// Coach.create({name: "John Johnes"})
// .then(coach=>{
//     // добавляем команду
//     Team.create({name: "Real Madrid"}).then(team=>{
//         // устанавливаем для тренера команду
//         coach.setTeam(team).catch(err=>console.log(err));
//     });
// }).catch(err=>console.log(err));

// // получаем тренера с id=2
// Coach.findByPk(2).then(coach=>{
//     if(!coach) return console.log("Coach not found");
//     coach.getTeam().then(team=>{
//         console.log(coach.name, "-", team.name);
//     });
// });

// Coach.findAll({
//     attributes: ["name"], // включаем столбец name из таблицы coaches
//     include: [{
//         model: Team,
//         attributes: ["name"] // включаем столбец name из таблицы teams
//     }]
// }).then(coaches => {
//     for(coach of coaches){
//         console.log(coach.name, "-", coach.team.name);
//     }
// });



// const Product = sequelize.define("product", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     price: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });

// const Company = sequelize.define("company", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });
// Company.hasMany(Product, {onDelete: "cascade"});

// sequelize.sync({force: true}).then(()=>{
//     console.log("Tables have been created");
// }).catch(err=>console.log(err));

// // создаём одну компанию
// Company.create({name: "Apple"}).then(res=> {
//     // получаем id созданной компании
//     const compId = res.id;
//     // создаём пару товаров для этой компании
//     Product.create({name: "iPhone X", price: 500, companyId: compId}).catch(err => console.log(err));
//     Product.create({name: "iPhone XI", price: 700, companyId: compId}).catch(err => console.log(err));
// }).catch(err=>console.log(err));

// // найдём компанию с id=1
// Company.findByPk(1).then(company=>{
//     if(!company) return console.log("Company not found");
//     console.log(company);
//     // и добавим для неё один объект
//     company.createProduct({name: "iPhone XIII", price: 1000,}).catch(err=>console.log(err));
// }).catch(err=>console.log(err));


// Company.findByPk(1).then(company=>{
//     if(!company) return console.log("Company not found");
//     company.getProducts()
//     .then(res=>{
//         for(let i = 0; i < res.length; i++)
//             console.log(res[i].name, " - ", company.name);
//     })
//     .catch(err=>console.log(err));
// }).catch(err=>console.log(err));