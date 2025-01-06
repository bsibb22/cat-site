import { Cat } from "./cat-data"
import Image from "next/image"
import Link from "next/link"

export default function CatsList({ cats }: { cats: Cat[] }) {
    return (
        <div className="container justify-center mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cats.map(cat => (
                    <div key={cat.id}>
                        <Link href={'cats/' + cat.id}>
                            <Image className="mx-auto rounded-lg hover:shadow-lg" src={cat.imageUrl} alt={cat.name} width={300} height={300}></Image>
                        </Link>
                        <h2 className="text-center font-black text-slate-900 font-Lexend mt-1">{cat.name.toLowerCase()}</h2>
                        <p className="text-center text-slate-900 font-Lexend">${cat.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}