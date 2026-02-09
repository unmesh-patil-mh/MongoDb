// CRUD OPERATIONS IN MONGO DB
use("cruddb");

// to check what is used when we call db
// console.log(db);

// CREATE OPERATION
// to create a collection where out Document(Data) will be stored
// db.createCollection("crudEx");

// *******INSERT*******

// Insert single data
// db.crudEx.insertOne({
//     Course:"Java",
//     Price:250,
//     Duration:"6 weeks"
// })

// let a=db.crudEx.findOne({Price:250});
// console.log(a);

// Insert Multiple data
// db.crudEx.insertMany([
//     {
//         Course:"MongoDB",
//         Price:300,
//         Duration:"4 weeks"
//     },
//     {
//         Course:"MySQL",
//         Price:300,
//         Duration:"5 weeks"
//     },
//     {
//         Course:"Web Development",
//         Price:800,
//         Duration:"8 weeks"
//     },
//     {
//         Course:"Python",
//         Price:600,
//         Duration:"6 weeks"
//     },
//     {
//         Course:"Backend",
//         Price:700,
//         Duration:"7 weeks"
//     }
// ]);
// let b=db.crudEx.find();
// console.log(b);

// SPECIAL COMMANDS IN MONGODB
// let c=db.crudEx.find({Price :{$gt:500}});
// console.log(c);
// let d=db.crudEx.find({Price :{$ne:300}});
// console.log(d);

// *******UPDATE*******

// To update One
// db.crudEx.updateOne({Price:700},{$set:{Price:900}});
// let e=db.crudEx.findOne({Price:900});
// console.log(e);

// Update Many
// db.crudEx.updateMany({Price:300},{$set:{Price:400}});
// let f=db.crudEx.find({Price:400});
// console.log(f);

// ******DELETE*******

// to delete one
// db.crudEx.deleteOne({Price:250});

// to delete many
// db.crudEx.deleteMany({Price :{$lt:500}});

