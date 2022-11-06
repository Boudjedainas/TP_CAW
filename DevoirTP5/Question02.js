 function grep(directory,String){
const fs =require("fs");
const dir = directory;
const path = require('path');

// list all files in the directory
fs.readdir(dir, (err, files) => {   
  if (err) {
    throw err
  }
  files.forEach(file => {
    var filePath = path.join(dir, file);
    fs.readFile(filePath, function (err, data) {
    if (err) throw err;
    if(data.includes(String)){
     return console.log(file);
    }else {
     return console.log('none'); 
    }
  });
  })
})}
console.log(grep("C:/Users/pc car/Desktop/files","ines"));
