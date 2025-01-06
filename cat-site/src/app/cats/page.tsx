import CatsList from "../cat-list";
import { cats } from "../cat-data";

export default function CatsPage() {
    return (
        <>
            <h1 className="font-black text-center text-purple-950 text-6xl font-Lexend my-8 mx-auto">
                meet the cats
            </h1>
            <CatsList cats={cats} />
        </>
    )
}