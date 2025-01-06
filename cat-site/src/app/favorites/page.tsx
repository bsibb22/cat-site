import CatCard from "./catCard";

const catIds = ['100', '103', '104']
export default function FavoritesPage() {
    return (
        <>
            <div className="container mx-auto text-center">
                <h1 className="font-semibold text-purple-950 font-Lexend">Your Favorite Cats</h1>
                <div className="grid grid-cols-1 gap-4">
                    {
                        catIds.map((catId) => <CatCard id={catId} extraDetail={false} key={catId} />)
                    }
                </div>
            </div>
        </>
    )
}