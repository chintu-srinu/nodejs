const http =require("http")
const server =http.createServer((req,res)=>{
    const obj ={
        id :1,
        name : "chintu"
    }
    res.end (JSON.stringify(obj))
   
     
})
server.listen(4000,()=>{
    console.log("i am running")
})