const http = require("http");
const studentController = require("./Controller/controller");

// const studentController = require("./Controllers/studentController");

const server = http.createServer(studentController).listen(4000, ()=> console.log("server is runing"));