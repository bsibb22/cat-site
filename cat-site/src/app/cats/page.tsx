import CatsList from "../cat-list";
import { cats } from "../cat-data";

export default function CatPage() {
    return (
        <>
            <h1>Cats!</h1>
            <CatsList cats={cats} />
        </>
    )
}