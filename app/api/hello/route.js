/*
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  res.status(200).json({ name: 'John Doe' })
}
