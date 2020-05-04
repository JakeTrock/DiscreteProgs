var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
rl.question("Enter string to encode: ", function(answer) {

var instring = answer.toLowerCase();
var proc=[];
var outstring="";

for(var i=0;i<instring.split(" ").length;i++){
    proc.push(instring.split(" ")[i].split(""));
}
for(var i=0;i<proc.length;i++){
    var tmp="";
    for(var b=0;b<proc[i].length;b++){
        tmp+=(alpha.indexOf(proc[i][b])+1).toString()+",";
    }
    outstring+=tmp+" ";
}

console.log(outstring);
  rl.close();
});
