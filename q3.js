function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  function first(arr, n) {
    let arr2 = [];
    if (n === undefined) {
      return arr[0];
    } else {
      for (let i = 0; i < n; i++) {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
  /**/
  output.innerText = out;
}
