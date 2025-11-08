// app/api/consultant/route.ts
import { NextResponse } from "next/server";
export const runtime = "edge"; // fast, stateless

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { query = "", context = {} } = body || {};

  // Safe, non-diagnostic stub — replace with your LLM later
  const suggestions = [
    {
      title: "High-p sequence + task slicing",
      detail:
        "Start with 2–3 easy wins, then 1–2 minutes of the hard task. Reinforce completion.",
    },
    {
      title: "FCT for break",
      detail:
        "Teach and honor 'break please' every 2–3 mins initially; fade based on data.",
    },
    {
      title: "Visual schedule & motor supports",
      detail:
        "Timer + first/then board; OT seating and pencil grip to reduce motor load.",
    },
  ];

  const ehcpMap = {
    sectionB: ["Reduced handwriting endurance", "Difficulty with writing transitions"],
    sectionE: ["Sustain 5-minute writing with ≤2 prompts"],
    sectionF: ["OT weekly input", "Visual supports & task analysis"],
  };

  return NextResponse.json({ query, context, suggestions, ehcpMap });
}
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question, context } = await req.json();

  const prompt = `
  You are an Autism Specialist AI Consultant.
  Your role:
  - Provide behavioural, communication, sensory and learning strategies.
  - You must NOT diagnose.
  - Provide both parent-friendly AND professional-style explanation.
  - Use ABA, SLT, OT, Physio and EYFS frameworks.

  Context: ${context}
  Question: ${question}

  Provide:
  1. A clear explanation
  2. Strategies
  3. Environmental adjustments
  4. Next steps
  5. A report-style version
  `;

  return NextResponse.json({
    reply: "✅ AI Consultant Module Installed. Response generation coming next."
  });
}
