import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  res.status(200).json({ name: 'John Doe' })
}
