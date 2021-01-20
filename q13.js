let input = 9;
let arr = [2, 3, 2, 3, "tom"];

function addElement(input) {
  arr.push(input);
}

function displayarr(arr) {
  let out = "";

  for (let i = 0; i < arr.length; i++) {
    out += "Element " + i + "=" + arr[i] + "\n";
  }
  console.log(out);
  return out;
}
