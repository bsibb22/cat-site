import CatsList from "../cat-list";

export default async function CatsPage() {
    const response = await fetch('http://localhost:3000/api/cats');
    const cats = await response.json();

    return (
        <>
            <h1 className="font-black text-center text-purple-950 text-6xl font-Lexend my-8 mx-auto">
                meet the cats
            </h1>
            <CatsList cats={cats} />
        </>
    )
}