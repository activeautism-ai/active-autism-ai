import { NextResponse } from "next/server";

// Demo store (resets between serverless runs). Swap for a real DB when ready.
let MEMO: any[] = [];

export async function GET() {
  return NextResponse.json({ ok: true, rows: MEMO });
}

export async function POST(req: Request) {
  const row = await req.json().catch(() => null);
  if (!row) return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  MEMO.unshift({ id: Date.now(), ...row });
  return NextResponse.json({ ok: true, rows: MEMO });
}
