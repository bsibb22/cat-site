'use client';

import Image from "next/image";
import { useState } from 'react';
import { Cat } from "@/app/cat-data"

export default function FavoriteCatsList({ initialFaves }: { initialFaves: Cat[] }) {
    const [faveCats, setFaveCats] = useState(initialFaves);

    return (
        <>
            <div className="container mx-auto text-center">
                <h1 className="font-semibold text-purple-950 font-Lexend">Your Favorite Cats</h1>
                <div className="grid grid-cols-1 gap-4">
                    {
                        faveCats.map((cat) => (
                            <div className="flex w-full mx-auto p-2 bg-yellow-50 rounded-lg" key={cat.id}>
                                <Image src={cat.imageUrl} alt={cat.name} width={200} height={200} className="rounded-md"></Image>
                                <p className="font-Lexend text-purple-950 mx-2 text-left">
                                    <b>{cat.name}</b> ({cat.age})<br />
                                    Color: {cat.color}<br />
                                    Price: ${cat.price}<br /><br />
                                    {
                                        cat.hasSiblings &&
                                        <em className="text-red-600">{cat.name} has {cat.siblingNames.length} siblings ({cat.siblingNames.join(', ')}); please adopt them together!</em>
                                    }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}