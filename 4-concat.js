function print(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    console.log("Python fun");
  } else if (arg1 !== undefined) {
    console.log("HBTN");
  } else {
    console.log();
  }
}
print("Python","fun")
print("HBTN")
print()
