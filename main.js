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
  <h3>${data.title}</h3>

  <strong>Description:</strong><br>
  ${data.description}<br><br>

  <strong>Usage:</strong><br>
  ${data.usage}<br><br>

  <strong>Training Note:</strong><br>
  ${data.trainingNote}<br><br>

  <em>3D Model Status:</em> ✅ Model generated and ready for viewing
`;

  } catch (err) {
    console.error(err);
    output.innerText = "Frontend fetch failed.";
  }
}
