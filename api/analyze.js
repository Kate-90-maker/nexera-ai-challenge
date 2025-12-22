export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided" });
    }

    // 🧠 MOCK AI RESPONSE
    const mockResponse = {
      description: `You entered: "${prompt}". This appears to describe a safety-related object.`,
      safety: "A hard hat is personal protective equipment used to prevent head injuries.",
      confidence: 0.87
    };

    return res.status(200).json(mockResponse);
  } catch (error) {
    console.error("Mock API error:", error);
    return res.status(500).json({ error: "Mock AI failed" });
  }
}
