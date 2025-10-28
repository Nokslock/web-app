import Link from "next/link";

export default async function HomePage() {


  return (
    <>
      <div>Home Page</div>
                <Link href="auth/login">
            <button>Login</button>
          </Link>
    </>
  );
}