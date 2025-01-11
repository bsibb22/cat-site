import { Cat } from "@/app/cat-data"
import React from 'react';

export default async function SchedulePage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/cats');
    const cats = await response.json();

    const favesResponse = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/1/faves', {
        cache: 'no-cache'
    });
    const faveCats = await favesResponse.json();

    return (
        <>
            <h1 className="font-Lexend text-purple-950 text-6xl text-center font-black">schedule a visit</h1>
            <p className="mx-auto flex justify-center font-Lexend text-purple-950 text-xl text-center font-normal max-w-2xl">fill in some basic information about your visit and we will get back to you with the earliest appointment time available!</p>
            <div className="mx-auto flex justify-start my-8 bg-yellow-300 max-w-xl py-3.5 px-8 rounded-xl">
                <form className="grid font-Lexend text-purple-950 font-bold gap-y-2 w-full">
                    First Name: <input name="firstName" className="rounded-sm focus:shadow-md px-1.5 font-sans font-normal" required></input>
                    Last Name: <input name="lastName" className="rounded-sm focus:shadow-md px-1.5 font-sans font-normal" required></input>
                    I want to visit...
                    <div className="grid grid-cols-3">{
                        cats.map((cat: Cat) => (
                            <React.Fragment>
                                <label>
                                    <input type="checkbox" defaultChecked={faveCats.some((c: Cat) => c.name === cat.name)} className="mr-2" />
                                    {cat.name}
                                </label>
                            </React.Fragment>
                        ))
                    }
                    </div>
                    Additional Comments (optional):<br /><textarea name="comments" className="rounded-sm focus:shadow-md px-1.5 py-0.5 font-normal font-sans max-w-full" />
                    <button className="mx-auto rounded-md bg-purple-800 hover:bg-purple-200 border-purple-800 border-2 text-slate-200
                                        hover:text-gray-800 font-semibold font-Lexend px-4 py-1 mt-1 hover:animate-wiggle">Submit</button>
                </form >
            </div>
        </>
    )
}