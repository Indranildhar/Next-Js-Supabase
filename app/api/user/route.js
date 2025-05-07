import { createClient } from "@/utils/supabase/server"
export async function GET(){
    try {
        const supabase = await createClient()
        const { data: { user },} = await supabase.auth.getUser()
        console.log(user)

        return new Response(JSON.stringify(user), {
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