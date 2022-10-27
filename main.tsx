require("dotenv").config();
const OpenAI = require("openai-api");

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

(async () => {
  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: "Promp question right here",
  });

  console.log(gptResponse.data.choices[0].text);
})();
