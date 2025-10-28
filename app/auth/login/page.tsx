import LoginGoogle from "./loginGoogle";
import LoginApple from "./loginApple";
import LoginForm from "./loginForm";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import BgImg from "@/public/login-bg-img.jpg";


export default function LoginPage() {
  return (
    <div className="container">
     

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image 
      src={Logo}
      alt="A description of my hero image"
      width={150}
      height={60}
     />
          <div>
            <h2>Welcome Back</h2>
            <p>
              Log in to a simpler, more secure online experience. Your digital
              world, protected and organized.
            </p>
          </div>
          <LoginForm />
        </div>
        <div>
          <Image 
      src={BgImg}
      alt="A description of my hero image"
      width={600}
      height={400}
     />
          <div>
            <LoginGoogle />
            <LoginApple />
          </div>
        </div>
      </div>
    </div>
  );
}
