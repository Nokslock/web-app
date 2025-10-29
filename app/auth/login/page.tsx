import LoginGoogle from "./loginGoogle";
import LoginApple from "./loginApple";
import LoginForm from "./loginForm";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import BgImg from "@/public/login-bg-img.png";

export default function LoginPage() {
  return (
    <>
      <div className="container mx-auto p-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="pb-30">
              <Image
              src={Logo}
              alt="A description of my hero image"
              width={150}
              height={60}
            />
            </div>
            
            <div className="text-center px-20">
              <p className="lg:text-5xl md:text-4xl font-bold">Welcome Back</p>
              
                <p className="text-lg text-center break-all font-thin py-5 ">
                  Log in to a simpler, more secure online experience.<br /> Your
                  digital world, protected and organized.
                </p>
                
            </div>
            <div className="px-25">
              <LoginForm />
            </div>
            
          </div>
          <div className="col-span-1">
            <Image
              src={BgImg}
              alt="A description of my hero image"
              className="max-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
