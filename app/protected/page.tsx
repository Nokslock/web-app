import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login?message=You must be logged in to view this page");
  }

  return (
    <div>
      <h1>Hello, {user.email}</h1>
      <p>This is a protected page.</p>
      <p>Your user ID is: {user.id}</p>
    </div>
  );
}