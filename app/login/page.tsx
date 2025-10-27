import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server"; // Adjust path
import { headers } from "next/headers";

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/"); // Redirect to home if already logged in
  }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";
    
    const origin = headers().get("origin"); // For the email confirmation link
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`, // We'll create this route next
      },
    });

    if (error) {
      console.error(error);
      return redirect("/login?message=Could not create user");
    }

    // Redirect to a page that tells the user to check their email
    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signIn}>Sign In</button>
        <button formAction={signUp}>Sign Up</button>
      </form>
    </div>
  );
}