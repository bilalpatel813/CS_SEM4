// const fileManager = require('fs')
// console.log(fileManager)

// const wrtieLogs = fileManager.writeFileSync('./log.txt','\nuser 101 logged In')
// const appendLogs = fileManager.appendFileSync('./log.txt','\nuser 102 logged In')
// const showLogs = fileManager.readFileSync('./log.txt','utf-8')
// console.log("logs: ",showLogs)

const cal = require('./calculator.js')

// Question 1
console.log("addition function:",cal.addition(5,8))
console.log("Subtraction function:",cal.subtraction(5,8))

// Question 2
