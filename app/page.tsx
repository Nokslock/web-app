import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
     <>
      <NavBar />
      <div>Home Page</div>
                <Link href="auth/login">
                  <button>Login</button>
                </Link>

                <Link href="auth/register">
                  <button>Register</button>
                </Link>
    </>
  );
}
