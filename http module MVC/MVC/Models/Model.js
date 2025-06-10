const fs=require("fs")
const path =require("path")

const filepath=path.resolve(__dirname,"studentdata.json")

const getAllStudentsDataFromJSON=()=>{
    try{
        const data=fs.readFileSync(filepath,"utf-8");
        return JSON.parse(data)||[]
    
    }catch{
        return Error.message

    }
};
const createStudentsData=(data)=>{
    return fs.writeFileSync(filepath,JSON.stringify(data))
}
module.exports={ getAllStudentsDataFromJSON, createStudentsData}