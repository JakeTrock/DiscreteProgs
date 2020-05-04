var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var instring = "caicasm anj tmttmz szynjmz".toLowerCase();
var proc=[];
var outstring="";
function shift(num){
    if(Math.ceil(((3*num)-2)%26)<0)
        return Math.ceil(((3*num)-2)%26)+26;
    else
        return Math.ceil(((3*num)-2)%26);
}
for(var i=0;i<instring.split(" ").length;i++){
    proc.push(instring.split(" ")[i].split(""));//make a 2d array of characters
//     console.log(instring.split(" ")[i].split(""));
}
for(var i=0;i<proc.length;i++){
    for(var b=0;b<proc[i].length;b++){
        console.log(alpha[shift(alpha.indexOf(proc[i][b]))]);
        console.log(shift(alpha.indexOf(proc[i][b])));
        outstring=outstring+alpha[shift(alpha.indexOf(proc[i][b]))];//shift
    }
    outstring+=" ";
}

console.log(outstring);
