import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./auth/sign-out-button"; // Adjust path
import Link from "next/link";

export default async function HomePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back, {user.email}!</h1>
          <SignOutButton />
          <br />
          <Link href="/protected">Go to Protected Page</Link>
        </div>
      ) : (
        <div>
          <h1>You are not logged in.</h1>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}