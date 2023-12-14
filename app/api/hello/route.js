/*
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ name: 'John Doe' })
}
*/
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
