import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const params = req.nextUrl.searchParams;
  //const location = params.get("location");
  
  return NextResponse.json({ name: 'John Doe' })
}

export async function POST(req) {
  //const json = await req.json();

  return NextResponse.json({ name: 'John Doe' })
}

