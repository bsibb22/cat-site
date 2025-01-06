export async function GET() {
    return new Response(
        JSON.stringify({ message: "Response from TEST route handler" }),
        {
            status: 200
        }
    )
}