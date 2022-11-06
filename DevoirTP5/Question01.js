const fs =require("fs");
const path = require('path');
const fileCheck = async (text,a,b,c) => {
  const files = [a, b,c];
  for (let index = 0; index < files.length; index++) {
    const fname=path.basename(files[index]);
    fs.readFile(files[index], function (err, data) {
      if (err) throw err;
      if(data.includes(text)){
       return console.log(fname);
      }else {
       return console.log('none'); 
      }
    });
 }
}
fileCheck( 'string','file1.txt','file2.txt','file3.txt')