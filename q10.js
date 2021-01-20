let arr1 = [[1, 2, 3], [3, 5, 4], 4, 5];
let out = "";
for (let i = 0; i < arr1.length; i++) {
  //console.log(Array.isArray(arr1[i]));
  if (Array.isArray(arr1[i])) {
    out += "row" + i + "\n";
    let arr2 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      out += arr2[j] + "\n";
    }
  } else {
    out += "row" + i + "\n" + arr1[i] + "\n";
  }
}
console.log(out);
