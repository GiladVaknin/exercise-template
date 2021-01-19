function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  let arr = [1, 2, 3, 4, 5];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  console.log(arr2);
  /**/
  output.innerText = out;
}
