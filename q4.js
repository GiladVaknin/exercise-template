function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  let arr = [1, 2, 3, 4, 5];
  let n = 1;

  for (let i = 0; i <= n; i++) {
    console.log(arr[arr.length - i]);
  }
  /**/
  output.innerText = out;
}
