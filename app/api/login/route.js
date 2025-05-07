import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
export async function POST(req){
    try {
        const supabase = await createClient()
        const params = await req.json();

        console.log(params)
        
        const { error } = await supabase.auth.signInWithPassword(params)
        revalidatePath('/', 'layout')

        let redirectTo = {redirectTo: '/account'}
        if (error) {
              redirectTo = {redirectTo: '/error'}
        }

        return new Response(JSON.stringify(redirectTo), {
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