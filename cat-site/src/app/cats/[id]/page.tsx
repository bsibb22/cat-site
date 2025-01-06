import CatCard from "@/app/favorites/catCard"

export default async function CatPage({ params }: { params: { id: string } }) {
    const response = await fetch(`http://localhost:3000/api/cats/${params.id}`)
    const cat = await response.json();

    if (!cat) {
        return <h1>No cat found!</h1>
    }
    return (
        <CatCard id={params.id} extraDetail={true} />
    )
}