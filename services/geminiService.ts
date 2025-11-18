import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWeb3Insight = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm processing the blockchain data... try again shortly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to retrieve insights from the Metaverse.");
  }
};