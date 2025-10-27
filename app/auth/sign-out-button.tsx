"use client";

import { createClient } from "@/lib/supabase/client"; // Client component!
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
    } else {
      // Refresh the page to update the session
      router.refresh(); 
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}