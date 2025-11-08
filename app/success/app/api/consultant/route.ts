import { NextResponse } from "next/server";

export const runtime = "edge"; // fast, stateless

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { query = "", context = {} } = body || {};

  // Stubbed, non-diagnostic suggestions (wire to your LLM later)
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
    sectionB: ["Reduced handwriting endurance", "Difficulty with transitions to writing"],
    sectionE: ["Sustain 5-minute writing with 2 prompts"],
    sectionF: ["OT weekly input", "Visual supports & task analysis"],
  };

  return NextResponse.json({ query, context, suggestions, ehcpMap });
}
