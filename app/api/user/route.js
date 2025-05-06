import { createClient } from "@/utils/supabase/server"
export async function GET(){
    try {
        const supabase = await createClient()
        



        return new Response(JSON.stringify({}), {
            status: 200,
            headers:{'Content-Type': 'application/json'}
        })

        
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({}), {
            status: 200,
            headers:{'Content-Type': 'application/json'}
        })
    }
}


export async function POST(req){
    try {
        const supabase = await createClient()
        const params = await req.json();

        console.log(params)
        const { data, error } = await supabase.auth.signUp(params)

        console.log(data)
        return new Response(JSON.stringify({}), {
            status: 200,
            headers:{'Content-Type': 'application/json'}
        })

        
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({}), {
            status: 200,
            headers:{'Content-Type': 'application/json'}
        })
    }

}