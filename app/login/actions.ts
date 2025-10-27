'use server' // Mark this as a file for Server Actions

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-safe data validation with Zod (recommended)
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login Error:', error.message)
    // You can return an error message to display on the page
    return redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout') // Revalidate all paths
  redirect('/') // Redirect to the home page
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Signup Error:', error.message)
    return redirect('/login?message=Could not create user')
  }

  // By default, Supabase sends a confirmation email.
  // You can disable this in your Supabase project settings if you want.
  
  revalidatePath('/', 'layout')
  redirect('/login?message=Check email to continue sign in process')
}