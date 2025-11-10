import Link from "next/link";
import Image from "next/image";
import BgImg from "@/public/hero-img.png";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthButton from "@/components/AuthButton";
import LandingOne from "@/components/LandingOne";

export default function Home() {
  return (
    <>
    <NavBar />
      <div className="w-screen mx-auto lg:px-50 lg:pt-53 lg:pb-20 hero-section">
        <div className="grid grid-cols-2 gap-10">
          <div className="self-center">
            <p className="text-7xl font-black pb-10">
              Take Full Control of your Digital Security
            </p>
            <p className="text-2xl font-thin pb-10">
              Log in to a simpler, more secure online experience.<br /> Your digital
              world, protected and organized.
            </p>
            <div className="grid grid-cols-2 gap-10 pe-90">
              <div>
                <AuthButton type="get-started" />
              </div>
              <div>
                <AuthButton type="get-the-app" />
              </div>
              
            </div>
          </div>
          <div className="justify-items-end">
            <Image
              src={BgImg}
              alt="A description of my hero image"
              className="max-h-full"
            />
          </div>
        </div>
      </div>
      <LandingOne />
    </>
  );
}
