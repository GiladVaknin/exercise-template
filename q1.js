function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  out = Array.isArray(input);
  /**/
  output.innerText = out;
}
