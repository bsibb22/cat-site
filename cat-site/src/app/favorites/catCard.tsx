import Image from "next/image";
import Link from "next/link";

export default async function CatCard({ id, extraDetail }: { id: string, extraDetail: boolean }) {
    const response = await fetch(`http://localhost:3000/api/cats/${id}`);
    const cat = await response.json();

    return (
        <div className="flex w-full mx-auto p-2 bg-yellow-50 rounded-lg">
            {
                extraDetail ?
                    <Image src={cat.imageUrl} alt={cat.name} width={400} height={400} className="rounded-md"></Image>
                    :
                    <Link href={"/cats/" + id}>
                        <Image src={cat.imageUrl} alt={cat.name} width={200} height={200} className="rounded-md"></Image>
                    </Link>
            }
            <p className="font-Lexend text-purple-950 mx-2 text-left">
                <b>{cat.name}</b> ({cat.age})<br />
                Color: {cat.color}<br />
                Price: ${cat.price}<br /><br />
                {
                    extraDetail &&
                    <>
                        {cat.desc}<br /><br />
                    </>
                }
                {
                    cat.hasSiblings &&
                    <em className="text-red-600">{cat.name} has {cat.siblingNames.length} siblings ({cat.siblingNames.join(', ')}); please adopt them together!</em>
                }
            </p>
        </div>
    )
}