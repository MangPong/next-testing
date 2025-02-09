import { request } from 'http';
import { Request } from './../../../../../node_modules/typescript/lib/typescript.d';


export async function POST(Request: Request) {
    let data = await request.json()
    console.log(data)
}