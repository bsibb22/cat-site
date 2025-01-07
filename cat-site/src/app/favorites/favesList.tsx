'use client';

import CatCard from "./catCard";
import { useState } from 'react';
import { Cat } from "@/app/cat-data"
import Link from 'next/link';

export default function FavoriteCatsList({ initialFaves }: { initialFaves: Cat[] }) {
    const [faveCats] = useState(initialFaves);

    return (
        <>
            <div className="container mx-auto text-center">
                <h1 className="font-semibold text-purple-950 font-Lexend">Your Favorite Cats</h1>
                <div className="grid grid-cols-1 gap-4">
                    {
                        faveCats.map((fave) => <CatCard id={fave.id} extraDetail={false} key={fave.id} />)
                    }
                </div>
            </div>
        </>
    )
}