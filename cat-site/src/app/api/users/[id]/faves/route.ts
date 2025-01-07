import { NextRequest } from "next/server";
import { connectToDb } from "@/app/api/db";

// loads an individual user's favorite cats
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { db } = await connectToDb();

    const userId = (await params).id;
    const userFaves = await db.collection('faves').findOne({ userId });

    if (!userFaves) {
        return new Response(
            JSON.stringify([]),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    const faves = await db.collection('cats').find({
        id: {
            $in: userFaves.faveIds
        }
    }).toArray();
    return new Response(
        JSON.stringify(faves),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

// adds a cat to a user's favorite cats list
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const { db } = await connectToDb();

    const userId = (await params).id;
    const body = await request.json();
    const catId = body.catId;

    const updatedFaves = await db.collection('faves').findOneAndUpdate(
        { userId },
        {
            $push: { faveIds: catId }
        },
        {
            upsert: true,
            returnDocument: 'after'
        }
    )

    const faveCats = await db.collection('cats').find({
        id: {
            $in: updatedFaves!.faveIds
        }
    }).toArray();

    return new Response(
        JSON.stringify(updatedFaves),
        {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

// removes a cat from a user's favorites list
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { db } = await connectToDb();

    const userId = (await params).id;
    const body = await request.json();
    const catId = body.catId;

    const updatedFaves = await db.collection('faves').findOneAndUpdate(
        { userId },
        {
            $pull: { faveIds: catId }
        },
        {
            returnDocument: 'after'
        }
    )

    // if a user with the given ID doesn't exist, there should be a problem
    if (!updatedFaves) {
        return new Response(
            JSON.stringify([]),
            {
                status: 202,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    const faveCats = await db.collection('cats').find({
        id: {
            $in: updatedFaves.faveIds
        }
    }).toArray();

    return new Response(
        JSON.stringify(updatedFaves),
        {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}