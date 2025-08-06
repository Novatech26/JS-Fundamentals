let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])
if (isNaN(a && b)){
  console.log("This is not a number");
}
else{console.log(a+b);}