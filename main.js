async function generate() {
  const text = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.innerText = "Thinking...";

  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    output.innerText = data.summary;
  } catch (err) {
    console.error(err);
    output.innerText = "Something went wrong.";
  }
}
