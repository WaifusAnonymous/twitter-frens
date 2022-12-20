import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { off } from "process";

// all middleware functions go in here
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // will function as auth middleware
    if (req.nextUrl.pathname.startsWith('/api/aggregate')) {
        // verify that this is a GET request
        if (req.method !== 'GET') {
            return new Response('HTTP method not allowed.', {
                status: 405
            })
        }

        return NextResponse.next()
    }
}

export const config = {
    matcher: '/api/aggregate'
}