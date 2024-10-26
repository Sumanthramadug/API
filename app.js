// // // const express=require('express');
// // // const path=require('path');
// // // const app=express();
// // // const PORT=9000;
// // // app.get('/',function(req,res){
// // //     res.send("Hello World");
// // // })
// // // app.get('/login',function(req,res){
// // //     res.sendFile(path.join(__dirname,'index.html'));
// // // })
// // // app.get('/register',function(req,res){
// // //     res.write("Too Late register fast");
// // //     res.sendFile(path.join(__dirname,'register.html'));
// // // })
// // // app.listen(PORT,()=>{
// // //     console.log(`server is running on ${PORT}`);
// // // })

// // // const greet=(name)=>{
// // //     console.log(name);
// // // }
// // // const greet1=(suman)=>{
// // //     const name="sumanth";
// // //     suman(name);
// // // }
// // // greet1(greet);

// // const events=require('events');

// // const emitter=new events();

// // emitter.on("sumanth1",()=>{
// //     console.log("Hello sumant how are you")
// // })
// // emitter.emit("sumanth1")

// const buffer=new Buffer.from("sumanth");

// buffer.write("cod");

// console.log(buffer.toJSON());
// console.log(buffer.toString());
 
// console.log("first");
// const fs=require('fs');
// const fileContents=fs.readFileSync('./ffile.txt','utf-8');
// console.log(fileContents);
// console.log("third");
// fs.readFile('./ffile.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }

// })
// console.log("fourth");

// const fs=require('fs');
// fs.writeFileSync('./greet.txt',"Hello sumanth");
// fs.writeFile('greet.txt'," Hello world",{flag:"a"},(error)=>{
//     if(error){
//         console.log(`Stupid dont you know how to create and write contents into a file Here is your error ${error}`)
//     }
//     else{
//         console.log("File created successfull check in your files");
//     }
// })

// const fs=require('fs/promises');
// async function readfile(){
//     try{
//     await fs.writeFile('./people.txt','sumanth aa aa aa');
//         console.log("Success");
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// readfile();


// const fs = require('fs');
// const readableStream = fs.createReadStream('./ffile.txt',{
//     encoding:'utf-8',
// })
// const writableStream =fs.createWriteStream('./greet.txt');

// readableStream.pipe(writableStream);
// // readableStream.on("data",(chunk)=>{
// //     writableStream.write(chunk);
// // })

const http=require('http');
const PORT=3001;
const server=http.createServer((req,res)=>{
  const person={
    firstName:"Sumanth",
    lastName:"Ramadugu",
    age:"20",
  }
  res.writeHead(200,{"Content-Type":"application/json"});
  res.write(JSON.stringify(person));
  res.end();
});
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

