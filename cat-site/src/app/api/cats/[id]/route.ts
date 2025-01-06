import { NextRequest } from "next/server";
import { connectToDb } from "@/app/api/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { db } = await connectToDb();

    const catId = params.id;
    // find cat with given ID
    const cat = await db.collection('cats').findOne({
        id: catId
    });

    // if the cat does not exist
    if (!cat) {
        return new Response(
            JSON.stringify({ message: "Cat not found!" }),
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