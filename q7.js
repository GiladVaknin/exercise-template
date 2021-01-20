// function run() {
//   const input = document.getElementById("input").value;
//   const output = document.getElementById("output");
//   let out = "";
/**/
let arr = [4, -3, 42, 0, 9, 222];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  let minNum = Math.min.apply(Math, arr);
  let maxNum = Math.max.apply(Math, arr);
  arr2.push(minNum);
  arr[arr.indexOf(minNum)] = maxNum + 1;
}
console.log(arr2);

/**/
//   output.innerText = out;
// }
