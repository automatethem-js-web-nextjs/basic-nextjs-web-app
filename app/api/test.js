import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ name: 'John Doe2' })
}
 
