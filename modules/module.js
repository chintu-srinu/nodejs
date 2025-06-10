const path =require ("path")
const os =require ("os")
// console.log(path)
// const filepath="hello.html"
// console.log(path.isAbsolute(filepath))

// console.log(path.join(filepath))
// console.log(path.join("D:","local","chintu","name"))
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.platform())
console.log(os.release())
console.log(os.totalmem())

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('User Info:', os.userInfo());
