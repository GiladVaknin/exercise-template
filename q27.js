function property_value(arr, prop) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i][prop]);
  }
  return arr2;
}
