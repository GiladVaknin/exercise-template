function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  let arr = ["mom", "dad", "brother", "sister"];
  let family = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      family += arr[i] + ",";
    } else {
      family += arr[i];
    }
  }
  console.log(family);
  /**/
  output.innerText = out;
}
