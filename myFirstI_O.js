var fs = require('fs') // fs module provides functions for 
// working w/ files & directories

// function readFile reads a file and then calls a callback 
// with the file's contents
// aka: readFile ASYNCHRONOUSLY reads entire contents of a file
// so, readFileSync is just a SYNCHRONOUS version of fs.readFile. 
// readFileSync returns contents of the filename.

var data = fs.readFileSync(process.argv[2])
var lines = data.toString().split('\n').length - 1
console.log(lines)

