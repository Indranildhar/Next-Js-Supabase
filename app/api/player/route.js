import { createClient } from "@/utils/supabase/client"
export async function POST(req){
    try {
        const supabase = createClient()
        const params = await req.json()
        console.json(params)



        return new Response(JSON.stringify({}),{
            status:200,
            headers: {'Content-Type': 'application/json'}
        })
        
    } catch (error) {
        return new Response(JSON.stringify([]),{
            status: 500,
            headers: {'Content-Type': 'application/json' }
        })
    }

}