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

    if (data.error) {
      output.innerText = "ERROR: " + data.error;
      return;
    }

    output.innerText = data.summary;

  } catch (err) {
    console.error(err);
    output.innerText = "Frontend fetch failed.";
  }
}
