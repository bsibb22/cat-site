import { NextRequest } from "next/server";
import { cats } from "@/app/cat-data"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const catId = params.id;
    const cat = cats.find(cat => cat.id === catId);

    // if the cat does not exist
    if (!cat) {
        return new Response(
            "Cat not found!",
            { status: 404 }
        )
    }

    return new Response(
        JSON.stringify(cat),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}