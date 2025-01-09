import CatsList from "../cat-list";

export const dynamic = 'force-dynamic';

export default async function CatsPage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/cats');
    const cats = await response.json();

    const favesResponse = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/1/faves', {
        cache: 'no-cache'
    });
    const faveCats = await favesResponse.json();

    return (
        <>
            <h1 className="font-black text-center text-purple-950 text-6xl font-Lexend my-8 mx-auto">
                meet the cats
            </h1>
            <CatsList cats={cats} initialFaves={faveCats} />
        </>
    )
}