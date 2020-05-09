var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recurseFrac=function(b,c,p,iter){
    if(iter>0){
        //console.log(b,c,p,iter);
        return recurseFrac(((c*b)+p),c,p,iter-1);
    }else{
        return console.log(b);
    }
}
rl.question("Enter initial,multiplier,added,iteration: ", function(answer) {

var instring = answer.split(",");
console.log(recurseFrac(instring[0],instring[1],instring[2],instring[3]));
rl.close();
});
