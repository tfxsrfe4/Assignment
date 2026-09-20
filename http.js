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