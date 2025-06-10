
const http = require("http");
const path = require("path");
const fs = require("fs");

const filepath = path.resolve(__dirname, "posts.json");

const server = http.createServer((req, res) => {
    if (req.url == "/posted" && req.method == "GET") {
        const data = fs.readFileSync(filepath, "utf-8");
          res.setHeader("Content-Type", "application/json");
        res.end(data);
    } 
    else if (req.url.startsWith("/posted/") && req.method == "GET") {
        const splittedUrl = req.url.split("/");
        const uId = splittedUrl[splittedUrl.length - 1];
        const data = JSON.parse(fs.readFileSync(pathFile, "utf-8"));
        const foundObj = data.find(obj => obj.id == uId)  // 2 == 5 -> ? - >x -> undefined -> undfined
        if (!foundObj) res.end("user not found")
    }
    else if (req.url == "/posted" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => body = body + chunk.toString());
        req.on("end", () => {
            const newdata = JSON.parse(body);
            const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));
            const id = data.length + 1;
            data.push({ id, ...newdata });
            fs.writeFileSync(filepath, JSON.stringify(data));
              res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data)); 
        });
    } 
    else if (req.url.startsWith("/posted") && req.method == "PUT") {
        let body = '';
        req.on("data", (chunk) => body = body + chunk.toString());
        req.on("end", () => {
            const updatedata = JSON.parse(body);
            const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));
            const sprlit = req.url.split("/");
            const UId = sprlit[sprlit.length - 1];
            const match = data.findIndex(obj => obj.id == UId);
            data[match] = { id: Number(UId), ...updatedata };
            fs.writeFileSync(filepath, JSON.stringify(data)); // ✅ fixed: writeFileSync instead of watchFile
            res.end(JSON.stringify(data)); // ✅ fixed: send string
        });
    } else if (req.url.startsWith("/posted") && req.method == "PATCH") {
        let body = '';
        req.on("data", (chunk) => body = body + chunk.toString());
        req.on("end", () => {
            const updatedata = JSON.parse(body);
            const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));
            const sprlit = req.url.split("/");
            const UId = sprlit[sprlit.length - 1];
            const match = data.findIndex(obj => obj.id == UId);
            data[match] = {... data[match], ...updatedata };
            fs.writeFileSync(filepath, JSON.stringify(data)); 
            res.end(JSON.stringify(data)); 
        });
    } else if (req.url.startsWith("/posted") && req.method == "DELETE") {
        const sprlit = req.url.split("/");
            const UId = sprlit[sprlit.length - 1];
        const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));
        const match = data.filter(obj => obj.id != UId);
         fs.writeFileSync(filepath, JSON.stringify(match)); 
            res.end(JSON.stringify(match));
    }else{
        res.end("page not found")
    }
    }
);

server.listen(3000, () => {
    console.log("server is on http://localhost:3000");
});
