import Image from "next/image";
import landingOneImage from "../public/demo-img.png";

export default function LandingOne() {
  return (
    <>
      <div className="conatiner mx-auto text-center lg:px-140 py-10 text-center">
        <p className="subscript font-bold pb-5">More Security</p>
        <p className="text-7xl font-bold pb-5">
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
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>

      <div className="conatiner mx-auto text-start ps-50 pe-250 py-10 text-center">
        <p className="subscript font-bold pb-5">More Security</p>
        <p className="text-7xl font-bold pb-5">
          Take Full Control of Your <span>Digital Security</span>
        </p>
        <p className="text-2xl font-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          accumsan enim. Nulla facilisi. Vestibulum.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 text-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>

      <div className="w-screen h-screen mx-auto lg:px-50 lg:pt-53 lg:pb-20 bottom-banner">
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
