export default async function FetchTest() {
    const response = await fetch('http://localhost:3000/api/route-test');
    const data = await response.json();
    return (
        <h1 className="text-slate-950">{data.message}</h1>
    )
}