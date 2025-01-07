import FavoriteCatsList from "./favesList";

export default async function FavoritesPage() {
    const response = await fetch("http://localhost:3000/api/users/1/faves");
    const faves = await response.json();

    return (
        <FavoriteCatsList initialFaves={faves} />
    )
}