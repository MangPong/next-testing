import { request } from 'http';
import { LoginService } from "@/sevices/login";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

export default async function GET(request: Request) {
    const cookiesStore = await cookies()
    const session = cookiesStore.get("session")?.value
    const loginService = new LoginService()
    if (session) {
        let user = await loginService.getUserFormSession(session)
        return NextResponse.json({
            username: user?.username,
            fullname: user?.fullname
        })
    }
}