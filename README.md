# 🍃 MongoDB + Mongoose Basic Connection

A simple and beginner-friendly project demonstrating how to connect **MongoDB** with **Node.js** using **Mongoose** and perform basic database operations.

This repository covers MongoDB connection setup and basic CRUD commands using Mongoose.

> ⚠️ This project is created for learning and practice purposes.

---

## 📌 Project Overview

This project demonstrates:

- 🔌 Connecting MongoDB with Node.js
- 📦 Using Mongoose ODM
- 🗂️ Creating Schemas & Models
- ➕ Insert (Create) operations
- 📖 Read operations
- ✏️ Update operations
- ❌ Delete operations

It serves as a foundational project for backend development using MongoDB.

---

## 🛠️ Technologies Used

- Node.js  
- MongoDB  
- Mongoose  
- JavaScript  

---

## 🚀 Features

- ✅ MongoDB Local Connection Setup  
- ✅ Mongoose Schema Definition  
- ✅ Model Creation  
- ✅ CRUD Operations  
- ✅ Error Handling  
- ✅ Clean & Simple Code Structure  

---

## ⚙️ Installation & Setup

### 1️⃣ Install Dependencies

If needed: Install npm dependencies
```
npm init -y
```
---

### 2️⃣ Start MongoDB Server

Make sure MongoDB is running locally:


---

### 3️⃣ Basic Connection Example

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));
```

#### Example Schema:-
```
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model("User", userSchema);
```

---
## 📊 Basic CRUD Commands
---
### ➕ Create
```
User.create({ name: "Yash", email: "Yash@example.com", age: 22 });
```
---
### 📖 Read
```
User.find();
```
---
### ✏️ Update
```
User.updateOne({ name: "Yash" }, { age: 25 });
```
---
❌ Delete
```
User.deleteOne({ name: "Yash" });
```

---

## 🎯 Learning Objectives

This project helped me:

- Understand NoSQL database concepts  
- Learn MongoDB basics  
- Connect MongoDB using Mongoose  
- Perform CRUD operations  
- Work with Schemas & Models  

---

## 🔮 Future Improvements

- Add Express.js integration  
- Convert into REST API  
- Add validation  
- Implement authentication  
- Deploy to MongoDB Atlas  

---

## ⚖️ Disclaimer

This project is created for educational purposes only.

---

## 👨‍💻 Author

### Unmesh Patil  
GitHub: https://github.com/unmeh-patil-mh <br>
Linkedin: www.linkedin.com/in/unmeshpatil2005 <br>
Email: punmesh56@gmail.com

---
