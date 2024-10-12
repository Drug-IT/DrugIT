import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

export const reqGroqAI = async (content: string) => {
  const res = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "llama-3.2-90b-text-preview",
    temperature: 0.5,
    max_tokens: 2240,
    top_p: 0.65,
    stream: false,
    stop: null,
  });
  return res;
};
