// function run() {
// const input = document.getElementById("input").value;
// const output = document.getElementById("output");
//let out = "";
/**/
let num = 27899988;
let num2 = num;
let arr = [];
let outnum = "";
while (num2 != 0) {
  arr.unshift(num2 % 10);
  num2 = Math.floor(num2 / 10);
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
    outnum += arr[i] + "-";
  } else {
    outnum += arr[i];
  }
}
console.log(outnum);
/**/
//  output.innerText = out;
// }
