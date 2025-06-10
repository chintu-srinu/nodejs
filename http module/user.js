// const path =require("path")
// const http =require("http")
// const fs=require("fs")
// const port=4000
// const datafile=path.resolve("db.json")
// console.log(datafile)

// const server=http.createServer((req,res)=>{
//     fs.readFile(datafile,"utf-8",(err,data)=>{
//         if (err) throw new Error ("error",err)
//             else{
//         res.end(data)}
//     })
// })
// server.listen(port,()=>{
//     console.log(`srever is on ${port}`)
// })





// const fs = require('fs');
// const path =require("path")
// const datafile =path.resolve("db.json")
// fs.readFile(datafile, 'utf8', (err, data) => {
//   if (err) throw new Error ("error",err)
//     else{
//   console.log('File contents:', data);
//     }
// let jsonData =[]

// try{
//     jsonData=JSON.parse(data)

// }catch{
//     console.log("parseerr")
// }
// const newEntry={id:4,"name":"srinu"}
// console.log(newEntry)
// fs.writeFile(datafile,JSON.stringify(jsonData,null,2),(err)=>{
//     if (err){
//         console.log("failed",err)
//     }
//     else {
//         console.log("data added")
//     }
// })
// })
// fs.unlink(datafile, (err) => {
//   if (err) throw err;
//   console.log('File deleted');
// });

// const fs = require('fs');
// const path = require('path');

// const datafile = path.resolve("db.json");

// // Step 1: Read the file
// fs.readFile(datafile, 'utf8', (err, data) => {
//   if (err) {
//     console.error("Failed to read file:", err);
//     return;
//   }

//   let jsonData = [];

//   // Step 2: Parse existing data
//   try {
//     jsonData = JSON.parse(data);
//   } catch (parseErr) {
//     console.error("Error parsing JSON:", parseErr);
//     return;
//   }

//   // Step 3: Add new data
//   const newEntry = { id: 2, name: "Bob" };
//   jsonData.push(newEntry);

//   // Step 4: Write updated data back to file
//   fs.writeFile(datafile, JSON.stringify(jsonData, null, 2), (err) => {
//     if (err) {
//       console.error("Failed to write file:", err);
//     } else {
//       console.log("New data added to db.json");
//     }
//   });
// });



const fs = require('fs');
const path = require('path');

const datafile = path.resolve("db.json");

fs.readFile(datafile, 'utf8', (err, data) => {
  if (err) throw new Error("Error reading file: " + err);

  let jsonData = [];

  try {
    jsonData = JSON.parse(data);
  } catch {
    console.log("JSON parsing error");
    return;
  }

  // ✅ Append a new entry
  const newEntry = { id: 4, name: "Srinu" };
  jsonData.push(newEntry);
  console.log("Appended:", newEntry);

  // ✅ Delete an entry by ID (e.g., delete user with id = 2)
  const deleteId = 2;
  const updatedData = jsonData.filter(user => user.id !== deleteId);
  console.log(`Deleted user with id = ${deleteId}`);

  // ✅ Write updated data back
  fs.writeFile(datafile, JSON.stringify(updatedData, null, 2), (err) => {
    if (err) {
      console.log("Failed to write file:", err);
    } else {
      console.log("File updated successfully.");
    }
  });
});




































