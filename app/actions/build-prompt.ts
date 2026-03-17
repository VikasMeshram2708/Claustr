import { genSchema } from "./ad-create";

export function buildPrompt(data: genSchema) {
  return `
Create a ${data.length} ${data.type} advertisement for "${data.name}".

Product Description:
${data.description}

Target Audience:
${data.audience} (Age group: ${data.age})

Campaign Goal:
${data.goal}

Tone & Style:
${data.style}

Instructions:
- Make it engaging and platform-ready
- Include a strong hook in first 3 seconds
- Add CTA aligned with the goal
- Keep it concise and impactful
`;
}
