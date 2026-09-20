// Part 1: Node.js Core Modules (10 Grades)
// 1. Write a function that logs the current file path and directory.(0.5 Grade)
// • Output Example: {File: “/home/user/project/index.js”, Dir: “/home/user/project”}
const path = require("path")
const file = "/home/user/project/index.js";
console.log(path.dirname(file));


// 2. Write a function that takes a file path and returns its file name.(0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf "
function sehllo(file) {
    console.log(path.basename(file))
    return
}
sehllo("/user/files/report.pdf")

// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example:{ dir:"/folder", name:"app", ext:".js"}
// • Output Example: “/folder/app.js”
function built(object) {
    console.log(path.format(object))
    return

}
built({ dir: "\\folder", name: "app", ext: ".js" })

// 4. Write a function that returns the file extension from a given file path.(0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”

function exten(ext) {
    console.log(path.extname(ext))
    return
}
exten("/docs/readme.md")
// 5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example:{Name: “main”, Ext:“.js”}
function pars(par) {
    const { name, ext } = path.parse(par)
    console.log({
        name, ext
    })
    return
} pars("/home/app/main.js")

// 6. Write a function that checks whether a given path is absolute.(0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true

function Abusl(absolute) {
    console.log(path.isAbsolute(absolute))
    return
}
Abusl("/home/user/file.txt")

// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

function jio(a, b, c) {
    console.log(path.join(a, b, c))
    return
} jio("src", "components", "App.js")

// 8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

function resolves(a) {
    console.log(path.resolve(a))
    return
} resolves("./index.js")


// 9. Write a function that joins two paths.(0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt
function jio(a, b) {
    console.log(path.join(a, b))
}

jio("/folder1", "folder2/file.txt")
// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted
const fs = require("fs");
const { error } = require("console");
const { errorMonitor } = require("events");
function hjt(delt) {
    fs.unlink(delt, (err) => {
         if (err);

        console.error("The file.txt is deleted");
    });
}
hjt("/path/to/file.txt")
// 11. Write a function that creates a folder synchronously.(0.5 Grade)
// • Output Example: “Success”
fs.mkdir("sfr", { recursive: true }, (err) => {
    if (err) throw err;

    console.log("Success");
});
// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)
// • Output Example: Welcome event triggered!
const EventEmitter = require("node:events");

const event = new EventEmitter();

event.on("start", () => {
    console.log("Welcome event triggered!");
});

event.emit("start");

// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
// • Input Example: "Ahmed"
// • Output Example:“User logged in: Ahmed”

const vent = new EventEmitter();

vent.on("start", (name) => {
    console.log(`Welcome event triggered! ${name}`);
});

vent.emit("start", "Ahmed");


// 14. Read a file synchronously and log its contents.(0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: the file content => “This is a note.”
fs.writeFileSync("./bonus.js/notes.txt", "This is a note.", () => {
    // if (error)
})

fs.readFileSync("notes.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
})

// 15. Write asynchronously to a file.(0.5 Grade)
// • Input: path: "./async.txt", content: "Async save"
fs.writeFile("./async.txt", "Async save", (err, data) => {
    if (err) throw err;
    console.log("content")
})


// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true
fs.mkdir("./nes.txt", { recursive: true }, (err) => {
    const stats = fs.statSync("./nes.txt")
    if (stats.isDirectory()) {
        console.log("true directory ")
    } else if (stats.isFile()) {
        console.log("false files")
    }
});



// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}
const os = require("node:os");

function getSystemInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}

console.log(getSystemInfo());

// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// • Input Example: "./big.txt"
// • Output Example: log each chunk

const stream = fs.createReadStream("./big.txt", "utf8")
stream.on("data", (chunk) => {
    console.log(chunk)
})

stream.on("end", () => {
    console.log("Finished");
});

stream.on("error", (error) => {
    console.log(error)
})


// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams

const readStream = fs.createReadStream("./big.txt", "utf8");
const writeStream = fs.createWriteStream("./async.txt");

readStream.pipe(writeStream);


// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt",,  "./data.txt"
const zlib = require("node:zlib");
const { pipeline } = require("node:stream");

pipeline(
    fs.createReadStream("./data.txt"),
    zlib.createGzip(),
    fs.createWriteStream("./data.txt.gz"),
    (err) => {
        if (err) console.log(err.message);
        else console.log("File compressed");
    }
);



//...........................................................................
// Part2: Simple CRUD Operations Using HTTP (5 Grades)

// 1)Create an API that adds a new user to your users stored in a JSON file (1 Grade)
// (ensure that the email of the new user doesn’t exist before)
// o URL: POST /user


const http = require("node:http");
const { isRegExp } = require("node:util/types");

const users = [
    {
        id: 1,
        name: "Ziad",
        age: 27,
        email: "ziad@gmail.com"
    }
];

const users2 = [
    {
        id: 2,
        name: "Ahmed",
        age: 30,
        email: "ahmed@gmail.com"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.write(JSON.stringify(users[0].email));
  
        res.end(JSON.stringify(users2) == users.email)
         console.log({ "message": " email already exist"})
    
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});


// 2)Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved
// from the URL (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/id

const http = require("node:http");

let users = [
    { id: 1, name: "Ziad", age: 27 }
];

const server = http.createServer((req, res) => {

    if (req.method === "PATCH" && req.url === "/user/1") {

        if (users[0].age === 27) {

            res.end(JSON.stringify({
                message: "user updated successfully"
            }));

        } else {

    res.end(JSON.stringify({
        message: "age is required"
    }))
        }
    }

});

server.listen(3000, () => {
    console.log("Server running");
});

// 3)Create an API that deletes a User by ID. The user id should be retrieved from the URL (1 Grade)
// Note: Remember to delete the user from the file
// o URL: DELETE /user/id

const http = require("node:http");

let users = [
    { id: 1, name: "Ziad", age: 27 },
    { id: 2, name: "Ahmed", age: 30 }
];

const server = http.createServer((req, res) => {

    if (req.method === "DELETE" && req.url === "/user/1") {

        if (users[0]) {

            users.splice(0, 1);

            res.end(JSON.stringify({
                message: "user deleted successfully"
            }));

        } else {

            res.end(JSON.stringify({
                message: "user not found"
            }));

        }
    }

});

server.listen(3000);

// 4)Create an API that gets all users from the JSON file. (1 Grade)
// o URL: GET /user

const http = require("node:http");

let users = [
    { id: 1, name: "Ziad", age: 27 },
    { id: 2, name: "Ahmed", age: 30 }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/user") {

        res.end(JSON.stringify(users));

    }

});

server.listen(3000, () => {
    console.log("Server running");
});

//
// 5)Create an API that gets User by ID. (1 Grade)
// o URL: GET /user/:id
const http = require("node:http");

let users = [
    { id: 1, name: "Ziad", age: 27 },
    { id: 2, name: "Ahmed", age: 30 }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url.startsWith("/user/")) {

        const id = Number(req.url.split("/")[2]);

        const user = users.find(user => user.id === id);

        if (user) {
            res.end(JSON.stringify(user));
        }  else {
    res.end(JSON.stringify({
        message: "user not found"
    }));
}

    }

});

server.listen(3000, () => {
    console.log("Server running");
});



// ..................................................................................
