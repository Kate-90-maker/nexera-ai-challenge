function generate() {
  const text = document.getElementById("prompt").value;
  document.getElementById("output").innerText =
    "You typed: " + text;
}
