export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided" });
    }

    // ✅ MOCK AI RESPONSE (EDUCATIONAL FORMAT)
    const mockResponse = {
      title: "Construction Safety Equipment",
      description: `The object described ("${prompt}") is commonly used in construction and industrial environments.`,
      usage:
        "Hard hats are worn to protect workers from falling objects, impacts, and potential head injuries on job sites.",
      trainingNote:
        "Learners should ensure the hard hat fits correctly, is undamaged, and is worn at all times in designated safety zones."
    };

    return res.status(200).json(mockResponse);
  } catch (error) {
    console.error("Mock API error:", error);
    return res.status(500).json({ error: "Mock AI failed" });
  }
}
