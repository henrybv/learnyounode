var fs = require('fs');

fs.readFile(process.argv[2], function(error,data) {
  if (error) throw error;
  var lines = data.toString().split('\n').length - 1;
  // just as split(" ") gives an array of words in a sentence..
  console.log(lines);
})


// // can "utf8" omit?
// // if(error)throw error can omit?

// fs.readFile(process.argv[2],"utf8",function(error,contents){
//   if(error) throw error; // ?
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

