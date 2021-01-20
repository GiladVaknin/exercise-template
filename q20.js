let arr = [1, 2, 2, 2, 3, 3];
function duplicates(arr) {
  let duals = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duals.includes(arr[i])) {
        duals.push(arr[i]);
      }
    }
  }
  return duals;
}
//console.log(duplicates(arr));
