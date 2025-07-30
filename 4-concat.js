function print(arg1,arg2){
  if(arg1==defined && arg2==defined){console.log(arg1 +" is "+arg2)}
  elseif(arg1==defined && arg2!==defined){console.log(arg1 +" is "+arg2)}
  else(arg1!==defined && arg2!==defined){console.log(arg1 +" is "+arg2)}
}
print("Python","fun")
print("HBTN")
print()
