'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function login(formData){
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithPassword(formData)
    // if (error) {
    //   redirect('/error')
    // }
    // console.log(data)
    revalidatePath('/', 'layout')
    redirect('/account')
}

export async function signup(formData) {
    const supabase = await createClient()
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    const { error } = await supabase.auth.signUp(data)
    if (error) {
      redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect('/account')
  }