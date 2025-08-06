let a=process.argv[2]
let b=process.argv[3]

if (a==undefined && b==undefined){
  console.log(a +" is " + b)
}
else if (a!==undefined && b!==undefined){
 console.log(a +" is " + b)
}
else {console.log(a +" is " + b)}
