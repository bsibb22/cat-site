'use client';
import { useState } from 'react';
import { Cat } from "./cat-data"
import Image from "next/image"
import Link from "next/link"

export default function CatsList({ cats, initialFaves = [] }: { cats: Cat[], initialFaves: Cat[] }) {
    const [faves, setFaves] = useState(initialFaves);

    async function favorite(catId: string) {
        const response = await fetch('http://localhost:3000/api/users/1/faves', {
            method: 'POST',
            body: JSON.stringify({
                catId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const updatedFaves = await response.json();
        setFaves(updatedFaves);
    }

    async function unfavorite(catId: string) {
        const response = await fetch('http://localhost:3000/api/users/1/faves', {
            method: 'DELETE',
            body: JSON.stringify({
                catId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const updatedFaves = await response.json();
        setFaves(updatedFaves);
    }

    function catFavorited(catId: string) {
        return faves.some(c => c.id === catId);
    }

    return (
        <div className="container justify-center mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cats.map(cat => (
                    <div key={cat.id}>
                        <Link href={'cats/' + cat.id}>
                            <Image className="mx-auto rounded-lg hover:shadow-lg" src={cat.imageUrl} alt={cat.name} width={300} height={300}></Image>
                        </Link>
                        <h2 className="text-center font-black text-purple-900 font-Lexend mt-1">{cat.name.toLowerCase()}</h2>
                        <p className="text-center text-purple-900 font-Lexend">${cat.price}</p>
                        {
                            catFavorited(cat.id) ?
                                <button onClick={() => unfavorite(cat.id)} className="text-slate-900 font-Lexend">Remove from Favorites</button>
                                :
                                <button onClick={() => favorite(cat.id)} className="text-slate-900 font-Lexend">Add to Favorites</button>
                        }

                    </div>
                ))}
            </div>
        </div>
    )
}