import { cats } from "@/app/cat-data"
import { connectToDb } from "@/app/api/db"

export default function CatPage({ params }: { params: { id: string } }) {
    const cat = cats.find(cat => cat.id === params.id);
    if (!cat) {
        return <h1>No cat found!</h1>
    }
    return (
        <>
            <h1 className="text-slate-900">{cat.name}</h1>
        </>
    )
}