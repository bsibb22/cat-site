import { Cat } from "./cat-data"
import Image from "next/image"
import Link from "next/link"

export default function CatsList({ cats }: { cats: Cat[] }) {
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-3 justify-center gap-8">
                {cats.map(cat => (
                    <div key={cat.id}>
                        <Image src={cat.imageUrl} alt={cat.name} width={150} height={150}></Image>
                        <h2>{cat.name}</h2>
                        <p>${cat.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}