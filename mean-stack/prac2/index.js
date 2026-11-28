const cal = require('./calculator.js')

// Question 1
console.log("addition function:",cal.addition(5,8))
console.log("Subtraction function:",cal.subtraction(5,8))

// Question 2
const fileManager = require('fs')
console.log(fileManager)

const wrtieLogs = fileManager.writeFileSync('./log.txt','\nuser 101 logged In')
const appendLogs = fileManager.appendFileSync('./log.txt','\nuser 102 logged In')
const showLogs = fileManager.readFileSync('./log.txt','utf-8')
console.log("logs: ",showLogs)

// Question 3 : Path Module
const path = require('path')
let filepath='uploads/student/student-sem4.pdf'
 
console.log("FIle Name:",path.basename(filepath))
console.log("Directory:",path.dirname(filepath))
console.log("Extension",path.extname(filepath))
// JOIN 
let folder = 'uploads'
let subFolder ='student'
let fileName = 'student-sem4.pdf'
let joinPath = path.join(folder,subFolder,fileName)
console.log("JoinedPath:",joinPath)

// Question 4:HTTP Module 
const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end("Welcome to Node.js Server")
});
server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
});
