import { NextResponse } from "next/server";

function toCSV(rows: any[]) {
  const header = ["Date","Time","Antecedent","Behavior","Consequence","Duration","Notes"];
  const esc = (v: any) => '"' + String(v ?? "").replace(/"/g, '""') + '"';
  const lines = rows.map(r =>
    [r.date, r.time, r.antecedent, r.behavior, r.consequence, r.duration, (r.notes || "")]
      .map(esc).join(",")
  );
  return [header.map(esc).join(","), ...lines].join("\n");
}

export async function POST(req: Request) {
  const { rows = [] } = await req.json().catch(() => ({ rows: [] }));
  const csv = toCSV(rows);
  return new NextResponse(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="abc-events.csv"',
    },
  });
}
