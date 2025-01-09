import FavoriteCatsList from "./favesList";

export const dynamic = 'force-dynamic';

export default async function FavoritesPage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/users/1/faves');
    const cats = await response.json();

    return (
        <FavoriteCatsList initialFaves={cats} />
    )
}