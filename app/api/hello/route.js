import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ name: process.env.NODE_ENV })
}
