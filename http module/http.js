// const http =require("http")

const { request } = require("http")

// const port =6000
// const server =http.createServer((req,res)=>{
//     console.log("i am storing")
//     res.end (
//         "<h1>hello world </h1> <a href ='http://localhost:6000/posts'>go to back</a>"
//     )
// })
// server.listen(port,()=>{
//     console.log(`i am runnin ${port}`)
// })




// get and post request
const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'db.json');

const server = http.createServer((req, res) => {
  // Set content type
  res.setHeader('Content-Type', 'application/json');

  // ✅ GET /hello
  if (req.method === 'GET' && req.url === '/hello') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end(JSON.stringify({ error: 'Failed to read file' }));
      }
      res.statusCode = 200;
      res.end(data);
    });
  }

  // ✅ POST /hello
  else if (req.method === 'POST' && req.url === '/hello') {
    let body = '';

    // Collect data chunks
    req.on('data', chunk => {
      body += chunk;
    });

    // After data is fully received
    req.on('end', () => {
      try {
        const newEntry = JSON.parse(body);

        // Read existing file
        fs.readFile(filePath, 'utf8', (err, data) => {
          let currentData = [];

          if (!err && data.trim()) {
            try {
              currentData = JSON.parse(data);
            } catch {
              currentData = [];
            }
          }

          currentData.push(newEntry); // Add new entry

          // Save updated data
          fs.writeFile(filePath, JSON.stringify(currentData, null, 2), (err) => {
            if (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ error: 'Failed to write file' }));
            }

            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Data saved', data: newEntry }));
          });
        });
      } catch {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON format' }));
      }
    });
  }

  // ❌ Unknown routes
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});

