async function generate() {
  const input = document.getElementById("prompt");
  const output = document.getElementById("output");

  const prompt = input.value;

  if (!prompt) {
    output.innerText = "Please enter a description.";
    return;
  }

  output.innerText = "Thinking...";

  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (data.error) {
      output.innerText = "ERROR: " + data.error;
      return;
    }

    output.innerHTML = `
      <strong>Description:</strong><br>
      ${data.description}<br><br>
      <strong>Safety Info:</strong><br>
      ${data.safety}
    `;

  } catch (err) {
    console.error(err);
    output.innerText = "Frontend fetch failed.";
  }
}
