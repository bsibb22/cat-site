import Image from "next/image";

export default async function CatPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cats/${params.id}`)
    const cat = await response.json();

    if (!cat) {
        return <h1>No cat found!</h1>
    }
    return (
        <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex w-full mx-auto p-2 bg-yellow-50 rounded-lg">
                    <Image src={cat.imageUrl} alt={cat.name} width={400} height={400} className="rounded-md"></Image>
                    <p className="font-Lexend text-purple-950 mx-2 text-left">
                        <b>{cat.name}</b> ({cat.age})<br />
                        Color: {cat.color}<br />
                        Price: ${cat.price}<br /><br />
                        {cat.desc}<br /><br />
                        {
                            cat.hasSiblings &&
                            <em className="text-red-600">{cat.name} has {cat.siblingNames.length} siblings ({cat.siblingNames.join(', ')}); please adopt them together!</em>
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}