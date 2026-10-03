// Event Loop: Handles asynchronous operations without blocking the main thread.

//  libuv: Provides Node.js with asynchronous, non - blocking operations and the Thread Pool.

// Async Operations:  Node.js delegates the operation → continues running → callback waits → Event Loop executes it.
// Call Stack / Event Queue / Event Loop: Call Stack → executes code.

// Event Queue → stores ready callbacks.
// Event Loop → moves callbacks to the Call Stack.
// Thread Pool: Handles some heavy async operations.Default = 4 threads.
// Change it with UV_THREADPOOL_SIZE.
//      Blocking / Non - Blocking: Blocking → waits and stops execution.
//   Non - blocking → means Node.js starts the operation and continues executing other code without waiting.


//............................................................................................
 
const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());


// 1- Add User
app.post("/user", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const { name, age, email } = req.body;

     const emailExists = users.find(user => user.email === email);

     if (emailExists) {
          return res.json({
               message: "Email already exists"
          });
     }

     const newUser = {
          id: users.length + 1,
          name,
          age,
          email
     };

     users.push(newUser);

     fs.writeFileSync(
          "users.json",
          JSON.stringify(users, null, 2)
     );

     res.json({
          message: "User added successfully",
          user: newUser
     });
});


// 2- Update User
app.patch("/user/:id", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const id = Number(req.params.id);

     const user = users.find(user => user.id === id);

     if (!user) {
          return res.json({
               message: "User not found"
          });
     }

     if (req.body.name) {
          user.name = req.body.name;
     }

     if (req.body.age) {
          user.age = req.body.age;
     }

     if (req.body.email) {
          user.email = req.body.email;
     }

     fs.writeFileSync(
          "users.json",
          JSON.stringify(users, null, 2)
     );

     res.json({
          message: "User updated successfully",
          user
     });
});


// 3- Delete User
app.delete("/user/:id", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const id = Number(req.params.id);

     const index = users.findIndex(user => user.id === id);

     if (index === -1) {
          return res.json({
               message: "User not found"
          });
     }

     users.splice(index, 1);

     fs.writeFileSync(
          "users.json",
          JSON.stringify(users, null, 2)
     );

     res.json({
          message: "User deleted successfully"
     });
});


// 4- Get User By Name
app.get("/user/getByName", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const name = req.query.name;

     const user = users.find(user => user.name === name);

     if (!user) {
          return res.json({
               message: "User not found"
          });
     }

     res.json(user);
});


// 5- Get All Users
app.get("/user", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     res.json(users);
});


// 6- Filter By Minimum Age
app.get("/user/filter", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const minAge = Number(req.query.minAge);

     const result = users.filter(user => user.age >= minAge);

     res.json(result);
});


// 7- Get User By ID
app.get("/user/:id", (req, res) => {

     const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

     const id = Number(req.params.id);

     const user = users.find(user => user.id === id);

     if (!user) {
          return res.json({
               message: "User not found"
          });
     }

     res.json(user);
});


app.listen(3000, () => {
     console.log("Server running on port 3000");
});

// //-----------------------------------------------------------
// //leetcode

function longestCommonPrefix(strs) {
     let prefix = strs[0];

     for (let i = 1; i < strs.length; i++) {

          while (!strs[i].startsWith(prefix)) {
               prefix = prefix.slice(0, -1);

               if (prefix === "") {
                    return "";
               }
          }
     }

     return prefix;
}