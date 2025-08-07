let x=parseInt(process.argv[2])
if (isNaN(x)){
  console.log(1)
} else {
  const x=()=>x*x
  console.log(x-1)
}