function runCommand() {
  const input = document.getElementById("command").value.toLowerCase();
  const result = document.getElementById("result");
  const avatar = document.getElementById("avatar");

  if (!input) {
    result.innerText = "Please enter a command.";
    return;
  }

  // 🧠 MOCK AI INTERPRETATION
  let action = "Idle";
  let explanation = "The avatar is standing by.";

  if (input.includes("wave")) {
    action = "Waving";
    explanation = "The avatar performs a friendly greeting gesture.";
  } else if (input.includes("walk")) {
    action = "Walking";
    explanation = "The avatar moves toward the specified location.";
  } else if (input.includes("point")) {
    action = "Pointing";
    explanation = "The avatar points to highlight an important object.";
  } else if (input.includes("posture")) {
    action = "Safety Posture";
    explanation = "The avatar demonstrates the correct safety posture.";
  }

  avatar.innerText = action;
  result.innerHTML = `
    <strong>Interpreted Action:</strong> ${action}<br><br>
    <strong>AI Explanation:</strong> ${explanation}
  `;
}
