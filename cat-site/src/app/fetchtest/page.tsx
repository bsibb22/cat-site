export const dynamic = 'force-dynamic';

export default async function FetchTest() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/route-test');
    const data = await response.json();
    return (
        <h1 className="text-slate-950">{data.message}</h1>
    )
}