import { NextRequest, NextResponse } from "next/server";

/*
export async function GET(request) {
    const params = request.nextUrl.searchParams;
    const inputs = params.get("inputs");
    console.log(inputs);
    //
    //console.log(request.url); //https://basic-api-nextjs-edge.vercel.app/api/basic-api-nextjs-edge/api?inputs=Hello
    //const url = new URL(request.url);
    //const params = url.searchParams;
    //const inputs = params.get("inputs");
    //console.log(inputs);
    
    return NextResponse.json({ name: 'John Doe' })
}

export async function POST(request) {
    const json = await request.json();
    //console.log(json);
    //const intent = json["intent"]["name"];

    return NextResponse.json({ name: 'John Doe' })
}

//export const runtime = 'edge';
*/
///*
export async function GET(request) {
    const params = request.nextUrl.searchParams;
    const inputs = params.get("inputs");
    console.log(inputs);
    //
    //console.log(request.url); //https://basic-api-nextjs-edge.vercel.app/api/basic-api-nextjs-edge/api?inputs=Hello
    //const url = new URL(request.url);
    //const params = url.searchParams;
    //const inputs = params.get("inputs");
    //console.log(inputs);
    
    return NextResponse.json({ name: 'John Doe' })
}

export async function POST(request) {
    const json = await request.json();
    //console.log(json);
    //const intent = json["intent"]["name"];

    return NextResponse.json({ name: 'John Doe' })
}

//export const runtime = 'nodejs'; //default
export const runtime = 'edge';
//*/
