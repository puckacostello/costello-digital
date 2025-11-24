import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectScope = async (userInputs: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are a Senior Solutions Architect at Costello Digital, a high-end agency specializing in Shopify Plus and custom React development.
        The user is a potential client describing their business idea.
        
        Your goal is to provide a brief, high-impact technical proposal.
        
        User Input: "${userInputs}"
        
        Return the response in JSON format with the following schema:
        {
          "tagline": "A punchy, 3-5 word tagline for their project concept",
          "techStack": ["List", "of", "3-5", "technologies"],
          "strategy": "A 2-sentence strategic recommendation on how to win in their market using design/tech.",
          "estimatedComplexity": "Low | Medium | High"
        }
        
        Keep the tone: Professional, industrial, minimalist, confident.
      `,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
