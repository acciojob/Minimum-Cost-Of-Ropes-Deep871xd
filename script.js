function JsReverse(num) {
  //return the string
  //do not console.log here
  let reversed = parseInt(num.toString().split('').reverse().join(''));
  
  // Remove leading zeros
  while (reversed % 10 === 0 && reversed !== 0) {
    reversed = Math.floor(reversed / 10);
  }
  
  return reversed;
}
 
/*Do not change the code below */
const rl = require("readline");
 
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
reader.on("line", (line) => {
  const n = parseInt(line);
  console.log(JsReverse(n));
});