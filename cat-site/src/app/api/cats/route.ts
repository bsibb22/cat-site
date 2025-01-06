// cat list endpoint

import { cats } from "@/app/cat-data"

export async function GET() {
    return new Response(
        JSON.stringify(cats),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}