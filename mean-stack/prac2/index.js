const cal = require('./calculator.js')
const fileManager = require('fs')

// Question 1
console.log(cal.addition(5,8))
console.log(cal.subtraction(5,8))

// Question 2
console.log(fileManager)

const wrtieLogs = fileManager.writeFileSync('./log.txt','\nuser 101 logged In')
const appendLogs = fileManager.appendFileSync('./log.txt','\nuser 102 logged In')
const showLogs = fileManager.readFileSync('./log.txt','utf-8')
console.log("logs: ",showLogs)
