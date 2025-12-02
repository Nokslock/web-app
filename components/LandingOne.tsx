import Image from "next/image";
import Block from "@/public/block.png";
import landingOneImage from "../public/demo-img.png";

export default function LandingOne() {
  return (
    <>
      <div className="conatiner mx-auto text-center lg:px-50 md:px-20 py-10 text-center">
        <p className="subscript font-bold pb-5">More Security</p>
        <p className="lg:text-7xl md:text-5xl font-bold pb-5">
          Take Full Control of Your <span>Digital Security</span>
        </p>
        <p className="text-2xl font-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          accumsan enim. Nulla facilisi. Vestibulum.
        </p>
      </div>

      <div className="w-full mx-auto">
        <Image
          src={landingOneImage}
          alt="Landing One Image"
          className="img-fluid"
        />
      </div>
      <div className="section mx-auto mt-20">
        <div className="grid grid-cols-3 gap-5 text-center">
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
        </div>
      </div>

      <div className="conatiner mx-auto text-center lg:px-50 md:px-20 py-10 text-center">
        <p className="subscript font-bold pb-5">More Security</p>
        <p className="lg:text-7xl md:text-5xl font-bold pb-5">
          Take Full Control of Your <span>Digital Security</span>
        </p>
        <p className="text-2xl font-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          accumsan enim. Nulla facilisi. Vestibulum.
        </p>
      </div>

      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 text-center">
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
          <div><Image src={Block} alt="default"/></div>
        </div>
      </div>

      <div className="w-screen h-screen mx-auto lg:px-50 lg:pt-53 lg:pb-20 bottom-banner mt-10">
            <div className="grid grid-cols-2">
          <div className="self-center">
            <p className="text-6xl text-white font-black pb-10">
              Take Full Control of your Digital Security
            </p>
            <p className="text-2xl text-white font-base pb-10">
              Log in to a simpler, more secure online experience.
              <br /> Your digital world, protected and organized.
            </p>
            </div>
          </div>
      </div>
    </>
  );
}
