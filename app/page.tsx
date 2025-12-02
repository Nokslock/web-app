import Link from "next/link";
import Image from "next/image";
import BgImg from "@/public/hero-img.png";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthButton from "@/components/AuthButton";
import LandingOne from "@/components/LandingOne";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-screen mx-auto px-50 pt-53 pb-20 md:px-25 md:pt-25 md:pb-10  hero-section">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
          <div className="self-center">
            <p className="lg:text-6xl md:text-3xl font-black pb-10 md:pb-5">
              Take Full Control of your Digital Security
            </p>
            <p className="lg:text-2xl md:text-base font-thin pb-10 md:pb-5">
              Log in to a simpler, more secure online experience.
              <br /> Your digital world, protected and organized.
            </p>
            <div className="grid grid-cols-3">
              <div className="md:col-span-2">
                <AuthButton variant="dark" type="button">
                  Get the App
                </AuthButton>
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
      <Footer />
    </>
  );
}
