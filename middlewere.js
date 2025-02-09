import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('token');

    if (!token) {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    try {
        // Optional: ตรวจสอบ token
        jwt.verify(token, 'your-secret-key');
        return NextResponse.next();
    } catch {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: ['/protected/:path*'], // ปกป้องเฉพาะ path ที่กำหนด
};
