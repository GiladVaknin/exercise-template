function unionArrays(arr1, arr2) {
  let arr3 = arr1;
  for (let i = 0; i < arr2.length; i++) {
    if (!arr3.includes(arr2[i])) {
      arr3.push(arr2[i]);
    }
  }
  return arr3;
}

//console.log(unionArrays([1, 2, 3, 4], [2, 4, 8, 9]));
