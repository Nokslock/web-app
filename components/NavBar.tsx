import HomeLogo from "@/components/HomeLogo";
import NavLinks from "@/components/NavLinks";
import Button from "./Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="conatiner mx-auto p-4">
          <div className="grid grid-cols-8 ">
            <div className="col-span-2">
              <HomeLogo />
            </div>
            <div className="col-span-4 text-center">
              <NavLinks />
            </div>
            <div className="col-span-2">
              <div className="grid lg:grid-cols-2">
                <div>
                  <Link href="/auth/login">
                    <Button type="login" />
                  </Link>
                </div>
                <div>
                  <Link href="/auth/register">
                    <Button type="register" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
