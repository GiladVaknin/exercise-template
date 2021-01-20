function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  let arr = [1, 2, 3, 4, 5];
  let n = 1;
  if (arr.length === 0) {
    console.log(arr);
  }
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
  /**/
  output.innerText = out;
}
