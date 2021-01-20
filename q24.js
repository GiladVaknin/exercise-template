function removeEmpty(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != 0 &&
      arr[i] != false &&
      arr[i] != undefined &&
      arr[i] != false &&
      arr[i] != "" &&
      !isNaN(arr[i])
    ) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(removeEmpty([0, NaN, 15, false, -22, "", undefined, 47, null]));
