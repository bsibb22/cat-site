// cat list endpoint

import { connectToDb } from "@/app/api/db"

export async function GET() {
    // connect to MongoDB
    const { db } = await connectToDb();
    // get the collection of all cats
    const cats = await db.collection('cats').find({}).toArray();

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